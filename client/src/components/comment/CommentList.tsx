import { CommentData } from '@/type/comment.type';
import { CommentCard } from './CommentCard';

export const CommentList = ({ data }: { data: CommentData[] }) => {
  return (
    <div className="p-4">
      <div>댓글 {data.length}</div>
      <div className="flex flex-col gap-[10px] mt-2">
        {data.map((comment) => (
          <CommentCard key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
};
