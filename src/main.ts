import { ExceptionFilter } from './exception.filter';
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Adapter } from './uws/adapter';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<INestApplication>(
    AppModule,
    new Adapter(),
  );

  app.useGlobalFilters(new ExceptionFilter());

  await app.listen(
    process.env.NODE_ENV === 'development' ? (parseInt(process.env.APP_PORT) || 5000) : 5000,
    '0.0.0.0',
  );
}

bootstrap();

