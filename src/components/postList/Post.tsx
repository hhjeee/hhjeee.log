import Image from 'next/image';
import Link from 'next/link';

import dayjs from 'dayjs';

import { PostData } from '@/types/post';

const Post = ({ posts }: { posts: PostData[] }) => {
  return (
    <div className="mt-[5rem] columns-1 sm:columns-2 gap-4">
      {posts.map((post) => (
        <div key={post.slug}>
          <Link
            href={`/posts/${post.category}/${post.slug}`}
            className="break-inside-avoid mb-[1rem] p-[1rem] border no-underline block rounded-lg shadow-sm flex flex-col gap-[0.5rem] hover:shadow-lg transition-shadow duration-300 ease-linear"
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
            <h3 className="font-semibold text-xl">{post.title}</h3>
            <p className="text-gray2">{post.desc}</p>
            <p className="font-medium m-0 text-sm no-underline text-gray2">
              {dayjs(post.date).format('YYYY년 MM월 DD일')}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Post;
