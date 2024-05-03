"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BlogCard from "../blog-card";

import { Blog } from "@/lib/definitions";

export default function AnimatedBlogs({ blogs }: { blogs: Blog[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.ul
      className="flex flex-wrap"
      transition={{ staggerChildren: 0.02 }}
      initial="initial"
      animate="animate"
    >
      <AnimatePresence>
        {blogs.map((b, i) => (
          <motion.div
            key={b.id}
            className="relative p-2"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === i && (
              <motion.div
                className="absolute inset-0 -z-10 block h-full w-full rounded-xl bg-slate-300 dark:bg-slate-500"
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
