import { Axios } from './base.api';

export const postUserLogin = async (payload: { email: string; password: string }) => {
  const { data } = await Axios.post('/users/login', payload);
  return data;
};

export const postUserRegister = async (payload: { email: string; nickname: string; password: string }) => {
  const { data } = await Axios.post('/users/create', payload);
  return data;
};
