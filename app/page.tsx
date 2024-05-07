import { SignInButton } from "@/components/auth/sign-in-button";
import Header from "@/components/ui/header";

import SparkleSection from "./_components/sparkle-section";
import TextSection from "./_components/text-section";

export default function LandingPage() {
  return (
    <>
      test
      <Header>
        <SignInButton />
      </Header>
      <SparkleSection />
      <div className="flex min-h-full flex-col p-8">
        <TextSection />
      </div>
    </>
  );
}
