import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/createComment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './entity/comments.entity';
import { Repository } from 'typeorm';
import { UserInfoDto } from 'src/users/dto/userInfo.dto';
import { UserEntity } from 'src/users/entity/users.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}
  async create(CreateCommentDto: CreateCommentDto, userInfo?: UserInfoDto) {
    try {
      const comment = new CommentEntity();
      comment.body = CreateCommentDto.body;
      comment.nickname = CreateCommentDto.nickname;
      comment.password = CreateCommentDto.password;

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

  findAll() {
    return `This action returns all comments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
