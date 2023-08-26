import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container sx={{ py: 2, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Link to={'/login'}>로그인 페이지</Link>
      <Link to={'/register'}>회원가입 페이지</Link>
      <Link to={'/post'}>목록 페이지</Link>
      <Link to={'/post/1'}>상품 페이지</Link>
    </Container>
  );
};

export default Home;
