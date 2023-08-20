import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/createComment.dto';

@Injectable()
export class CommentsService {
  create(CreateCommentDto: CreateCommentDto) {
    return 'This action adds a new comment';
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
