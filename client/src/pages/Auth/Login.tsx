import { postUserLogin } from '@/api/auth.api';
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
    <div>
      <div>
        <form onSubmit={onLoginSubmit}>
          <p>로그인</p>
          <input id="email" value={loginInfo.email} onChange={handleChangeValue} autoComplete="email" />
          <input
            id="password"
            type="password"
            value={loginInfo.password}
            onChange={handleChangeValue}
            autoComplete="password"
          />
          <div>
            <button type="submit">로그인</button>
            <Link to={'/register'}>
              <button>회원가입</button>
            </Link>
          </div>
        </form>
      </div>
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
