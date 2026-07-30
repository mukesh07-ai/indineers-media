import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"

export function PageHero() {
  return (
    <div className="bg-navy dark:bg-slate-900 py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-saffron/20 via-navy to-navy pointer-events-none"></div>
      <Container className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">About Us</h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Empowering India&apos;s youth through skill development and bridging the gap between education and employment.
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
