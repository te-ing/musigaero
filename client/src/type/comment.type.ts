export type CommentData = {
  id: number;
  author: number | null;
  body: string;
  reply: CommentData[];
  post: number;
};
export type CommentCreateForm = {
  postId: string;
  body: string;
  author?: number;
  nickname?: string;
  password?: string;
  commentId?: number;
};
