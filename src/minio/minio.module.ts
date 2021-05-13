import { Config } from '../config/config';
import { Module } from '@nestjs/common';
import { Client } from 'minio';

@Module({
  providers: [
    {
      provide: Client,
      useFactory(config: Config): Client {
        return new Client({
          endPoint: config.minio.endpoint,
          port: config.minio.port,
          accessKey: config.minio.username,
          secretKey: config.minio.password,
          useSSL: config.app.env === 'production',
        });
      },
      inject: [Config],
    },
  ],
  exports: [
    Client,
  ],
})
export class MinioModule {
}
