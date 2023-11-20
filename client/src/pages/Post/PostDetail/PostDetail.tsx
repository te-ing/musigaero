import { getPostDetail } from '@/api/post.api';
import Header from '@/components/header/Header';
import queryKey from '@/constants/queryKey';
import { useQueries } from 'react-query';
import { PostContents } from './PostContents';
import { CreateComment } from '@/components/comment/CreateComment';
import { CommentList } from '@/components/comment/CommentList';
import { getCommentList } from '@/api/comment.api';
import { useParams } from 'react-router-dom';

export const PostDetail = () => {
  const postId = useParams().id || '';
  const [{ data: postData }, { data: commentData }] = useQueries([
    { queryKey: queryKey.getPostDetail, queryFn: () => getPostDetail(postId) },
    { queryKey: queryKey.getCommentList, queryFn: () => getCommentList(postId) },
  ]);

  return (
    <>
      <Header />
      {<PostContents data={postData}></PostContents>}
      <hr className="mx-[30%] my-[35px] border-2 border-gray-200 rounded-md" />
      <CreateComment />
      <hr className="border-1 border-gray-200 rounded-md" />
      {commentData && <CommentList data={commentData} />}
    </>
  );
};
