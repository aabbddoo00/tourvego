import { Star } from 'lucide-react'

import type { ComparisonOffer } from '@/components/experience-page/offer-data'
import { getPlatform } from '@/lib/platforms'
import { cn } from '@/lib/utils'

interface MobileOfferCardProps {
  offer: ComparisonOffer
  className?: string
}

export function MobileOfferCard({ offer, className }: MobileOfferCardProps) {
  const platform = getPlatform(offer.platformId)

  return (
    <article
      className={cn(
        'rounded-2xl border border-navy-100 bg-white p-4 shadow-soft',
        offer.bestPrice && 'border-teal-200 bg-teal-50/30',
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <img
            src={platform.logo}
            alt=""
            className="h-8 w-8 rounded-lg object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <div>
            <p className="font-bold text-navy">{platform.name}</p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {offer.bestPrice && (
                <span className="rounded-full bg-teal px-2 py-0.5 text-[10px] font-semibold text-white">
                  Best Price
                </span>
              )}
              {offer.bestValue && !offer.bestPrice && (
                <span className="rounded-full bg-accent-orange px-2 py-0.5 text-[10px] font-semibold text-white">
                  Best Value
                </span>
              )}
              {offer.bestValue && offer.bestPrice && (
                <span className="rounded-full bg-navy-100 px-2 py-0.5 text-[10px] font-semibold text-navy">
                  Best Value
                </span>
              )}
            </div>
          </div>
        </div>
        <p className="text-xl font-extrabold text-navy">${offer.price}</p>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2.5 text-xs">
        <div>
          <dt className="text-navy-400">Duration</dt>
          <dd className="mt-0.5 font-medium text-navy">{offer.duration}</dd>
        </div>
        <div>
          <dt className="text-navy-400">Pickup</dt>
          <dd className="mt-0.5 font-medium text-navy">{offer.pickup}</dd>
        </div>
        <div>
          <dt className="text-navy-400">Tickets</dt>
          <dd className="mt-0.5 font-medium text-navy">
            {offer.ticketsIncluded === null
              ? '—'
              : offer.ticketsIncluded
                ? 'Included'
                : 'Not included'}
          </dd>
        </div>
        <div>
          <dt className="text-navy-400">Guide language</dt>
          <dd className="mt-0.5 font-medium text-navy">{offer.guideLanguage}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-navy-400">Cancellation</dt>
          <dd className="mt-0.5 font-medium text-navy">{offer.cancellation}</dd>
        </div>
        <div>
          <dt className="text-navy-400">Rating</dt>
          <dd className="mt-0.5 flex items-center gap-1 font-medium text-navy">
            <Star className="h-3 w-3 fill-accent-orange text-accent-orange" />
            {offer.rating.toFixed(1)} ({offer.reviewCount.toLocaleString()})
          </dd>
        </div>
        <div>
          <dt className="text-navy-400">Updated</dt>
          <dd className="mt-0.5 font-medium text-navy">{offer.lastUpdated}</dd>
        </div>
      </dl>

      <a
        href={offer.dealUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex h-11 w-full items-center justify-center rounded-full bg-teal text-sm font-semibold text-white transition hover:bg-teal-700"
      >
        View Deal
      </a>
    </article>
  )
}
