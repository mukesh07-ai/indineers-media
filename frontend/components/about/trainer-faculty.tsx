import { Container } from "@/components/ui/container"
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
