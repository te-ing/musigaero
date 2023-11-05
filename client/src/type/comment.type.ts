export type CommentData = {
  id: number;
  author: number | null;
  body: string;
  reply: CommentData[];
  post: number;
};
