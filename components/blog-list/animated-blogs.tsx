"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BlogCard from "../blog-card";

import { Blog } from "@/lib/definitions";

export default function AnimatedBlogs({ blogs }: { blogs: Blog[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ul className="flex flex-wrap">
      <AnimatePresence>
        {blogs.map((b, i) => (
          <div
            key={b.id}
            className="relative p-2"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === i && (
              <motion.div
                className="absolute inset-0 -z-10 block h-full w-full rounded-xl bg-neutral-200 dark:bg-slate-800/[0.8]"
                layoutId="hoverOutline"
              />
            )}
            <BlogCard {...b} />
          </div>
        ))}
      </AnimatePresence>
    </ul>
  );
}
