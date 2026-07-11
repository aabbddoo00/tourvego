import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

interface TrustpilotCardProps {
  className?: string
}

const TRUSTPILOT_GREEN = '#00b67a'

export function TrustpilotCard({ className }: TrustpilotCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.45, ease: 'easeOut' }}
      className={cn(
        'rounded-3xl border border-navy-100 bg-white px-4 py-3 shadow-soft',
        className
      )}
    >
      <p className="text-sm font-bold text-navy">Excellent</p>

      <div className="mt-1.5 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="flex h-5 w-5 items-center justify-center rounded-[3px]"
            style={{ backgroundColor: TRUSTPILOT_GREEN }}
          >
            <Star className="h-3.5 w-3.5 fill-white text-white" />
          </span>
        ))}
      </div>

      <p className="mt-2 text-[11px] text-navy-500">
        4.7/5 based on <span className="font-semibold text-navy">12,836</span>{' '}
        reviews
      </p>

      <div className="mt-1.5 flex items-center gap-1">
        <Star
          className="h-3.5 w-3.5"
          style={{ fill: TRUSTPILOT_GREEN, color: TRUSTPILOT_GREEN }}
        />
        <span className="text-xs font-bold text-navy">Trustpilot</span>
      </div>
    </motion.div>
  )
}
