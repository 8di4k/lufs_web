"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

/**
 * Theme toggle button with smooth transition
 * Switches between light and dark mode
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "h-10 w-10 rounded-full",
          "bg-dark-card border border-border",
          "hover:bg-dark-lighter",
          className
        )}
        disabled
      >
        <SunIcon className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "h-10 w-10 rounded-full",
        "bg-dark-card border border-border",
        "hover:bg-dark-lighter hover:border-neon-green",
        "transition-all duration-300",
        "hover:shadow-glow-green",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 text-neon-green transition-all duration-300 rotate-0 scale-100" />
      ) : (
        <MoonIcon className="h-5 w-5 text-neon-purple transition-all duration-300 rotate-0 scale-100" />
      )}
    </Button>
  );
}

