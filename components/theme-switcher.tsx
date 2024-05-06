"use client";
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import Moon from "./ui/icons/moon";
import Sun from "./ui/icons/sun";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const isDarkTheme = resolvedTheme === "dark";
  const onToggle = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <div className="flex items-center gap-2">
      <Label className="cursor-pointer" htmlFor="theme">
        <Sun />
      </Label>
      <Switch id="theme" checked={isDarkTheme} onClick={onToggle} />
      <Label className="cursor-pointer" htmlFor="theme">
        <Moon />
      </Label>
    </div>
  );
}
