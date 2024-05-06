import { signOut } from "@/auth";

import WithUnderline from "../ui/with-underline";

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <WithUnderline>
        <button type="submit">Sign Out</button>
      </WithUnderline>
    </form>
  );
}
