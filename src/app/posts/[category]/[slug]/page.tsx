import MDXRenderer from '@/components/MDXRenderer';
import { getPostData } from '@/lib/posts';
import dayjs from 'dayjs';
import { serialize } from 'next-mdx-remote/serialize';

const PostPage = async ({
  params,
}: {
  params: { category: string; slug: string };
}) => {
  const { meta, content } = getPostData(params.category, params.slug);
  const mdxContent = await serialize(content);

  return (
    <div className="prose mx-auto my-[2rem]">
      <h1>{meta.title}</h1>
      <p className="font-medium m-0">
        {dayjs(meta.date).format('YYYY년 MM월 DD일')}
      </p>
      <hr className="my-[1rem]" />
      <MDXRenderer content={mdxContent} />
    </div>
  );
};

export default PostPage;
