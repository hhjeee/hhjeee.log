import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/posts/blog");

export function getPostData(filename: string) {
  const filePath = path.join(postsDirectory, `${filename}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    meta: data,
    content,
  };
}
