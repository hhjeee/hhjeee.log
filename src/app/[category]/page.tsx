import PostSection from '@/components/postList/PostSection';
import { getAllPosts } from '@/lib/posts';
import { PostData } from '@/types/post';

export async function generateStaticParams() {
  const posts = await getAllPosts();

  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return categories.map((category) => ({
    category,
  }));
}

type categoryPageProps = Promise<{ category: string }>;

const CategoryPage = async ({ params }: { params: categoryPageProps }) => {
  const { category } = await params;

  const posts: PostData[] = await getAllPosts();
  const decodedCategory = decodeURIComponent(category);

  return <PostSection posts={posts} selectedCategory={decodedCategory} />;
};
export default CategoryPage;
