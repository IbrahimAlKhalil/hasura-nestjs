import { Global, Module } from '@nestjs/common';
import { Config } from './config';
import * as dotEnv from 'dotenv';

@Global()
@Module({
  providers: [Config],
  exports: [Config],
})
export class ConfigModule {
  constructor() {
    dotEnv.config();
  }
}
