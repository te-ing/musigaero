export type CommentData = {
  id: number;
  author: number | null;
  nickname: string;
  body: string;
  reply: CommentData[];
  post: number;
  createdAt: Date;
};

export type CommentCreateForm = {
  postId: string;
  body: string;
  author?: number;
  nickname?: string;
  password?: string;
  commentId?: number;
};
