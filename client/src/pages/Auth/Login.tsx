import { postUserLogin } from '@/api/auth.api';
import { LogoKoreanWhiteIcon } from '@/assets/svg';
import { sx } from '@/constants/styles';
import { CustomAxiosError } from '@/type/error';
import { isValidate, loginInputValidate } from '@/utils/validation';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const { mutate } = useMutation(postUserLogin, {
    onSuccess: () => navigate('/home'),
    onError: (err: CustomAxiosError) => {
      const errorMsg = err.response?.data?.message?.toString() || '로그인에 실패하였습니다.';
    },
  });

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [id]: value }));
  };

  const onLoginSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const validation = loginInputValidate(loginInfo);
    if (isValidate(validation)) {
      mutate(loginInfo);
    }
    setLoginError(validation);
  };

  return (
    <div className={`${sx.flexCenter} flex-col w-full text-white bg-petPhotos bg-cover h-full`}>
      <LogoKoreanWhiteIcon />
      <form onSubmit={onLoginSubmit} className={`${sx.flexCenter} flex-col w-full gap-[14px] mt-[40px] text-white`}>
        <input
          className="bg-[#ffffff80] rounded-3xl w-[320px] h-12 p-4 placeholder:text-white ]"
          id="email"
          value={loginInfo.email}
          onChange={handleChangeValue}
          autoComplete="email"
          placeholder="이메일"
        />
        <input
          className="bg-[#ffffff80] rounded-3xl w-[320px] h-12 p-4 placeholder:text-white"
          id="password"
          type="password"
          value={loginInfo.password}
          onChange={handleChangeValue}
          autoComplete="password"
          placeholder="비밀번호"
        />
        <button type="submit" className={`${sx.flexCenter} bg-primary rounded-3xl w-80 h-12 p-4`}>
          Login
        </button>
        <div className="w-[320px] flex gap-1 justify-end text-xs font-light">
          <Link to={'/register'}>
            <button>비밀번호 찾기</button>
          </Link>
          <Link to={'/register'}>
            <button>회원가입</button>
          </Link>
        </div>
        <Link to={'/list'} className="m-[40px] text-sm">
          <button>추모글 보기</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;

// export const sxLogin = {
//   container: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' },
//   paper: {
//     borderRadius: '12px',
//     minHeight: 300,
//     width: 500,
//     minWidth: 300,
//     p: '20px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 300,
//     height: '100%',
//     gap: '12px',
//   },
// } as const;
