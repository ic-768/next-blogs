"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Moon from "./ui/icons/moon";
import Sun from "./ui/icons/sun";
import { Switch } from "./ui/switch";

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex items-center gap-2" suppressHydrationWarning>
      <Sun />
      <Switch
        checked={resolvedTheme === "dark"}
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      />
      <Moon />
    </div>
  );
}
