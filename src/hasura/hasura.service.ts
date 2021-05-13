import { Observable } from 'subscriptions-transport-ws/dist/client';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { ExecutionResult } from 'graphql/execution/execute';
import { Injectable } from '@nestjs/common';
import { Config } from '../config/config';
import * as callsite from 'callsite';
import { promises as fs } from 'fs';
import * as path from 'path';
import * as ws from 'ws';

@Injectable()
export class HasuraService {
  constructor(
    private readonly config: Config,
  ) {
  }

  private readonly client = new SubscriptionClient(`ws://${this.config.hasura.host}:${this.config.hasura.port}/v1/graphql`, {
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': this.config.hasura.secret,
      },
    },
  }, ws);

  private resolverCache = {};

  private async resolveFile(file: string, callsite: callsite.CallSite[]): Promise<string> {
    const filename = callsite[1].getFileName();
    let _path: string;

    if (filename === __filename) {
      _path = path.resolve(path.dirname(callsite[2].getFileName()), file);
    } else {
      _path = path.resolve(path.dirname(filename), file);
    }

    if (!this.resolverCache.hasOwnProperty(_path) || process.env.NODE_ENV === 'development') {
      this.resolverCache[_path] = await fs.readFile(_path, {
        encoding: 'utf-8',
      });
    }

    return this.resolverCache[_path];
  }

  private static sanitizeVars(vars: VariableValue): void {
    if (Array.isArray(vars)) {
      for (let i = 0; i < vars.length; i += 1) {
        if (typeof vars[i] === 'object') {
          this.sanitizeVars(vars[i]);
        }
      }
    } else if (vars !== null && typeof vars === 'object') {
      for (const key of Object.keys(vars)) {
        if (typeof vars[key] === 'object') {
          this.sanitizeVars(vars[key]);
        } else if (vars[key] === undefined) {
          vars[key] = null;
        }
      }
    }
  }

  async subscribe(options: Options, _callsite?: callsite.CallSite[]): Promise<Observable<ExecutionResult>> {
    if (!_callsite && (options.queryPath || options.fragmentPath)) {
      _callsite = callsite();
    }

    const fragmentPaths = typeof options.fragmentPath === 'string' ? [options.fragmentPath] : options.fragmentPath || [];
    const query = options.query || (await this.resolveFile(options.queryPath, _callsite));

    const fragments: string = (
      await Promise.all(
        fragmentPaths.map(
          path => this.resolveFile(path, _callsite),
        ),
      )
    ).reduce((a, b) => a + b + '\n', '');

    // Convert undefined to null
    if (options.variables) {
      HasuraService.sanitizeVars(options.variables);
    }

    return this.client.request({
      query: `${fragments}${query}`,
      variables: options.variables,
    });
  }

  request<T = any>(options: Options): Promise<T> {
    let _callsite: callsite.CallSite[];

    if (options.queryPath || options.fragmentPath) {
      _callsite = callsite();
    }

    return new Promise(async (resolve, reject) => {
      const observable = await this.subscribe(options, _callsite);

      const subscription = observable.subscribe({
        next({ data, errors }) {
          if (errors?.length) {
            return reject(errors);
          }

          if (options.root) {
            resolve(data[options.root]);
          } else {
            resolve(data as T);
          }

          subscription.unsubscribe();
        },
        error(err) {
          reject(err);
        },
      });
    });
  }

  async requestNFirst<T = any>(options: OptionsGetFirst): Promise<T | null> {
    const result = await this.request<T>(options);

    if (Array.isArray(result)) {
      return result[0] || null;
    }

    return result;
  }
}

type VariableValue = string | number | boolean | VariableValue[] | {
  [key: string]: VariableValue
};

interface Options {
  queryPath?: string;
  query?: string;
  fragmentPath?: string | string[];
  root?: string;
  variables?: {
    [key: string]: VariableValue;
  };
}

interface OptionsGetFirst extends Options {
  root: string
}
