import { Container } from "@/components/ui/container"
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
