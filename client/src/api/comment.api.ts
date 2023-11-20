import { CommentCreateForm, CommentData } from '@/type/comment.type';
import { AuthAxios, Axios } from './base.api';

export const createComment = async (payload: CommentCreateForm) => {
  const { data } = await AuthAxios.post('/comment/create', payload);
  return data;
};

export const getCommentList = async (id: string): Promise<CommentData[]> => {
  const { data } = await Axios(`/comment/post/${id}`);
  return data;
};
