import Image from 'next/image';
import Link from 'next/link';

import { PostData } from '@/types/post';

const BookPost = ({ posts }: { posts: PostData[] }) => {
  return (
    <>
      <div className="mt-[3rem] flex items-center">
        <div className="h-96 w-64 mr-2 sm:block hidden">
          <Image
            src={'/images/posts/DeepDive/modern-js.jpg'}
            alt={'modern javascript book poster'}
            width={500}
            height={500}
            className="h-full w-full object-contain"
            // placeholder="blur"
          />
        </div>
        <div className="mt-4 flex flex-1 gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {posts.map((post) => (
            <div key={post.slug}>
              <Link
                href={`/${post.category}/${post.slug}`}
                className="relative group w-64 border shadow rounded-2xl overflow-hidden h-96 p-4 block flex flex-col hover:bg-primary hover:bg-opacity-10 duration-200 ease-linear cursor-pointer"
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
      </div>
    </>
  );
};
export default BookPost;
