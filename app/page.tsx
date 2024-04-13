import BlogCard from "@/components/ui/blog-card";
import { fetchBlogs } from "@/lib/data";

export default async function Home() {
  const data = await fetchBlogs();

  return (
    <div className="flex flex-wrap gap-2">
      {data.map((d, i) => (
        <BlogCard key={d.title + i} {...d} />
      ))}
    </div>
  );
}
