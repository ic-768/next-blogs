import { Suspense } from "react";

import Link from "next/link";

import BlogList from "@/components/blog/blog-list";
import BlogSkeletonList from "@/components/blog/skeleton/blog-skeleton-list";
import Pencil from "@/components/ui/icons/pencil";

export default async function Home() {
  return (
    <Suspense fallback={<BlogSkeletonList className="justify-center" />}>
      <Link
        href="/create"
        className="flex h-9 items-center gap-2 self-end rounded-md bg-zinc-900 px-4 py-2 text-sm text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
      >
        New Post <Pencil />
      </Link>
      <BlogList />
    </Suspense>
  );
}
