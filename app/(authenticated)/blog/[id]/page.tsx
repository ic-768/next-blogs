import { Fragment } from "react";

import Image from "next/image";

import AnimatedAttribution from "@/components/animated-attribution";
import { TracingBeam } from "@/components/tracking-beam";
import { fetchBlog } from "@/lib/data";

export default async function Blog({ params }: { params: { id: string } }) {
  const id = params.id;
  const blog = await fetchBlog(id);

  console.log(blog);
  if (!blog) return;

  const { author, title, date, image, sections } = blog;

  return (
    <TracingBeam>
      <div className="flex flex-col gap-3">
        <h1 className="Tracing-wider text-4xl font-bold">{title}</h1>
        <div className="flex flex-col text-lg">
          <span>{date.toDateString()}</span>
          <AnimatedAttribution
            href={`/author/${author.id}`}
            name={author.name}
          />
        </div>
        <Image
          className="self-center"
          src={image}
          height={250}
          width={350}
          alt="Picture for the blog"
        />
        {sections.map((s, i) => (
          <Fragment key={i}>
            <h3>{s.title}</h3>
            <p>{s.content}</p>
          </Fragment>
        ))}
      </div>
    </TracingBeam>
  );
}
