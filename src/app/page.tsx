import { PostData } from '@/types/post';

import { getAllPosts, getCategories } from '@/lib/posts';

import PostSection from '@/components/postList/PostSection';

const MainPage = async () => {
  const posts: PostData[] = await getAllPosts();
  const categories = await getCategories();

  return <PostSection posts={posts} categories={categories} />;
};

export default MainPage;
