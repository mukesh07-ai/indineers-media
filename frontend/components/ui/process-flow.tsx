import * as React from "react"
import { cn } from "@/lib/utils"

interface ProcessStep {
  title: string;
}

interface ProcessFlowProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: ProcessStep[];
}

export function ProcessFlow({ steps, className, ...props }: ProcessFlowProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      {/* Connecting line desktop */}
      <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gray-200 dark:bg-slate-700"></div>
      {/* Connecting line mobile */}
      <div className="md:hidden absolute top-0 left-6 bottom-0 w-[2px] bg-gray-200 dark:bg-slate-700"></div>

      <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 relative z-10">
        {steps.map((step, i) => (
          <div key={i} className="flex md:flex-col items-center md:items-center relative w-full md:w-32 group">
            {/* Number Badge */}
            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 flex items-center justify-center text-xl md:text-2xl font-bold text-navy dark:text-slate-300 group-hover:border-saffron group-hover:bg-saffron group-hover:text-white transition-all shadow-sm z-10 relative md:mb-6 mr-6 md:mr-0">
              {i + 1}
            </div>
            
            {/* Label */}
            <div className="text-left md:text-center w-full">
              <h5 className="font-semibold text-ink dark:text-slate-200 text-sm md:text-base leading-snug">{step.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
