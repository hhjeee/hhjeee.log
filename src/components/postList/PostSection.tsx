'use client';

import { PostData } from '@/types/post';

import BookPost from './BookPost';
import CategoryBar from './CategoryBar';
import Post from './Post';

const PostSection = ({
  posts,
  categories,
  selectedCategory,
}: {
  posts: PostData[];
  categories: string[];
  selectedCategory?: string;
}) => {
  return (
    <div className="flex flex-col w-[80%] mx-auto pb-[2rem]">
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory || null}
      />
      {selectedCategory == 'DeepDive' ? (
        <BookPost posts={posts} />
      ) : (
        <Post posts={posts} />
      )}
    </div>
  );
};

export default PostSection;
