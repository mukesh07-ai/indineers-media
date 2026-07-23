"use client"

import * as React from "react"
import { animate, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export interface StatCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  end: number
  start?: number
  duration?: number
  prefix?: string
  suffix?: string
  label?: string
}

export function StatCounter({
  end,
  start = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  label,
  className,
  ...props
}: StatCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inViewRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(inViewRef, { once: true, margin: "-100px" })

  React.useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(start, end, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.round(value).toLocaleString()}${suffix}`
          }
        },
      })
      return () => controls.stop()
    }
  }, [isInView, start, end, duration, prefix, suffix])

  return (
    <div ref={inViewRef} className={cn("flex flex-col items-center text-center", className)} {...props}>
      <span ref={ref} className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
        {prefix}{start.toLocaleString()}{suffix}
      </span>
      {label && <span className="mt-2 text-sm font-medium text-ink/70 uppercase tracking-widest">{label}</span>}
    </div>
  )
}
