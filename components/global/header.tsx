"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { name: "About Us", href: "/about-us" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog & News", href: "/blog-news" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact-us" },
]

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={cn(
            "pointer-events-auto w-full max-w-6xl flex items-center justify-between rounded-full transition-all duration-500",
            scrolled 
              ? "bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/50 h-14 px-6" 
              : "bg-white/90 backdrop-blur-md shadow-lg border border-black/5 h-16 px-6 md:px-8"
          )}
        >
          <Link href="/" className="flex items-center gap-4 group">
            <div className={cn(
              "relative rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-black/5 z-10",
              scrolled ? "w-10 h-10" : "w-12 h-12"
            )}>
              <Image 
                src="/logo.png" 
                alt="Indianeers Media Logo" 
                width={40} 
                height={40} 
                className="object-contain p-1"
              />
            </div>
            <span className="font-bold text-lg md:text-xl text-navy tracking-tight group-hover:text-saffron transition-colors hidden sm:block">
              INDIANEERS<span className="text-saffron">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 group"
                >
                  <span className={cn(
                    "relative z-10 text-sm font-semibold transition-colors duration-300",
                    isActive ? "text-navy" : "text-navy/70 group-hover:text-navy"
                  )}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-saffron/10 rounded-full border border-saffron/20"
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100" />
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/what-we-do">
              <Button className="rounded-full bg-navy text-white hover:bg-saffron hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg shadow-navy/20 hover:shadow-saffron/20 px-6">
                Explore Programs
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2.5 rounded-full bg-navy/5 text-navy hover:bg-navy/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </motion.header>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col p-8 rounded-l-3xl border-l border-white/20"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-bold text-xl text-navy tracking-tight">INDIANEERS<span className="text-saffron">.</span></span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="p-2 bg-black/5 rounded-full text-navy hover:bg-saffron hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-lg font-semibold px-4 py-3 rounded-2xl transition-all",
                        isActive 
                          ? "bg-saffron/10 text-saffron border border-saffron/20" 
                          : "text-navy/80 hover:bg-black/5 hover:text-navy"
                      )}
                    >
                      {link.name}
                    </Link>
                  )
                })}
              </nav>
              <div className="mt-auto pt-8 border-t border-black/5">
                <Link href="/what-we-do" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full rounded-2xl bg-navy text-white hover:bg-saffron py-6 text-lg shadow-lg">
                    Explore Programs
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
