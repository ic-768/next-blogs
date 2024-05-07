"use client";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { Textarea } from "@/components/ui/textarea";

export default function FormContent() {
  const { pending } = useFormStatus();

  return pending ? (
    <Loader />
  ) : (
    <>
      <div className="flex w-full flex-col items-center gap-4">
        <h2 className="text-nowrap">My new blog, titled:</h2>
        <Textarea name="title" className="w-full text-3xl font-semibold" />
      </div>

      <Textarea name="content" rows={20} />
      <Button className="self-center">Submit</Button>
    </>
  );
}
