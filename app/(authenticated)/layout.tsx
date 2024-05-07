import Image from "next/image";
import Link from "next/link";

import { SignOutButton } from "@/components/auth/sign-out-button";
import Header from "@/components/ui/header";

import logoImage from "../../public/logo.jpg";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header>
        <Link className="mr-auto" href="/">
          <Image
            className="w-16 rounded-md dark:outline dark:outline-1 dark:outline-white"
            src={logoImage}
            alt="logo"
          />
        </Link>
        <SignOutButton />
      </Header>
      <div className="flex min-h-full flex-col p-8">{children}</div>
    </>
  );
}
