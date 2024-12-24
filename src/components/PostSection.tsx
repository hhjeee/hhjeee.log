'use client';

import { useState } from 'react';
import CategoryBar from './categoryBar';
import Post from './post';
import { PostData } from '@/types/post';

const PostSection = ({
  posts,
  categoriesWithCount,
}: {
  posts: PostData[];
  categoriesWithCount: Record<string, number>;
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  return (
    <div className="flex flex-col">
      <CategoryBar
        categoriesWithCount={categoriesWithCount}
        totalPostsCount={posts.length}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Post posts={filteredPosts} />
    </div>
  );
};

export default PostSection;
