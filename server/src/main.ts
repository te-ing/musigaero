import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create<NestExpressApplication>(AppModule, appOptions);
  app.useStaticAssets('static/images', { prefix: '/static/images' });
  await app.listen(8000);
}

bootstrap();
