"use client"

import { useState } from "react"
import { m, AnimatePresence } from "framer-motion"
import { Plus, MessageCircleQuestion } from "lucide-react"
import { Container } from "@/components/ui/container"
import Link from "next/link"

const faqs = [
  {
    question: "What types of skilling programs do you offer?",
    answer: "We offer a diverse range of programs including IT & ITES, Retail, Healthcare, Agriculture, Electronics, and specialized courses like Drone Pilot training. Our programs are designed for individuals, corporates, and institutions to meet evolving industry needs."
  },
  {
    question: "How do I enroll in a training program?",
    answer: "Enrollment is simple. You can visit any of our 50+ training centers across India, or apply online through our portal. Our counselors will guide you through the available courses and help you choose the best fit based on your background and career goals."
  },
  {
    question: "Do you provide placement assistance after course completion?",
    answer: "Yes! We have a dedicated placement cell that partners with leading industry players. We boast an 85%+ placement rate and organize regular job fairs and campus interviews to ensure our candidates find the right employment opportunities upon graduation."
  },
  {
    question: "Are your certifications recognized by the government?",
    answer: "Absolutely. We are a government-recognized training partner and execute programs under flagship schemes like PMKVY, DDU-GKY, and NULM. Our certificates are widely recognized by employers nationwide and carry significant weight in the job market."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-10 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Dynamic Background Elements for Premium Appeal */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-saffron/10 dark:bg-saffron/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 transform translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy/10 dark:bg-blue-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 transform -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      {/* High-end Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#fff_70%,transparent_100%)]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Context & Eye-Catching Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-navy/10 dark:border-white/10 shadow-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-saffron animate-pulse" />
                <span className="text-sm font-semibold tracking-wide text-navy dark:text-slate-200">Got Questions?</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy dark:text-white mb-6 leading-[1.15]">
                Clear answers for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-500">skilling journey.</span>
              </h2>
              
              <p className="text-lg text-ink/70 dark:text-slate-400 mb-8 leading-relaxed max-w-md">
                Everything you need to know about our programs, certifications, and how we help you build a brighter future.
              </p>

              <div className="flex items-center gap-6">
                <Link 
                  href="/contact" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition duration-300 bg-navy dark:bg-white dark:text-navy rounded-full hover:bg-navy/90 dark:hover:bg-slate-200 shadow-lg shadow-navy/20 dark:shadow-white/10 hover:shadow-xl hover:shadow-navy/30 dark:hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy"
                >
                  Ask a Question
                  <MessageCircleQuestion className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </m.div>
          </div>

          {/* Right Column: Premium Glassmorphic Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <m.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={faq.question} 
                  className={`group relative rounded-3xl transition-[background-color,border-color,box-shadow,color] duration-500 overflow-hidden ${
                    isOpen 
                      ? 'bg-white/90 dark:bg-slate-900/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] border-black/5 dark:border-white/10' 
                      : 'bg-white/40 dark:bg-slate-900/40 hover:bg-white/70 dark:hover:bg-slate-900/70 border-transparent hover:border-black/5 dark:hover:border-white/5'
                  } border backdrop-blur-xl`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex items-center justify-between w-full p-6 md:p-8 text-left focus:outline-none z-10 relative"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 pr-8 ${
                      isOpen ? 'text-saffron' : 'text-navy dark:text-slate-100 group-hover:text-navy/80 dark:group-hover:text-white'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 ${
                      isOpen 
                        ? 'bg-saffron text-white shadow-lg shadow-saffron/30' 
                        : 'bg-navy/5 dark:bg-white/10 text-navy dark:text-white group-hover:bg-navy/10 dark:group-hover:bg-white/20'
                    }`}>
                      <m.div
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <Plus className="w-5 h-5 stroke-[2.5]" />
                      </m.div>
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        initial={{ scaleY: 0.9, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        exit={{ scaleY: 0.9, opacity: 0 }}
                        style={{ transformOrigin: "top" }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-6 pb-8 md:px-8 md:pb-8 pt-0 relative z-10">
                          <div className="w-12 h-1 bg-gradient-to-r from-saffron to-orange-400 rounded-full mb-6 opacity-80" />
                          <p className="text-ink/70 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>

                  {/* Subtle active state gradient glow inside the card */}
                  {isOpen && (
                    <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 via-transparent to-transparent pointer-events-none" />
                  )}
                </m.div>
              )
            })}
          </div>

        </div>
      </Container>
    </section>
  )
}
