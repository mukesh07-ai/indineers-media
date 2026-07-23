"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    state: string
    img: string
    category: string
    desc: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isActive, setIsActive] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Handle clicking outside to close the card on mobile
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsActive(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside, { passive: true })
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [])

  return (
    <div 
      ref={cardRef}
      className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer focus:outline-none"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
      data-active={isActive}
    >
      <Image 
        src={project.img} 
        alt={project.title} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-110 group-data-[active=true]:scale-110" 
      />
      
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent group-hover:bg-navy/80 group-data-[active=true]:bg-navy/80 transition-colors duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-sm group-data-[active=true]:backdrop-blur-sm opacity-100" />
      
      {/* Default State (Fades out on hover or active) */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 group-hover:opacity-0 group-data-[active=true]:opacity-0 group-hover:translate-y-8 group-data-[active=true]:translate-y-8">
        <span className="w-max py-1 px-3 rounded-full bg-saffron text-white text-xs font-bold uppercase tracking-wider mb-3">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold mb-1 text-white">{project.title}</h3>
        <p className="text-white/70 flex items-center text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-saffron mr-2" /> {project.state}
        </p>
      </div>

      {/* Hover/Active Reveal State (Fades in on hover or active) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100 group-hover:translate-y-0 group-data-[active=true]:translate-y-0">
        <h3 className="text-3xl font-bold mb-4 text-saffron">{project.title}</h3>
        <p className="text-white/90 text-lg leading-relaxed mb-8">{project.desc}</p>
        <div className="flex items-center gap-2 text-white font-semibold group/btn">
          Read Full Case Study <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  )
}
