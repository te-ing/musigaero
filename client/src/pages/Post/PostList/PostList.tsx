import Header from '@/components/header/Header';
import React from 'react';
import { PostListCard } from './PostListCard';
import { useQuery } from 'react-query';
import queryKey from '@/constants/queryKey';
import { getPostList } from '@/api/post.api';
import Loader from '@/components/common/loader/Loader';

export const PostList = () => {
  const { data, isLoading } = useQuery(queryKey.getPostList, getPostList);

  if (isLoading) return <Loader />;
  return (
    <div>
      <Header hr />
      <div className="flex flex-col gap-5 p-4">
        {data?.map((post) => {
          return <PostListCard key={post.id} data={post} />;
        })}
      </div>
    </div>
  );
};
