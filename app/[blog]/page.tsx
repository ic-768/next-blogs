import Image from "next/image";

import { fetchBlog } from "@/lib/data";

export default async function Blog({ params }: { params: { blog: string } }) {
  const id = params.blog;
  const blog = await fetchBlog(id);

  if (!blog) return;

  const { author, title, date, image, content } = blog;

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold tracking-wider">{title}</h1>
      <div className="flex flex-col text-lg">
        <span>{date.toDateString()}</span>
        <span>
          by <span className="underline">{author}</span>
        </span>
      </div>
      <Image
        className="self-center"
        src={image}
        height={250}
        width={350}
        alt="Picture of the author"
      />
      <span>{content}</span>
      <span>{content}</span>
      <span>{content}</span>
      <span>{content}</span>
      <span>{content}</span>
      <span>{content}</span>
      <span>{content}</span>
      <span>{content}</span>
      <span>{content}</span>
    </div>
  );
}
