import { ExternalLink, ShieldCheck, Tag } from 'lucide-react'
import { motion } from 'framer-motion'

const badges = [
  { icon: ShieldCheck, label: 'Trusted platforms' },
  { icon: Tag, label: 'Best value comparison' },
  { icon: ExternalLink, label: 'Book directly with providers' },
]

export function TrustBadges() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3"
    >
      {badges.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-teal" strokeWidth={2} />
          <span className="text-sm text-navy-500">{label}</span>
        </div>
      ))}
    </motion.div>
  )
}
