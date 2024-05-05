"use client";

import { useRef } from "react";

import { signIn } from "next-auth/react";

export default function SignInForm() {
  const eRef = useRef<HTMLInputElement>(null);
  const pRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <label>
        Email
        <input ref={eRef} name="email" type="email" />
      </label>
      <label>
        Password
        <input ref={pRef} name="password" type="password" />
      </label>
      <button
        onClick={() =>
          signIn("credentials", {
            email: eRef.current?.value,
            password: pRef.current?.value,
          })
        }
      >
        Sign In
      </button>
    </>
  );
}
