import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import logoImage from "../public/logo.jpg";
import { Providers } from "./providers";

import "./globals.css";

import ThemeSwitcher from "@/components/theme-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <Providers>
          <header className="sticky top-0 z-10 flex justify-between gap-4 border-b border-zinc-300/25 bg-white/75 p-6 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-900/75 dark:text-white">
            <Link href="/dashboard">
              <Image
                className="w-20 rounded-md dark:outline dark:outline-1 dark:outline-white"
                src={logoImage}
                alt="logo"
              />
            </Link>
            <ThemeSwitcher />
          </header>
        </Providers>
        <div className="flex min-h-full flex-col p-8">{children}</div>
      </body>
    </html>
  );
}
