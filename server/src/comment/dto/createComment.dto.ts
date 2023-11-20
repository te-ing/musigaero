export class CreateCommentDto {
  nickname: string;
  body: string;
  password: string;
  postId: number;
  commentId?: number;
}
