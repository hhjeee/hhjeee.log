import Image from 'next/image';
import Link from 'next/link';

import { PostData } from '@/types/post';

const BookPost = ({ posts }: { posts: PostData[] }) => {
  return (
    <>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="h-96 sm:block hidden">
          <Image
            src={posts[0].cover!}
            alt={'book cover'}
            width={500}
            height={500}
            className="h-full w-full object-contain"
            placeholder="blur"
          />
        </div>
        {posts.map((post) => (
          <div key={post.slug}>
            <Link
              href={`/${post.category}/${post.slug}`}
              className="relative group border shadow rounded-2xl overflow-hidden h-96 p-4 block flex flex-col hover:bg-primary hover:bg-opacity-10 duration-200 ease-linear cursor-pointer"
            >
              <p className="absolute -bottom-1/2 overflow-hidden left-0 text-[450px] font-black hover:text-primary2 text-gray2 opacity-10">
                {post.title[0]}
              </p>
              <h3 className="font-semibold text-2xl group-hover:text-primary2 duration-100 ease-linear">
                {post.title}
              </h3>
              <p className="text-gray2 text-sm mt-2 mb-1">{post.desc}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default BookPost;
