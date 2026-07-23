import * as React from "react"
import { cn } from "@/lib/utils"

interface AutoScrollMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
}

export function AutoScrollMarquee({
  children,
  direction = "left",
  speed = "normal",
  className,
  ...props
}: AutoScrollMarqueeProps) {
  const speedClass = {
    fast: "duration-[15s]",
    normal: "duration-[30s]",
    slow: "duration-[60s]",
  }[speed]

  return (
    <div className={cn("overflow-hidden flex w-full", className)} {...props}>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-8 py-4",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse",
          speedClass
        )}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
