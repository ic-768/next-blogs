import Image from "next/image";

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
    <div className="flex flex-col items-center">
      <Image
        className="self-center pb-4"
        src={image}
        height={180}
        width={250}
        alt="Picture of the author"
      />
      <h2 className="font-bold">{name}</h2>
      <span className="pb-8 text-gray-700">{subtitle}</span>
      <p className="text-xl text-gray-700">{description}</p>
    </div>
  );
}
