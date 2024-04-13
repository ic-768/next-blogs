import BlogCard from "./blog-card";

import { fetchBlogs } from "@/lib/data";

export default async function BlogList() {
  const data = await fetchBlogs();

  return data.map((d, i) => <BlogCard key={d.title + i} {...d} />);
}
