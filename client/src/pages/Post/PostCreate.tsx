import { createPost } from '@/api/post.api';
import Button from '@/components/common/button/Button';
import Header from '@/components/header/Header';
import FileInput from '@/components/input/FileInput';
import PencilDateInput from '@/components/input/PencilDateInput';
import PencilInput from '@/components/input/PencilInput';
import useModal from '@/hooks/useModal';
import { PostCreateForm } from '@/type/post.type';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useMutation } from 'react-query';

const PostCreate = () => {
  const [createForm, setCreateForm] = useState<PostCreateForm>();
  const { showToast } = useModal();
  const { mutate } = useMutation(createPost);

  const setFormData = <T extends keyof PostCreateForm>(key: T, value: PostCreateForm[T]) =>
    setCreateForm((prev) => ({ ...prev!, [key]: value }));

  const handleChangeString: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const [id, value] = [e.target.id as keyof PostCreateForm, e.target.value];
    setFormData(id, value);
  };
  const handleChangeDate = (date: Date) => setFormData('deathDay', date);

  const handleChangeImage = (res: string[], id: 'main' | 'sub') => {
    let prev = createForm?.image || [''];
    prev = id === 'main' ? [res[0], ...prev.slice(1)] : [prev[0], ...res];
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
        ></textarea>
        <FileInput placeholder="대표 사진을 올려주세요" getResponse={(res) => handleChangeImage(res, 'main')} />
        <FileInput
          placeholder="추억할 사진을 올려주세요 (최대 3장)"
          max={3}
          getResponse={(res) => handleChangeImage(res, 'sub')}
        />
        <div className={`flex justify-end gap-2 w-full mt-6`}>
          <Button text="취소" />
          <Button type="submit" text="작성 완료" />
        </div>
      </form>
    </div>
  );
};

export default PostCreate;
