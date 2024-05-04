import { SignInButton } from "./_components/sign-in-button";
import SparkleSection from "./_components/sparkle-section";
import TextSection from "./_components/text-section";

import Header from "@/components/ui/header";

export default function LandingPage() {
  return (
    <>
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
