import { Container } from "@/components/ui/container"
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
