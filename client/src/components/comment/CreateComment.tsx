import { FormEventHandler } from 'react';
import Button from '../common/button/Button';
import { PencilIcon } from '@/assets/svg';
import useModal from '@/hooks/useModal';
import { useMutation, useQueryClient } from 'react-query';
import { createComment } from '@/api/comment.api';
import { CommentCreateForm } from '@/type/comment.type';
import { useParams } from 'react-router-dom';
import queryKey from '@/constants/queryKey';

export const CreateComment = () => {
  const QueryClient = useQueryClient();
  const { showToast } = useModal();
  const { id: postId } = useParams();
  const { mutate } = useMutation(createComment, {
    onSuccess: () => {
      showToast('댓글 작성을 성공하였습니다');
      QueryClient.invalidateQueries(queryKey.getCommentList);
    },
    onError: () => showToast('댓글 작성에 실패하였습니다'),
  });

  const onCreateSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const { nickname, password, body } = e.target as unknown as {
      nickname: { value: string };
      password: { value: string };
      body: { value: string };
    };

    const createSubmitForm: CommentCreateForm = {
      body: body.value,
      postId: postId!,
      nickname: nickname.value,
      password: password.value,
    };

    mutate(createSubmitForm);
  };

  return (
    <form className="flex flex-col p-[16px] gap-2" onSubmit={onCreateSubmit}>
      <div className="flex items-center gap-2">
        <PencilIcon height={14} width={14} />
        <h4 className={`text-[16px] text-textBlack`}>추모 댓글 남기기</h4>
      </div>
      <div className="flex gap-4">
        <input placeholder="닉네임" name="nickname" maxLength={10} className="text-[12px] border-b-[1px] w-[100px]" />
        <input
          placeholder="비밀번호"
          name="password"
          maxLength={12}
          type="password"
          className="text-[12px] border-b-[1px] w-[100px]"
        />
      </div>
      <textarea
        name="body"
        className="bg-gray-100 rounded-lg resize-none p-[16px] text-[14px]"
        placeholder="댓글을 입력하세요"
      />
      <div className="flex justify-end mr-1">
        <Button text="작성 완료" style={{ minHeight: '20px', padding: '1px' }} />
      </div>
    </form>
  );
};
