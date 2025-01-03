import PostSection from '@/components/postList/PostSection';
import { getAllPosts } from '@/lib/posts';
import { PostData } from '@/types/post';

interface CategoryPageProps {
  params: { category: string };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const posts: PostData[] = getAllPosts();
  const category = decodeURIComponent(params.category);

  return (
    <div className="w-[65%] mx-auto pb-[2rem]">
      <PostSection posts={posts} selectedCategory={category} />
    </div>
  );
};
export default CategoryPage;
