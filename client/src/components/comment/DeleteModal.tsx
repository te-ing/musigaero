import { deleteComment } from '@/api/comment.api';
import queryKey from '@/constants/queryKey';
import useModal from '@/hooks/useModal';
import { CommentData } from '@/type/comment.type';
import { ChangeEventHandler, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

interface Props {
  handleClose: () => void;
  data: CommentData;
}

export const DeleteModal = ({ data, handleClose }: Props) => {
  const QueryClient = useQueryClient();
  const [password, setPassword] = useState<string>();
  const { showToast } = useModal();
  const { id, author } = data;

  const { mutate } = useMutation(() => deleteComment({ id, password }), {
    onSuccess: () => {
      QueryClient.invalidateQueries(queryKey.getCommentList);
      showToast('댓글을 삭제하였습니다');
    },
    onError: () => showToast(author ? '해당 댓글에 대한 권한이 없습니다' : '비밀번호가 올바르지 않습니다'),
    onSettled: () => handleClose(),
  });

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="bg-[#00000080] flex items-center justify-center fixed top-0 left-0 w-full h-full">
      <div className="w-[300px] h-[160px] bg-white rounded-3xl flex items-center justify-center flex-col p-4 py-6">
        {author ? (
          <p className="text-[18px] mt-6 font-medium ">해당 댓글을 삭제하시겠습니까?</p>
        ) : (
          <>
            <p className="text-[18px] font-medium ">비밀번호를 입력하세요</p>
            <input type="password" className="my-4 p-1 px-2 bg-gray-100 rounded-md" onChange={handleChangePassword} />
          </>
        )}

        <div className="flex w-full justify-end gap-2 mt-auto">
          <button className="flex justify-center w-[60px]" type="button" onClick={() => handleClose()}>
            취소
          </button>
          <button className="flex justify-center w-[60px]" type="button" onClick={() => mutate()}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
