import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

interface SavingsCardProps {
  className?: string
}

export function SavingsCard({ className }: SavingsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.45, ease: 'easeOut' }}
      className={cn(
        'rounded-2xl border border-teal-100 bg-teal-50/80 px-4 py-3 shadow-soft',
        className
      )}
    >
      <p className="text-[11px] font-medium text-teal-700">You could save up to</p>
      <p className="mt-0.5 text-3xl font-extrabold tracking-tight text-teal">
        $23
      </p>
      <p className="text-[11px] text-navy-500">on this booking</p>
    </motion.div>
  )
}
