import { fetchBlogs, fetchBlogsById } from "@/lib/data";
import { Blog } from "@/lib/definitions";

import AnimatedBlogs from "./animated-blogs";

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
    <>
      {showCount && <h3>{numBlogs} posts</h3>}
      <AnimatedBlogs blogs={blogs} />
    </>
  );
}
