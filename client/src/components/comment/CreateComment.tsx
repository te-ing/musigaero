import React from 'react';
import Button from '../common/button/Button';
import { PencilIcon } from '@/assets/svg';

export const CreateComment = () => {
  return (
    <div className="flex flex-col p-[16px] gap-2">
      <div className="flex items-center gap-2">
        <PencilIcon height={14} width={14} />
        <h4 className={`text-[16px] text-textBlack`}>추모 댓글 남기기</h4>
      </div>
      <div className="flex gap-4">
        <input placeholder="닉네임" maxLength={10} className="text-[12px] border-b-[1px] w-[100px]" />
        <input placeholder="비밀번호" maxLength={12} type="password" className="text-[12px] border-b-[1px] w-[100px]" />
      </div>
      <textarea className="bg-gray-100 rounded-lg resize-none p-[16px] text-[14px]" placeholder="댓글을 입력하세요" />
      <div className="flex justify-end mr-1">
        <Button text="작성 완료" style={{ minHeight: '20px', padding: '1px' }} />
      </div>
    </div>
  );
};
