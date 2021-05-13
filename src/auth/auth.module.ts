import { RecaptchaModule } from '../recaptcha/recaptcha.module';
import { AuthActionController } from './auth-action.controller';
import { AuthHookController } from './auth-hook.controller';
import { GoogleAuthService } from './google-auth.service';
import { BcryptModule } from '../bcrypt/bcrypt.module';
import { MiscModule } from '../misc/misc.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Config } from '../config/config';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (config: Config) => {
        const options = {
          subject: 'auth',
        };

        return {
          secret: config.app.secret,
          signOptions: options,
          verifyOptions: options,
        };
      },
      inject: [Config],
    }),
    RecaptchaModule,
    BcryptModule,
    MiscModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    GoogleAuthService
  ],
  exports: [AuthService],
  controllers: [
    AuthActionController,
    AuthHookController,
  ],
})
export class AuthModule {
}
