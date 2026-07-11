import { Star, TrendingDown } from 'lucide-react'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

const TRUSTPILOT_GREEN = '#00b67a'

interface ComparisonInsightsProps {
  className?: string
}

export function ComparisonInsights({ className }: ComparisonInsightsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.45, ease: 'easeOut' }}
      className={cn(
        'grid grid-cols-1 gap-3 sm:grid-cols-2',
        className
      )}
    >
      <div className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-soft">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal">
          <TrendingDown className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-medium text-navy-500">Best deal saves you</p>
          <p className="text-lg font-extrabold tracking-tight text-navy">
            $23 <span className="text-sm font-semibold text-teal">vs highest</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-soft">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${TRUSTPILOT_GREEN}18` }}
        >
          <Star
            className="h-5 w-5"
            style={{ fill: TRUSTPILOT_GREEN, color: TRUSTPILOT_GREEN }}
          />
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-medium text-navy-500">
            Excellent on Trustpilot
          </p>
          <p className="text-lg font-extrabold tracking-tight text-navy">
            4.7/5{' '}
            <span className="text-sm font-semibold text-navy-500">
              · 12.8k reviews
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  )
}
