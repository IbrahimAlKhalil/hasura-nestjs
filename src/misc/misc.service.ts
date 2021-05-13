import { HttpService, Injectable } from '@nestjs/common';
import { HasuraService } from '../hasura/hasura.service';
import { LibPnService } from '../lib-pn/lib-pn.service';
import { Identity } from '../auth/interfaces/identity';
import { default as validator } from 'validator';
import { Config } from '../config/config';
import { User } from '../typings';
import * as crypto from 'crypto';

@Injectable()
export class MiscService {
  constructor(
    private readonly hasuraService: HasuraService,
    private readonly libPnService: LibPnService,
    private readonly httpService: HttpService,
    private readonly config: Config,
  ) {
  }

  wait(seconds: number): Promise<void> {
    if (this.config.app.env === 'development') {
      return Promise.resolve();
    }

    return new Promise(resolve => {
      setTimeout(resolve, seconds * 1000);
    });
  }

  getIdentityType(value: string): Identity {
    if (validator.isEmail(value)) {
      return {
        type: 'email',
        value: value,
      };
    }

    if (this.libPnService.validate(value)) {
      return {
        type: 'mobile',
        value: this.libPnService.format(value),
      };
    }

    return {
      type: 'username',
      value: value,
    };
  }

  generateRandomNumber(length = 3): Promise<number> {
    return new Promise(resolve => {
      resolve(
        Math.floor(
          Math.pow(10, length - 1) + Math.random()
          * (Math.pow(10, length) - Math.pow(10, length - 1) - 1),
        ),
      );
    });
  }

  async generateRandomString(length = 32): Promise<string> {
    return new Promise(resolve => {
      crypto.randomBytes(length, (error, buffer) => {
        resolve(buffer.toString('hex'));
      });
    });
  }

  async canUserUseThis(
    type: 'email' | 'mobile' | 'username',
    value: string,
    userId?: number,
  ): Promise<boolean> {
    const user = await this.hasuraService.requestNFirst<User>({
      queryPath: './graphql/check-user.graphql',
      root: 'user',
      variables: {
        conditions: {
          [type]: {
            _eq: value,
          },
        },
      },
    });

    // No user found
    if (!user) {
      return true;
    }

    return user.id === userId;
  }

  async checkDisposableEmail(email: string): Promise<boolean> {
    try {
      const response = await this
        .httpService
        .request<{ disposable: boolean }>({
          baseURL: this.config.debounceEmail.endpoint,
          method: 'GET',
          data: { email },
        })
        .toPromise();

      return response.data.disposable;
    } catch (e) {
      throw new Error('Service unavailable');
    }
  }

  getCookie(cookieStr: string, key: string): string | null {
    const keyIndex = cookieStr.indexOf(`${key}=`);

    if (keyIndex === -1) {
      return null;
    }

    // Get token from cookie
    const boundary = cookieStr.indexOf(';', keyIndex);
    const value = cookieStr.slice(keyIndex + key.length + 1, boundary === -1 ? cookieStr.length : boundary);

    return value || null;
  }
}
