import { ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'

interface RecommendationCardProps {
  providerName?: string
  providerLogo?: string
  price?: number
  className?: string
  onSeeWhy?: () => void
}

export function RecommendationCard({
  providerName = 'Klook',
  providerLogo,
  price,
  className,
  onSeeWhy,
}: RecommendationCardProps) {
  return (
    <div
      className={cn(
        'flex h-full flex-col rounded-2xl border border-orange-200/70 bg-gradient-to-br from-orange-50 via-white to-teal-50/60 p-5 shadow-soft',
        className
      )}
    >
      <p className="text-base font-bold text-accent-orange sm:text-lg">
        Best Value Recommendation
      </p>

      <div className="mt-4 flex items-center gap-3.5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-navy-100 bg-navy-50/80 p-2.5">
          {providerLogo ? (
            <img
              src={providerLogo}
              alt={providerName}
              className="h-full w-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <span className="text-lg font-bold text-navy">
              {providerName.slice(0, 1)}
            </span>
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-xl font-extrabold tracking-tight text-navy">
            {providerName}
          </p>
          {price != null && (
            <p className="mt-0.5 text-sm font-medium text-navy-500">
              from{' '}
              <span className="font-bold text-teal">${price}</span>
            </p>
          )}
        </div>
      </div>

      <div className="my-4 h-px w-full bg-navy-100" />

      <p className="text-[15px] leading-relaxed text-navy-600">
        <span className="font-semibold text-navy">{providerName}</span> offers the
        best price with all key inclusions.
      </p>

      <button
        type="button"
        onClick={onSeeWhy}
        className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-teal transition hover:text-teal-700"
      >
        See why
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
