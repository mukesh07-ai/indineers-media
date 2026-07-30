import { Container } from "@/components/ui/container"
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
                Our unique skill delivery process begins with the identification of jobs and ends with the placement of trained youth in various sectors. We aim to ensure that every youth leaves with a qualification that is recognised and valued by employers. Our methodology follows the National Occupational Standards set by the &lsquo;National Skills Qualification Framework&rsquo; (NSQF), Government of India.
            </p>
        </div>
        
        <div className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-x-auto pb-16 hide-scrollbar">
            <ProcessFlow steps={steps} className="min-w-max md:min-w-0 px-4 md:px-0" />
        </div>
      </Container>
    </section>
  )
}
