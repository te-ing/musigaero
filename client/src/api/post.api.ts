import { Axios } from './base.api';

export const postUserLogin = async (payload: { email: string; password: string }) => {
  const { data } = await Axios.post('/post/create', payload);
  return data;
};
