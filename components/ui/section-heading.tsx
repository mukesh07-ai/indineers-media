import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string
  title: string
  subtext?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  subtext,
  align = "center",
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
        <span className="text-saffron font-semibold tracking-wider uppercase text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
        {title}
      </h2>
      {subtext && (
        <p className="text-lg text-ink/70 max-w-2xl mt-2">
          {subtext}
        </p>
      )}
    </div>
  )
}
