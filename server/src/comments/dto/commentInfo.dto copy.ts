import { CommentEntity } from '../entity/comments.entity';
import { PostEntity } from 'src/post/entity/post.entity';

export class CommentInfoDto {
  id: number;
  author: number | null;
  body: string;
  reply: CommentEntity[];
  post: PostEntity;
}
