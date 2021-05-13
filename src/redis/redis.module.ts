import { Module, OnModuleDestroy } from '@nestjs/common';
import { RedisClient } from './redis.client';
import { Config } from '../config/config';
import IORedis from 'ioredis';


@Module({
  providers: [
    {
      provide: RedisClient,
      useFactory(config: Config): IORedis.Redis {
        return new IORedis({
          host: config.redis.host,
          port: config.redis.port,
          password: config.redis.password,
        });
      },
      inject: [Config],
    },
  ],
  exports: [
    RedisClient,
  ],
})
export class RedisModule implements OnModuleDestroy {
  constructor(
    private readonly redisClient: RedisClient,
  ) {
  }

  async onModuleDestroy(): Promise<void> {
    await this.redisClient.quit();
  }
}
