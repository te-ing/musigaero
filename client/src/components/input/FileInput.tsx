import { createPostImages } from '@/api/post.api';
import useModal from '@/hooks/useModal';
import { S3ImageResponse } from '@/type/common';
import { ChangeEventHandler, useState } from 'react';
import { useMutation } from 'react-query';

const FileInput = ({
  placeholder,
  max = 1,
  key,
  getResponse,
}: {
  placeholder?: string;
  max?: number;
  key?: string;
  getResponse: (res: S3ImageResponse[]) => void;
}) => {
  const { showToast } = useModal();
  const [fileList, setFileList] = useState<S3ImageResponse[]>([]);

  const { mutate: createImage } = useMutation(createPostImages, {
    onSuccess: (res) => {
      setFileList([res[0]]);
      getResponse(res);
    },
    onError: () => {
      setFileList([]);
      showToast(`파일 업로드 중 문제가 발생하였습니다.`);
    },
  });

  const uploadImage: ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (event.target.files === null) return;
    const files = Array.from(event.target.files);
    if (files.length > max) {
      showToast(`업로드 가능한 최대 파일 수는 ${max}개 입니다.`);
      return;
    }

    const formData = new FormData();

    files.forEach((file) => {
      formData.append('file', file);
      formData.append('type', 'image');
    });
    createImage(formData);
  };

  return (
    <label
      className={`relative border-gray-300 border-[1px] min-h-[80px] rounded-2xl w-full mt-4 p-4 cursor-pointer flex justify-center flex-col`}
      htmlFor={key || placeholder}
    >
      <label
        className="absolute top-[-8px] bg-white px-2 text-sm text-gray-400 cursor-pointer"
        htmlFor={key || placeholder}
      >
        {placeholder}
      </label>

      {fileList.length ? (
        fileList.map((v) => {
          return (
            <li key={v.key} className={`pl-6 text-gray-400 cursor-default whitespace-nowrap overflow-hidden`}>
              {v.originalname}
            </li>
          );
        })
      ) : (
        <li className={`pl-6 text-gray-400`}>파일 선택</li>
      )}
      <input onChange={uploadImage} className="hidden" id={key || placeholder} type="file" multiple={max > 1} />
    </label>
  );
};

export default FileInput;
