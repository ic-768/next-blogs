"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

export default function TextCard({
  title,
  children,
  className,
  right,
  middle,
  image,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  right?: boolean;
  middle?: boolean;
  image: StaticImageData;
}) {
  const classes = cn(
    "flex flex-col gap-4 p-8 bg-gray-700 rounded-xl w-1/2 text-white ring-indigo-500 ring-1",
    right && "ml-auto",
    middle && "self-center",
    className,
  );

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Image className="w-16" src={image} alt="" />
      <h2 className="font-bold">{title}</h2>
      <p>{children}</p>
    </motion.div>
  );
}
