import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData, PostMeta } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "src/posts/blog");

export function getAllPosts(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, ""); // 확장자 제거
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    // `slug` 속성이 중복되지 않도록 명시적으로 지정
    return {
      slug: slug,
      title: data.title,
      date: data.date,
      desc: data.desc,
    } as PostData;
  });
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
