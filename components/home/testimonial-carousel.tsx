"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const TESTIMONIALS = [
  { 
    name: "Rahul Sharma", 
    course: "Drone Pilot Training", 
    text: "The training was hands-on and extremely professional. Within a month of completing the course, I secured a job as a licensed drone operator." 
  },
  { 
    name: "Priya Singh", 
    course: "Retail Management", 
    text: "Indianeers Media gave me the confidence to step into the corporate world. Their placement support is unmatched and they truly care about our success." 
  },
  { 
    name: "Amit Kumar", 
    course: "Solar PV Installer", 
    text: "Learning about renewable energy was a game changer for me. The practical labs and expert trainers made complex topics easy to understand." 
  },
  { 
    name: "Sneha Patel", 
    course: "Healthcare Assistant", 
    text: "The compassionate training approach and real-world hospital exposure prepared me perfectly for my role. I am proud to serve my community now." 
  },
  { 
    name: "Vikram Joshi", 
    course: "IT Support Specialist", 
    text: "I had zero technical background before joining. Now, I manage the IT infrastructure for a mid-sized firm thanks to their excellent curriculum." 
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-play
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered])

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden relative min-h-[400px] sm:min-h-[300px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <Card className="bg-white shadow-xl shadow-navy/5 border-black/5 hover:-translate-y-1 transition-transform duration-300 mx-4 sm:mx-12">
              <CardContent className="p-8 md:p-12 relative">
                {/* Decorative Quote Icon */}
                <div className="absolute top-8 left-8 text-saffron/20 hidden md:block">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.411 14.996C16.593 14.509 16.577 13.979 16.368 13.504C16.159 13.029 15.776 12.651 15.289 12.459L12.41 11.326L14.017 3H19.983L18.376 11.326L21.255 12.459C21.742 12.651 22.125 13.029 22.334 13.504C22.543 13.979 22.559 14.509 22.377 14.996L19.983 21H14.017ZM5.017 21L7.411 14.996C7.593 14.509 7.577 13.979 7.368 13.504C7.159 13.029 6.776 12.651 6.289 12.459L3.41 11.326L5.017 3H10.983L9.376 11.326L12.255 12.459C12.742 12.651 13.125 13.029 13.334 13.504C13.543 13.979 13.559 14.509 13.377 14.996L10.983 21H5.017Z" />
                  </svg>
                </div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-navy to-navy/80 flex items-center justify-center font-bold text-white text-3xl shadow-lg shrink-0">
                    {TESTIMONIALS[currentIndex].name.charAt(0)}
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-ink/80 text-xl md:text-2xl mb-8 italic leading-relaxed font-medium">
                      "{TESTIMONIALS[currentIndex].text}"
                    </p>
                    
                    <div>
                      <h4 className="font-bold text-navy text-lg">{TESTIMONIALS[currentIndex].name}</h4>
                      <p className="text-sm font-semibold text-saffron uppercase tracking-wider">{TESTIMONIALS[currentIndex].course}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button 
          onClick={prev}
          className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-saffron" : "w-2 bg-black/10 hover:bg-black/20"
              }`}
            />
          ))}
        </div>

        <button 
          onClick={next}
          className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
