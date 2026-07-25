import { Container } from "@/components/ui/container"

export default function Loading() {
  return (
    <div className="flex flex-col w-full animate-pulse">
      {/* 1. HERO CAROUSEL SKELETON */}
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
        {/* Subtle gradient overlay to make it look nicer */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-300/50 to-slate-200/50 dark:from-slate-700/50 dark:to-slate-800/50" />
        
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            {/* Tagline skeleton */}
            <div className="h-6 w-32 bg-slate-300 dark:bg-slate-700 rounded-full" />
            
            {/* Title skeleton */}
            <div className="space-y-4">
              <div className="h-12 md:h-16 w-3/4 bg-slate-300 dark:bg-slate-700 rounded-xl" />
              <div className="h-12 md:h-16 w-1/2 bg-slate-300 dark:bg-slate-700 rounded-xl" />
            </div>
            
            {/* Description skeleton */}
            <div className="space-y-3 pt-4">
              <div className="h-4 w-full bg-slate-300 dark:bg-slate-700 rounded-md" />
              <div className="h-4 w-5/6 bg-slate-300 dark:bg-slate-700 rounded-md" />
              <div className="h-4 w-4/6 bg-slate-300 dark:bg-slate-700 rounded-md" />
            </div>
            
            {/* Buttons skeleton */}
            <div className="flex gap-4 pt-6">
              <div className="h-12 w-40 bg-slate-300 dark:bg-slate-700 rounded-lg" />
              <div className="h-12 w-40 bg-slate-300 dark:bg-slate-700 rounded-lg" />
            </div>
          </div>
        </Container>
      </div>

      {/* 2. IMPACT NUMBERS SKELETON */}
      <section className="relative z-30 -mt-10 md:-mt-12 pb-12">
        <Container>
          <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-black/5 dark:border-white/10 h-32 md:h-40 flex items-center">
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center justify-center space-y-3">
                  <div className="h-8 md:h-10 w-20 bg-slate-200 dark:bg-slate-700 rounded-lg" />
                  <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      {/* 3. SECTION CONTENT SKELETON (Who We Are) */}
      <section className="py-10 bg-offwhite dark:bg-slate-950">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="h-6 w-24 bg-slate-200 dark:bg-slate-800 rounded-full" />
              <div className="h-10 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-xl" />
              <div className="space-y-3 pt-4">
                <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded-md" />
                <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded-md" />
                <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded-md" />
              </div>
              <div className="space-y-4 pt-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0" />
                    <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded-md" />
                  </div>
                ))}
              </div>
              <div className="h-10 w-48 bg-slate-200 dark:bg-slate-800 rounded-lg mt-6" />
            </div>
            <div className="relative h-[500px] w-full rounded-3xl bg-slate-200 dark:bg-slate-800" />
          </div>
        </Container>
      </section>
    </div>
  )
}
