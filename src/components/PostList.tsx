"use client";

import { useState } from "react";
import Link from "next/link";
import { PostData } from "@/types/post";
import dayjs from "dayjs";
import Image from "next/image";

const PostList = ({ posts, categoriesWithCount }: { posts: PostData[]; categoriesWithCount: Record<string, number> }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  return (
    <div>
      {/* 카테고리 버튼 */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full ${
            !selectedCategory ? "bg-[#808080] text-white" : "bg-[#E2E2E2]"
          }`}
        >
          All ({posts.length})
        </button>
        {Object.entries(categoriesWithCount).map(([category, count]) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category ? "bg-[#808080] text-white" : "bg-[#E2E2E2]"
            }`}
          >
            {category} ({count})
          </button>
        ))}
      </div>

      {/* 게시물 리스트 */}
      <div className="columns-1 sm:columns-2 gap-4">
        {filteredPosts.map((post) => (
          <div key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="break-inside-avoid mb-[1rem] p-[1rem] border no-underline block rounded-lg shadow-sm flex flex-col gap-[0.5rem] hover:shadow-lg"
            >
              {post.image && (
                <div className="relative w-full min-h-[10rem] max-h-[25rem] mb-[0.5rem] rounded-md overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
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

export default PostList;
