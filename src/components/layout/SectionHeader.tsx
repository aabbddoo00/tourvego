import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label: string
  subtitle: string
  className?: string
  action?: ReactNode
  children: ReactNode
}

export function SectionHeader({
  label,
  subtitle,
  className,
  action,
  children,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={cn(
        'flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8',
        className
      )}
    >
      <div className="relative max-w-3xl flex-1 text-left">
        {/* Label row with accent line */}
        <div className="mb-5 flex items-center gap-3 sm:mb-6">
          <span className="h-px w-10 bg-teal sm:w-14" aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal">
            {label}
          </span>
        </div>

        {/* Title — editorial, left-aligned, multi-line friendly */}
        <h2 className="text-[1.75rem] font-extrabold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-[2.65rem]">
          {children}
        </h2>

        {/* Subtitle with subtle left rule */}
        <div className="mt-5 flex gap-4 sm:mt-6">
          <span
            className="mt-1 hidden w-px shrink-0 self-stretch bg-gradient-to-b from-teal/40 to-transparent sm:block"
            aria-hidden="true"
          />
          <p className="max-w-xl text-base leading-relaxed text-navy-500 sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>

      {action && (
        <div className="shrink-0 self-end sm:pb-1">{action}</div>
      )}
    </motion.div>
  )
}
