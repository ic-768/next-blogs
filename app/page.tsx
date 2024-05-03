import { Suspense } from "react";

import BlogList from "@/components/blog-list/blog-list";
import BlogSkeletonList from "@/components/skeleton/blog-skeleton-list";

export default async function Home() {
  return (
    <Suspense fallback={<BlogSkeletonList className="justify-center" />}>
      <BlogList />
    </Suspense>
  );
}
