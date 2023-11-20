import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configService';
import { multerOptionsFactory } from './factories/multer-options.factory';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [configuration],
    }),
    MulterModule.register(multerOptionsFactory()),
    UsersModule,
    PostModule,
    CommentModule,
    JwtModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_SERVER_HOST,
      port: Number(process.env.MYSQL_SERVER_PORT),
      username: process.env.MYSQL_DATABASE,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_USER,
      entities: [__dirname + '/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
