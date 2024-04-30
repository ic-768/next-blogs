import { Suspense } from "react";

import BlogList from "@/components/blog-list/blog-list";
import BlogSkeleton from "@/components/blog-skeleton";

export default async function Home() {
  const skeleton = [1, 2, 3].map((i) => <BlogSkeleton key={i} />);
  const fallback = (
    <ul className="flex flex-wrap justify-center gap-4">{skeleton}</ul>
  );

  return (
    <Suspense fallback={fallback}>
      <BlogList />
    </Suspense>
  );
}
