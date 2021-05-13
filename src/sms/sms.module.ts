import { SmsActionController } from './sms-action.controller';
import { SmsEventController } from './sms-event.controller';
import { HttpModule, Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { SmsService } from './sms.service';
import { Config } from '../config/config';

@Module({
  imports: [
    AuthModule,
    HttpModule.registerAsync({
      useFactory(config: Config) {
        return {
          baseURL: config.sms.api,
          method: 'POST',
          params: { method: 'api' },
          responseType: 'json',
        };
      },
      inject: [Config],
    }),
  ],
  providers: [
    SmsService,
  ],
  exports: [SmsService],
  controllers: [SmsEventController, SmsActionController],
})
export class SmsModule {
}
