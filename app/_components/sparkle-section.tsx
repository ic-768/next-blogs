"use client";

import { useTheme } from "next-themes";

import { SparklesCore } from "@/components/sparkles";

export default function SparkleSection() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex h-[20rem] w-full flex-col items-center justify-center overflow-hidden rounded md:h-[40rem]">
      <h1 className="relative text-center text-3xl font-bold dark:text-white md:text-7xl lg:text-9xl">
        NextBlogs
      </h1>
      <div className="relative mt-4 h-40 w-[40rem] sm:w-4/5">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        <SparklesCore
          key={resolvedTheme}
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor={resolvedTheme === "dark" ? "FFFFFF" : "000000"}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 h-full w-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}
