import { PostCreateForm, PostData } from '@/type/post.type';
import { AuthAxios } from './base.api';
import { S3ImageResponse } from '@/type/common';

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

export const createPostImages = async (formData: FormData): Promise<S3ImageResponse[]> => {
  const { data } = await AuthAxios.post(`/post/image`, formData, {
    headers: { 'Context-Type': 'multipart/form-data' },
  });
  return data;
};
