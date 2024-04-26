"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import AnimatedAttribution from "./animated-attribution";
import MotionLink from "./motion-link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@/lib/definitions";

export default function BlogCard({ title, author, date, image, id }: Blog) {
  const arrow = {
    initial: { scale: 1, transition: { duration: 0.3 } },
    animate: { scale: 1.12, transition: { duration: 0.3 } },
  };

  return (
    <Card className="w-[18rem]">
      <CardHeader className="flex h-full flex-col gap-2">
        <MotionLink
          href={`/blog/${id}`}
          initial="initial"
          animate="initial"
          whileHover="animate"
        >
          <div className="overflow-hidden">
            <motion.div variants={arrow}>
              <Image
                className="rounded"
                src={image}
                height={250}
                width={350}
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
