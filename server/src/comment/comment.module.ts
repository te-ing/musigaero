import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './entity/comments.entity';
import { UserEntity } from 'src/users/entity/users.entity';
import { PostEntity } from 'src/post/entity/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, UserEntity, PostEntity])],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
