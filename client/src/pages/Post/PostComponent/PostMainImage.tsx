import { imageRouter } from '@/utils/formatter';
import imageRequire from '@/assets/images/dog.png';
import { MouseEventHandler } from 'react';

export const PostMainImage = ({ src }: { src: string }) => {
  const handleOnError: MouseEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.src = imageRequire || '';
  };

  return <img src={imageRouter(src)} alt="메인이미지" className="w-full rounded-lg" onError={handleOnError} />;
};
