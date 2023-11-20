import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/createComment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './entity/comments.entity';
import { Repository } from 'typeorm';
import { UserInfoDto } from 'src/users/dto/userInfo.dto';
import { UserEntity } from 'src/users/entity/users.entity';
import { PostEntity } from 'src/post/entity/post.entity';
import { CommentInfoDto } from './dto/commentInfo.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}
  async create(CreateCommentDto: CreateCommentDto, userInfo?: UserInfoDto) {
    try {
      const comment = new CommentEntity();
      comment.body = CreateCommentDto.body;
      comment.nickname = CreateCommentDto.nickname;
      comment.password = CreateCommentDto.password;
      comment.post = await this.postRepository.findOneBy({ id: CreateCommentDto.postId });

      if (userInfo.id) {
        comment.nickname = (await this.usersRepository.findOneBy({ id: userInfo.id })).nickname;
        comment.password = (await this.usersRepository.findOneBy({ id: userInfo.id })).password;
        comment.author = (await this.usersRepository.findOneBy({ id: userInfo.id })).id;
      }

      await this.commentRepository.save(comment);
      return comment;
    } catch {
      throw new HttpException('댓글 작성에 실패했습니다', HttpStatus.BAD_REQUEST);
    }
  }

  async getCommentsInfo(postId: number): Promise<CommentInfoDto[]> {
    const comments = await this.commentRepository.find({
      where: {
        post: { id: postId },
      },
    });
    const commentsInfo = comments.map((comment) => {
      return {
        id: comment.id,
        author: comment.author,
        nickname: comment.nickname,
        body: comment.body,
        reply: comment?.reply,
        post: postId,
        createdAt: comment.createdAt,
      };
    });
    return commentsInfo;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
