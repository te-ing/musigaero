import Loader from '@/components/common/loader/Loader';
import { PostData } from '@/type/post.type';
import { PostHeader } from '../PostComponent/PostHeader';
import { PostMainImage } from '../PostComponent/PostMainImage';
import { PostSubImage } from '../PostComponent/PostSubImage';

export const PostContents = ({ data }: { data?: PostData }) => {
  if (!data) return <Loader />;
  const { body, image } = data;

  return (
    <article className="flex flex-col gap-5 p-4">
      <PostHeader data={data} />
      <PostMainImage src={image[0]}></PostMainImage>
      <p className="text-gray-700 leading-snug">{body}</p>
      <PostSubImage images={data.image.slice(1)} />
    </article>
  );
};
