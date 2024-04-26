import Image from "next/image";

import { fetchAuthor, fetchPosts } from "@/lib/data";

export default async function Author({
  params: { id },
}: {
  params: { id: string };
}) {
  const author = await fetchAuthor(id);

  const posts = await fetchPosts(id);
  const numPosts = posts.length;

  if (!author) return;

  const { name, image, description, subtitle } = author;

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
      <h2>{numPosts} posts</h2>
    </div>
  );
}
