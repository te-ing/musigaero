import { UserInfo } from '@/type/user.type';
import { AuthAxios, Axios } from './base.api';

export const postUserLogin = async (payload: { email: string; password: string }) => {
  const { data } = await Axios.post('/users/login', payload);
  sessionStorage.setItem('accessToken', data.accessToken);
  return data;
};

export const postUserRegister = async (payload: { email: string; nickname: string; password: string }) => {
  const { data } = await Axios.post('/users/create', payload);
  return data;
};

export const getMyInfo = async (): Promise<UserInfo> => {
  const { data } = await AuthAxios('/users/my');
  return data;
};
