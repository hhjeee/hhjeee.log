import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';

import rehypePrettyCode from 'rehype-pretty-code';

import {
  getCategories,
  getCategoriesWithSlugs,
  getPostData,
  getPostNamesByCategory,
} from '@/lib/posts';
import rehypeExtractHeadings, { Heading } from '@/lib/rehypeExtractHeading';

import MDXRenderer from '@/components/postDetail/MDXRenderer';
import PostHeader from '@/components/postDetail/PostHeader';
import ScrollStatusBar from '@/components/postDetail/ScrollStatusBar';
import TableOfContents from '@/components/postDetail/TableOfContents';

export async function generateStaticParams() {
  const categorySlugs = await getCategoriesWithSlugs();

  return categorySlugs.map((item) => ({
    category: item.category,
    slug: item.slug,
  }));
}

type postPageProps = Promise<{ category: string; slug: string }>;

export async function generateMetadata({ params }: { params: postPageProps }) {
  const { category, slug } = await params;
  const { meta } = await getPostData(category, slug);

  const metadata = {
    title: meta.title,
    description: meta.desc,
  };

  return metadata;
}

const PostPage = async ({ params }: { params: postPageProps }) => {
  const { category, slug } = await params;
  const decodedCategory = decodeURIComponent(category);

  const categories = await getCategories();
  if (!categories.includes(decodedCategory)) {
    notFound();
  }

  const postsByCategory = await getPostNamesByCategory(decodedCategory);
  if (!postsByCategory.includes(decodeURIComponent(slug))) {
    notFound();
  }

  const { meta, content } = await getPostData(category, slug);

  const headings: Heading[] = [];
  const prettyCodeOptions = {
    theme: 'one-light',
  };

  const mdxContent = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        [rehypeExtractHeadings, headings],
        [rehypePrettyCode, prettyCodeOptions],
      ],
    },
  });

  return (
    <div className="relative py-[2rem] prose max-w-[90%] sm:max-w-prose mx-auto">
      <ScrollStatusBar />
      <PostHeader meta={meta} category={category} />
      <TableOfContents headings={headings} />
      <MDXRenderer content={mdxContent} />
    </div>
  );
};

export default PostPage;
