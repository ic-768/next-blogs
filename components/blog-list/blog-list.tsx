import AnimatedBlogs from "./animated-blogs";

import { fetchBlogs, fetchBlogsById } from "@/lib/data";
import { Blog } from "@/lib/definitions";

export default async function BlogList({
  id,
  showCount = false,
}: {
  id?: string;
  showCount?: boolean;
}) {
  let blogs: Blog[];

  if (!id) {
    blogs = await fetchBlogs();
  } else {
    blogs = await fetchBlogsById(id);
  }

  const numBlogs = blogs.length;

  return (
    <div className="flex flex-col items-center">
      {showCount && <h3>{numBlogs} posts</h3>}
      <AnimatedBlogs blogs={blogs} />
    </div>
  );
}
