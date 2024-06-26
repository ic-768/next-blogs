"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Blog } from "@/lib/definitions";

import BlogCard from "./blog-card";

export default function AnimatedBlogs({ blogs }: { blogs: Blog[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const onMouseEnter = (i: number) => () => setHoveredIndex(i);
  const onMouseLeave = () => setHoveredIndex(null);

  return (
    <motion.ul
      layout
      className="flex flex-wrap justify-center"
      transition={{ staggerChildren: 0.1 }}
      initial="initial"
      animate="animate"
    >
      <AnimatePresence>
        {blogs.map((b, i) => (
          <motion.div
            key={b.id}
            className="relative p-2"
            onMouseEnter={onMouseEnter(i)}
            onMouseLeave={onMouseLeave}
          >
            {hoveredIndex === i && (
              <motion.div
                className="absolute inset-0 -z-10 block size-full rounded-xl bg-slate-300 dark:bg-slate-500"
                layoutId="hoverOutline"
              />
            )}

            <motion.div
              variants={{
                initial: { opacity: 0, scale: 0.5 },
                animate: { opacity: 1, scale: 1 },
              }}
            >
              <BlogCard {...b} />
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
