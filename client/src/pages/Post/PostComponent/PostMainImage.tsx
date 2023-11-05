import { imageRouter } from '@/utils/formatter';

export const PostMainImage = ({ src }: { src: string }) => {
  return <img src={imageRouter(src)} alt="메인이미지" className="w-full rounded-lg" />;
};
