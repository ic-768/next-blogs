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

export default function BlogCard({ title, author, date, image }: Blog) {
  const arrow = {
    initial: { scale: 1, transition: { duration: 0.3 } },
    animate: { scale: 1.12, transition: { duration: 0.3 } },
  };

  return (
    <MotionLink
      href="blog"
      initial="initial"
      animate="initial"
      whileHover="animate"
    >
      <Card className="w-[18rem]">
        <CardHeader className="flex h-full flex-col gap-2">
          <div className="overflow-hidden">
            <motion.div variants={arrow}>
              <Image
                src={image}
                height={250}
                width={350}
                alt="Picture of the author"
              />
            </motion.div>
          </div>
          <CardTitle className="line-clamp-2 text-xl">{title}</CardTitle>
          <CardDescription className="!mt-auto flex flex-col">
            <span>{date.toDateString()}</span>
            <span>
              by <span className="underline">{author}</span>
            </span>
          </CardDescription>
        </CardHeader>
      </Card>
    </MotionLink>
  );
}
