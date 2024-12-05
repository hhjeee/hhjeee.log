import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { PostData } from "@/types/post";
import dayjs from "dayjs";
import Image from "next/image";

const MainPage = () => {
  const posts: PostData[] = getAllPosts();

  return (
    <div className="w-[65%] mx-auto my-[2rem]">
      <div className="grid grid-cols-2 gap-[1rem]">
        {posts.map((post) => (
          <div key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="p-[1rem] border no-underline block rounded-lg shadow-sm flex flex-col gap-[0.5rem] hover:shadow-lg"
            >
              {post.image && (
                <div className="relative w-full min-h-[15rem] rounded-md overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="intrinsic"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="font-semibold text-xl">{post.title}</h3>
              <p className="text-gray-500">{post.desc}</p>
              <p className="font-medium m-0 text-sm no-underline text-gray-500">
                {dayjs(post.date).format("YYYY년 MM월 DD일")}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
