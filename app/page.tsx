import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { StatCounter } from "@/components/ui/stat-counter"
import { AutoScrollMarquee } from "@/components/ui/auto-scroll-marquee"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, ChevronRight, PlayCircle, Users, BookOpen, Building, Briefcase } from "lucide-react"
import { HeroCarousel } from "@/components/home/hero-carousel"
import { TestimonialCarousel } from "@/components/home/testimonial-carousel"
import { ProjectCard } from "@/components/home/project-card"
import { FaqSection } from "@/components/home/faq-section"
import { ContactSection } from "@/components/home/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      
      {/* 1. HERO CAROUSEL */}
      <HeroCarousel />

      {/* 2. IMPACT NUMBERS */}
      <section className="relative z-30 -mt-10 md:-mt-12 pb-12">
        <Container>
          <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/60 dark:border-white/10 p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/5 dark:divide-white/10">
              <StatCounter end={100} suffix="K+" label="Candidates Trained" className="px-4" />
              <StatCounter end={15} prefix="+" label="States Covered" className="px-4" />
              <StatCounter end={50} prefix="+" label="Training Centres" className="px-4" />
              <StatCounter end={85} suffix="%" label="Placement Rate" className="px-4" />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. WHO WE ARE */}
      <section className="py-10 bg-offwhite dark:bg-slate-950">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                eyebrow="Who We Are"
                title={<>Transforming Lives Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-500">Skill Development</span></>}
                className="mb-8"
              />
              <p className="text-ink/70 dark:text-slate-300 text-lg mb-6 leading-relaxed">
                Founded in 2012, Indianeers Media Private Limited has been at the forefront of India's skill development mission. We partner with government bodies, corporates, and institutions to deliver high-impact training programs that bridge the gap between industry requirements and available talent.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Government recognized training partner",
                  "Industry-aligned curriculum and certification",
                  "Dedicated placement cell for successful candidates",
                  "Focus on rural empowerment and women's skill development"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-saffron shrink-0 mr-3 mt-0.5" />
                    <span className="text-ink/80 dark:text-slate-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about-us">
                <Button variant="secondary" className="border-navy text-navy hover:bg-navy hover:text-white transition-all">
                  Read Our Full Story <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-saffron/20 to-navy/20 rounded-3xl transform translate-x-4 translate-y-4" />
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  alt="Students learning in a classroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] max-w-xs border border-white/60 dark:border-white/10 animate-bounce">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/10 dark:bg-white/10 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-navy dark:text-slate-100" />
                  </div>
                  <div>
                    <p className="font-bold text-navy dark:text-slate-100">12+ Years</p>
                    <p className="text-sm text-ink/70 dark:text-slate-400">Of Excellence in Skilling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. WHAT WE DO */}
      <section className="py-10 relative bg-slate-50 dark:bg-slate-900 overflow-hidden">
        {/* Decorative background for glass cards */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-saffron/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-navy/5 dark:bg-blue-900/10 rounded-full blur-3xl" />
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading 
              eyebrow="What We Do"
              title={<>Tailored Programs for <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-500">Every Segment</span></>}
              align="center"
            />
            <p className="text-ink/70 dark:text-slate-300 mt-4 text-lg">
              We offer specialized training and consulting services designed to meet the unique needs of individuals, corporates, and institutions across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "For Individuals", icon: Users, desc: "Skill development and vocational training for youth seeking employment." },
              { title: "For Corporates", icon: Building, desc: "CSR project execution and customized workforce upskilling programs." },
              { title: "For Institutions", icon: BookOpen, desc: "Capacity building and curriculum development for educational bodies." },
              { title: "For Industries", icon: Briefcase, desc: "End-to-end staffing, recruitment, and specialized consultancy services." },
            ].map((service, i) => (
              <Card key={i} className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-black/5 dark:border-white/10 dark:bg-slate-800 overflow-hidden">
                <div className="h-2 w-full bg-navy/10 dark:bg-white/10 group-hover:bg-saffron transition-colors" />
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-offwhite dark:bg-slate-900 flex items-center justify-center mb-4 group-hover:bg-navy/5 dark:group-hover:bg-slate-950 transition-colors">
                    <service.icon className="w-7 h-7 text-navy dark:text-slate-100" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.desc}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href="/what-we-do" className="text-saffron font-semibold flex items-center group/link text-sm uppercase tracking-wider">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. OUR WORKS */}
      <section className="py-10 bg-navy dark:bg-slate-950 text-white overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm mb-4">
                <span className="flex h-2 w-2 rounded-full bg-saffron animate-pulse" />
                <span className="text-sm font-semibold tracking-wide text-white uppercase">Our Works</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Key Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-yellow-400">Initiatives</span></h2>
            </div>
            <Link href="/projects">
              <Button variant="glass-dark" className="h-12 px-8 text-sm font-semibold tracking-wide">
                View All Projects
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "PMKVY Training", state: "Madhya Pradesh", img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2000&auto=format&fit=crop", category: "Govt Skilling", desc: "Equipping rural youth with industry-relevant skills under the flagship PMKVY scheme, bridging the employability gap." },
              { title: "FoSTaC Certification", state: "Bihar", img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2000&auto=format&fit=crop", category: "Food Safety", desc: "Training food handlers in hygiene and safety standards, ensuring compliance with FSSAI regulations across the state." },
              { title: "Drone Pilot Training", state: "Maharashtra", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2000&auto=format&fit=crop", category: "Technology", desc: "Next-generation drone pilot certification program aimed at creating specialized professionals for agriculture and surveying." },
            ].map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* 6. OUR AFFILIATIONS */}
      <section className="py-10 relative bg-white dark:bg-slate-950 border-y border-black/5 dark:border-white/10 overflow-hidden">
        {/* Subtle background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-gradient-to-r from-saffron/5 via-navy/5 to-saffron/5 dark:from-saffron/10 dark:via-blue-900/10 dark:to-saffron/10 blur-[100px] pointer-events-none" />
        
        <Container className="relative z-20">
          <SectionHeading 
            eyebrow="Our Affiliations"
            title={<>Trusted by Leading Organizations & <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-500">Government Bodies</span></>}
            className="mb-8 text-center"
            titleClassName="text-xl md:text-2xl lg:text-3xl"
            align="center"
          />
          
          <AutoScrollMarquee speed="normal" className="py-2">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div key={num} className="mx-4 group cursor-pointer perspective-1000">
                <div className="h-16 w-40 bg-offwhite dark:bg-slate-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center font-bold text-ink/40 dark:text-slate-500 text-lg border border-black/5 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-500 transform group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-saffron/30 dark:group-hover:border-saffron/30 group-hover:shadow-lg group-hover:shadow-saffron/10 dark:group-hover:shadow-saffron/20 group-hover:bg-white dark:group-hover:bg-slate-800">
                  <span className="group-hover:text-saffron transition-colors duration-500">LOGO {num}</span>
                </div>
              </div>
            ))}
          </AutoScrollMarquee>
        </Container>
      </section>

      {/* 7. MEDIA COVERAGE */}
      <section className="py-10 bg-offwhite dark:bg-slate-950">
        <Container>
          <SectionHeading 
            eyebrow="In The News"
            title={<>Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-500">Coverage</span></>}
            className="mb-12 text-center"
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden group cursor-pointer border-transparent shadow-md hover:shadow-xl dark:bg-slate-900">
                <div className="relative h-48 w-full bg-black/5 dark:bg-white/5">
                  <Image 
                    src={`https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop&sig=${item}`} 
                    alt="News Article" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-navy dark:text-slate-100">
                    Times of India
                  </div>
                </div>
                <CardContent className="p-5 pt-6">
                  <p className="text-xs text-ink/50 dark:text-slate-400 mb-2 font-medium">12 Oct 2025</p>
                  <h4 className="font-bold text-navy dark:text-slate-100 leading-snug group-hover:text-saffron dark:group-hover:text-saffron transition-colors line-clamp-2">
                    Indianeers Media Launches Massive Rural Skilling Initiative in Madhya Pradesh
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. FAQ SECTION */}
      <FaqSection />

      {/* 9. TESTIMONIALS */}
      <section className="py-10 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 dark:bg-blue-900/10 rounded-l-full -mr-20 transform skew-x-12 hidden lg:block" />
        <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-saffron/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <SectionHeading 
            eyebrow="Success Stories"
            title={<>What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-500">Candidates Say</span></>}
            className="mb-16"
          />
          <TestimonialCarousel />
        </Container>
      </section>

      {/* 10. CONTACT SECTION */}
      <ContactSection />

    </div>
  )
}
