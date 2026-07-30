import { Container } from "@/components/ui/container"
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
                    Indianeers Media recognises the critical skills gap faced by India&apos;s young workforce. We envision a future where media empowers them by bridging the gap between education and employment. Through targeted training programmes and by highlighting their stories, we aim to unlock the potential of the &lsquo;bottom of the pyramid&rsquo; youth and contribute to a more prosperous India.
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
                    Indianeers Media is on a mission to empower India&apos;s workforce. By 2030, we aim to equip 10 lakh young people with vital, industry-relevant skills — tackling unemployment and the skills gap head-on. Through our exceptional training programmes, we are committed to building a brighter future for India&apos;s youth.
                </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
