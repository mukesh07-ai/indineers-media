"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className={`rounded-full relative w-10 h-10 ${className}`}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 opacity-100 transition dark:-rotate-90 dark:scale-95 dark:opacity-0 text-navy" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-95 opacity-0 transition dark:rotate-0 dark:scale-100 dark:opacity-100 text-slate-100" />
    </Button>
  )
}
