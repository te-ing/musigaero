import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(process.env.SERVER_PRIVKEY_LOCATION),
    cert: fs.readFileSync(process.env.SERVER_FULLCHAIN_LOCATION),
  };
  const appOptions = { cors: true, httpsOptions };
  const app = await NestFactory.create<NestExpressApplication>(AppModule, appOptions);
  app.useStaticAssets('static/images', { prefix: '/static/images' });
  await app.listen(process.env.SERVER_API_PORT);
}

bootstrap();
