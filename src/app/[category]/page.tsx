import { notFound } from 'next/navigation';

import { PostData } from '@/types/post';

import { getAllPosts, getCategories } from '@/lib/posts';

import PostSection from '@/components/postList/PostSection';

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    category,
  }));
}

type categoryPageProps = Promise<{ category: string }>;

const CategoryPage = async ({ params }: { params: categoryPageProps }) => {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);

  const categories = await getCategories();
  if (!categories.includes(decodedCategory)) {
    notFound();
  }

  const posts: PostData[] = await getAllPosts();

  return <PostSection posts={posts} selectedCategory={decodedCategory} />;
};

export default CategoryPage;
