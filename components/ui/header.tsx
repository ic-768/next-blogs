import { ReactNode } from "react";

import ThemeSwitcher from "../theme-switcher";

export default function Header({ children }: { children?: ReactNode }) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-end gap-8 border-b border-zinc-300/25 bg-white/75 p-6 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-900/75 dark:text-white">
      {children}
      <ThemeSwitcher />
    </header>
  );
}
