import PostSection from '@/components/postList/PostSection';
import { getAllPosts } from '@/lib/posts';
import { PostData } from '@/types/post';

interface CategoryPageProps {
  params: { category: string };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const posts: PostData[] = getAllPosts();
  const category = decodeURIComponent(params.category);

  return <PostSection posts={posts} selectedCategory={category} />;
};
export default CategoryPage;
