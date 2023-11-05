import { SpeechBubbleIcon } from '@/assets/svg';
import { CommentData } from '@/type/comment.type';
import dayjs from 'dayjs';

type Props = {
  nickname: string;
  title: string;
  petname: string;
  deathday: Date;
  comment?: CommentData[];
};

export const PostHeader = ({ data }: { data: Props }) => {
  const { deathday, nickname, petname, title, comment } = data;
  return (
    <div aria-label="header wrapper">
      <div aria-label="top header" className="flex justify-between gap-4">
        <h4 className="leading-tight">{title}</h4>
        {comment?.length && (
          <div className="flex items-end mb-1 gap-1 text-gray-500 text-xs">
            <SpeechBubbleIcon /> {comment.length}
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
  );
};
