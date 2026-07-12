import { Headphones, Ticket, Users, Landmark } from 'lucide-react'

import { cn } from '@/lib/utils'

const items = [
  { icon: Users, label: 'Expert local guide' },
  { icon: Ticket, label: 'Colosseum entry ticket' },
  { icon: Landmark, label: 'Roman Forum access' },
  { icon: Headphones, label: 'Headsets if needed' },
]

interface IncludedCardProps {
  className?: string
  itemsOverride?: { icon: typeof Users; label: string }[]
}

export function IncludedCard({ className, itemsOverride }: IncludedCardProps) {
  const list = itemsOverride ?? items

  return (
    <div
      className={cn(
        'rounded-2xl border border-navy-100 bg-white p-5 shadow-soft',
        className
      )}
    >
      <h3 className="text-sm font-bold text-navy sm:text-base">
        What&apos;s usually included
      </h3>
      <ul className="mt-4 space-y-3">
        {list.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-3 text-sm text-navy-600">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal">
              <Icon className="h-4 w-4" />
            </span>
            {label}
          </li>
        ))}
      </ul>
    </div>
  )
}
