import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import * as path from 'path';

export const TypeOrmModuleOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const option = {
      type: 'mysql',
      host: configService.get(`MYSQL_SERVER_HOST`),
      port: Number(configService.get<number>(`MYSQL_SERVER_PORT`)),
      username: configService.get(`MYSQL_USER`),
      database: configService.get(`MYSQL_DATABASE`),
      password: configService.get(`MYSQL_PASSWORD`),
      entities: [path.join(__dirname, '../**/entity/**.entity.{ts,js}')],
      synchronize: false,
    };
    console.log(option);
    return option;
  },
} as TypeOrmModuleAsyncOptions;
