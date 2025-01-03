'use client';

import CategoryBar from './CategoryBar';
import Post from './Post';
import { PostData } from '@/types/post';

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
    <div className="flex flex-col">
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
