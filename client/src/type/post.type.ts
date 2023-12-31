import { CommentData } from './comment.type';

export type PostCreateForm = {
  title: string;
  body: string;
  petname: string;
  deathday: Date;
  image: string[];
};

export type PostData = {
  id: number;
  nickname: string;
  title: string;
  body: string;
  petname: string;
  deathday: Date;
  image: string[];
  comment?: CommentData[];
};
