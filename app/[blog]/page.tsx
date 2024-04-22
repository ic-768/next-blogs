import { Fragment } from "react";
import Image from "next/image";

import { TracingBeam } from "@/components/ui/tracking-beam";
import { fetchBlog } from "@/lib/data";

export default async function Blog({ params }: { params: { blog: string } }) {
  const id = params.blog;
  const blog = await fetchBlog(id);

  if (!blog) return;

  const { author, title, date, image, sections } = blog;

  return (
    <TracingBeam>
      <div className="flex flex-col gap-2">
        <h1 className="Tracing-wider text-4xl font-bold">{title}</h1>
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
        {sections.map((s, i) => (
          <Fragment key={i}>
            <h3>{s.title}</h3>
            <span>{s.content}</span>
          </Fragment>
        ))}
      </div>
    </TracingBeam>
  );
}
