import { getPostDetail } from '@/api/post.api';
import Header from '@/components/header/Header';
import queryKey from '@/constants/queryKey';
import { useQuery } from 'react-query';
import { PostContents } from './PostContents';
import { CreateComment } from '@/components/comment/CreateComment';

export const PostDetail = () => {
  const postId = window.location.pathname.split('/').pop() || '0';
  const { data } = useQuery(queryKey.getPostDetail, () => getPostDetail(postId));

  return (
    <>
      <Header />
      {<PostContents data={data}></PostContents>}
      <hr className="mx-[30%] my-[35px] border-2 border-gray-200 rounded-md" />
      <CreateComment />
      <hr className="border-1 border-gray-200 rounded-md" />
    </>
  );
};
