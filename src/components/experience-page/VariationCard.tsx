import {
  Clock,
  DollarSign,
  Globe2,
  MapPinned,
  RefreshCw,
  Users,
} from 'lucide-react'

import { cn } from '@/lib/utils'

const items = [
  { icon: DollarSign, label: 'Price' },
  { icon: Clock, label: 'Duration' },
  { icon: Users, label: 'Group size (Shared/Private)' },
  { icon: Globe2, label: 'Guide language' },
  { icon: MapPinned, label: 'Pickup location' },
  { icon: RefreshCw, label: 'Cancellation policy' },
]

interface VariationCardProps {
  className?: string
}

export function VariationCard({ className }: VariationCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-navy-100 bg-white p-5 shadow-soft',
        className
      )}
    >
      <h3 className="text-sm font-bold text-navy sm:text-base">
        What can vary between offers
      </h3>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-2.5 text-sm text-navy-600">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-500">
              <Icon className="h-3.5 w-3.5" />
            </span>
            {label}
          </li>
        ))}
      </ul>
    </div>
  )
}
