import { Axios } from '@/api/base.api';
import useModal from '@/hooks/useModal';
import { ChangeEventHandler, useState } from 'react';

const FileInput = ({
  placeholder,
  max = 1,
  key,
  getResponse,
}: {
  placeholder?: string;
  max?: number;
  key?: string;
  getResponse?: (res: string[]) => void;
}) => {
  const { showToast } = useModal();
  const [fileList, setFileList] = useState<string[]>([]);

  const createImageFile = async (formData: FormData) => {
    const { data } = await Axios.post(`/post/image`, formData, {
      headers: { 'Context-Type': 'multipart/form-data' },
    });
    getResponse && getResponse(data);
    return data;
  };

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

    try {
      const response = await createImageFile(formData);
      setFileList(response);
    } catch (error) {
      setFileList([]);
      showToast(`파일 업로드 중 문제가 발생하였습니다.`);
    }
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
            <li key={v} className={`pl-6 text-gray-400 cursor-default whitespace-nowrap overflow-hidden`}>
              {v.slice(27)}
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
