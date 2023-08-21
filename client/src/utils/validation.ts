/* eslint-disable no-prototype-builtins */
import { LoginInput, RegisterInput } from '@/type/register.type';

export const isValidate = (errorMsg: { [key: string]: string }) => Object.values(errorMsg).every((v) => v === '');

const validateEmpty = (data: { [key: string]: string }, errorMsg: { [key: string]: string }) => {
  for (const key in data) {
    const value = data[key];
    if (value === '') errorMsg[key] = '값을 입력해주세요.';
  }
  return errorMsg;
};

const validateEmail = (email: string, errorMsg: { [key: string]: string }) => {
  if ('email' in errorMsg && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errorMsg.email = '이메일 형식이 올바르지 않습니다.';
  return errorMsg;
};

export const registerInputValidate = (data: RegisterInput) => {
  const { email, password, passwordConfirm } = data;
  const errorMsg = { email: '', nickname: '', password: '', passwordConfirm: '' };

  if (password !== passwordConfirm) errorMsg.passwordConfirm = '비밀번호와 일치하지 않습니다.';

  validateEmail(email, errorMsg);
  validateEmpty(data, errorMsg);

  return errorMsg;
};

export const loginInputValidate = (data: LoginInput) => {
  const errorMsg = { email: '', password: '' };

  validateEmail(data.email, errorMsg);
  validateEmpty(data, errorMsg);

  return errorMsg;
};
