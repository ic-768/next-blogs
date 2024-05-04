import Image from "next/image";
import Link from "next/link";

import logoImage from "../public/logo.jpg";
import SparkleSection from "./_components/sparkle-section";
import TextSection from "./_components/text-section";

import Header from "@/components/ui/header";

export default function LandingPage() {
  return (
    <>
      <Header>
        <Link href="/dashboard">
          <Image
            className="w-20 rounded-md dark:outline dark:outline-1 dark:outline-white"
            src={logoImage}
            alt="logo"
          />
        </Link>
      </Header>
      <div className="flex min-h-full flex-col p-8"></div>
      <div className="flex flex-col">
        <SparkleSection />
        <TextSection />
      </div>
    </>
  );
}
