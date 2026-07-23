"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
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

  return (
    <>
      <header className="sticky top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/5 py-4 shadow-sm">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image 
              src="/logo.png" 
              alt="Indianeers Media Logo" 
              width={40} 
              height={40} 
              className="object-contain"
            />
            <span className="font-bold text-lg text-navy tracking-tight group-hover:text-saffron transition-colors">
              INDIANEERS MEDIA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-saffron",
                  pathname === link.href ? "text-saffron" : "text-navy"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link href="/what-we-do">
              <Button>Explore Programs</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-xl flex flex-col p-6 animate-in slide-in-from-left">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-lg text-navy tracking-tight">INDIANEERS</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-ink/70 hover:text-navy">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-saffron",
                    pathname === link.href ? "text-saffron" : "text-navy"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <Link href="/what-we-do" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Explore Programs</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
