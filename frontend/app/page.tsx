import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { StatCounter } from "@/components/ui/stat-counter"
import { AutoScrollMarquee } from "@/components/ui/auto-scroll-marquee"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, ChevronRight, Users, BookOpen, Building, Briefcase, Target, Shield, Zap, Award, Mail, ExternalLink, Activity, GraduationCap } from "lucide-react"
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
                Founded in 2012, Indianeers Media Private Limited has been at the forefront of India&apos;s skill development mission. We partner with government bodies, corporates, and institutions to deliver high-impact training programs that bridge the gap between industry requirements and available talent.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Government recognized training partner",
                  "Industry-aligned curriculum and certification",
                  "Dedicated placement cell for successful candidates",
                  "Focus on rural empowerment and women's skill development"
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-saffron shrink-0 mr-3 mt-0.5" />
                    <span className="text-ink/80 dark:text-slate-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about-us">
                <Button variant="secondary" className="border-navy text-navy hover:bg-navy hover:text-white transition">
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
                  sizes="(max-width: 768px) 100vw, 50vw"
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
            ].map((service) => (
              <Card key={service.title} className="group hover:-translate-y-2 hover:shadow-xl transition duration-300 border-black/5 dark:border-white/10 dark:bg-slate-800 overflow-hidden">
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

          <div className="mt-12 text-center relative z-10">
            <Link href="/what-we-do">
              <Button variant="primary" className="h-12 px-8 text-sm font-semibold tracking-wide rounded-full bg-navy hover:bg-navy/90 text-white">
                Explore More
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* 4.5. OUR CORE VALUES */}
      <section className="py-16 bg-white dark:bg-slate-950 border-t border-black/5 dark:border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading 
              eyebrow="Our Core Values"
              title={<>The Principles That <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-blue-500 dark:from-blue-400 dark:to-saffron">Drive Us</span></>}
              align="center"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Empowerment", icon: Target, desc: "We believe in empowering individuals with the skills they need to shape their own futures.", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
              { title: "Integrity", icon: Shield, desc: "We uphold the highest standards of transparency and honesty in all our partnerships.", color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
              { title: "Excellence", icon: Award, desc: "We are committed to delivering world-class training and consistently exceeding expectations.", color: "text-saffron", bg: "bg-orange-50 dark:bg-orange-900/20" },
            ].map((value) => (
              <div key={value.title} className="flex flex-col items-center text-center p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-black/5 dark:border-white/10 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${value.bg}`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-3">{value.title}</h3>
                <p className="text-ink/70 dark:text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center relative z-10">
            <Link href="/about-us">
              <Button variant="primary" className="h-12 px-8 text-sm font-semibold tracking-wide rounded-full bg-saffron hover:bg-saffron/90 text-white">
                Explore More
              </Button>
            </Link>
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
            ].map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button variant="primary" className="h-12 px-8 text-sm font-semibold tracking-wide rounded-full bg-saffron hover:bg-saffron/90 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]">
                Explore More
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* 5.5. OUR PROCESS */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading 
              eyebrow="How We Work"
              title={<>Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-500">Skilling Methodology</span></>}
              align="center"
            />
            <p className="text-ink/70 dark:text-slate-400 mt-4 text-lg">
              A systematic approach ensuring maximum impact, from mobilizing candidates to securing their career pathways.
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-navy/20 dark:via-white/20 to-transparent -translate-y-1/2" />
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Mobilization", icon: Users, desc: "Identifying and counseling right candidates from grassroots." },
                { step: "02", title: "Training", icon: Activity, desc: "Delivering industry-aligned theoretical & practical sessions." },
                { step: "03", title: "Certification", icon: GraduationCap, desc: "Rigorous assessment by recognized governing bodies." },
                { step: "04", title: "Placement", icon: Briefcase, desc: "Connecting certified talent with top industry employers." },
              ].map((process, index) => (
                <div key={process.step} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center border border-black/5 dark:border-white/10 mb-6 group-hover:scale-110 group-hover:border-saffron transition-transform duration-300">
                    <process.icon className="w-7 h-7 text-navy dark:text-slate-100 group-hover:text-saffron transition-colors" />
                  </div>
                  <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl border border-white/40 dark:border-white/10 shadow-sm flex-1 w-full relative overflow-hidden">
                    <div className="absolute -top-4 -right-4 text-7xl font-black text-black/5 dark:text-white/5 pointer-events-none transition-transform group-hover:scale-110">{process.step}</div>
                    <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-2 relative z-10">{process.title}</h3>
                    <p className="text-ink/70 dark:text-slate-400 text-sm relative z-10">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/about-us">
              <Button variant="primary" className="h-12 px-8 text-sm font-semibold tracking-wide rounded-full bg-navy hover:bg-navy/90 text-white">
                Explore More
              </Button>
            </Link>
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
                <div className="h-16 w-40 bg-offwhite dark:bg-slate-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center font-bold text-ink/40 dark:text-slate-500 text-lg border border-black/5 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition duration-500 transform group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-saffron/30 dark:group-hover:border-saffron/30 group-hover:shadow-lg group-hover:shadow-saffron/10 dark:group-hover:shadow-saffron/20 group-hover:bg-white dark:group-hover:bg-slate-800">
                  <span className="group-hover:text-saffron transition-colors duration-500">LOGO {num}</span>
                </div>
              </div>
            ))}
          </AutoScrollMarquee>
        </Container>
      </section>

      {/* 7. MEDIA COVERAGE (LOGOS) */}
      <section className="py-12 bg-offwhite dark:bg-slate-950 border-b border-black/5 dark:border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-center mb-10">
            <span className="text-sm font-bold tracking-widest text-navy/50 dark:text-slate-400 uppercase mb-2">Featured In</span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-slate-100">Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-500">Coverage</span></h2>
          </div>
          
          <AutoScrollMarquee direction="right" speed="fast" className="py-4">
            {[
              { name: "Times of India", url: "https://timesofindia.indiatimes.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/The_Times_of_India_logo.png" },
              { name: "NDTV", url: "https://www.ndtv.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/NDTV_logo.svg" },
              { name: "The Hindu", url: "https://www.thehindu.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/The_Hindu_logo.svg" },
              { name: "Hindustan Times", url: "https://www.hindustantimes.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Hindustan_Times_logo.svg" },
              { name: "Aaj Tak", url: "https://aajtak.in/", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Aaj_tak_logo.png" },
              { name: "India Today", url: "https://www.indiatoday.in/", logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/India_Today_logo.svg" },
              { name: "Zee News", url: "https://zeenews.india.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Zee_News_2020.svg" },
              { name: "Republic TV", url: "https://www.republicworld.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Republic_TV_logo.svg" },
              { name: "CNN News18", url: "https://www.news18.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/CNN-News18_logo.svg" },
              { name: "ABP News", url: "https://news.abplive.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/ABP_News_logo.svg" }
            ].map((media) => (
              <div key={media.name} className="mx-4 group cursor-pointer perspective-1000">
                <a 
                  href={media.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center h-16 md:h-20 w-32 md:w-40 bg-offwhite dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-3 border border-black/5 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition duration-500 transform group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-saffron/30 dark:group-hover:border-saffron/30 group-hover:shadow-lg group-hover:shadow-saffron/10 dark:group-hover:shadow-saffron/20 group-hover:bg-white dark:group-hover:bg-slate-800 grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
                >
                  <Image 
                    src={media.logo} 
                    alt={`${media.name} Logo`} 
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                  <div className="absolute -top-2 -right-2 bg-saffron text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100">
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </a>
              </div>
            ))}
          </AutoScrollMarquee>
        </Container>
      </section>

      {/* 7.5. LATEST NEWS ARTICLES */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <Container>
          <SectionHeading 
            eyebrow="In The News"
            title={<>Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-500">Updates</span></>}
            className="mb-12 text-center"
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden group cursor-pointer border-black/5 shadow-md hover:shadow-xl dark:bg-slate-800 dark:border-white/10 transition-all duration-300">
                <div className="relative h-48 w-full bg-black/5 dark:bg-white/5 overflow-hidden">
                  <Image 
                    src={`https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop&sig=${item}`} 
                    alt="News Article" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-navy dark:text-slate-100">
                    Press Release
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

          <div className="mt-12 text-center">
            <Link href="/blog-news">
              <Button variant="primary" className="h-12 px-8 text-sm font-semibold tracking-wide rounded-full bg-saffron hover:bg-saffron/90 text-white">
                Explore More
              </Button>
            </Link>
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

      {/* 9.5. NEWSLETTER / CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy dark:bg-slate-950" />
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-saffron/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Our Mission</h2>
              <p className="text-white/80 text-lg mb-0">Join our newsletter to receive the latest news, updates on our skilling programs, and inspiring success stories directly in your inbox.</p>
            </div>
            <div className="w-full md:w-auto shrink-0 flex flex-col gap-3 min-w-[300px]">
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-white/50" />
                </div>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full h-12 bg-white/10 border border-white/20 rounded-full pl-12 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all"
                />
              </div>
              <Button variant="primary" className="w-full h-12 rounded-full bg-saffron hover:bg-saffron/90 text-white font-bold text-base shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all">
                Subscribe Now
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. CONTACT SECTION */}
      <ContactSection />

    </div>
  )
}
