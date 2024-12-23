import { getAllPosts } from "@/lib/posts";
import PostList from "@/components/PostList";
import { PostData } from "@/types/post";

const MainPage = () => {
  const posts: PostData[] = getAllPosts();
  const categoriesWithCount = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="w-[65%] mx-auto my-[2rem]">
      <PostList posts={posts} categoriesWithCount={categoriesWithCount} />
    </div>
  );
};

export default MainPage;
