import { RegistrationModule } from './registration/registration.module';
import { VerificationModule } from './verification/verification.module';
import { NotificationModule } from './notification/notification.module';
import { SocketIoModule } from './socket-io/socket-io.module';
import { PostgresModule } from './postgres/postgres.module';
import { ChangeModule } from './change/change.module';
import { HasuraModule } from './hasura/hasura.module';
import { ConfigModule } from './config/config.module';
import { BcryptModule } from './bcrypt/bcrypt.module';
import { Module, OnModuleInit } from '@nestjs/common';
import { LibPnModule } from './lib-pn/lib-pn.module';
import { MinioModule } from './minio/minio.module';
import { MailModule } from './mail/mail.module';
import { AuthModule } from './auth/auth.module';
import { MiscModule } from './misc/misc.module';
import { UserModule } from './user/user.module';
import { SmsModule } from './sms/sms.module';
import { Config } from './config/config';
import { Client } from 'minio';
import { RecaptchaModule } from './recaptcha/recaptcha.module';

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
    SocketIoModule,
    MiscModule,
    SmsModule,
    UserModule,
    MinioModule,
    NotificationModule,
    RecaptchaModule,
  ],
  providers: [],
})
export class AppModule implements OnModuleInit {
  constructor(
    private readonly config: Config,
    private readonly minio: Client,
  ) {
  }

  onModuleInit(): void {
    if (this.config.app.env === 'development') {
      const bucket = this.config.app.publicBucket;

      this.minio.bucketExists(bucket).then(async exists => {
        if (exists) {
          return;
        }

        await this.minio.makeBucket(bucket, 'ap-southeast-1');
        await this.minio.setBucketPolicy(bucket, JSON.stringify({
          'Version': '2012-10-17',
          'Statement': [{
            'Effect': 'Allow',
            'Principal': { 'AWS': ['*'] },
            'Action': ['s3:GetObject'],
            'Resource': ['arn:aws:s3:::public/*'],
          }],
        }));
      });
    }
  }
}