import { Container } from "@/components/ui/container"
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
