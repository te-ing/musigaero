import Button from '@/components/common/button/Button';
import Header from '@/components/header/Header';
import FileInput from '@/components/input/FileInput';
import PencilInput from '@/components/input/PencilInput';

const PostCreate = () => {
  return (
    <div className={`flex flex-col`}>
      <Header />
      <div className={`flex flex-col p-4 gap-4`}>
        <PencilInput placeholder="글 제목을 입력해주세요" className="w-[210px]" />
        <PencilInput placeholder="반려동물의 이름을 알려주세요" className="w-[210px]" />
        <PencilInput
          type="date"
          placeholder="떠난 날을 알려주세요"
          className="w-[210px]"
          onChange={(date) => console.log('ChangeDate: ', date)}
        />
        <textarea
          className={`bg-gray-100 resize-none rounded-lg my-1 p-4 min-h-[200px] text-gray-500`}
          placeholder="글 내용을 입력해주세요 (최대 2,000자 까지 입력할 수 있어요)"
        ></textarea>
        <FileInput placeholder="대표 사진을 올려주세요" />
        <FileInput placeholder="추억할 사진을 올려주세요 (최대 3장)" max={3} />
        <div className={`flex justify-end gap-2 w-full`}>
          <Button text="취소" />
          <Button text="작성 완료" />
        </div>
      </div>
    </div>
  );
};

export default PostCreate;
