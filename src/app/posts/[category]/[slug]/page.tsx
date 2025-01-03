import MDXRenderer from '@/components/postDetail/MDXRenderer';
import PostHeader from '@/components/postDetail/PostHeader';
import SideTableOfContents from '@/components/postDetail/SideTableOfContents';
import TopTableOfContents from '@/components/postDetail/TopTableOfContents';
import ScrollStatusBar from '@/components/postDetail/ScrollStatusBar';
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
      <PostHeader meta={meta} category={category} />
      <TopTableOfContents headings={headings} />
      <SideTableOfContents headings={headings} />
      <MDXRenderer content={mdxContent} />
    </div>
  );
};

export default PostPage;
