"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { forwardRef, ButtonHTMLAttributes } from "react";

interface ModeToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ModeToggle = forwardRef<HTMLButtonElement, ModeToggleProps>(
  function ModeToggle({ className, onClick, ...props }, ref) {
    const { theme, setTheme } = useTheme();

    return (
      <Button
        variant="ghost"
        type="button"
        size="icon"
        className="px-2"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
        <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
      </Button>
    );
  }
);

ModeToggle.displayName = "ModeToggle";
