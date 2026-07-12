import { ArrowRight, Award } from 'lucide-react'

import { cn } from '@/lib/utils'

interface RecommendationCardProps {
  providerName?: string
  className?: string
  onSeeWhy?: () => void
}

export function RecommendationCard({
  providerName = 'Klook',
  className,
  onSeeWhy,
}: RecommendationCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-orange-200/80 bg-gradient-to-br from-orange-50/80 to-white p-5 shadow-soft',
        className
      )}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-orange/15 text-accent-orange">
          <Award className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-accent-orange sm:text-base">
            Best Value Recommendation
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-700">
            <span className="font-semibold text-navy">{providerName}</span> offers
            the best price with all key inclusions.
          </p>
          <button
            type="button"
            onClick={onSeeWhy}
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal transition hover:text-teal-700"
          >
            See why
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
