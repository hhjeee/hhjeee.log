import PostSection from '@/components/postList/PostSection';
import { getAllPosts } from '@/lib/posts';
import { PostData } from '@/types/post';

const MainPage = () => {
  const posts: PostData[] = getAllPosts();

  return (
    <div className="w-[65%] mx-auto pb-[2rem]">
      <PostSection posts={posts} />
    </div>
  );
};

export default MainPage;
