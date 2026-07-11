import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

const STATS = [
  { label: '12 platforms' },
  { label: '3,820 live offers' },
  { label: 'Updated 3 min ago' },
]

interface LiveStatsStripProps {
  className?: string
}

export function LiveStatsStrip({ className }: LiveStatsStripProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.45, ease: 'easeOut' }}
      className={cn(
        'flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-navy-100 bg-white/90 px-3.5 py-2.5 shadow-soft backdrop-blur-sm',
        className
      )}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-700">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
        </span>
        Live
      </span>

      {STATS.map((stat, index) => (
        <span key={stat.label} className="flex items-center gap-3 text-xs text-navy-600">
          {index > 0 && (
            <span className="hidden h-1 w-1 rounded-full bg-navy-200 sm:inline-block" aria-hidden />
          )}
          <span className={index === STATS.length - 1 ? 'font-medium text-navy-500' : 'font-semibold text-navy'}>
            {stat.label}
          </span>
        </span>
      ))}
    </motion.div>
  )
}
