"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";
import Sun from "./ui/icons/sun";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(true);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline">
        <Sun />
      </Button>
    );
  }

  console.log(resolvedTheme);
  if (resolvedTheme === "dark") {
    return (
      <Button onClick={() => setTheme("light")} variant="outline">
        <Sun />
      </Button>
    );
  } else {
    return (
      <Button onClick={() => setTheme("dark")} variant="outline">
        light
      </Button>
    );
  }
}
