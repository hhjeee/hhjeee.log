import { PostData } from '@/types/post';

import { getAllPosts } from '@/lib/posts';

import PostSection from '@/components/postList/PostSection';

const MainPage = async () => {
  const posts: PostData[] = await getAllPosts();

  return <PostSection posts={posts} />;
};

export default MainPage;
