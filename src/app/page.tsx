import PostSection from '@/components/postList/PostSection';
import { getAllPosts } from '@/lib/posts';
import { PostData } from '@/types/post';

const MainPage = () => {
  const posts: PostData[] = getAllPosts();
  return <PostSection posts={posts} />;
};

export default MainPage;
