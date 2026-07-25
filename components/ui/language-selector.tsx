"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"


const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी (Hindi)" },
  { code: "mr", name: "मराठी (Marathi)" },
  { code: "gu", name: "ગુજરાતી (Gujarati)" },
  { code: "bn", name: "বাংলা (Bengali)" },
  { code: "ta", name: "தமிழ் (Tamil)" },
  { code: "te", name: "తెలుగు (Telugu)" },
]

interface LanguageSelectorProps {
  className?: string
  placement?: "top" | "bottom"
}

export function LanguageSelector({ className, placement = "bottom" }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedLang, setSelectedLang] = React.useState(LANGUAGES[0])

  React.useEffect(() => {
    // Check if Google Translate cookie exists to set initial state
    const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
    if (match) {
      const val = match[2].split('/').pop();
      if (val) {
        const found = LANGUAGES.find(l => l.code === val);
        if (found) setSelectedLang(found);
      }
    }
  }, [])
  

  const dropdownRef = React.useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 outline-none group border",
          isOpen 
            ? "bg-white/20 dark:bg-slate-800/80 border-white/40 dark:border-white/10 shadow-inner backdrop-blur-md" 
            : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border-transparent hover:border-black/10 dark:hover:border-white/10"
        )}
        aria-label="Select Language"
      >
        <Globe className="w-4 h-4 text-navy/70 dark:text-slate-400 group-hover:text-navy dark:group-hover:text-slate-200 transition-colors" />
        <span className="text-sm font-semibold text-navy/80 dark:text-slate-300 group-hover:text-navy dark:group-hover:text-slate-100 hidden sm:inline-block">
          {selectedLang.code.toUpperCase()}
        </span>
        <ChevronDown className={cn(
          "w-3 h-3 text-navy/50 dark:text-slate-500 transition-transform duration-300",
          isOpen && "rotate-180 text-navy dark:text-slate-300"
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: placement === "bottom" ? -10 : 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: placement === "bottom" ? -10 : 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute right-0 z-50 w-48 p-2 bg-white/80 dark:bg-slate-900/90 backdrop-blur-3xl rounded-2xl shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/50 dark:border-white/10 overflow-hidden",
              placement === "bottom" ? "top-full mt-2" : "bottom-full mb-2"
            )}
          >
            <div className="flex flex-col gap-1 max-h-60 overflow-y-auto scrollbar-thin">
              {LANGUAGES.map((lang) => {
                const isSelected = selectedLang.code === lang.code
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang)
                      setIsOpen(false)
                      
                      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement
                      if (select) {
                        select.value = lang.code
                        select.dispatchEvent(new Event('change'))
                      }
                    }}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 text-sm font-medium rounded-xl transition-all w-full text-left",
                      isSelected
                        ? "bg-saffron/10 text-saffron"
                        : "text-navy/70 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-navy dark:hover:text-slate-100"
                    )}
                  >
                    <span>{lang.name}</span>
                    {isSelected && <Check className="w-4 h-4" />}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
