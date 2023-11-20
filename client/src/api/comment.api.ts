import { CommentCreateForm } from '@/type/comment.type';
import { AuthAxios } from './base.api';

export const createComment = async (payload: CommentCreateForm) => {
  const { data } = await AuthAxios.post('/comment/create', payload);
  return data;
};
