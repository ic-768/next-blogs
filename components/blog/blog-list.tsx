import { fetchBlogs, fetchBlogsById } from "@/lib/data";

import AnimatedBlogs from "./animated-blogs";

export default async function BlogList({
  id,
  showCount = false,
}: {
  id?: string;
  showCount?: boolean;
}) {
  const blogs = await (id ? fetchBlogsById(id) : fetchBlogs());
  const numBlogs = blogs.length;

  return (
    <>
      {showCount && <h3>{numBlogs} posts</h3>}
      <AnimatedBlogs blogs={blogs} />
    </>
  );
}
