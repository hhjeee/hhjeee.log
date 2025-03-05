import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

import { PostData, PostMeta } from '@/types/post';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export async function getAllPosts(): Promise<PostData[]> {
  const categories = await fs.readdir(postsDirectory);

  const posts = (
    await Promise.all(
      categories.map(async (category) => {
        const categoryPath = path.join(postsDirectory, category);
        const fileNames = await fs.readdir(categoryPath);

        return Promise.all(
          fileNames.map(async (fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const filePath = path.join(categoryPath, fileName);
            const fileContents = await fs.readFile(filePath, 'utf8');
            const { data } = matter(fileContents);

            return {
              slug,
              category,
              ...data,
            } as PostData;
          })
        );
      })
    )
  ).flat();

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostData(
  category: string,
  slug: string
): Promise<{ meta: PostMeta; content: string }> {
  const decodedCategory = decodeURIComponent(category);
  const filePath = path.join(postsDirectory, decodedCategory, `${slug}.mdx`);
  const fileContents = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    meta: data as PostMeta,
    content,
  };
}

export async function getSiteMapPostList() {
  const postList = await getAllPosts();
  const baseUrl = 'https://hhjeee-log.vercel.app';

  const sitemapPostList = postList.map(({ slug, category, date }) => ({
    lastModified: new Date(date).toISOString(),
    url: `${baseUrl}/${category}/${slug}`,
  }));

  return sitemapPostList;
}
