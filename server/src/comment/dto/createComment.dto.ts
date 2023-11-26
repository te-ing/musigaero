export class CreateCommentDto {
  nickname: string;
  body: string;
  postId: number;
  password?: string;
  author?: number;
  commentId?: number;
}
