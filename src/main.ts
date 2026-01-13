import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port);
}
bootstrap().then(() => {
  return Logger.log(`
    -------------------
    Server is running on ${config.baseUrl}
    API V1: ${config.baseUrl}
    API Docs: ${config.baseUrl}/docs
    -------------------
    `);
});
