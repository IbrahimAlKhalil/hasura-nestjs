#!/usr/bin/env node

/* eslint-disable */

const { printSchema, parse, buildClientSchema, getIntrospectionQuery } = require('graphql');
const typescriptPlugin = require('@graphql-codegen/typescript');
const { spawn, spawnSync } = require('child_process');
const { codegen } = require('@graphql-codegen/core');
const cliProgress = require('cli-progress');
const chokidar = require('chokidar');
const Docker = require('dockerode');
const fs = require('fs/promises');
const axios = require('axios');
const path = require('path');


// Load environment variables
require('dotenv').config();

const docker = new Docker(process.platform === 'win32' ? 'tcp://127.0.0.1:2375' : '/var/run/docker.sock');
const prefix = process.env.APP_CODE;
const images = {
  postgres: 'timescale/timescaledb:2.2.1-pg13',
  hasura: 'hasura/graphql-engine:v2.0.0-alpha.11',
  redis: 'eqalpha/keydb:alpine',
  minio: 'minio/minio:latest',
};
const containerNames = {
  postgres: `${prefix}-postgres`,
  hasura: `${prefix}-hasura`,
  redis: `${prefix}-redis`,
  minio: `${prefix}-minio`,
};
const watchers = [];
const { env } = process;

function getHostIp() {
  const os = require('os');
  const interfaces = os.networkInterfaces();
  const addresses = [];

  Object.keys(interfaces).forEach(function(interfaceName) {
    interfaces[interfaceName].forEach(function(interface_) {
      if ('IPv4' !== interface_.family || interface_.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      addresses.push(interface_.address);
    });
  });

  return addresses[0];
}

async function neverReject(fn) {
  try {
    await fn();
  } catch (e) {
  }
}

function waitUntilAlive(url, interval = 500) {
  return new Promise(resolve => {
    const intervalID = setInterval(() => {
      const done = () => {
        clearInterval(intervalID);

        resolve();
      };

      axios.get(url)
        .then(done)
        .catch(e => {
          if (!e.code) {
            done();
          }
        });
    }, interval);
  });
}

async function startNestApplication() {
  console.log('Starting backend...\n');

  require('@nestjs/cli/bin/nest');

  await waitUntilAlive(`http://localhost:${process.env.APP_PORT}`);
}

async function generateSchema() {
  try {
    const response = await axios.post(`http://${process.env.HASURA_HOST}:${process.env.HASURA_PORT}/v1/graphql`, {
      query: getIntrospectionQuery(),
    }, {
      headers: {
        'x-hasura-admin-secret': process.env.HASURA_SECRET,
      },
    });

    const schema = printSchema(
      buildClientSchema(response.data.data),
      { commentDescriptions: true },
    );

    const types = await codegen({
      plugins: [
        {
          typescript: {},
        },
      ],
      pluginMap: {
        typescript: typescriptPlugin,
      },
      schema: parse(schema),
    });

    await fs.writeFile(
      path.resolve('./schema.graphql'),
      schema,
    );

    await fs.writeFile(
      path.resolve('./src/typings/index.ts'),
      types,
    );
  } catch (e) {
    console.error('GraphQL Introspection failed');
  }
}

class Queue {
  constructor() {
    this.tasks = [];
    this.schedule();
  }

  add(fn) {
    this.tasks.push(fn);
  }

  schedule() {
    this.interval = setInterval(this.run.bind(this), 3000);
  }

  async run() {
    if (!this.tasks.length) {
      return;
    }

    clearInterval(this.interval);

    await this.tasks[0]();
    this.tasks.shift();

    this.schedule();
  }
}

async function startGraphqlCodegen() {
  const watcher1 = chokidar.watch('./migrations', {
    depth: 0,
    usePolling: false,
  });
  const watcher2 = chokidar.watch(['./metadata/tables.yaml', './metadata/actions.yaml', './metadata/actions.graphql']);
  const queue = new Queue();

  await generateSchema();

  watchers.push(watcher1, watcher2);

  watcher1.on('ready', () => {
    watcher1.on('addDir', () => {
      queue.add(generateSchema);
    });
  });


  watcher2.on('change', () => {
    queue.add(generateSchema);
  });
}

function pullImage(tag) {
  return new Promise(async resolve => {
    console.log(`\x1b[32mPulling:\x1b[0m ${tag}`, '\n');

    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

    bar.once('stop', resolve);
    bar.start();


    function onProgress(event) {
      const { progressDetail } = event;

      // Update progressbar
      if (progressDetail) {
        bar.setTotal(progressDetail.total);
        bar.update(progressDetail.current);
      }
    }

    function onFinish() {
      bar.stop();

      if (index + 1 === required.length) {
        resolve();
      }
    }

    await docker.pull(tag, (error, stream) => {
      docker.modem.followProgress(stream, onFinish, onProgress);
    });
  });
}

function pullImages() {
  return new Promise(async resolve => {
    const required = [];
    const availableImages = (await docker.listImages())
      .filter(image => image.RepoTags)
      .map(image => image.RepoTags[0]);


    for (const k in images) {
      required.push(images[k]);
    }

    // Pull images if not available
    for (const [index, value] of required.entries()) {

      if (availableImages.includes(value)) {
        if (index + 1 === required.length) {
          resolve();
        }

        continue;
      }

      await pullImage(value);
    }
  });
}

async function stop() {
  watchers.forEach(watcher => {
    watcher.close();
  });

  const postgres = docker.getContainer(containerNames.postgres);
  const hasura = docker.getContainer(containerNames.hasura);
  const redis = docker.getContainer(containerNames.redis);
  const minio = docker.getContainer(containerNames.minio);

  console.log('Stopping containers...\n');
  // Stop containers
  await neverReject(hasura.stop.bind(hasura));
  await neverReject(postgres.stop.bind(postgres));
  await neverReject(redis.stop.bind(redis));
  await neverReject(minio.stop.bind(minio));

  console.log('Removing containers...\n');
  // Remove containers
  await neverReject(postgres.remove.bind(postgres));
  await neverReject(hasura.remove.bind(hasura));
  await neverReject(redis.remove.bind(redis));
  await neverReject(minio.remove.bind(minio));

  console.log('Removing networks...\n');
  // Remove network
  await neverReject(() => docker.getNetwork(prefix).remove());
}

async function startPostgres() {
  // Create network
  await neverReject(() => docker.createNetwork({
    Name: prefix,
    CheckDuplicate: true,
  }));

  console.log('Starting postgres...\n');
  // Create volume for postgres
  await neverReject(() => docker.createVolume({
    Name: containerNames.postgres,
  }));

  // Create postgres container
  const postgres = await docker.createContainer({
    name: containerNames.postgres,
    Image: images.postgres,
    Env: [`POSTGRES_PASSWORD=${env.POSTGRES_PASSWORD}`],
    Hostname: containerNames.postgres,
    HostConfig: {
      PortBindings: {
        '5432/tcp': [
          {
            HostIp: '127.0.0.1',
            HostPort: `${env.POSTGRES_PORT}/tcp`,
          },
        ],
        '5432/udp': [
          {
            HostIp: '127.0.0.1',
            HostPort: `${env.POSTGRES_PORT}/udp`,
          },
        ],
      },
      RestartPolicy: {
        Name: 'on-failure',
      },
      Binds: [`${containerNames.postgres}:/var/lib/postgresql/data`],
    },
  });

  // Connect postgres to the network
  await docker.getNetwork(prefix).connect({
    Container: containerNames.postgres,
  });

  // Start postgres
  await postgres.start();
}

async function startRedis() {
  console.log('Starting redis...\n');
  // Create volume for redis
  await neverReject(() => docker.createVolume({
    Name: containerNames.redis,
  }));

  // Create redis container
  const redis = await docker.createContainer({
    name: containerNames.redis,
    Image: images.redis,
    Hostname: containerNames.redis,
    HostConfig: {
      PortBindings: {
        '6379/tcp': [
          {
            HostIp: '127.0.0.1',
            HostPort: `${env.REDIS_PORT}/tcp`,
          },
        ],
        '6379/udp': [
          {
            HostIp: '127.0.0.1',
            'HostPort': `${env.REDIS_PORT}/udp`,
          },
        ],
      },
      RestartPolicy: {
        Name: 'on-failure',
      },
      Binds: [`${containerNames.redis}:/data`],
    },
  });

  await redis.start();
}

async function startHasura() {
  console.log('Starting hasura...\n');
  // Create hasura container

  const hostIp = getHostIp();
  const hasura = await docker.createContainer({
    name: containerNames.hasura,
    Image: images.hasura,
    Env: [
      `HASURA_GRAPHQL_DATABASE_URL=postgres://postgres:${env.POSTGRES_PASSWORD}@${containerNames.postgres}:5432/postgres`,
      `HASURA_GRAPHQL_CONSOLE_ASSETS_DIR=/srv/console-assets`,
      `HASURA_GRAPHQL_ENABLE_CONSOLE=true`,
      `HASURA_GRAPHQL_ENABLED_LOG_TYPES=startup, webhook-log, websocket-log, query-log`,
      `HASURA_GRAPHQL_ADMIN_SECRET=${env.HASURA_SECRET}`,
      `HASURA_GRAPHQL_AUTH_HOOK=http://${hostIp}:${env.APP_PORT}/auth-hook/authorize`,
      'HASURA_GRAPHQL_AUTH_HOOK_MODE=POST',
      `BACKEND=http://${hostIp}:${env.APP_PORT}`,
    ],
    Hostname: containerNames.hasura,
    ExposedPorts: {
      '8080/tcp': {},
    },
    HostConfig: {
      PortBindings: {
        '8080/tcp': [
          {
            HostIp: '127.0.0.1',
            HostPort: `${env.HASURA_PORT}/tcp`,
          },
        ],
      },
      RestartPolicy: {
        Name: 'on-failure',
      },
      Binds: [
        `${require('path').resolve(__dirname, 'migrations')}:/hasura-migrations/`,
        `${require('path').resolve(__dirname, 'metadata')}:/hasura-metadata/`,
      ],
    },
  });

  // Connect hasura to the network
  await docker.getNetwork(prefix).connect({
    Container: containerNames.hasura,
  });

  // Start hasura
  await hasura.start();

  await waitUntilAlive(`http://127.0.0.1:${env.HASURA_PORT}`, 2000);
}

async function startHasuraConsole() {
  console.log('Applying hasura migrations and metadata...\n');

  spawnSync('hasura', ['metadata', 'apply', '--admin-secret', env.HASURA_SECRET], { shell: true, stdio: 'inherit' });
  spawnSync('hasura', ['migrate', 'apply', '--all-databases', '--admin-secret', env.HASURA_SECRET], {
    shell: true,
    stdio: 'inherit',
  });
  spawnSync('hasura', ['metadata', 'reload', '--admin-secret', env.HASURA_SECRET], { shell: true, stdio: 'inherit' });

  console.log('Running hasura console...\n');
  spawn(
    'hasura',
    [
      'console',
      '--endpoint',
      `http://127.0.0.1:${env.HASURA_PORT}`,
      '--admin-secret',
      env.HASURA_SECRET,
    ], { shell: true },
  );
  console.log('\x1b[32m Visit: http://127.0.0.1:9695 \x1b[0m');
}

async function startMinio() {
  console.log('Starting minio...\n');
  // Create volume for redis
  await neverReject(() => docker.createVolume({
    Name: containerNames.minio,
  }));

  // Create redis container
  const minio = await docker.createContainer({
    name: containerNames.minio,
    Image: images.minio,
    Cmd: ['server', '/data'],
    Hostname: containerNames.minio,
    Env: [
      `MINIO_ROOT_USER=${env.MINIO_ROOT_USER}`,
      `MINIO_ROOT_PASSWORD=${env.MINIO_ROOT_PASSWORD}`,
    ],
    HostConfig: {
      PortBindings: {
        '9000/tcp': [
          {
            HostIp: '127.0.0.1',
            HostPort: `${env.MINIO_PORT}/tcp`,
          },
        ],
        '9000/udp': [
          {
            HostIp: '127.0.0.1',
            'HostPort': `${env.MINIO_PORT}/udp`,
          },
        ],
      },
      RestartPolicy: {
        Name: 'on-failure',
      },
      Binds: [`${containerNames.minio}:/data`],
    },
  });

  await minio.start();
}

async function start() {
  await startPostgres();
  await startRedis();
  await startHasura();
  await startHasuraConsole();
  await startGraphqlCodegen();
  await startMinio();
  await startNestApplication();
}

pullImages().then(stop).then(start);

async function close() {
  // Stop all the services
  await stop();

  // Finally exit
  process.exit();
}

process.stdin.resume();

process.on('exit', close);
process.on('SIGINT', close);
process.on('SIGUSR1', close);
process.on('SIGUSR2', close);
process.on('uncaughtException', close);
