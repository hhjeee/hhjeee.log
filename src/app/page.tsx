import { PostData } from '@/types/post';

import { getAllPosts } from '@/lib/posts';

import PostSection from '@/components/postList/PostSection';

const MainPage = async () => {
  const posts: PostData[] = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <PostSection posts={posts} categories={categories} />;
};

export default MainPage;
