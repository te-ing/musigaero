import { SpeechBubbleIcon } from '@/assets/svg';
import { PostListData } from '@/type/post.type';
import dayjs from 'dayjs';
import React from 'react';

type Props = { data: PostListData };

export const PostListCard = ({ data }: Props) => {
  const { body, deathday, petname, title, comment, nickname } = data;
  return (
    <article className="flex flex-col gap-2 cursor-pointer">
      <div aria-label="header wrapper">
        <div aria-label="top header" className="flex justify-between gap-4">
          <h4 className="leading-tight">{title}</h4>
          {comment?.length && (
            <div className="flex items-end mb-1 gap-1 text-gray-500 text-xs">
              <SpeechBubbleIcon /> comment.length
            </div>
          )}
        </div>

        <div aria-label="bottom header" className="flex justify-between items-center text-gray-500 text-xs">
          <div className="flex gap-1 ">
            <p>{petname}</p>
            <p>∙</p>
            <p>{nickname}</p>
          </div>
          <p className="text-xs">떠난 날 {dayjs(deathday).format('YY.MM.DD')}</p>
        </div>
      </div>

      <div aria-label="body" className="text-gray-500 text-sm max-h-20 overflow-hidden ">
        {body}
      </div>
    </article>
  );
};
