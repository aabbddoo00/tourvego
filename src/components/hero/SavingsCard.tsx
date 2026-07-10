import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

interface SavingsCardProps {
  className?: string
}

function WalletIllustration() {
  return (
    <div className="relative mt-2 flex justify-center">
      <svg
        width="90"
        height="52"
        viewBox="0 0 90 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* dotted swirl accent */}
        <path
          d="M6 30 Q18 10 34 22 T60 20"
          stroke="#217d96"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        {/* wallet body */}
        <rect x="30" y="20" width="52" height="30" rx="6" fill="#8a5a3b" />
        <rect x="30" y="20" width="52" height="30" rx="6" fill="url(#walletGrad)" />
        {/* flap */}
        <path
          d="M30 26a6 6 0 0 1 6-6h40a6 6 0 0 1 6 6v4H30z"
          fill="#a56a44"
        />
        {/* clasp / card slot */}
        <rect x="62" y="30" width="20" height="12" rx="3" fill="#6b4429" />
        <circle cx="72" cy="36" r="3" fill="#f97316" />
        <defs>
          <linearGradient id="walletGrad" x1="30" y1="20" x2="82" y2="50">
            <stop stopColor="#a56a44" />
            <stop offset="1" stopColor="#7a4e30" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function SavingsCard({ className }: SavingsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'rounded-3xl border border-navy-100 bg-white px-5 py-4 text-center',
        className
      )}
    >
      <p className="text-xs text-navy-500">You could save up to</p>
      <p className="my-0.5 text-4xl font-extrabold tracking-tight text-teal">
        $23
      </p>
      <p className="text-xs text-navy-500">per booking</p>
      <WalletIllustration />
    </motion.div>
  )
}
