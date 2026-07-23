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

export default function Home() {
  return (
    <div className="flex flex-col">
      
      {/* 1. HERO CAROUSEL */}
      <HeroCarousel />

      {/* 2. IMPACT NUMBERS */}
      <section className="relative z-30 -mt-10 md:-mt-12 pb-12">
        <Container>
          <div className="bg-white rounded-2xl shadow-xl border border-black/5 p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/5">
              <StatCounter end={100} suffix="K+" label="Candidates Trained" className="px-4" />
              <StatCounter end={15} prefix="+" label="States Covered" className="px-4" />
              <StatCounter end={50} prefix="+" label="Training Centres" className="px-4" />
              <StatCounter end={85} suffix="%" label="Placement Rate" className="px-4" />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. WHO WE ARE */}
      <section className="py-24 bg-offwhite">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                eyebrow="Who We Are"
                title="Transforming Lives Through Skill Development"
                className="mb-8"
              />
              <p className="text-ink/70 text-lg mb-6 leading-relaxed">
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
                    <span className="text-ink/80 font-medium">{item}</span>
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
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-black/5 animate-bounce">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <p className="font-bold text-navy">12+ Years</p>
                    <p className="text-sm text-ink/70">Of Excellence in Skilling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. WHAT WE DO */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading 
              eyebrow="What We Do"
              title="Tailored Programs for Every Segment"
              align="center"
            />
            <p className="text-ink/70 mt-4 text-lg">
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
              <Card key={i} className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-black/5 overflow-hidden">
                <div className="h-2 w-full bg-navy/10 group-hover:bg-saffron transition-colors" />
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-offwhite flex items-center justify-center mb-4 group-hover:bg-navy/5 transition-colors">
                    <service.icon className="w-7 h-7 text-navy" />
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
      <section className="py-24 bg-navy text-white overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-saffron font-semibold tracking-wider uppercase text-sm block mb-3">Our Works</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Key Projects & Initiatives</h2>
            </div>
            <Link href="/projects">
              <Button variant="secondary" className="border-white/20 text-white hover:bg-white/10">
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
              <div key={i} tabIndex={0} className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer focus:outline-none">
                <Image src={project.img} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110" />
                
                {/* Dynamic Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent group-hover:bg-navy/80 group-focus:bg-navy/80 transition-colors duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-sm group-focus:backdrop-blur-sm opacity-100" />
                
                {/* Default State (Fades out on hover or focus) */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 group-hover:opacity-0 group-focus:opacity-0 group-hover:translate-y-8 group-focus:translate-y-8">
                  <span className="w-max py-1 px-3 rounded-full bg-saffron text-white text-xs font-bold uppercase tracking-wider mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-1 text-white">{project.title}</h3>
                  <p className="text-white/70 flex items-center text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron mr-2" /> {project.state}
                  </p>
                </div>

                {/* Hover/Focus Reveal State (Fades in on hover or focus) */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-focus:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0">
                  <h3 className="text-3xl font-bold mb-4 text-saffron">{project.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-8">{project.desc}</p>
                  <div className="flex items-center gap-2 text-white font-semibold group/btn">
                    Read Full Case Study <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. OUR AFFILIATIONS */}
      <section className="py-20 bg-white border-b border-black/5">
        <Container>
          <p className="text-center text-sm font-semibold tracking-widest text-ink/50 uppercase mb-10">Trusted by Leading Organizations & Government Bodies</p>
          <AutoScrollMarquee speed="normal" className="py-4">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div key={num} className="mx-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="h-16 w-40 bg-black/5 rounded flex items-center justify-center font-bold text-ink/40 text-xl border border-black/10">
                  LOGO {num}
                </div>
              </div>
            ))}
          </AutoScrollMarquee>
        </Container>
      </section>

      {/* 7. MEDIA COVERAGE */}
      <section className="py-24 bg-offwhite">
        <Container>
          <SectionHeading 
            eyebrow="In The News"
            title="Media Coverage"
            className="mb-12 text-center"
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden group cursor-pointer border-transparent shadow-md hover:shadow-xl">
                <div className="relative h-48 w-full bg-black/5">
                  <Image 
                    src={`https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop&sig=${item}`} 
                    alt="News Article" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-navy">
                    Times of India
                  </div>
                </div>
                <CardContent className="p-5 pt-6">
                  <p className="text-xs text-ink/50 mb-2 font-medium">12 Oct 2025</p>
                  <h4 className="font-bold text-navy leading-snug group-hover:text-saffron transition-colors line-clamp-2">
                    Indianeers Media Launches Massive Rural Skilling Initiative in Madhya Pradesh
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 rounded-l-full -mr-20 transform skew-x-12 hidden lg:block" />
        <Container className="relative z-10">
          <SectionHeading 
            eyebrow="Success Stories"
            title="What Our Candidates Say"
            className="mb-16"
          />
          <TestimonialCarousel />
        </Container>
      </section>

    </div>
  )
}
