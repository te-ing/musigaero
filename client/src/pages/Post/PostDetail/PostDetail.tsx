import { getPostDetail } from '@/api/post.api';
import Header from '@/components/header/Header';
import queryKey from '@/constants/queryKey';
import { useQuery } from 'react-query';
import { PostContents } from './PostContents';

export const PostDetail = () => {
  const postId = window.location.pathname.split('/').pop() || '0';
  const { data } = useQuery(queryKey.getPostDetail, () => getPostDetail(postId));

  return (
    <>
      <Header />
      {<PostContents data={data}></PostContents>}
    </>
  );
};
