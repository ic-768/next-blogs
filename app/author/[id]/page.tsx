import { Suspense } from "react";
import Image from "next/image";

import BlogList from "@/components/blog-list";
import BlogSkeleton from "@/components/blog-skeleton";
import { fetchAuthor } from "@/lib/data";

export default async function Author({
  params: { id },
}: {
  params: { id: string };
}) {
  const author = await fetchAuthor(id);

  if (!author) return;

  const { name, image, description, subtitle } = author;

  const skeleton = [1, 2, 3, 4, 5].map((i) => <BlogSkeleton key={i} />);
  const fallback = <ul className="flex flex-wrap gap-2 pt-8">{skeleton}</ul>;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Image
          className="self-center"
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
        <Suspense fallback={fallback}>
          <BlogList showCount id={id} />
        </Suspense>
      </div>
    </div>
  );
}
