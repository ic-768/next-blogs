import { Suspense } from "react";
import Image from "next/image";

import BlogList from "@/components/blog-list/blog-list";
import BlogSkeletonList from "@/components/skeleton/blog-skeleton-list";
import { fetchAuthor } from "@/lib/data";

export default async function Author({
  params: { id },
}: {
  params: { id: string };
}) {
  const author = await fetchAuthor(id);

  if (!author) return;

  const { name, image, description, subtitle } = author;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Image
          className="self-center rounded-md"
          src={image}
          height={180}
          width={250}
          alt="Picture of the author"
        />
        <h2 className="font-bold">{name}</h2>
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-zinc-700 dark:text-zinc-400">{subtitle}</span>
        <p className="text-xl text-zinc-700 dark:text-zinc-400">
          {description}
        </p>
      </div>
      <div className="pt-6">
        <Suspense fallback={<BlogSkeletonList className="pt-8" />}>
          <BlogList showCount id={id} />
        </Suspense>
      </div>
    </div>
  );
}
