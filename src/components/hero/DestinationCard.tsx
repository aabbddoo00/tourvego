import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

interface DestinationCardProps {
  image: string
  label: string
  className?: string
  delay?: number
  showLabel?: boolean
}

export function DestinationCard({
  image,
  label,
  className,
  delay = 0,
  showLabel = true,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'group relative overflow-hidden rounded-3xl bg-navy-100 ring-1 ring-navy-900/5',
        className
      )}
    >
      <img
        src={image}
        alt={label}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.visibility = 'hidden'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
      {showLabel && (
        <span className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-navy backdrop-blur-sm">
          {label}
        </span>
      )}
    </motion.div>
  )
}
