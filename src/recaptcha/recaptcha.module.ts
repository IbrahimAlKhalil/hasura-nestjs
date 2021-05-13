import { RecaptchaService } from './recaptcha.service';
import { HttpModule, Module } from '@nestjs/common';
import { RedisModule } from '../redis/redis.module';
import { Config } from '../config/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory(config: Config) {
        return {
          baseURL: config.recaptcha.endpoint,
        }
      },
      inject: [Config]
    }),
    RedisModule
  ],
  providers: [RecaptchaService],
  exports: [RecaptchaService],
})
export class RecaptchaModule {}
