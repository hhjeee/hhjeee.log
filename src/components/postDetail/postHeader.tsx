import { PostMeta } from '@/types/post';
import dayjs from 'dayjs';

const PostHeader = ({
  meta,
  category,
}: {
  meta: PostMeta;
  category: string;
}) => {
  return (
    <>
      <h1>{meta.title}</h1>
      <div className="flex items-center gap-2 font-medium">
        <button className="bg-primary rounded-full px-3 py-0.5 text-white m-0">
          {decodeURIComponent(category)}
        </button>
        <p className="m-0">{dayjs(meta.date).format('YYYY년 MM월 DD일')}</p>
      </div>
      <hr className="my-[1rem] h-0.5 bg-gray1" />
    </>
  );
};
export default PostHeader;
