import { notFound } from 'next/navigation';

import { PostData } from '@/types/post';

import { getCategories, getPostsByCategory } from '@/lib/posts';

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

  const posts: PostData[] = await getPostsByCategory(decodedCategory);

  return (
    <PostSection
      posts={posts}
      categories={categories}
      selectedCategory={decodedCategory}
    />
  );
};

export default CategoryPage;
