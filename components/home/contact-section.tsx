"use client"

import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

export function ContactSection() {
  return (
    <section className="py-10 bg-offwhite dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      
      <Container className="relative z-10">
        <SectionHeading 
          eyebrow="Get In Touch"
          title={<>Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-500">Us</span></>}
          className="mb-12 text-center"
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Office 1 */}
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-full bg-navy/10 dark:bg-white/10 flex items-center justify-center mb-4 group-hover:bg-saffron/20 transition-colors">
                  <FaMapMarkerAlt className="text-navy dark:text-white group-hover:text-saffron transition-colors" />
                </div>
                <h4 className="font-bold text-navy dark:text-white mb-2">Registered Office</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  A-494, Shahpura, Bhopal<br/>
                  Madhya Pradesh 462012
                </p>
              </div>

              {/* Office 2 */}
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-full bg-navy/10 dark:bg-white/10 flex items-center justify-center mb-4 group-hover:bg-saffron/20 transition-colors">
                  <FaMapMarkerAlt className="text-navy dark:text-white group-hover:text-saffron transition-colors" />
                </div>
                <h4 className="font-bold text-navy dark:text-white mb-2">Head Office</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  E-4/230, Arera Colony, Bhopal<br/>
                  Madhya Pradesh 462016
                </p>
              </div>
              
              {/* Email & Phone */}
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow group sm:col-span-2 flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FaEnvelope className="text-saffron" />
                    <h4 className="font-bold text-navy dark:text-white">Email Us</h4>
                  </div>
                  <a href="mailto:info@indianeersmedia.com" className="text-sm text-slate-600 dark:text-slate-400 hover:text-navy dark:hover:text-white transition-colors">info@indianeersmedia.com</a>
                </div>
                <div className="w-px bg-black/10 dark:bg-white/10 hidden sm:block" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FaPhoneAlt className="text-saffron" />
                    <h4 className="font-bold text-navy dark:text-white">Call Us</h4>
                  </div>
                  <a href="tel:+917551234567" className="text-sm text-slate-600 dark:text-slate-400 hover:text-navy dark:hover:text-white transition-colors">+91 755 123 4567</a>
                </div>
              </div>
            </div>

            {/* Map iframe */}
            <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/10 group relative">
              <div className="absolute inset-0 bg-navy/20 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.273187217997!2d77.43323017608226!3d23.23077397902847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4269e8555555%3A0x6b6960d754b52b21!2sArera%20Colony%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-black/5 dark:border-white/10">
            <h3 className="text-2xl font-bold mb-2 text-navy dark:text-white">Send us a message</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">We would love to hear from you. Fill out the form below and we'll get back to you shortly.</p>
            
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Form submitted!") }}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                  <input type="text" required className="w-full bg-slate-50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                  <input type="text" required className="w-full bg-slate-50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                <input type="email" required className="w-full bg-slate-50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <select className="w-full bg-slate-50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all text-slate-800 dark:text-white appearance-none cursor-pointer">
                  <option value="general">General Inquiry</option>
                  <option value="training">Training Programs</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="careers">Careers</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea rows={4} required className="w-full bg-slate-50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <Button type="submit" className="w-full h-14 bg-saffron hover:bg-saffron/90 text-white rounded-xl font-semibold shadow-lg shadow-saffron/20 transition-all hover:scale-[1.02] text-lg mt-2">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
