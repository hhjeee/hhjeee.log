'use client';

import { PostData } from '@/types/post';

import CategoryBar from './CategoryBar';
import Post from './Post';

const PostSection = ({
  posts,
  selectedCategory,
}: {
  posts: PostData[];
  selectedCategory?: string;
}) => {
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  const categoriesWithCount = posts.reduce(
    (acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div className="flex flex-col w-[65%] mx-auto pb-[2rem]">
      <CategoryBar
        categoriesWithCount={categoriesWithCount}
        totalPostsCount={posts.length}
        selectedCategory={selectedCategory || null}
      />
      <Post posts={filteredPosts} />
    </div>
  );
};

export default PostSection;
