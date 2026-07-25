"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
  title?: string
}

export function Modal({ isOpen, onClose, children, className, title }: ModalProps) {
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative z-50 w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] border dark:border-white/10",
          "animate-in fade-in zoom-in-95 duration-200",
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-ink/50 dark:text-slate-400 transition-colors hover:bg-black/5 dark:hover:bg-white/10 hover:text-ink dark:hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-saffron"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        {title && <h2 className="mb-4 text-xl font-bold text-navy dark:text-slate-100">{title}</h2>}
        
        <div className="mt-2">
          {children}
        </div>
      </div>
    </div>
  )
}
