"use client"

import * as React from "react"
import Link from "next/link"
import { m, Variants } from "framer-motion"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { InteractiveIndiaMap } from "@/components/ui/interactive-india-map"
import { LanguageSelector } from "@/components/ui/language-selector"

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  }
}

const LinkItem = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <Link href={href} className="group flex items-center gap-2 text-slate-600 dark:text-white/70 hover:text-navy dark:hover:text-white transition-colors duration-300 w-fit">
      <span className="h-px w-0 bg-saffron transition-[width] duration-300 group-hover:w-4" />
      <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
    </Link>
  </li>
)

export function Footer() {
  return (
    <footer className="relative bg-slate-50 dark:bg-[#050B14] text-navy dark:text-white pt-12 pb-4 overflow-hidden border-t border-black/10 dark:border-white/10">
      {/* Background Premium Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-saffron/20 dark:bg-saffron/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/3 pointer-events-none" />
      
      {/* Subtle Grid overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Newsletter Bar */}
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-12 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 via-blue-500/10 to-saffron/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
          <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-xl rounded-2xl px-6 py-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-saffron to-transparent opacity-50" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-navy to-navy/70 dark:from-white dark:to-white/70">Stay Updated</h3>
              <p className="text-slate-600 dark:text-white/60 mt-1 text-sm md:text-base">Join our newsletter for the latest on our skilling initiatives.</p>
            </div>
            <form className="flex w-full md:w-auto relative" action={() => alert("Mock Submit")}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input 
                id="newsletter-email"
                type="email" 
                placeholder="Enter your email address" 
                required
                className="w-full md:w-[320px] bg-white dark:bg-black/20 backdrop-blur-md border border-black/10 dark:border-white/10 text-slate-800 dark:text-white pl-5 pr-[110px] py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron/50 transition placeholder:text-slate-400 dark:placeholder:text-white/40 shadow-inner text-sm"
              />
              <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 bg-saffron hover:bg-saffron/90 text-white px-4 rounded-full font-semibold transition hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md shadow-saffron/20 text-sm">
                Subscribe <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>
        </m.div>

        {/* Main Footer Content */}
        <m.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-20"
        >
          {/* Links Section */}
          <div className="w-full lg:w-[75%] grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            
            <m.div variants={fadeUp}>
              <h4 className="font-bold text-lg mb-6 text-navy dark:text-white tracking-wider flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-saffron shadow-[0_0_10px_rgba(255,153,51,0.8)]" />
                ABOUT
              </h4>
              <ul className="space-y-4">
                <LinkItem href="/about-us">Our Story</LinkItem>
                <LinkItem href="/about-us#mission">Mission & Vision</LinkItem>
                <LinkItem href="/about-us#leadership">Leadership Team</LinkItem>
                <LinkItem href="/about-us#impact">Social Impact</LinkItem>
                <LinkItem href="/sustainability">Sustainability</LinkItem>
                <LinkItem href="/careers">Careers</LinkItem>
                <LinkItem href="/contact">Contact Us</LinkItem>
              </ul>
            </m.div>
            
            <m.div variants={fadeUp}>
              <h4 className="font-bold text-lg mb-6 text-navy dark:text-white tracking-wider flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                WHAT WE DO
              </h4>
              <ul className="space-y-4">
                <LinkItem href="/what-we-do#skill-development">Skill Development</LinkItem>
                <LinkItem href="/what-we-do#corporate">Corporate Training</LinkItem>
                <LinkItem href="/what-we-do#industrial">Industrial Safety</LinkItem>
                <LinkItem href="/what-we-do#institutional">Institutional Tie-ups</LinkItem>
                <LinkItem href="/what-we-do#elearning">E-Learning Platforms</LinkItem>
                <LinkItem href="/what-we-do#assessment">Assessments & Certs</LinkItem>
                <LinkItem href="/what-we-do#placement">Placement Support</LinkItem>
              </ul>
            </m.div>

            <m.div variants={fadeUp}>
              <h4 className="font-bold text-lg mb-6 text-navy dark:text-white tracking-wider flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                PROJECTS
              </h4>
              <ul className="space-y-4">
                <LinkItem href="/projects#government">Government Skilling</LinkItem>
                <LinkItem href="/projects#solar">Solar & Renewable</LinkItem>
                <LinkItem href="/projects#agriculture">Agriculture Initiatives</LinkItem>
                <LinkItem href="/projects#tech">IT & Tech Training</LinkItem>
                <LinkItem href="/projects#women">Women Empowerment</LinkItem>
                <LinkItem href="/projects#rural">Rural Development</LinkItem>
                <li>
                  <Link href="/projects" className="group flex items-center gap-2 text-saffron hover:text-saffron/80 font-medium transition-colors mt-2">
                    View All Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </li>
              </ul>
            </m.div>

            <m.div variants={fadeUp}>
              <h4 className="font-bold text-lg mb-6 text-navy dark:text-white tracking-wider flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                REACH US
              </h4>
              <address className="not-italic text-slate-600 dark:text-white/70 space-y-6">
                <div className="group">
                  <div className="flex items-center gap-2 font-semibold text-navy dark:text-white mb-2">
                    <FaMapMarkerAlt className="text-saffron group-hover:animate-bounce" /> Registered Office
                  </div>
                  <p className="pl-6 text-sm leading-relaxed">A-494, Shahpura, Bhopal<br/>Madhya Pradesh 462012</p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-2 font-semibold text-navy dark:text-white mb-2">
                    <FaMapMarkerAlt className="text-saffron group-hover:animate-bounce" /> Head Office
                  </div>
                  <p className="pl-6 text-sm leading-relaxed">E-4/230, Arera Colony, Bhopal<br/>Madhya Pradesh 462016</p>
                </div>
              </address>
            </m.div>
          </div>

          {/* Map Section */}
          <m.div variants={fadeUp} className="w-full lg:w-[25%] flex flex-col items-start lg:items-center xl:items-end">
            <div className="w-full max-w-[220px]">
              <h4 className="font-bold text-lg mb-6 text-navy dark:text-white tracking-wider flex items-center gap-3 w-full text-left">
                <span className="w-2 h-2 rounded-full bg-saffron shadow-[0_0_10px_rgba(255,153,51,0.8)]" />
                OUR REACH
              </h4>
              <div className="w-full transition-transform duration-500">
                <InteractiveIndiaMap variant="minimal" />
              </div>
            </div>
          </m.div>
        </m.div>

        {/* Bottom Bar */}
        <m.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col gap-6 relative"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
            <p className="text-slate-500 dark:text-white/50 text-sm font-medium text-center md:text-left flex-1">
              © {new Date().getFullYear()} Indianeers Media Pvt. Ltd. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 justify-center flex-1">
              <Link href="https://www.instagram.com/indianeersmedia/?hl=en" target="_blank" className="text-slate-400 dark:text-white/40 hover:text-saffron hover:-translate-y-1 transition duration-300">
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/indianeersmedia/?originalSubdomain=in" target="_blank" className="text-slate-400 dark:text-white/40 hover:text-blue-500 hover:-translate-y-1 transition duration-300">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="https://www.youtube.com/@indianeersmedia" target="_blank" className="text-slate-400 dark:text-white/40 hover:text-red-500 hover:-translate-y-1 transition duration-300">
                <FaYoutube className="w-5 h-5" />
              </Link>
              <Link href="https://www.facebook.com/indianeers" target="_blank" className="text-slate-400 dark:text-white/40 hover:text-blue-600 hover:-translate-y-1 transition duration-300">
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link href="https://x.com/Indianeers" target="_blank" className="text-slate-400 dark:text-white/40 hover:text-navy dark:hover:text-white hover:-translate-y-1 transition duration-300">
                <FaXTwitter className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm text-slate-500 dark:text-white/50 font-medium items-center flex-1 md:pr-20">
              <LanguageSelector placement="top" className="scale-90 origin-right" />
              <Link href="/privacy" className="hover:text-navy dark:hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-navy dark:hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

          <p className="text-slate-500 dark:text-white/50 text-xs font-medium text-center w-full mt-2 md:pr-20">
            Designed and Developed by <Link href="https://tricodx.com/" target="_blank" className="text-saffron hover:underline font-semibold hover:text-saffron/80 transition-colors">TricodX</Link>
          </p>
        </m.div>

      </div>
    </footer>
  )
}
