import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';

import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

import {
  getCategories,
  getCategoriesWithSlugs,
  getPostData,
  getPostNamesByCategory,
} from '@/lib/posts';
import rehypeExtractHeadings, { Heading } from '@/lib/rehypeExtractHeading';

import {
  MDXRenderer,
  PostHeader,
  ScrollStatusBar,
  TableOfContents,
} from '@/components/postDetail';

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
  const { meta } = await getPostData(
    decodeURIComponent(category),
    decodeURIComponent(slug)
  );

  const metadata = {
    title: meta.title,
    description: meta.desc,
  };

  return metadata;
}

const PostPage = async ({ params }: { params: postPageProps }) => {
  const { category, slug } = await params;
  const decodedCategory = decodeURIComponent(category);
  const decodedSlug = decodeURIComponent(slug);

  const categories = await getCategories();
  if (!categories.includes(decodedCategory)) {
    notFound();
  }

  const postsByCategory = await getPostNamesByCategory(decodedCategory);
  if (!postsByCategory.includes(decodedSlug)) {
    notFound();
  }

  const { meta, content } = await getPostData(decodedCategory, decodedSlug);

  const headings: Heading[] = [];
  const prettyCodeOptions = {
    theme: 'one-light',
  };

  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [rehypeExtractHeadings, headings],
        [rehypePrettyCode, prettyCodeOptions],
      ],
    },
  });

  return (
    <div className="relative py-[2rem] prose max-w-3xl px-4 sm:px-6 xl:max-w-4xl 2xl:max-w-5xl xl:px-0">
      <ScrollStatusBar />
      <PostHeader meta={meta} category={category} />
      <TableOfContents headings={headings} />
      <MDXRenderer content={mdxContent} />
    </div>
  );
};

export default PostPage;
