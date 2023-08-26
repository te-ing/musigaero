import { postUserLogin } from '@/api/auth.api';
import useModal from '@/hooks/useModal';
import { CustomAxiosError } from '@/type/error';
import { isValidate, loginInputValidate } from '@/utils/validation';
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { showToast } = useModal();

  const { mutate } = useMutation(postUserLogin, {
    onSuccess: () => navigate('/home'),
    onError: (err: CustomAxiosError) => {
      const errorMsg = err.response?.data?.message?.toString() || '로그인에 실패하였습니다.';
      showToast(errorMsg, { mode: 'error' });
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
    <Container sx={sxLogin.container}>
      <Paper sx={sxLogin.paper}>
        <form style={sxLogin.form} onSubmit={onLoginSubmit}>
          <Typography sx={{ m: '0 auto 0 30px' }}>로그인</Typography>
          <TextField
            error={!!loginError.email}
            sx={{ width: 240 }}
            id="email"
            label="이메일"
            value={loginInfo.email}
            onChange={handleChangeValue}
            autoComplete="email"
            helperText={loginError.email}
            variant="standard"
          />
          <TextField
            error={!!loginError.password}
            sx={{ width: 240 }}
            id="password"
            type="password"
            label="비밀번호"
            value={loginInfo.password}
            onChange={handleChangeValue}
            helperText={loginError.password}
            variant="standard"
            autoComplete="password"
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', fontSize: 14, mt: 2, gap: 1 }}>
            <Button type="submit">로그인</Button>
            <Link to={'/register'}>
              <Button>회원가입</Button>
            </Link>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;

export const sxLogin = {
  container: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' },
  paper: {
    borderRadius: '12px',
    minHeight: 300,
    width: 500,
    minWidth: 300,
    p: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: '100%',
    gap: '12px',
  },
} as const;
