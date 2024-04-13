"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@/lib/definitions";

export default function BlogCard({ title, author, date, image }: Blog) {
  const arrow = {
    initial: { scale: 1, transition: { duration: 0.3 } },
    animate: { scale: 1.12, transition: { duration: 0.3 } },
  };

  return (
    <motion.div initial="initial" animate="initial" whileHover="animate">
      <Card className="h-[29rem] w-[27rem]">
        <CardHeader className="h-full">
          <div className="overflow-hidden">
            <motion.div variants={arrow}>
              <Image
                src={image}
                width={350}
                height={350}
                alt="Picture of the author"
              />
            </motion.div>
          </div>
          <CardTitle className="line-clamp-2 text-xl">{title}</CardTitle>
          <CardDescription className="!mt-auto flex flex-col">
            <span className="text-base">{author}</span>
            <span>{date.toDateString()}</span>
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
