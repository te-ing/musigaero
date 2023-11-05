import Loader from '@/components/common/loader/Loader';
import { PostData } from '@/type/post.type';
import React from 'react';
import { PostHeader } from '../PostComponent/PostHeader';

export const PostContents = ({ data }: { data?: PostData }) => {
  if (!data) return <Loader />;
  const { body, image } = data;

  return (
    <article className="flex flex-col gap-5 p-4">
      <PostHeader data={data} />
      <p className="text-gray-700 leading-snug">{body}</p>
    </article>
  );
};
