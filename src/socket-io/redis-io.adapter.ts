import { SocketIoAdapter } from './socket-io.adapter';
import * as redisIoAdapter from 'socket.io-redis';
import IORedis from 'ioredis';

export class RedisIoAdapter extends SocketIoAdapter {
  createIOServer(port: number, options?: any): any {
    const server = super.createIOServer(port, options);

    const pubClient = new IORedis({
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      password: process.env.REDIS_PASSWORD,
    });
    const subClient = pubClient.duplicate();

    const redisAdapter = redisIoAdapter.createAdapter({
      pubClient,
      subClient,
    });

    server.adapter(redisAdapter);
    return server;
  }
}
