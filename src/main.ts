import { NestExpressApplication } from '@nestjs/platform-express';
import { RedisIoAdapter } from './socket-io/redis-io.adapter';
import { ExceptionFilter } from './exception.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.disable('x-powered-by');
  app.useWebSocketAdapter(new RedisIoAdapter(app));
  app.useGlobalFilters(new ExceptionFilter());

  await app.listen(
    process.env.NODE_ENV === 'development' ? (parseInt(process.env.APP_PORT) || 5000) : 5000,
    '0.0.0.0',
  );
}

bootstrap();

