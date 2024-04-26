import BlogCard from "./blog-card";

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
      <ul className="flex flex-wrap gap-2">
        {blogs.map((d, i) => (
          <BlogCard key={d.title + i} {...d} />
        ))}
      </ul>
    </div>
  );
}
