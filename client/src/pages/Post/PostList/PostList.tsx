import Header from '@/components/header/Header';
import React from 'react';
import { PostListCard } from './PostListCard';

export const PostList = () => {
  return (
    <div>
      <Header hr />
      <div className="flex flex-col gap-5 p-4">
        <PostListCard />
        <PostListCard />
        <PostListCard />
      </div>
    </div>
  );
};
