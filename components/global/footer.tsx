"use client"

import * as React from "react"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Bar */}
        <div className="mb-16 bg-white/5 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div>
            <h3 className="text-xl font-bold tracking-tight">Stay Updated</h3>
            <p className="text-white/70 mt-1">Get the latest news on our skilling initiatives.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => { e.preventDefault(); alert("Mock Submit") }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              className="bg-white/10 border-transparent text-white px-4 py-2 rounded-full min-w-[250px] focus:outline-none focus:ring-2 focus:ring-saffron placeholder:text-white/50"
            />
            <button type="submit" className="bg-saffron text-white px-6 py-2 rounded-full font-medium hover:bg-saffron/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-semibold text-lg mb-4 text-saffron tracking-wider uppercase text-sm">About</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/about-us" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/about-us#mission" className="hover:text-white transition-colors">Mission & Vision</Link></li>
              <li><Link href="/about-us#team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-saffron tracking-wider uppercase text-sm">What We Do</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/what-we-do" className="hover:text-white transition-colors">For Individuals</Link></li>
              <li><Link href="/what-we-do" className="hover:text-white transition-colors">For Corporates (CSR)</Link></li>
              <li><Link href="/what-we-do" className="hover:text-white transition-colors">For Industries</Link></li>
              <li><Link href="/what-we-do" className="hover:text-white transition-colors">For Institutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-saffron tracking-wider uppercase text-sm">Projects</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/projects" className="hover:text-white transition-colors">Government Skilling</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Solar & Renewable</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Agriculture</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">View All Projects</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-saffron tracking-wider uppercase text-sm">Reach Us</h4>
            <address className="not-italic text-white/70 space-y-4">
              <div>
                <p className="font-semibold text-white mb-1">Registered Office</p>
                <p>A-494, Shahpura, Bhopal<br/>Madhya Pradesh 462012</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Head Office</p>
                <p>E-4/230, Arera Colony, Bhopal<br/>Madhya Pradesh 462016</p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Indianeers Media Private Limited. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white/50 hover:text-white transition-colors"><FaInstagram className="w-5 h-5" /></Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors"><FaLinkedin className="w-5 h-5" /></Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors"><FaYoutube className="w-5 h-5" /></Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors"><FaFacebook className="w-5 h-5" /></Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors"><FaTwitter className="w-5 h-5" /></Link>
          </div>

          <div className="flex gap-4 text-sm text-white/50">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
