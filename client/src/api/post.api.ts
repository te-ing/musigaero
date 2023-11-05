import { PostCreateForm, PostData } from '@/type/post.type';
import { AuthAxios } from './base.api';

export const createPost = async (payload: PostCreateForm) => {
  const { data } = await AuthAxios.post('/post/create', payload);
  return data;
};

export const getPostDetail = async (id: string): Promise<PostData> => {
  const { data } = await AuthAxios(`/post/${id}`);
  return data;
};

export const getPostList = async (): Promise<PostData[]> => {
  const { data } = await AuthAxios('/post/list');
  return data;
};
