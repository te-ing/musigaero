import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container sx={sxLogin.container}>
      <Paper sx={sxLogin.paper}>
        <Box sx={sxLogin.box}>
          <Typography sx={{ m: '0 auto 0 30px' }}>로그인</Typography>
          <TextField
            error={false}
            sx={{ width: 240 }}
            id="standard-error-helper-text"
            label="이메일"
            helperText="Incorrect entry."
            variant="standard"
          />
          <TextField
            error={false}
            sx={{ width: 240 }}
            id="standard-error-helper-text"
            label="비밀번호"
            helperText="Incorrect entry."
            variant="standard"
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', fontSize: 14, mt: 2, gap: 1 }}>
            <Button>로그인</Button>
            <Link to={'/register'}>
              <Button>회원가입</Button>
            </Link>
          </Box>
        </Box>
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
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: '100%',
  },
};
