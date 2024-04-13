import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@/lib/definitions";

export default function BlogCard({ title, author, date, image }: Blog) {
  return (
    <Card className="size-[27rem]">
      <CardHeader className="h-full">
        <Image
          src={image}
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="!mt-auto flex flex-col">
          <span className="text-base">{author}</span>
          <span>{date.toDateString()}</span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
