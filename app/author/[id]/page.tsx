import Image from "next/image";

import { fetchAuthor } from "@/lib/data";

export default async function Author({
  params: { id },
}: {
  params: { id: string };
}) {
  const author = await fetchAuthor(id);

  if (!author) return;

  const { name, image } = author;

  return (
    <span>
      {name}
      <Image
        className="self-center"
        src={image}
        height={250}
        width={350}
        alt="Picture of the author"
      />
    </span>
  );
}
