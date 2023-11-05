import { SpeechBubbleIcon } from '@/assets/svg';
import React from 'react';

export const PostListCard = () => {
  return (
    <article className="flex flex-col gap-2 cursor-pointer">
      <div aria-label="header wrapper">
        <div aria-label="top header" className="flex justify-between gap-4">
          <h4 className="leading-tight">타이틀입니다</h4>
          <div className="flex items-end mb-1 gap-1 text-gray-500 text-xs">
            <SpeechBubbleIcon /> 5
          </div>
        </div>

        <div aria-label="bottom header" className="flex justify-between items-center text-gray-500 text-xs">
          <div className="flex gap-1 ">
            <p>반려동물 이름</p>
            <p>∙</p>
            <p>닉네임</p>
          </div>
          <p className="text-xs">떠난 날 23. 08. 27</p>
        </div>
      </div>

      <div aria-label="body" className="text-gray-500 text-sm">
        우리 애기고양이 내 옆에 짧지만 있어줘서 너무 고마워 ㅠ난 우리 애기한테 아무것도 해준것도 없는데 우리 ...
      </div>
    </article>
  );
};
