import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData, PostMeta } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getAllPosts(): PostData[] {
  const categories = fs.readdirSync(postsDirectory);

  const posts =  categories.flatMap((category) => {
    const categoryPath = path.join(postsDirectory, category);
    const fileNames = fs.readdirSync(categoryPath);

    return fileNames.map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, ""); // 확장자 제거
      const filePath = path.join(categoryPath, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      // `slug` 속성이 중복되지 않도록 명시적으로 지정
      return {
        slug: slug,
        title: data.title,
        date: data.date,
        desc: data.desc,
        image: data.image,
        category
      } as PostData;
    });
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return posts;
}

export function getPostData(slug: string): { meta: PostMeta; content: string } {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: data as PostMeta,
    content,
  };
}