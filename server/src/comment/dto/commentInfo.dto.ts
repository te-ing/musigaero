export class CommentInfoDto {
  id: number;
  author: number | null;
  nickname: string;
  body: string;
  reply?: CommentInfoDto[];
  post: number;
  createdAt: Date;
}
