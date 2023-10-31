import useModal from '@/hooks/useModal';
import { Link } from 'react-router-dom';
import { LogoKoreanWhiteIcon } from '@/assets/svg';
import { sx } from '@/constants/styles';
import { useQuery } from 'react-query';
import { getMyInfo } from '@/api/auth.api';
import queryKey from '@/constants/queryKey';

const Home = () => {
  const { showToast } = useModal();
  const { data } = useQuery(queryKey.getMyInfo, getMyInfo);

  return (
    <div className={sxHome.container}>
      <LogoKoreanWhiteIcon />
      <p className="text-white w-80 mt-14 mb-10">안녕하세요 {data?.nickname ? `${data?.nickname}님 ` : ''}🐶</p>
      <div
        className={`${sx.flexCenter} flex-col w-full gap-6 [&>a]:bg-primary [&>a]:w-80 [&>a]:h-14 [&>a]:rounded-2xl [&>a]:flex [&>a]:justify-center [&>a]:items-center text-lg`}
      >
        <Link to={'/login'}>로그인 페이지</Link>
        <Link to={'/register'}>회원가입 페이지</Link>
        <Link to={'/post'}>목록 페이지</Link>
        <Link to={'/post/1'}>상품 페이지</Link>
        <Link to={'/post/create'}>상품 생성 페이지</Link>
        <button onClick={() => showToast('토스트 클릭')}>Toast</button>
      </div>
      <div className="font-light text-xs mt-28">
        <Link to={'/user'}>내 정보 수정</Link> | <Link to={'/user'}>회원탈퇴</Link>
      </div>
    </div>
  );
};

export default Home;

const sxHome = {
  container: `${sx.flexCenter} py-20 flex-col w-full text-white bg-petPhotos bg-cover `,
};
