import { Check, Minus, ShieldCheck } from 'lucide-react'

import { cn } from '@/lib/utils'

interface TrustStripProps {
  className?: string
}

export function TrustStrip({ className }: TrustStripProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-2xl border border-teal-100 bg-teal-50/60 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6',
        className
      )}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-teal shadow-soft">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="font-bold text-navy">
            Same price. More clarity. Better decision.
          </p>
          <p className="mt-0.5 text-sm text-navy-600">
            We compare real offers so you can book with confidence.
          </p>
        </div>
      </div>

      <ul className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
        {['No extra fees', 'Real-time data', 'Independent & unbiased'].map(
          (item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-700"
            >
              <Check className="h-4 w-4 text-teal" />
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export function BoolCell({ value }: { value: boolean | null }) {
  if (value === null) {
    return <Minus className="mx-auto h-4 w-4 text-navy-300" />
  }
  if (value) {
    return <Check className="mx-auto h-4 w-4 text-teal stroke-[2.5]" />
  }
  return <span className="text-navy-400">No</span>
}
