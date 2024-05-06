"use client";

import { FormEventHandler, useRef } from "react";

import { signIn } from "next-auth/react";

import WithUnderline from "@/components/ui/with-underline";

export default function SignInForm() {
  const eRef = useRef<HTMLInputElement>(null);
  const pRef = useRef<HTMLInputElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    signIn("credentials", {
      email: eRef.current?.value,
      password: pRef.current?.value,
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <label>
        Email
        <input ref={eRef} name="email" type="email" />
      </label>
      <label>
        Password
        <input ref={pRef} name="password" type="password" />
      </label>
      <WithUnderline>
        <button>Sign In</button>
      </WithUnderline>
    </form>
  );
}
