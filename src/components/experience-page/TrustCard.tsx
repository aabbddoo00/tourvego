import { Check, Lock, ShieldCheck, Sparkles } from 'lucide-react'

import { cn } from '@/lib/utils'

const bullets = [
  'You pay the same price',
  'We compare top platforms',
  'You book directly with the provider',
  '24/7 customer support',
]

interface TrustCardProps {
  className?: string
}

export function TrustCard({ className }: TrustCardProps) {
  return (
    <aside
      className={cn(
        'rounded-2xl border border-navy-100 bg-white p-5 shadow-soft',
        className
      )}
    >
      <h2 className="text-sm font-bold text-navy sm:text-base">
        Why book through our links?
      </h2>

      <ul className="mt-4 space-y-2.5">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-navy-600">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal">
              <Check className="h-3 w-3 stroke-[3]" />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-navy-100 pt-4">
        <div className="flex flex-col items-center gap-1 text-center">
          <Lock className="h-4 w-4 text-teal" />
          <span className="text-[10px] font-semibold uppercase tracking-wide text-navy-500">
            Secure
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <ShieldCheck className="h-4 w-4 text-teal" />
          <span className="text-[10px] font-semibold uppercase tracking-wide text-navy-500">
            No hidden fees
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <Sparkles className="h-4 w-4 text-teal" />
          <span className="text-[10px] font-semibold uppercase tracking-wide text-navy-500">
            Trusted
          </span>
        </div>
      </div>
    </aside>
  )
}
