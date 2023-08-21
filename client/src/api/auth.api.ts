import { Axios } from './base.api';

export const postUserLogin = async (payload: { email: string; password: string }) => {
  const { data } = await Axios.post('/auth/login', payload);
  return data;
};

export const postUserRegister = async (payload: { email: string; nickname: string; password: string }) => {
  const { data } = await Axios.post('/auth/register', payload);
  return data;
};
