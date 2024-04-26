"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@/lib/definitions";

const MotionLink = motion(Link);

export default function BlogCard({ title, author, date, image, id }: Blog) {
  const arrow = {
    initial: { scale: 1, transition: { duration: 0.3 } },
    animate: { scale: 1.12, transition: { duration: 0.3 } },
  };

  const underline = {
    initial: {
      scaleX: 0,
      transformOrigin: "left",
      transition: { duration: 0.3 },
    },
    animate: {
      scaleX: 1,
      transformOrigin: "left",
      transition: { duration: 0.3 },
    },
  };

  return (
    <Card className="w-[18rem]">
      <CardHeader className="flex h-full flex-col gap-2">
        <MotionLink
          href={id}
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
          <span className="flex gap-1">
            <span>by</span>
            <MotionLink
              initial="initial"
              animate="initial"
              whileHover="animate"
              className="flex flex-col self-start"
              href={`author/${author.id}`}
            >
              {author.name}
              <motion.span
                variants={underline}
                className="h-[1px] bg-black dark:bg-white"
              ></motion.span>
            </MotionLink>
          </span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
