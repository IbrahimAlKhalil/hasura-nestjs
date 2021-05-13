import { VerificationActionController } from './verification-action.controller';
import { VerificationEventController } from './verification-event.controller';
import { VerificationService } from './verification.service';
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
    BcryptModule,
    LibPnModule,
  ],
  providers: [VerificationService],
  exports: [VerificationService],
  controllers: [
    VerificationActionController,
    VerificationEventController,
  ],
})
export class VerificationModule {
}
