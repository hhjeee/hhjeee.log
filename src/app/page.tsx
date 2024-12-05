import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { PostData } from "@/types/post";

const MainPage = () => {
  const posts: PostData[] = getAllPosts();

  return (
    <div className="prose mx-auto p-4">
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/posts/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{new Date(post.date).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
