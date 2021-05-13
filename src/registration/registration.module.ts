import { RegistrationActionController } from './registration-action.controller';
import { VerificationModule } from '../verification/verification.module';
import { RecaptchaModule } from '../recaptcha/recaptcha.module';
import { BcryptModule } from '../bcrypt/bcrypt.module';
import { LibPnModule } from '../lib-pn/lib-pn.module';
import { MiscModule } from '../misc/misc.module';
import { MailModule } from '../mail/mail.module';
import { SmsModule } from '../sms/sms.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MiscModule,
    SmsModule,
    MailModule,
    LibPnModule,
    BcryptModule,
    RecaptchaModule,
    VerificationModule,
  ],
  controllers: [RegistrationActionController],
})
export class RegistrationModule {
}
