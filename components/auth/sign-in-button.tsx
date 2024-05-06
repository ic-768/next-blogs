"use client";

import { signIn } from "next-auth/react";

import WithUnderline from "../ui/with-underline";

export function SignInButton() {
  return (
    <WithUnderline>
      <button onClick={() => signIn()}>Sign in</button>
    </WithUnderline>
  );
}
