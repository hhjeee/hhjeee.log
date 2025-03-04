import Image from 'next/image';
import Link from 'next/link';

import dayjs from 'dayjs';

import { PostData } from '@/types/post';

const Post = ({ posts }: { posts: PostData[] }) => {
  return (
    <div className="mt-[4rem] columns-1 sm:columns-2 gap-2">
      {posts.map((post) => (
        <div key={post.slug}>
          <Link
            href={`/${post.category}/${post.slug}`}
            className="relative group hover:bg-primary hover:bg-opacity-10 duration-200 ease-linear break-inside-avoid py-6 px-4 no-underline block flex flex-col" //hover:shadow-lg transition-shadow duration-300 ease-linear
          >
            {post.image && (
              <div className="relative w-full min-h-[10rem] mb-[0.5rem] rounded-md overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={500}
                  sizes="100vw"
                  className="object-cover"
                  // placeholder="blur"
                />
              </div>
            )}

            <h3 className="font-semibold text-xl group-hover:text-primary2 duration-100 ease-linear">
              {post.title}
            </h3>
            <p className="text-gray2 text-sm mt-2 mb-1">{post.desc}</p>
            <div className="flex gap-2 items-center">
              <p className="text-sm text-gray2">
                {dayjs(post.date).format('YYYY년 MM월 DD일')} ·{' '}
                {decodeURIComponent(post.category)}
              </p>
            </div>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};
export default Post;
