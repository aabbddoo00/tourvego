import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { howItWorksSteps } from '@/components/how-it-works/steps'
import { SectionHeader } from '@/components/layout/SectionHeader'

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden pb-16 pt-4 sm:pb-20 sm:pt-5 lg:pb-24 lg:pt-6"
    >
      {/* Soft atmospheric band */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(33,125,150,0.08),_transparent_55%),linear-gradient(180deg,#f8fafc_0%,#ffffff_45%,#f8fafc_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-navy/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="How it works"
          subtitle="Compare the same experience across trusted platforms in three simple steps — then book where the value is best."
        >
          How TourVego <span className="text-teal">works</span>
        </SectionHeader>

        {/* Process track */}
        <div className="relative mt-12 sm:mt-16">
          {/* Desktop connector line */}
          <div
            className="pointer-events-none absolute left-[16%] right-[16%] top-[2.75rem] hidden h-px bg-gradient-to-r from-transparent via-teal/35 to-transparent lg:block"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4 lg:gap-8">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon
              const isLast = index === howItWorksSteps.length - 1

              return (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.55,
                    ease: 'easeOut',
                  }}
                  className="group relative"
                >
                  <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/70 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/20 hover:shadow-card sm:p-7 lg:p-8">
                    {/* Watermark number */}
                    <span
                      className="pointer-events-none absolute -right-1 -top-3 select-none text-[5.5rem] font-extrabold leading-none tracking-tighter text-navy/[0.04] transition-colors duration-300 group-hover:text-teal/[0.08] sm:text-[6.5rem]"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>

                    {/* Step marker */}
                    <div className="relative mb-8 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-teal-700 text-white shadow-[0_10px_30px_-12px_rgba(33,125,150,0.7)]">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </div>

                      {!isLast && (
                        <ArrowRight
                          className="hidden h-4 w-4 text-teal/40 sm:block lg:hidden"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <div className="relative">
                      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-teal">
                        Step {step.number}
                      </p>
                      <h3 className="text-xl font-bold tracking-tight text-navy sm:text-[1.35rem]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-navy-500 sm:text-[15px]">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="mt-7 h-px w-12 bg-gradient-to-r from-teal to-transparent transition-all duration-300 group-hover:w-20" />
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
