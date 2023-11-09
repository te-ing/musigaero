import { postUserLogin } from '@/api/auth.api';
import { LogoKoreanWhiteIcon } from '@/assets/svg';
import { sx } from '@/constants/styles';
import useModal from '@/hooks/useModal';
import { CustomAxiosError } from '@/type/error.type';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { showToast } = useModal();

  const { mutate } = useMutation(postUserLogin, {
    onSuccess: () => navigate('/home'),
    onError: (err: CustomAxiosError) => {
      const errorMsg = err.response?.data?.message?.toString() || '로그인에 실패하였습니다.';
      showToast(errorMsg);
    },
  });

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [id]: value }));
  };

  const onLoginSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    loginInfo.email && loginInfo.password ? mutate(loginInfo) : showToast('모든 값을 입력해주세요');
  };

  return (
    <div className={sxLogin.container}>
      <LogoKoreanWhiteIcon />
      <form onSubmit={onLoginSubmit} className={sxLogin.form}>
        <input
          id="email"
          value={loginInfo.email}
          onChange={handleChangeValue}
          autoComplete="email"
          placeholder="이메일"
        />
        <input
          id="password"
          type="password"
          value={loginInfo.password}
          onChange={handleChangeValue}
          autoComplete="password"
          placeholder="비밀번호"
        />
        <button type="submit" className={sxLogin.button}>
          Login
        </button>
        <div className={sxLogin.linkBox}>
          <Link to={'/register'}>
            <button>비밀번호 찾기</button>
          </Link>
          <Link to={'/register'}>
            <button>회원가입</button>
          </Link>
        </div>
        <Link to={'/list'} className="m-[40px] text-sm">
          <button>🔖 무지개 글 보기</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;

export const sxLogin = {
  container: `${sx.flexCenter} flex-col w-full text-white bg-petPhotos bg-cover h-full`,
  form: `${sx.flexCenter} flex-col w-full gap-[14px] mt-[40px] text-white [&>input]:bg-[#ffffff80] [&>input]:rounded-3xl [&>input]:w-[320px] [&>input]:h-12 [&>input]:p-4 [&>input]:placeholder:text-white`,
  button: `${sx.flexCenter} bg-primary rounded-3xl w-80 h-12 p-4`,
  linkBox: 'w-[320px] flex gap-1 justify-end text-xs font-light pr-4',
} as const;
