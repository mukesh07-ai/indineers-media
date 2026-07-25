"use client"

import React, { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import India from "@svg-maps/india"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// Mock data representing states where Indianeers Media has worked.
const STATE_DATA: Record<string, { name: string, projects: number, candidates: number, centers: number }> = {
  "mp": { name: "Madhya Pradesh", projects: 120, candidates: 50000, centers: 18 },
  "up": { name: "Uttar Pradesh", projects: 85, candidates: 35000, centers: 12 },
  "mh": { name: "Maharashtra", projects: 45, candidates: 20000, centers: 8 },
  "ka": { name: "Karnataka", projects: 30, candidates: 15000, centers: 5 },
  "dl": { name: "Delhi", projects: 60, candidates: 25000, centers: 10 },
  "rj": { name: "Rajasthan", projects: 40, candidates: 18000, centers: 6 },
  "gj": { name: "Gujarat", projects: 55, candidates: 22000, centers: 9 },
}

interface InteractiveIndiaMapProps {
  className?: string;
  variant?: 'default' | 'minimal';
}

export function InteractiveIndiaMap({ className, variant = 'default' }: InteractiveIndiaMapProps = {}) {
  const router = useRouter()
  const [activeState, setActiveState] = useState<string | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const mapRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
    
    // Handle click outside to close tooltip
    const handleClickOutside = (event: MouseEvent) => {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setActiveState(null)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleStateClick = (event: React.MouseEvent, id: string) => {
    if (STATE_DATA[id]) {
      if (activeState === id) {
        setActiveState(null)
      } else {
        setActiveState(id)
        if (mapRef.current) {
          const rect = mapRef.current.getBoundingClientRect()
          
          const POPUP_WIDTH = 230
          const POPUP_HEIGHT = 160 
          const OFFSET = 20
          
          const willOverflowRight = event.clientX + OFFSET + POPUP_WIDTH > window.innerWidth
          const willOverflowBottom = event.clientY + OFFSET + POPUP_HEIGHT > window.innerHeight
          
          let relativeX = event.clientX - rect.left
          let relativeY = event.clientY - rect.top
          
          if (willOverflowRight) relativeX -= (POPUP_WIDTH + OFFSET)
          else relativeX += OFFSET
          
          if (willOverflowBottom) relativeY -= (POPUP_HEIGHT + OFFSET)
          else relativeY += OFFSET

          setTooltipPos({ x: relativeX, y: relativeY })
        }
      }
    }
  }

  const handlePopupClick = (id: string) => {
    router.push(`/projects?state=${id}`)
  }

  // Sort states so the active state is rendered last (on top of others in SVG stacking order)
  const sortedLocations = useMemo(() => {
    return [...India.locations].sort((a, b) => {
      if (a.id === activeState) return 1
      if (b.id === activeState) return -1
      return 0
    })
  }, [activeState])

  return (
    <div 
      ref={mapRef}
      className={cn(
        "relative w-full mx-auto",
        variant === 'default' && "max-w-2xl p-4 md:p-8 bg-black/5 dark:bg-white/10 backdrop-blur-3xl rounded-3xl border border-black/10 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={India.viewBox}
        className="w-full h-auto drop-shadow-2xl overflow-visible"
        aria-label={India.label}
      >
        {sortedLocations.map((location: { id: string; name: string; path: string }) => {
          const hasData = !!STATE_DATA[location.id]
          const isActive = activeState === location.id

          return (
            <motion.path
              key={location.id}
              id={location.id}
              name={location.name}
              d={location.path}
              initial={false}
              animate={{
                scale: isActive ? 1.05 : 1,
                y: isActive ? -5 : 0,
                x: isActive ? -2 : 0,
                filter: isActive 
                  ? 'drop-shadow(5px 15px 15px rgba(0,0,0,0.5))' 
                  : 'drop-shadow(0px 0px 0px rgba(0,0,0,0))',
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              style={{
                transformOrigin: "center",
                transformBox: "fill-box"
              }}
              className={cn(
                "transition-colors duration-300 stroke-black/40 dark:stroke-white/60",
                isActive ? "fill-saffron stroke-navy dark:stroke-white stroke-[1.5]" : "",
                !isActive && hasData ? "fill-saffron/70 cursor-pointer hover:fill-saffron/90 hover:stroke-navy dark:hover:stroke-white stroke-[1]" : "",
                !hasData ? "fill-black/5 dark:fill-white/10 stroke-[0.5]" : ""
              )}
              onClick={(e) => handleStateClick(e, location.id)}
            />
          )
        })}
      </svg>

      {isClient && (
        <AnimatePresence>
          {activeState && STATE_DATA[activeState] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute z-[100] bg-white/90 dark:bg-[#0A192F]/70 backdrop-blur-xl border border-black/10 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-xl p-4 w-[230px] overflow-hidden flex flex-col pointer-events-auto"
              style={{ left: tooltipPos.x, top: tooltipPos.y }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/10 to-transparent pointer-events-none" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-3 border-b border-black/10 dark:border-white/10 pb-2">
                  <div className="w-2 h-2 rounded-full bg-saffron animate-pulse shadow-[0_0_8px_rgba(255,153,51,0.8)]" />
                  <h4 className="font-bold text-navy dark:text-white text-[13px] tracking-wider uppercase drop-shadow-sm">
                    {STATE_DATA[activeState].name}
                  </h4>
                </div>
                
                <div className="flex flex-col gap-2.5 mb-4 pointer-events-none">
                  <div className="flex justify-between items-center group">
                    <span className="text-ink/60 dark:text-white/60 text-[10px] font-semibold uppercase tracking-widest transition-colors">Projects</span>
                    <span className="font-bold text-navy dark:text-white text-xs bg-black/5 dark:bg-white/10 px-2 py-1 rounded border border-black/10 dark:border-white/10 shadow-inner">
                      {STATE_DATA[activeState].projects}
                    </span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-ink/60 dark:text-white/60 text-[10px] font-semibold uppercase tracking-widest transition-colors">Centers</span>
                    <span className="font-bold text-navy dark:text-white text-xs bg-black/5 dark:bg-white/10 px-2 py-1 rounded border border-black/10 dark:border-white/10 shadow-inner">
                      {STATE_DATA[activeState].centers}
                    </span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-ink/60 dark:text-white/60 text-[10px] font-semibold uppercase tracking-widest transition-colors">Trained</span>
                    <span className="font-bold text-saffron text-xs bg-saffron/10 px-2 py-1 rounded border border-saffron/20 shadow-[0_0_10px_rgba(255,153,51,0.1)]">
                      {STATE_DATA[activeState].candidates.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePopupClick(activeState)
                  }}
                  className="w-full bg-saffron hover:bg-saffron/90 transition-colors text-white text-[10px] font-bold uppercase tracking-widest py-2 rounded-lg cursor-pointer flex justify-center items-center gap-1 shadow-lg"
                >
                  View Projects <span>→</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}
