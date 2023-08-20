import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { sxLogin as sxRegister } from './Login';

const Register = () => {
  return (
    <Container sx={sxRegister.container}>
      <Paper sx={sxRegister.paper}>
        <Box sx={sxRegister.box}>
          <Typography sx={{ m: '0 auto 0 30px' }}>회원가입</Typography>
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
            label="닉네임"
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
          <TextField
            error={false}
            sx={{ width: 240 }}
            id="standard-error-helper-text"
            label="비밀번호 확인"
            helperText="Incorrect entry."
            variant="standard"
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', fontSize: 14, mt: 2, gap: 1 }}>
            <Button>회원가입</Button>
            <Link to={'/login'}>
              <Button>취소</Button>
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
