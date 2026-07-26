"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu, X } from "lucide-react"
import { m, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/ui/language-selector"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const NAV_LINKS = [
  { name: "About Us", href: "/about-us" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog & News", href: "/blog-news" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact-us" },
]

const EXPLORE_MORE_LINKS = [
  { name: "FAQs", href: "/faqs" },
  { name: "Downloads (our work)", href: "/downloads" },
  { name: "Blogs", href: "/blogs" },
  { name: "News", href: "/news" },
  { name: "Tenders", href: "/tenders" },
]

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)


  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
        <m.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={cn(
            "pointer-events-auto w-full max-w-[1400px] flex items-center justify-between gap-4 rounded-full transition duration-500 whitespace-nowrap",
            scrolled 
              ? "bg-white/40 dark:bg-slate-900/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/40 dark:border-white/10 h-14 px-6" 
              : "bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl shadow-lg border border-white/40 dark:border-white/10 h-16 px-6 md:px-8"
          )}
        >
          <Link href="/" className="flex items-center gap-2 lg:gap-4 group shrink-0">
            <div className={cn(
              "relative rounded-full overflow-hidden bg-white dark:bg-slate-800 shadow-md flex items-center justify-center group-hover:shadow-lg transition duration-300 group-hover:scale-105 border border-black/5 dark:border-white/5 z-10",
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
            <span className="font-bold text-lg md:text-xl text-navy dark:text-slate-100 tracking-tight group-hover:text-saffron transition-colors">
              INDIANEERS<span className="text-saffron">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-2 xl:px-3 py-2 group whitespace-nowrap"
                >
                  <span className={cn(
                    "relative z-10 text-sm font-semibold transition-colors duration-300",
                    isActive ? "text-navy dark:text-saffron" : "text-navy/70 dark:text-slate-400 group-hover:text-navy dark:group-hover:text-slate-200"
                  )}>
                    {link.name}
                  </span>
                  {isActive && (
                    <m.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-saffron/10 rounded-full border border-saffron/20"
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100" />
                </Link>
              )
            })}

            {/* More Dropdown */}
            <div 
              className="relative px-2 xl:px-3 py-2 group whitespace-nowrap"
              onMouseEnter={() => setIsMoreDropdownOpen(true)}
              onMouseLeave={() => setIsMoreDropdownOpen(false)}
            >
              <button type="button" className="relative z-10 text-sm font-semibold text-navy/70 dark:text-slate-400 group-hover:text-navy dark:group-hover:text-slate-200 transition-colors duration-300 flex items-center gap-1 outline-none">
                More 
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-300",
                  isMoreDropdownOpen && "rotate-180"
                )} />
              </button>
              <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100 pointer-events-none" />
              
              <AnimatePresence>
                {isMoreDropdownOpen && (
                  <m.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white/85 dark:bg-slate-900/85 backdrop-blur-3xl rounded-3xl shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-black/5 dark:border-white/10 z-50 p-3"
                  >
                    <div className="px-3 py-2">
                      <p className="text-xs font-bold text-navy/50 dark:text-slate-500 uppercase tracking-wider mb-3">Explore More</p>
                      <div className="flex flex-col gap-1">
                        {EXPLORE_MORE_LINKS.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2.5 text-sm font-semibold text-navy/80 dark:text-slate-300 hover:text-saffron dark:hover:text-saffron hover:bg-black/5 dark:hover:bg-white/10 rounded-xl transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggle className="hidden sm:inline-flex" />
            <LanguageSelector className="hidden sm:block" placement="bottom" />
            
            <Link href="/what-we-do" className="hidden sm:block">
              <Button className="rounded-full bg-navy text-white hover:bg-saffron hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg shadow-navy/20 hover:shadow-saffron/20 px-4 h-9 text-xs sm:px-5 sm:h-10 sm:text-sm">
                Explore
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-full bg-navy/5 dark:bg-white/5 text-navy dark:text-slate-300 hover:bg-navy/10 dark:hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </m.header>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy/40 dark:bg-black/60 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
              onKeyDown={(e) => { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') setIsMobileMenuOpen(false) }}
              role="button"
              tabIndex={0}
              aria-label="Close mobile menu backdrop"
            />
            <m.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-[85%] max-w-sm bg-white/70 dark:bg-slate-900/90 backdrop-blur-3xl h-full shadow-2xl flex flex-col p-8 rounded-l-3xl border-l border-white/40 dark:border-white/10 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-bold text-xl text-navy dark:text-slate-100 tracking-tight">INDIANEERS<span className="text-saffron">.</span></span>
                <button 
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="p-2 bg-black/5 dark:bg-white/10 rounded-full text-navy dark:text-slate-300 hover:bg-saffron hover:text-white dark:hover:bg-saffron transition-colors"
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
                        "text-lg font-semibold px-4 py-3 rounded-2xl transition",
                        isActive 
                          ? "bg-saffron/10 text-saffron border border-saffron/20" 
                          : "text-navy/80 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-navy dark:hover:text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/10">
                <p className="text-sm font-bold text-navy/50 dark:text-slate-500 uppercase tracking-wider mb-4 px-4">Explore More</p>
                <div className="flex flex-col gap-2">
                  {EXPLORE_MORE_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base font-medium px-4 py-3 rounded-2xl text-navy/80 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/10 hover:text-navy dark:hover:text-slate-200 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/10 mb-8 flex flex-col gap-4">
                <div className="flex justify-between items-center px-4">
                  <span className="text-sm font-bold text-navy/50 dark:text-slate-500 uppercase tracking-wider">Theme</span>
                  <ThemeToggle />
                </div>
                <div className="flex justify-between items-center px-4">
                  <span className="text-sm font-bold text-navy/50 dark:text-slate-500 uppercase tracking-wider">Language</span>
                  <LanguageSelector placement="top" />
                </div>
                
                <Link href="/what-we-do" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full rounded-2xl bg-navy text-white hover:bg-saffron py-6 text-lg shadow-lg">
                    Explore
                  </Button>
                </Link>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
