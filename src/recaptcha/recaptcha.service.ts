import { RecaptchaResponseV2 } from './interfaces/recaptcha-response-v2';
import { RecaptchaResponseV3 } from './interfaces/recaptcha-response-v3';
import { RecaptchaInput } from './interfaces/recaptcha-input';
import { HttpService, Injectable } from '@nestjs/common';
import { ActionException } from '../action-exception';
import { RedisClient } from '../redis/redis.client';
import { Config } from '../config/config';
import { CommonErr } from '../errors';

@Injectable()
export class RecaptchaService {
  constructor(
    private readonly httpService: HttpService,
    private readonly redisClient: RedisClient,
    private readonly config: Config,
  ) {
  }

  async verifyV2(token: string, tokenV3: string, ipAddress?: string): Promise<RecaptchaResponseV2 | false> {
    const check = await this.redisClient.sismember(this.config.recaptcha.redisKey, tokenV3);

    if (check === 0) {
      return false;
    }

    const data: RecaptchaInput = {
      response: token,
      secret: this.config.recaptcha.v2Secret,
    };

    if (ipAddress) {
      data.remoteip = ipAddress;
    }

    return (
      await this.httpService
        .post<RecaptchaResponseV2>('/siteverify', data)
        .toPromise()
    ).data;
  }

  async verifyV3(token: string, ipAddress?: string): Promise<RecaptchaResponseV3> {
    const data: RecaptchaInput = {
      response: token,
      secret: this.config.recaptcha.v3Secret,
    };

    if (ipAddress) {
      data.remoteip = ipAddress;
    }

    const response = await this.httpService
      .post<RecaptchaResponseV3>('/siteverify', data)
      .toPromise();

    if (response.data.score < 1) {
      await this.redisClient.sadd(this.config.recaptcha.redisKey, token);
      await this.redisClient.send_command('EXPIREMEMBERAT', [
        this.config.recaptcha.redisKey,
        token,
        Date.now() + this.config.recaptcha.lifetime,
      ]);
    }

    return (
      await this.httpService
        .post<RecaptchaResponseV3>('/siteverify', data)
        .toPromise()
    ).data;
  }

  async verify(tokenV3: string, action: string, ipAddress: string, tokenV2?: string, minScore = 0.8): Promise<void> {
    if (tokenV2) {
      const recaptchaResponse = await this.verifyV2(tokenV2, tokenV3, ipAddress);

      if (!recaptchaResponse
        || !recaptchaResponse.success
        || recaptchaResponse?.['error-codes'] === 'timeout-or-duplicate') {
        throw new ActionException(CommonErr.RECAPTCHA3_TOKEN_EXPIRED);
      }

      if (recaptchaResponse['error-codes']) {
        throw new ActionException(CommonErr.SERVICE_UNAVAILABLE);
      }
    } else {
      const recaptchaResponse = await this.verifyV3(tokenV3, ipAddress);

      if (recaptchaResponse?.['error-codes'] === 'timeout-or-duplicate') {
        throw new ActionException(CommonErr.RECAPTCHA3_TOKEN_EXPIRED);
      }

      if (recaptchaResponse.action !== action || recaptchaResponse['error-codes']) {
        throw new ActionException(CommonErr.SERVICE_UNAVAILABLE);
      }

      if (recaptchaResponse.score <= minScore) {
        throw new ActionException(CommonErr.RECAPTCHA2_TOKEN_REQUIRED);
      }
    }
  }
}


