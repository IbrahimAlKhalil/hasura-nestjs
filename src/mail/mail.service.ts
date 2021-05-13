import { SentMessageInfo, Transporter } from 'nodemailer';
import passwordReset from './templates/password-reset';
import { Inject, Injectable } from '@nestjs/common';
import registration from './templates/registration';
import changeEmail from './templates/change-email';
import { Misc_Verification } from '../typings';
import { Config } from '../config/config';
import { TRANSPORTER } from './symbols';
import * as path from 'path';

@Injectable()
export class MailService {
  constructor(
    @Inject(TRANSPORTER) private readonly mailer: Transporter,
    private readonly config: Config,
  ) {
  }

  private readonly images = [
    {
      filename: 'logo.png',
      path: path.resolve(__dirname, './templates/images/logo.png'),
      cid: 'logo',
    },
    {
      filename: 'facebook.png',
      path: path.resolve(__dirname, './templates/images/facebook2x.png'),
      cid: 'facebook',
    },
    {
      filename: 'linkedin.png',
      path: path.resolve(__dirname, './templates/images/linkedin2x.png'),
      cid: 'linkedin',
    },
    {
      filename: 'youtube.png',
      path: path.resolve(__dirname, './templates/images/youtube2x.png'),
      cid: 'youtube',
    },
  ];

  async send(from: string, to: string, subject: string, html: string): Promise<SentMessageInfo> {
    return this.mailer.sendMail({ from, to, subject, html });
  }

  async sendForPasswordReset(verification: Pick<Misc_Verification, 'id' | 'token' | 'payload'>): Promise<SentMessageInfo> {
    return this.mailer.sendMail({
      to: verification.payload,
      from: 'security@qmmsoft.com',
      subject: 'Forgot Password',
      html: passwordReset(`${this.config.app.url}/password-reset?id=${verification.id}&token=${encodeURIComponent(verification.token)}`),
      attachments: [
        ...this.images,
        {
          filename: 'cover.jpg',
          path: path.resolve(__dirname, './templates/images/password-reset.jpg'),
          cid: 'cover',
        },
      ],
    });
  }

  async sendForEmail(verification: Pick<Misc_Verification, 'id' | 'token' | 'payload'>): Promise<SentMessageInfo> {
    return this.mailer.sendMail({
      to: verification.payload,
      from: 'security@qmmsoft.com',
      subject: 'Email Verification',
      html: changeEmail(`${this.config.app.url}/email-verification?id=${verification.id}&token=${encodeURIComponent(verification.token)}`),
      attachments: [
        ...this.images,
        {
          filename: 'cover.jpg',
          path: path.resolve(__dirname, './templates/images/email-verification.jpg'),
          cid: 'cover',
        },
      ],
    });
  }

  async sendForReg(to: string, code: string): Promise<SentMessageInfo> {
    return this.mailer.sendMail({
      to,
      from: 'security@qmmsoft.com',
      subject: 'Email Verification',
      html: registration(code),
      attachments: [
        ...this.images,
        {
          filename: 'cover.jpg',
          path: path.resolve(__dirname, './templates/images/welcome.jpg'),
          cid: 'cover',
        },
      ],
    });
  }
}
