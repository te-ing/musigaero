import { PostCreateForm } from '@/type/post.type';
import { AuthAxios } from './base.api';

export const createPost = async (payload: PostCreateForm) => {
  const { data } = await AuthAxios.post('/post/create', payload);
  return data;
};
