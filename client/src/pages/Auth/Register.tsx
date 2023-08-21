import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sxLogin as sxRegister } from './Login';
import { useMutation } from 'react-query';
import { postUserRegister } from '@/api/auth.api';
import { isValidate, registerInputValidate } from '@/utils/validation';

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({ email: '', nickname: '', password: '', passwordConfirm: '' });
  const [registerError, setRegisterError] = useState({ email: '', nickname: '', password: '', passwordConfirm: '' });
  const navigate = useNavigate();

  const { mutate } = useMutation(postUserRegister, {
    onSuccess: () => navigate('/login'),
  });

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setRegisterInfo((prev) => ({ ...prev, [id]: value }));
  };

  const onRegisterSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const validation = registerInputValidate(registerInfo);
    if (isValidate(validation)) {
      mutate(registerInfo);
    }
    setRegisterError(validation);
  };

  return (
    <Container sx={sxRegister.container}>
      <Paper sx={sxRegister.paper}>
        <form style={sxRegister.form} onSubmit={onRegisterSubmit}>
          <Typography sx={{ m: '0 auto 0 30px' }}>회원가입</Typography>
          <TextField
            error={!!registerError.email}
            sx={{ width: 240 }}
            id="email"
            label="이메일"
            helperText={registerError.email}
            variant="standard"
            value={registerInfo.email}
            onChange={handleChangeValue}
          />
          <TextField
            error={!!registerError.nickname}
            sx={{ width: 240 }}
            id="nickname"
            label="닉네임"
            helperText={registerError.nickname}
            variant="standard"
            value={registerInfo.nickname}
            onChange={handleChangeValue}
          />
          <TextField
            error={!!registerError.password}
            sx={{ width: 240 }}
            id="password"
            type="password"
            label="비밀번호"
            helperText={registerError.password}
            variant="standard"
            value={registerInfo.password}
            onChange={handleChangeValue}
          />
          <TextField
            error={!!registerError.passwordConfirm}
            sx={{ width: 240 }}
            id="passwordConfirm"
            type="password"
            label="비밀번호 확인"
            helperText={registerError.passwordConfirm}
            variant="standard"
            value={registerInfo.passwordConfirm}
            onChange={handleChangeValue}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', fontSize: 14, mt: 2, gap: 1 }}>
            <Button type="submit">회원가입</Button>
            <Link to={'/login'}>
              <Button>취소</Button>
            </Link>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
