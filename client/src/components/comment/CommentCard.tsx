import { deleteComment } from '@/api/comment.api';
import queryKey from '@/constants/queryKey';
import useModal from '@/hooks/useModal';
import { CommentData } from '@/type/comment.type';
import dayjs from 'dayjs';
import { useMutation, useQueryClient } from 'react-query';

export const CommentCard = ({ data }: { data: CommentData }) => {
  const QueryClient = useQueryClient();
  const { showToast } = useModal();
  const { body, nickname, createdAt, id } = data;

  const { mutate } = useMutation(() => deleteComment({ id }), {
    onSuccess: () => {
      QueryClient.invalidateQueries(queryKey.getCommentList);
      showToast('댓글 삭제를 성공하였습니다');
    },
  });

  return (
    <div className="flex flex-col  text-textBlack">
      <h5 className="text-base font-medium">{nickname}</h5>
      <p className="text-sm ">{body}</p>
      <div className="flex justify-between text-xs my-1 text-gray-400">
        <div className="flex gap-1 ">
          <div>{dayjs(createdAt).format('YYYY. MM. DD')}</div>∙<button>답글 달기</button>
        </div>
        <button onClick={() => mutate()}>삭제</button>
      </div>
    </div>
  );
};
