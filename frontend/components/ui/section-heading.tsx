import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string
  title: React.ReactNode
  subtext?: string
  align?: "left" | "center"
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtext,
  align = "center",
  titleClassName,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "text-center items-center" : "text-left items-start",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 dark:bg-white/5 border border-navy/10 dark:border-white/10 shadow-sm mb-2">
          <span className="flex h-2 w-2 rounded-full bg-saffron animate-pulse" />
          <span className="text-sm font-semibold tracking-wide text-navy dark:text-slate-200 uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy dark:text-slate-100", titleClassName)}>
        {title}
      </h2>
      {subtext && (
        <p className="text-lg text-ink/70 dark:text-slate-300 max-w-2xl mt-2">
          {subtext}
        </p>
      )}
    </div>
  )
}
