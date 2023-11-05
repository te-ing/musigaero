import { PostData } from '@/type/post.type';
import { Link } from 'react-router-dom';
import { PostHeader } from '../PostComponent/PostHeader';

type Props = { data: PostData };

export const PostListCard = ({ data }: Props) => {
  const { id, body } = data;

  return (
    <Link to={`${id}`} className="flex flex-col gap-2 cursor-pointer">
      <PostHeader data={data} />
      <div aria-label="body" className="text-gray-500 text-sm max-h-20 overflow-hidden ">
        {body}
      </div>
    </Link>
  );
};
