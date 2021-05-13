import debounceEmail from './data/debounce-email';
import verification from './data/verification';
import { Injectable } from '@nestjs/common';
import suspension from './data/suspension';
import recaptcha from './data/recaptcha';
import postgres from './data/postgres';
import hasura from './data/hasura';
import redis from './data/redis';
import minio from './data/minio';
import auth from './data/auth';
import mail from './data/mail';
import app from './data/app';
import sms from './data/sms';

@Injectable()
export class Config {
  debounceEmail = debounceEmail();
  verification = verification();
  suspension = suspension();
  recaptcha = recaptcha();
  postgres = postgres();
  hasura = hasura();
  redis = redis();
  minio = minio();
  auth = auth();
  mail = mail();
  sms = sms();
  app = app();
}
