import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { PostModule } from './post/post.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    PostModule,
    CommentsModule,
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
