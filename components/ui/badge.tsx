import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-saffron text-white hover:bg-saffron/80": variant === "default",
          "border-transparent bg-navy text-white hover:bg-navy/80": variant === "secondary",
          "text-ink": variant === "outline",
          "border-transparent bg-indiaGreen text-white hover:bg-indiaGreen/80": variant === "success",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
