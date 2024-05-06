"use client";

import { ReactNode } from "react";

import { motion } from "framer-motion";

import MotionLink from "../motion-link";

interface WithUnderlineProps {
  text?: string;
  href?: string;
  children?: ReactNode;
}

export default function WithUnderline({
  href = "",
  text,
  children,
}: WithUnderlineProps) {
  const props = {
    initial: "initial",
    animate: "initial",
    whileHover: "animate",
    className: "flex flex-col self-start",
    href,
  };

  const content = (
    <>
      {text || children}
      <motion.span
        variants={{
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
        }}
        className="h-[1px] bg-black dark:bg-white"
      />
    </>
  );

  const WrapperComponent = href ? MotionLink : motion.div;

  return <WrapperComponent {...props}>{content}</WrapperComponent>;
}
