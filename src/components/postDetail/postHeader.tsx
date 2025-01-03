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
      <button className="text-primary">{decodeURIComponent(category)}</button>
      <p className="font-medium m-0">
        {dayjs(meta.date).format('YYYY년 MM월 DD일')}
      </p>
      <hr className="my-[1rem]" />
    </>
  );
};
export default PostHeader;
