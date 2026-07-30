"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { m, AnimatePresence } from "framer-motion"
import { ArrowRight, PlayCircle, ChevronLeft, ChevronRight, Award, Users, BookOpen } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    tagline: "Empowering India's Workforce",
    title: "Building a Skilled",
    highlight: "Future for India",
    description: "Indianeers Media is a Government of India-affiliated vocational skill development company active since 2012, transforming lives through quality training and placement.",
    primaryCTA: "Explore Programs",
    secondaryCTA: "Watch Our Story",
    badgeIcon: Award,
    badgeText: "Govt. Affiliated",
    badgeDesc: "Recognized partner for key government skill initiatives."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    tagline: "Bridging the Skill Gap",
    title: "Expert Training for",
    highlight: "Modern Industries",
    description: "Our comprehensive programs in drone technology, food safety, and retail management prepare the youth for high-demand careers across the nation.",
    primaryCTA: "View Our Courses",
    secondaryCTA: "Partner With Us",
    badgeIcon: BookOpen,
    badgeText: "Industry Ready",
    badgeDesc: "Curriculums designed to meet modern workforce demands."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    tagline: "Women Empowerment",
    title: "Driving Inclusive",
    highlight: "Economic Growth",
    description: "We are committed to empowering rural and urban women through specialized skill development programs, creating a more inclusive and robust workforce.",
    primaryCTA: "See Our Impact",
    secondaryCTA: "Support Our Mission",
    badgeIcon: Users,
    badgeText: "Inclusive Growth",
    badgeDesc: "Creating equal opportunities for all sections of society."
  }
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-advance
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isHovered])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section 
      className="relative -mt-24 pt-28 lg:pt-32 pb-10 lg:pb-12 overflow-hidden bg-navy dark:bg-slate-950 text-white min-h-[80vh] md:min-h-0 flex flex-col justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <m.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Enhanced overlay gradient for better text readability and premium feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 dark:from-black/90 via-black/50 dark:via-black/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-black/90 via-transparent to-transparent z-10" />
          <Image 
            src={slides[current].image}
            alt={slides[current].title}
            fill
            sizes="100vw"
            className="object-cover"
            priority={current === 0}
          />
        </m.div>
      </AnimatePresence>

      <Container className="relative z-20 w-full pb-0">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 xl:col-span-7">
            <AnimatePresence mode="wait">
              <m.div 
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                transition={{ duration: 0.6, delay: 0.1, staggerChildren: 0.1 }}
                className="max-w-2xl"
              >
                {/* Floating Badge */}
                <m.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-md text-white font-medium text-xs mb-3 border border-white/20 shadow-xl"
                >
                  <span className="flex h-2 w-2 rounded-full bg-saffron animate-pulse" />
                  {slides[current].tagline}
                </m.div>
                
                <m.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-3 leading-tight text-white"
                >
                  {slides[current].title} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-yellow-400">
                    {slides[current].highlight}
                  </span>
                </m.h1>

                <m.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-base md:text-lg text-white/80 mb-6 max-w-xl leading-relaxed font-light"
                >
                  {slides[current].description}
                </m.p>

                <m.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button size="lg" className="bg-saffron hover:bg-saffron/90 text-white border-0 shadow-[0_8px_32px_rgba(255,160,0,0.3)] text-base h-12 px-8 group overflow-hidden relative">
                    <span className="relative z-10 flex items-center font-semibold tracking-wide">
                      {slides[current].primaryCTA} 
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 h-full w-0 bg-white/20 group-hover:w-full transition-[width] duration-300 ease-out" />
                  </Button>
                  <Button size="lg" variant="glass-dark" className="text-base h-12 px-8 group font-semibold tracking-wide">
                    <PlayCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform text-saffron" /> 
                    {slides[current].secondaryCTA}
                  </Button>
                </m.div>
              </m.div>
            </AnimatePresence>
          </div>

          {/* Interactive Right Side - Floating Cards */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5 relative h-[320px]">
             <AnimatePresence mode="wait">
               <m.div
                  key={`badge-${current}`}
                  initial={{ opacity: 0, scale: 0.8, x: 40 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -40 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2"
               >
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl w-72 transform hover:-translate-y-2 hover:shadow-saffron/20 transition duration-300 group">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-saffron to-yellow-500 flex items-center justify-center mb-4 shadow-lg shadow-saffron/30 group-hover:scale-110 transition-transform">
                      {React.createElement(slides[current].badgeIcon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{slides[current].badgeText}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{slides[current].badgeDesc}</p>
                    
                    <div className="mt-8 flex items-center justify-between text-saffron text-sm font-semibold uppercase tracking-wider group-hover:text-yellow-400 transition-colors cursor-pointer">
                      <span>Learn More</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
               </m.div>
             </AnimatePresence>

             {/* Decorative element behind the card */}
             <m.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 bg-saffron/20 rounded-full blur-3xl -z-10"
             />
          </div>
        </div>
      </Container>

      {/* Advanced Navigation Controls */}
      <div className="relative z-30 w-full pt-4 pb-2">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Progress Bars */}
            <div className="flex gap-4 flex-1 max-w-lg">
              {slides.map((slide, idx) => (
                <button
                  type="button"
                  key={slide.id}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden cursor-pointer relative group"
                  onClick={() => setCurrent(idx)}
                >
                  {current === idx && (
                    <m.div
                      className="absolute inset-y-0 left-0 bg-saffron origin-left w-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ 
                        duration: isHovered ? 0 : 6, 
                        ease: "linear" 
                      }}
                    />
                  )}
                  {current > idx && <div className="absolute inset-0 bg-saffron" />}
                  
                  {/* Hover effect for inactive bars */}
                  <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3 hidden md:flex">
              <button 
                type="button"
                aria-label="Previous slide"
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-navy transition hover:scale-110 backdrop-blur-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                type="button"
                aria-label="Next slide"
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-navy transition hover:scale-110 backdrop-blur-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
