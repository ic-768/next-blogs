"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@/lib/definitions";

import AnimatedAttribution from "../animated-attribution";
import MotionLink from "../motion-link";

export default function BlogCard({
  title,
  author,
  date,
  image,
  id,
  className,
}: Blog & {
  className?: string;
}) {
  const imageVariants = {
    initial: { scale: 1, transition: { duration: 0.3 } },
    animate: { scale: 1.12, transition: { duration: 0.3 } },
  };

  return (
    <Card className={className}>
      <CardHeader className="flex h-full min-h-[19rem] w-[14rem] flex-col gap-2 sm:min-h-[22rem] sm:w-[18rem]">
        <MotionLink
          className="flex flex-col gap-2"
          href={`/blog/${id}`}
          initial="initial"
          animate="initial"
          whileHover="animate"
        >
          <div className="overflow-hidden">
            <motion.div variants={imageVariants}>
              <Image
                className="h-44 w-full rounded sm:h-52"
                src={image}
                height={156}
                width={208}
                alt="Picture of the author"
              />
            </motion.div>
          </div>
          <CardTitle className="line-clamp-2 text-xl">{title}</CardTitle>
        </MotionLink>
        <CardDescription className="!mt-auto flex flex-col">
          <span>{date.toDateString()}</span>
          <AnimatedAttribution
            href={`/author/${author.id}`}
            name={author.name}
          />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
