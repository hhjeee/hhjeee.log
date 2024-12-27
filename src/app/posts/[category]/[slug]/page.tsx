import MDXRenderer from '@/components/MDXRenderer';
import PostHeader from '@/components/postDetail/postHeader';
import TableOfContents from '@/components/TableOfContents';
import { getPostData } from '@/lib/posts';
import rehypeExtractHeadings, { Heading } from '@/lib/rehypeExtractHeading';
import { serialize } from 'next-mdx-remote/serialize';

const PostPage = async ({
  params,
}: {
  params: { category: string; slug: string };
}) => {
  const { category, slug } = await params;
  const { meta, content } = getPostData(category, slug);

  const headings: Heading[] = [];
  const mdxContent = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [[rehypeExtractHeadings, headings]],
    },
  });

  return (
    <div className="relative my-[2rem] prose mx-auto">
      <PostHeader meta={meta} />
      <MDXRenderer content={mdxContent} />
      <TableOfContents headings={headings} />
    </div>
  );
};

export default PostPage;
