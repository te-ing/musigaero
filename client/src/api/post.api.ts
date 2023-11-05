import { PostCreateForm, PostListData } from '@/type/post.type';
import { AuthAxios } from './base.api';

export const createPost = async (payload: PostCreateForm) => {
  const { data } = await AuthAxios.post('/post/create', payload);
  return data;
};

export const getPostList = async (): Promise<PostListData[]> => {
  const { data } = await AuthAxios('/post/list');
  return data;
};
