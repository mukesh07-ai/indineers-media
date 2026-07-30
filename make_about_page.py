import os

os.makedirs('frontend/components/about', exist_ok=True)

# 1. PageHero (I will reuse or write a generic one, but let's make it inline or separate)
hero_content = """import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"

export function PageHero() {
  return (
    <div className="bg-navy dark:bg-slate-900 py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-saffron/20 via-navy to-navy pointer-events-none"></div>
      <Container className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">About Us</h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Empowering India's youth through skill development and bridging the gap between education and employment.
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-slate-400 font-medium tracking-wider uppercase">
            <span className="hover:text-white cursor-pointer transition-colors">Home</span>
            <span>/</span>
            <span className="text-saffron">About Us</span>
        </div>
      </Container>
    </div>
  )
}
"""

# 2. OurStory
story_content = """import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { StatCounter } from "@/components/ui/stat-counter"
import Image from "next/image"

export function OurStory() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Our Story" eyebrow="Who We Are" align="left" />
            <div className="prose prose-lg dark:prose-invert text-ink dark:text-slate-300 mt-6 space-y-4">
              <p>
                Indianeers Media Private Limited was founded with a singular purpose: to close the widening gap between education and employment in India. Since our inception in 2012, we have grown into one of the country's leading vocational and skill development organisations, operating as an authorised project implementation agency of the National Skill Development Corporation (NSDC), Government of India.
              </p>
              <p>
                What began as a focused initiative to empower 'bottom of the pyramid' youth has expanded into a nationwide movement — with training centres across 23+ states, affiliations with 20+ Sector Skill Councils, and partnerships with major government programmes including PMKVY, NULM, NAPS, NATS and more. We have trained over 30,000 candidates and facilitated employment for more than 22,000 individuals across India.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
             {/* Using a placeholder gradient since real images are not available yet */}
            <div className="absolute inset-0 bg-gradient-to-tr from-saffron/20 to-indiaGreen/20"></div>
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-medium uppercase tracking-widest bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-sm">
                Placeholder Image
            </div>
          </div>
        </div>

        {/* Infographic Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-8 bg-offwhite dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
            <StatCounter end={2012} duration={2} suffix="" label="Founded" />
            <StatCounter end={100} duration={2} suffix=",000+" label="Youth Trained" />
            <StatCounter end={25} duration={2} suffix="+" label="States Covered" />
            <StatCounter end={150} duration={2} suffix="+" label="Training Centres" />
            <StatCounter end={10} duration={2} suffix=" Lakh" label="Goal by 2030" />
        </div>
      </Container>
    </section>
  )
}
"""

# 3. MissionVision
mv_content = """import { Container } from "@/components/ui/container"
import { Eye, Target } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-24 bg-offwhite dark:bg-slate-800/50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 md:p-14 shadow-sm border border-saffron/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-saffron"></div>
            <div className="absolute -right-10 -top-10 text-saffron/5 group-hover:text-saffron/10 transition-colors duration-500">
                <Eye size={160} />
            </div>
            <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-saffron/10 flex items-center justify-center mb-8 text-saffron">
                    <Eye size={28} />
                </div>
                <h3 className="text-3xl font-bold text-navy dark:text-slate-100 mb-6">Our Vision</h3>
                <p className="text-lg text-ink dark:text-slate-300 leading-relaxed">
                    Indianeers Media recognises the critical skills gap faced by India's young workforce. We envision a future where media empowers them by bridging the gap between education and employment. Through targeted training programmes and by highlighting their stories, we aim to unlock the potential of the 'bottom of the pyramid' youth and contribute to a more prosperous India.
                </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 md:p-14 shadow-sm border border-indiaGreen/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-indiaGreen"></div>
            <div className="absolute -right-10 -top-10 text-indiaGreen/5 group-hover:text-indiaGreen/10 transition-colors duration-500">
                <Target size={160} />
            </div>
            <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-indiaGreen/10 flex items-center justify-center mb-8 text-indiaGreen">
                    <Target size={28} />
                </div>
                <h3 className="text-3xl font-bold text-navy dark:text-slate-100 mb-6">Our Mission</h3>
                <p className="text-lg text-ink dark:text-slate-300 leading-relaxed">
                    Indianeers Media is on a mission to empower India's workforce. By 2030, we aim to equip 10 lakh young people with vital, industry-relevant skills — tackling unemployment and the skills gap head-on. Through our exceptional training programmes, we are committed to building a brighter future for India's youth.
                </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
"""

# 4. Objectives
obj_content = """import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Briefcase, Building2, BookOpen, Presentation, Handshake, Megaphone, Users, GraduationCap } from "lucide-react"

const objectives = [
  {
    title: "Skill Training for Employment",
    description: "Provide short-term and long-term job-oriented skill training programmes to youth, women, persons with disability (PwD) and transgender individuals.",
    icon: Briefcase,
  },
  {
    title: "Centres of Excellence",
    description: "Set up Centres of Excellence to conduct diploma/degree courses in specialised sectors using a finishing school concept.",
    icon: Building2,
  },
  {
    title: "Educational Material Development",
    description: "Publish and promote study and training material to help groom students and young professionals as per industry standards.",
    icon: BookOpen,
  },
  {
    title: "Comprehensive Development Programmes",
    description: "Organise online and offline training programmes addressing academic, professional and behavioural growth.",
    icon: Presentation,
  },
  {
    title: "Placement and Industry Linkages",
    description: "Build linkages between employers in various sectors to provide job opportunities to trained candidates.",
    icon: Handshake,
  },
  {
    title: "Outreach and Awareness",
    description: "Conduct recruitment drives, seminars and workshops to promote employment and make youth aware of skill programme benefits.",
    icon: Megaphone,
  },
  {
    title: "Internship Facilitation",
    description: "Source internship and volunteering opportunities to make youth more employable.",
    icon: Users,
  },
  {
    title: "Educational Access Expansion",
    description: "Evolve programmes for education at primary levels and non-formal education for school dropouts and working children.",
    icon: GraduationCap,
  },
]

export function Objectives() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <Container>
        <SectionHeading 
          title="Our Objectives" 
          eyebrow="What We Aim To Achieve" 
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((obj, i) => (
            <div key={i} className="bg-offwhite dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-navy/5 dark:bg-white/10 flex items-center justify-center mb-6 text-navy dark:text-slate-200 group-hover:scale-110 group-hover:bg-saffron group-hover:text-white transition-all">
                <obj.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">{obj.title}</h4>
              <p className="text-ink/80 dark:text-slate-400 leading-relaxed text-sm">{obj.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
"""

# 5. CoreFocusAreas
core_content = """import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { ArrowRight, HeartHandshake, Lightbulb, Rocket } from "lucide-react"

export function CoreFocusAreas() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-saffron/20 via-navy to-navy pointer-events-none"></div>
      <Container className="relative z-10">
        <SectionHeading 
          title="Core Focus Areas" 
          eyebrow="Our Priorities"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Bridging Education & Employment", desc: "Through industry-aligned vocational training that meets real market demands.", icon: Rocket },
                { title: "Empowering Marginalised Communities", desc: "Focusing on tribal youth, SC/ST/OBC, women, and Persons with Disability (PwD).", icon: HeartHandshake },
                { title: "Creating Pathways to Livelihood", desc: "Fostering both wage employment and self-employment/entrepreneurship opportunities.", icon: Lightbulb }
            ].map((focus, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <focus.icon className="w-12 h-12 text-saffron mb-6" />
                    <h4 className="text-2xl font-bold text-white mb-4">{focus.title}</h4>
                    <p className="text-slate-300 leading-relaxed">{focus.desc}</p>
                </div>
            ))}
        </div>
      </Container>
    </section>
  )
}
"""

# 6. OurApproach (Process Flow)
flow_ui_content = """import * as React from "react"
import { cn } from "@/lib/utils"

interface ProcessStep {
  title: string;
}

interface ProcessFlowProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: ProcessStep[];
}

export function ProcessFlow({ steps, className, ...props }: ProcessFlowProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      {/* Connecting line desktop */}
      <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gray-200 dark:bg-slate-700"></div>
      {/* Connecting line mobile */}
      <div className="md:hidden absolute top-0 left-6 bottom-0 w-[2px] bg-gray-200 dark:bg-slate-700"></div>

      <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 relative z-10">
        {steps.map((step, i) => (
          <div key={i} className="flex md:flex-col items-center md:items-center relative w-full md:w-32 group">
            {/* Number Badge */}
            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 flex items-center justify-center text-xl md:text-2xl font-bold text-navy dark:text-slate-300 group-hover:border-saffron group-hover:bg-saffron group-hover:text-white transition-all shadow-sm z-10 relative md:mb-6 mr-6 md:mr-0">
              {i + 1}
            </div>
            
            {/* Label */}
            <div className="text-left md:text-center w-full">
              <h5 className="font-semibold text-ink dark:text-slate-200 text-sm md:text-base leading-snug">{step.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
"""

approach_content = """import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProcessFlow } from "@/components/ui/process-flow"

const steps = [
    { title: "Baseline Study" },
    { title: "Social Mobilisation" },
    { title: "Entry Gating & Selection" },
    { title: "Training Delivery" },
    { title: "Assessment & Certification" },
    { title: "Placement" },
    { title: "Post-Placement Tracking" },
    { title: "Feedback & Impact Assessment" }
];

export function OurApproach() {
  return (
    <section className="py-24 bg-offwhite dark:bg-slate-800">
      <Container>
        <SectionHeading 
          title="Our Approach" 
          eyebrow="How We Deliver Impact" 
        />
        <div className="mt-8 mb-20 max-w-3xl mx-auto text-center text-ink dark:text-slate-300 text-lg leading-relaxed">
            <p>
                Our unique skill delivery process begins with the identification of jobs and ends with the placement of trained youth in various sectors. We aim to ensure that every youth leaves with a qualification that is recognised and valued by employers. Our methodology follows the National Occupational Standards set by the 'National Skills Qualification Framework' (NSQF), Government of India.
            </p>
        </div>
        
        <div className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-x-auto pb-16 hide-scrollbar">
            <ProcessFlow steps={steps} className="min-w-max md:min-w-0 px-4 md:px-0" />
        </div>
      </Container>
    </section>
  )
}
"""

# 7. TrainerFaculty
trainer_content = """import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { StatCounter } from "@/components/ui/stat-counter"
import { CheckCircle2 } from "lucide-react"

export function TrainerFaculty() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <SectionHeading 
                    title="Our Trainers & Faculty" 
                    eyebrow="The Backbone of Our Programmes"
                    align="left"
                />
                <div className="mt-8 space-y-6">
                    {[
                        { title: "Industry Masters", desc: "Experts brought in directly from the field." },
                        { title: "Real-World Experience", desc: "Practical knowledge over pure theory." },
                        { title: "Passionate Educators", desc: "Dedicated to student success and mentorship." },
                        { title: "Lifelong Learners", desc: "Constantly upgrading their own skillsets." },
                        { title: "Tailored Approach", desc: "Adapting methods to diverse learner backgrounds." }
                    ].map((feature, i) => (
                        <div key={i} className="flex gap-4">
                            <CheckCircle2 className="text-indiaGreen shrink-0 mt-1" />
                            <div>
                                <h5 className="font-bold text-navy dark:text-slate-100">{feature.title}</h5>
                                <p className="text-ink/80 dark:text-slate-400 text-sm mt-1">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-offwhite dark:bg-slate-800 p-10 md:p-14 rounded-3xl border border-gray-100 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-8 text-center">Certified Excellence</h3>
                <div className="space-y-12">
                    <div className="text-center">
                        <StatCounter end={232} duration={2} suffix="+" className="text-saffron" />
                        <p className="mt-3 font-semibold text-ink dark:text-slate-300 uppercase tracking-widest text-sm">TOT Certified Trainers</p>
                    </div>
                    <div className="w-16 h-px bg-gray-200 dark:bg-slate-700 mx-auto"></div>
                    <div className="text-center">
                        <StatCounter end={65} duration={2} suffix="+" className="text-indiaGreen" />
                        <p className="mt-3 font-semibold text-ink dark:text-slate-300 uppercase tracking-widest text-sm">NIESBUD Entrepreneurship Certified Faculty</p>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </section>
  )
}
"""

# 8. OurTeam
team_content = """import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import Image from "next/image"

const placeholders = [
    { name: "Placeholder Name", title: "Founder & Director", bio: "Over 15 years of experience in vocational training and grassroots skill development across India. Passionate about empowering youth." },
    { name: "Placeholder Name", title: "State Head, MP", bio: "Leads operations and placement strategies across Madhya Pradesh. Specialises in government liaison and project management." },
    { name: "Placeholder Name", title: "Head of Operations", bio: "Ensures seamless execution of PMKVY and CSR projects. Background in large-scale educational administration." },
    { name: "Placeholder Name", title: "Placement Director", bio: "Builds industry tie-ups and ensures our 75%+ placement commitment is met year on year. Expert in corporate relations." },
]

export function OurTeam() {
  return (
    <section className="py-24 bg-offwhite dark:bg-slate-800/50">
      <Container>
        <SectionHeading 
          title="Leadership & Team" 
          eyebrow="The People Behind the Mission" 
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {placeholders.map((person, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                    <div className="w-full sm:w-1/3 aspect-square rounded-2xl relative overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                        {/* Placeholder Photo */}
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs uppercase tracking-widest font-semibold text-center p-4">
                            Photo Placeholder
                        </div>
                    </div>
                    <div className="w-full sm:w-2/3 flex flex-col justify-center">
                        <h4 className="text-2xl font-bold text-navy dark:text-slate-100">{person.name}</h4>
                        <p className="text-saffron font-medium mt-1 mb-4 text-sm tracking-wide uppercase">{person.title}</p>
                        <p className="text-ink/80 dark:text-slate-400 text-sm leading-relaxed">{person.bio}</p>
                    </div>
                </div>
            ))}
        </div>
      </Container>
    </section>
  )
}
"""

with open('frontend/components/about/page-hero.tsx', 'w') as f:
    f.write(hero_content)
with open('frontend/components/about/our-story.tsx', 'w') as f:
    f.write(story_content)
with open('frontend/components/about/mission-vision.tsx', 'w') as f:
    f.write(mv_content)
with open('frontend/components/about/objectives.tsx', 'w') as f:
    f.write(obj_content)
with open('frontend/components/about/core-focus-areas.tsx', 'w') as f:
    f.write(core_content)
with open('frontend/components/ui/process-flow.tsx', 'w') as f:
    f.write(flow_ui_content)
with open('frontend/components/about/our-approach.tsx', 'w') as f:
    f.write(approach_content)
with open('frontend/components/about/trainer-faculty.tsx', 'w') as f:
    f.write(trainer_content)
with open('frontend/components/about/our-team.tsx', 'w') as f:
    f.write(team_content)

print("Created all about-us components.")
