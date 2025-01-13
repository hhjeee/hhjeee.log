import MDXRenderer from '@/components/postDetail/MDXRenderer';
import PostHeader from '@/components/postDetail/PostHeader';
import ScrollStatusBar from '@/components/postDetail/ScrollStatusBar';
import TableOfContents from '@/components/postDetail/TableOfContents';
import { getAllPosts, getPostData } from '@/lib/posts';
import rehypeExtractHeadings, { Heading } from '@/lib/rehypeExtractHeading';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

type postPageProps = Promise<{ category: string; slug: string }>;

const PostPage = async ({ params }: { params: postPageProps }) => {
  const { category, slug } = await params;
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
    <div className="relative py-[2rem] prose mx-auto">
      <ScrollStatusBar />
      <PostHeader meta={meta} category={category} />
      <TableOfContents headings={headings} />
      <MDXRenderer content={mdxContent} />
    </div>
  );
};

export default PostPage;
