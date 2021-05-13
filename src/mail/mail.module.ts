import { createTransport, Transporter } from 'nodemailer';
import { MailService } from './mail.service';
import { Config } from '../config/config';
import { Module } from '@nestjs/common';
import { TRANSPORTER } from './symbols';

@Module({
  providers: [
    {
      provide: TRANSPORTER,
      useFactory(config: Config): Transporter {
        return createTransport({
          host: config.mail.host,
          port: config.mail.port,
          auth: {
            user: config.mail.user,
            pass: config.mail.password,
          },
        });
      },
      inject: [Config],
    },
    MailService,
  ],
  exports: [MailService],
})
export class MailModule {
}
