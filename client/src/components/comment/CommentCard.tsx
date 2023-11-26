import { CommentData } from '@/type/comment.type';
import dayjs from 'dayjs';
import { useState } from 'react';
import { DeleteModal } from './DeleteModal';

export const CommentCard = ({ data }: { data: CommentData }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { body, nickname, createdAt } = data;

  return (
    <>
      <div className="flex flex-col  text-textBlack">
        <h5 className="text-base font-medium">{nickname}</h5>
        <p className="text-sm ">{body}</p>
        <div className="flex justify-between text-xs my-1 text-gray-400">
          <div className="flex gap-1 ">
            <div>{dayjs(createdAt).format('YYYY. MM. DD')}</div>∙<button>답글 달기</button>
          </div>
          <button onClick={() => setIsDeleteModalOpen(true)}>삭제</button>
        </div>
      </div>
      {isDeleteModalOpen && <DeleteModal data={data} handleClose={() => setIsDeleteModalOpen(false)} />}
    </>
  );
};
