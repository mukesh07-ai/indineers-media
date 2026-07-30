import { Container } from "@/components/ui/container"
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
                Indianeers Media Private Limited was founded with a singular purpose: to close the widening gap between education and employment in India. Since our inception in 2012, we have grown into one of the country&apos;s leading vocational and skill development organisations, operating as an authorised project implementation agency of the National Skill Development Corporation (NSDC), Government of India.
              </p>
              <p>
                What began as a focused initiative to empower &lsquo;bottom of the pyramid&rsquo; youth has expanded into a nationwide movement — with training centres across 23+ states, affiliations with 20+ Sector Skill Councils, and partnerships with major government programmes including PMKVY, NULM, NAPS, NATS and more. We have trained over 30,000 candidates and facilitated employment for more than 22,000 individuals across India.
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
