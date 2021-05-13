import { VerificationModule } from '../verification/verification.module';
import { ChangeActionController } from './change-action.controller';
import { RecaptchaModule } from '../recaptcha/recaptcha.module';
import { BcryptModule } from '../bcrypt/bcrypt.module';
import { LibPnModule } from '../lib-pn/lib-pn.module';
import { MiscModule } from '../misc/misc.module';
import { AuthModule } from '../auth/auth.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    VerificationModule,
    RecaptchaModule,
    BcryptModule,
    LibPnModule,
    AuthModule,
    MiscModule,
  ],
  controllers: [ChangeActionController],
})
export class ChangeModule {
}
