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
      transition={{ delay: 0.5, duration: 0.45, ease: 'easeOut' }}
      className={cn(
        'rounded-3xl border border-navy-100 bg-white px-5 py-4 text-center shadow-soft',
        className
      )}
    >
      <p className="text-xs text-navy-500">You could save up to</p>
      <p className="my-0.5 text-4xl font-extrabold tracking-tight text-teal">
        $23
      </p>
      <p className="text-xs text-navy-500">on this booking</p>
    </motion.div>
  )
}
