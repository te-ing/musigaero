import { createPost } from '@/api/post.api';
import Button from '@/components/common/button/Button';
import Header from '@/components/header/Header';
import FileInput from '@/components/input/FileInput';
import PencilDateInput from '@/components/input/PencilDateInput';
import PencilInput from '@/components/input/PencilInput';
import useModal from '@/hooks/useModal';
import { PostCreateForm } from '@/type/post.type';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { PostContents } from './PostDetail/PostContents';
import queryKey from '@/constants/queryKey';
import { getMyInfo } from '@/api/auth.api';
import { useNavigate } from 'react-router-dom';
import { S3ImageResponse } from '@/type/common';

const PostCreate = () => {
  const [createForm, setCreateForm] = useState<PostCreateForm>();
  const { showToast } = useModal();
  const navigate = useNavigate();
  const { data: myInfo } = useQuery(queryKey.getMyInfo, getMyInfo);
  const { mutate } = useMutation(createPost, {
    onSuccess: (res) => {
      showToast('글 작성을 성공하였습니다');
      navigate(`/post/${res.id}`, { replace: true });
    },
    onError: () => showToast('글 작성에 실패하였습니다'),
  });

  const setFormData = <T extends keyof PostCreateForm>(key: T, value: PostCreateForm[T]) =>
    setCreateForm((prev) => ({ ...prev!, [key]: value }));

  const handleChangeString: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const id = e.target.id as keyof PostCreateForm;
    const { value, maxLength } = e.target;
    if (maxLength > 0 && value.length >= maxLength) {
      showToast(`${maxLength}자 까지 작성할 수 있어요!`);
      return;
    }
    setFormData(id, value);
  };
  const handleChangeDate = (date: Date) => setFormData('deathday', date);

  const handleChangeImage = (res: S3ImageResponse[], id: 'main' | 'sub') => {
    let prev = createForm?.image || [];
    const location = res.map(({ location }) => location);
    prev = id === 'main' ? [location[0], ...prev.slice(1)] : [prev[0], ...location];
    setFormData('image', prev);
  };

  const submitCreateForm: FormEventHandler = (e) => {
    e.preventDefault();
    if (!createForm?.image || !createForm.image[0]) {
      showToast('대표 사진을 올려주세요!');
      return;
    }
    mutate(createForm);
  };

  const preview = {
    id: 1,
    nickname: (createForm?.petname && myInfo?.nickname) || '',
    title: '',
    body: '',
    petname: '',
    deathday: new Date(),
    image: [],
    ...createForm,
  };

  return (
    <div className={`flex flex-col`}>
      <Header />
      <form className={`flex flex-col p-4 gap-4`} onSubmit={submitCreateForm}>
        <PencilInput
          id="title"
          placeholder="글 제목을 입력해주세요"
          className="w-[210px]"
          onChange={handleChangeString}
          required
          maxLength={20}
        />
        <PencilInput
          id="petname"
          placeholder="반려동물의 이름을 알려주세요"
          className="w-[210px]"
          onChange={handleChangeString}
          required
        />
        <PencilDateInput
          required
          placeholder="떠난 날을 알려주세요"
          className="w-[210px]"
          onChange={handleChangeDate}
        />
        <textarea
          id="body"
          className={`bg-gray-100 resize-none rounded-lg my-1 p-4 min-h-[200px] text-gray-500`}
          placeholder="글 내용을 입력해주세요 (최대 2,000자 까지 입력할 수 있어요)"
          onChange={handleChangeString}
          required
          maxLength={2000}
        ></textarea>
        <FileInput placeholder="대표 사진을 올려주세요" getResponse={(res) => handleChangeImage(res, 'main')} />
        <FileInput
          placeholder="추억할 사진을 올려주세요 (최대 3장)"
          max={3}
          getResponse={(res) => handleChangeImage(res, 'sub')}
        />
        <div className={`flex justify-end gap-2 w-full mt-6`}>
          <Button text="취소" onClick={() => console.log('cancle')} />
          <Button type="submit" text="작성 완료" />
        </div>
      </form>
      <hr />
      <div aria-label="미리보기">
        <h3 className={`w-full text-center my-5`}>미리 보기</h3>
        <PostContents data={preview} />
      </div>
    </div>
  );
};

export default PostCreate;
