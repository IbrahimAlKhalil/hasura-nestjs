import { Module, OnModuleInit } from '@nestjs/common';
import { Config } from '../config/config';
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
export class MinioModule implements OnModuleInit {
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
