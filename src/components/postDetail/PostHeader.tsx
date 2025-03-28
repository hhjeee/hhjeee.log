'use client';

import { useRouter } from 'next/navigation';

import dayjs from 'dayjs';

import { PostMeta } from '@/types/post';

const PostHeader = ({
  meta,
  category,
}: {
  meta: PostMeta;
  category: string;
}) => {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/${decodeURIComponent(category)}`);
  };

  return (
    <>
      <h1>{meta.title}</h1>
      <div className="flex items-center gap-2 font-medium">
        <button
          className="bg-primary rounded-full whitespace-nowrap px-3 py-0.5 text-white m-0"
          onClick={() => handleCategoryClick(category)}
        >
          {decodeURIComponent(category)}
        </button>
        <p className="m-0">{dayjs(meta.date).format('YYYY년 MM월 DD일')}</p>
      </div>
      <hr className="my-[1rem] h-0.5 bg-gray1" />
    </>
  );
};
export default PostHeader;
