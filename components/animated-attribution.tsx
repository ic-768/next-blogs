"use client";

import { motion } from "framer-motion";

import MotionLink from "./motion-link";

interface AnimatedAttributionProps {
  href: string;
  name: string;
}
export default function AnimatedAttribution({
  href,
  name,
}: AnimatedAttributionProps) {
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
    <span className="flex gap-1">
      <span>by</span>
      <MotionLink
        initial="initial"
        animate="initial"
        whileHover="animate"
        className="flex flex-col self-start"
        href={href}
      >
        {name}
        <motion.span
          variants={underline}
          className="h-[1px] bg-black dark:bg-white"
        ></motion.span>
      </MotionLink>
    </span>
  );
}
