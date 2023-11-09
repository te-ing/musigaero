import useModal from '@/hooks/useModal';
import { Link } from 'react-router-dom';
import { LogoKoreanWhiteIcon } from '@/assets/svg';
import { sx } from '@/constants/styles';
import { useQuery } from 'react-query';
import { getMyInfo } from '@/api/auth.api';
import queryKey from '@/constants/queryKey';
import { isLogin } from '@/utils/helper';

const Home = () => {
  const { showToast } = useModal();
  const { data } = useQuery(queryKey.getMyInfo, getMyInfo);
  const onClickLogout = () => {
    sessionStorage.removeItem('accessToken');
    window.location.reload();
  };

  return (
    <div className={sxHome.container}>
      <LogoKoreanWhiteIcon />
      <p className="text-white w-80 mt-14 mb-10">안녕하세요 {data?.nickname ? `${data?.nickname}님 ` : ''}🐶</p>
      <div
        className={`${sx.flexCenter} flex-col w-full gap-6 [&>a]:bg-primary [&>a]:w-80 [&>a]:h-14 [&>a]:rounded-2xl [&>a]:flex [&>a]:justify-center [&>a]:items-center text-lg`}
      >
        <Link to={'/post'}>🔖 무지개 글 보기</Link>
        {isLogin() && <Link to={'/post/create'}>✏️ 무지개 글 쓰기</Link>}
      </div>
      <div className="text-sm mt-28">
        {isLogin() ? <button onClick={onClickLogout}>로그아웃</button> : <Link to={'/login'}>로그인</Link>}
      </div>
    </div>
  );
};

export default Home;

const sxHome = {
  container: `${sx.flexCenter} py-20 flex-col w-full h-full text-white bg-petPhotos bg-cover `,
};
