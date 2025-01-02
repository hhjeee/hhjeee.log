import MDXRenderer from '@/components/postDetail/MDXRenderer';
import PostHeader from '@/components/postDetail/PostHeader';
import TableOfContents from '@/components/postDetail/TableOfContents';
import ScrollStatusBar from '@/components/ScrollStatusBar';
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
    <div className="relative py-[2rem] prose mx-auto">
      <ScrollStatusBar />
      <PostHeader meta={meta} />
      <MDXRenderer content={mdxContent} />
      <TableOfContents headings={headings} />
    </div>
  );
};

export default PostPage;
