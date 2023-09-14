import useModal from '@/hooks/useModal';
import { Link } from 'react-router-dom';

const Home = () => {
  const { showToast } = useModal();
  return (
    <div>
      <Link to={'/login'}>로그인 페이지</Link>
      <Link to={'/register'}>회원가입 페이지</Link>
      <Link to={'/post'}>목록 페이지</Link>
      <Link to={'/post/1'}>상품 페이지</Link>
      <button onClick={() => showToast('토스트 클릭')}>Toast</button>
    </div>
  );
};

export default Home;
