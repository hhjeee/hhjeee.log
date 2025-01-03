import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostData, PostMeta } from '@/types/post';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export function getAllPosts(): PostData[] {
  const categories = fs.readdirSync(postsDirectory);

  const posts = categories.flatMap((category) => {
    const categoryPath = path.join(postsDirectory, category);
    const fileNames = fs.readdirSync(categoryPath);

    return fileNames.map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const filePath = path.join(categoryPath, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        category,
        ...data,
      } as PostData;
    });
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostData(
  category: string,
  slug: string
): { meta: PostMeta; content: string } {
  const decodedCategory = decodeURIComponent(category);
  const filePath = path.join(postsDirectory, decodedCategory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    meta: data as PostMeta,
    content,
  };
}
