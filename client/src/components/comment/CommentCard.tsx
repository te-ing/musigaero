import { CommentData } from '@/type/comment.type';
import dayjs from 'dayjs';

export const CommentCard = ({ data }: { data: CommentData }) => {
  const { body, nickname, createdAt } = data;
  return (
    <div className="flex flex-col  text-textBlack">
      <h5 className="text-base font-medium">{nickname}</h5>
      <p className="text-sm ">{body}</p>
      <div className="flex justify-between text-xs my-1 text-gray-400">
        <div className="flex gap-1 ">
          <div>{dayjs(createdAt).format('YYYY. MM. DD')}</div>∙<button>답글 달기</button>
        </div>
        <button>삭제</button>
      </div>
    </div>
  );
};
