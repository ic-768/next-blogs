"use client";

import { Sparkles } from "@/components/sparkles";

export default function SparkleSection() {
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

        <Sparkles />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 size-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}
