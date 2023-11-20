import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './entity/comments.entity';
import { UserEntity } from 'src/users/entity/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, UserEntity])],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
