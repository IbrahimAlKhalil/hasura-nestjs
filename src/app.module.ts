import { RegistrationModule } from './registration/registration.module';
import { VerificationModule } from './verification/verification.module';
import { NotificationModule } from './notification/notification.module';
import { RecaptchaModule } from './recaptcha/recaptcha.module';
import { PostgresModule } from './postgres/postgres.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ChangeModule } from './change/change.module';
import { HasuraModule } from './hasura/hasura.module';
import { ConfigModule } from './config/config.module';
import { BcryptModule } from './bcrypt/bcrypt.module';
import { LibPnModule } from './lib-pn/lib-pn.module';
import { MinioModule } from './minio/minio.module';
import { MailModule } from './mail/mail.module';
import { AuthModule } from './auth/auth.module';
import { MiscModule } from './misc/misc.module';
import { UserModule } from './user/user.module';
import { UwsModule } from './uws/uws.module';
import { SmsModule } from './sms/sms.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    RegistrationModule,
    VerificationModule,
    PostgresModule,
    BcryptModule,
    ConfigModule,
    HasuraModule,
    MailModule,
    AuthModule,
    ChangeModule,
    LibPnModule,
    MiscModule,
    SmsModule,
    UserModule,
    MinioModule,
    NotificationModule,
    RecaptchaModule,
    UwsModule,
    EventEmitterModule.forRoot({
      global: true,
      wildcard: false,
      newListener: false,
      removeListener: false,
      ignoreErrors: false,
    }),
  ],
  providers: [],
})
export class AppModule {

}
