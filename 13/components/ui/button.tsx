import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "glass" | "glass-dark"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-saffron text-white hover:bg-saffron/90 shadow-md shadow-saffron/20": variant === "primary",
            "border border-navy dark:border-slate-300 text-navy dark:text-slate-300 bg-transparent hover:bg-navy/5 dark:hover:bg-slate-800": variant === "secondary",
            "hover:bg-accent hover:text-accent-foreground text-navy dark:text-slate-300": variant === "ghost",
            "bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/40 dark:border-white/10 text-navy dark:text-slate-100 hover:bg-white/70 dark:hover:bg-slate-700/50 shadow-sm": variant === "glass",
            "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-sm": variant === "glass-dark",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-full px-3": size === "sm",
            "h-11 rounded-full px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
