import { Suspense } from "react";

import BlogList from "@/components/blog-list";
import BlogSkeleton from "@/components/blog-skeleton";

export default async function Home() {
  const skeleton = [1, 2, 3, 4, 5].map((i) => <BlogSkeleton key={i} />);
  const fallback = <ul className="flex flex-wrap gap-2">{skeleton}</ul>;

  return (
    <Suspense fallback={fallback}>
      <BlogList />
    </Suspense>
  );
}
