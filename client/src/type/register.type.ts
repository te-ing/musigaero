export type LoginInput = {
  email: string;
  password: string;
};

export type RegisterInput = LoginInput & {
  nickname: string;
  passwordConfirm: string;
};
