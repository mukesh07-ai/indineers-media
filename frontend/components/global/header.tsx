"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  ChevronDown, Menu, X, Building2, BookOpen, Target, HeartHandshake, 
  Leaf, Users, Phone, Briefcase, GraduationCap, HardHat, Link as LinkIcon, 
  MonitorPlay, CheckCircle, Rocket, Landmark, Sun, Tractor, Laptop, 
  HelpingHand, Map, ArrowRight, MessageSquare, Newspaper, Download, 
  HelpCircle, Handshake 
} from "lucide-react"
import { m, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/ui/language-selector"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const NAV_LINKS = [
  { 
    name: "About Us", 
    href: "/about-us",
    dropdown: [
      { name: "Our Story", href: "/about-us", description: "Learn about our journey and the foundation of our initiatives.", icon: BookOpen },
      { name: "Mission & Vision", href: "/about-us#mission", description: "Discover our core goals for creating a better future.", icon: Target },
      { name: "Leadership Team", href: "/about-us#leadership", description: "Meet the minds behind Indianeers Media.", icon: Users },
      { name: "Social Impact", href: "/about-us#impact", description: "See how we are making a difference in society.", icon: HeartHandshake },
      { name: "Sustainability", href: "/sustainability", description: "Our commitment to sustainable and green practices.", icon: Leaf },
      { name: "Careers", href: "/careers", description: "Join our team and build a rewarding career with us.", icon: Briefcase },
      { name: "Contact Us", href: "/contact", description: "Get in touch with us for partnerships and inquiries.", icon: Phone },
    ]
  },
  { 
    name: "What We Do", 
    href: "/what-we-do",
    dropdown: [
      { name: "Skill Development", href: "/what-we-do#skill-development", description: "Empowering youth with industry-ready skills.", icon: GraduationCap },
      { name: "Corporate Training", href: "/what-we-do#corporate", description: "Customized training programs for organizations.", icon: Building2 },
      { name: "Industrial Safety", href: "/what-we-do#industrial", description: "Comprehensive safety training for industrial sectors.", icon: HardHat },
      { name: "Institutional Tie-ups", href: "/what-we-do#institutional", description: "Collaborations with educational institutions.", icon: LinkIcon },
      { name: "E-Learning Platforms", href: "/what-we-do#elearning", description: "Digital platforms for remote and accessible learning.", icon: MonitorPlay },
      { name: "Assessments & Certs", href: "/what-we-do#assessment", description: "Rigorous testing and recognized certifications.", icon: CheckCircle },
      { name: "Placement Support", href: "/what-we-do#placement", description: "Connecting trained candidates with top employers.", icon: Rocket },
    ]
  },
  { 
    name: "Projects", 
    href: "/projects",
    dropdown: [
      { name: "Government Skilling", href: "/projects#government", description: "Partnering with gov initiatives for mass skilling.", icon: Landmark },
      { name: "Solar & Renewable", href: "/projects#solar", description: "Training programs in renewable energy sectors.", icon: Sun },
      { name: "Agriculture Initiatives", href: "/projects#agriculture", description: "Empowering farmers with modern agricultural skills.", icon: Tractor },
      { name: "IT & Tech Training", href: "/projects#tech", description: "Advanced courses in software and IT infrastructure.", icon: Laptop },
      { name: "Women Empowerment", href: "/projects#women", description: "Specialized initiatives to uplift women in the workforce.", icon: HelpingHand },
      { name: "Rural Development", href: "/projects#rural", description: "Focused projects for sustainable rural growth.", icon: Map },
      { name: "View All Projects", href: "/projects", description: "Explore our complete portfolio of projects.", icon: ArrowRight },
    ]
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

const EXPLORE_MORE_LINKS = [
  { name: "Testimonials", href: "/testimonials", description: "Hear success stories from our partners and students.", icon: MessageSquare },
  { name: "Media Coverage", href: "/media", description: "Our latest press releases and news features.", icon: Newspaper },
  { name: "Downloads", href: "/downloads", description: "Access brochures, reports, and other resources.", icon: Download },
  { name: "FAQs", href: "/faqs", description: "Find answers to frequently asked questions.", icon: HelpCircle },
  { name: "Partner With Us", href: "/contact", description: "Collaborate with us to scale social impact.", icon: Handshake },
]

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [mobileDropdowns, setMobileDropdowns] = React.useState<Record<string, boolean>>({})
  const [scrolled, setScrolled] = React.useState(false)

  const toggleMobileDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault()
    setMobileDropdowns(prev => ({ ...prev, [name]: !prev[name] }))
  }


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
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-navy dark:text-slate-100 tracking-tight group-hover:text-saffron transition-colors leading-none">
                INDIANEERS<span className="text-saffron">.</span>
              </span>
              <span className="text-[10px] md:text-xs font-semibold text-navy/60 dark:text-slate-400 tracking-wider uppercase mt-0.5 md:mt-1 group-hover:text-saffron/80 transition-colors">
                Skilling India's Future
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              const hasDropdown = !!link.dropdown
              const isDropdownOpen = activeDropdown === link.name

              return (
                <div
                  key={link.name}
                  className="relative px-2 xl:px-3 py-2 group whitespace-nowrap"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <Link href={link.href} className="relative z-10 flex items-center gap-1 group outline-none">
                    <span className={cn(
                      "text-sm font-semibold transition-colors duration-300",
                      isActive ? "text-navy dark:text-saffron" : "text-navy/70 dark:text-slate-400 group-hover:text-navy dark:group-hover:text-slate-200"
                    )}>
                      {link.name}
                    </span>
                    {hasDropdown && (
                      <ChevronDown className={cn(
                        "w-3.5 h-3.5 transition-transform duration-300",
                        isDropdownOpen ? "rotate-180" : "",
                        isActive ? "text-navy dark:text-saffron" : "text-navy/70 dark:text-slate-400 group-hover:text-navy dark:group-hover:text-slate-200"
                      )} />
                    )}
                  </Link>
                  {isActive && (
                    <m.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-saffron/10 rounded-full border border-saffron/20"
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100 pointer-events-none" />

                  {/* Mega Menu Dropdown */}
                  {hasDropdown && (
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <m.div
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.98 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-3xl rounded-[1.5rem] shadow-2xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-black/5 dark:border-white/10 z-50 overflow-hidden whitespace-normal"
                        >
                          <div className="absolute inset-0 bg-gradient-to-b from-saffron/5 to-transparent pointer-events-none" />
                          <div className="p-5 md:p-6 relative">
                            <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5 dark:border-white/10">
                              <h3 className="text-sm font-bold text-navy dark:text-white uppercase tracking-wider">{link.name} Overview</h3>
                              <Link href={link.href} onClick={() => setActiveDropdown(null)} className="text-xs font-semibold text-saffron hover:text-saffron/80 transition-colors flex items-center gap-1 group/link">
                                View all <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                              {link.dropdown?.map((subItem) => {
                                const Icon = subItem.icon
                                return (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
                                  >
                                    <div className="mt-0.5 shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-navy/70 dark:text-slate-400 group-hover/item:bg-saffron group-hover/item:text-white group-hover/item:shadow-lg group-hover/item:shadow-saffron/20 transition-all duration-300">
                                      {Icon && <Icon className="w-4 h-4" />}
                                    </div>
                                    <div>
                                      <h4 className="text-sm font-bold text-navy dark:text-slate-200 group-hover/item:text-saffron transition-colors">{subItem.name}</h4>
                                      <p className="text-[11px] text-navy/60 dark:text-slate-400 mt-0.5 leading-snug">{subItem.description}</p>
                                    </div>
                                  </Link>
                                )
                              })}
                            </div>
                          </div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
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
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2 w-[580px] bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-3xl rounded-[1.5rem] shadow-2xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-black/5 dark:border-white/10 z-50 overflow-hidden whitespace-normal"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-saffron/5 to-transparent pointer-events-none" />
                    <div className="p-5 md:p-6 relative">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5 dark:border-white/10">
                        <h3 className="text-sm font-bold text-navy dark:text-white uppercase tracking-wider">Explore More</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {EXPLORE_MORE_LINKS.map((subItem) => {
                          const Icon = subItem.icon
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsMoreDropdownOpen(false)}
                              className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
                            >
                              <div className="mt-0.5 shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-navy/70 dark:text-slate-400 group-hover/item:bg-saffron group-hover/item:text-white group-hover/item:shadow-lg group-hover/item:shadow-saffron/20 transition-all duration-300">
                                {Icon && <Icon className="w-4 h-4" />}
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-navy dark:text-slate-200 group-hover/item:text-saffron transition-colors">{subItem.name}</h4>
                                <p className="text-[11px] text-navy/60 dark:text-slate-400 mt-0.5 leading-snug">{subItem.description}</p>
                              </div>
                            </Link>
                          )
                        })}
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
            
            <Link href="/contact" className="hidden sm:block">
              <Button className="rounded-full bg-navy text-white hover:bg-saffron hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg shadow-navy/20 hover:shadow-saffron/20 px-4 h-9 text-xs sm:px-5 sm:h-10 sm:text-sm">
                Partner With Us
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
              <div className="flex justify-between items-start mb-10">
                <div className="flex flex-col mt-1">
                  <span className="font-bold text-xl text-navy dark:text-slate-100 tracking-tight leading-none">INDIANEERS<span className="text-saffron">.</span></span>
                  <span className="text-xs font-semibold text-navy/60 dark:text-slate-400 tracking-wider uppercase mt-1">Skilling India's Future</span>
                </div>
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
                  const hasDropdown = !!link.dropdown
                  const isOpen = mobileDropdowns[link.name]

                  return (
                    <div key={link.name} className="flex flex-col">
                      <div className="flex items-center">
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex-1 text-lg font-semibold px-4 py-3 rounded-2xl transition",
                            isActive 
                              ? "bg-saffron/10 text-saffron border border-saffron/20" 
                              : "text-navy/80 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-navy dark:hover:text-white"
                          )}
                        >
                          {link.name}
                        </Link>
                        {hasDropdown && (
                          <button
                            type="button"
                            onClick={(e) => toggleMobileDropdown(link.name, e)}
                            className="p-3 mr-1 rounded-2xl text-navy/80 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10"
                          >
                            <ChevronDown className={cn(
                              "w-5 h-5 transition-transform duration-300",
                              isOpen && "rotate-180"
                            )} />
                          </button>
                        )}
                      </div>
                      
                      <AnimatePresence>
                        {hasDropdown && isOpen && (
                          <m.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-2 pr-2"
                          >
                            <div className="flex flex-col gap-1 py-2 border-l-2 border-black/5 dark:border-white/5 ml-4 mb-2">
                              {link.dropdown?.map((subItem) => {
                                const Icon = subItem.icon
                                return (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                                  >
                                    <div className="shrink-0 mt-0.5 flex items-center justify-center w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-800 text-navy/70 dark:text-slate-400 group-hover/item:bg-saffron group-hover/item:text-white transition-colors">
                                      {Icon && <Icon className="w-3.5 h-3.5" />}
                                    </div>
                                    <div>
                                      <h4 className="text-sm font-bold text-navy dark:text-slate-200 group-hover/item:text-saffron transition-colors">{subItem.name}</h4>
                                      <p className="text-[11px] text-navy/60 dark:text-slate-400 mt-0.5 leading-snug">{subItem.description}</p>
                                    </div>
                                  </Link>
                                )
                              })}
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/10">
                <p className="text-sm font-bold text-navy/50 dark:text-slate-500 uppercase tracking-wider mb-4 px-4">Explore More</p>
                <div className="flex flex-col gap-1">
                  {EXPLORE_MORE_LINKS.map((subItem) => {
                    const Icon = subItem.icon
                    return (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                      >
                        <div className="shrink-0 mt-0.5 flex items-center justify-center w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-800 text-navy/70 dark:text-slate-400 group-hover/item:bg-saffron group-hover/item:text-white transition-colors">
                          {Icon && <Icon className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-navy dark:text-slate-200 group-hover/item:text-saffron transition-colors">{subItem.name}</h4>
                          <p className="text-[11px] text-navy/60 dark:text-slate-400 mt-0.5 leading-snug">{subItem.description}</p>
                        </div>
                      </Link>
                    )
                  })}
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
                
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full rounded-2xl bg-navy text-white hover:bg-saffron py-6 text-lg shadow-lg">
                    Partner With Us
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
