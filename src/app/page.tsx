import { getPostData } from "@/lib/posts";
import { serialize } from "next-mdx-remote/serialize";
import MDXRenderer from "@/components/MDXRenderer";

const MainPage = async () => {
  const { meta, content } = getPostData("setup");
  const mdxContent = await serialize(content);

  return (
    <div className="prose mx-auto my-[2rem]">
      <h1>{meta.title}</h1>
      <p>{new Date(meta.date).toLocaleDateString()}</p>
      <MDXRenderer content={mdxContent} />
    </div>
  );
};

export default MainPage;
