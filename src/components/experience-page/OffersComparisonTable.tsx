import { useMemo, useState } from 'react'
import { Star } from 'lucide-react'

import { MobileOfferCard } from '@/components/experience-page/MobileOfferCard'
import {
  COMPARISON_ROWS,
  type ComparisonOffer,
} from '@/components/experience-page/offer-data'
import { BoolCell } from '@/components/experience-page/TrustStrip'
import { getPlatform } from '@/lib/platforms'
import { cn } from '@/lib/utils'

type MobileFilter = 'best-price' | 'best-value' | 'highest-rated' | 'free-cancel'

const MOBILE_FILTERS: { id: MobileFilter; label: string }[] = [
  { id: 'best-price', label: 'Best Price' },
  { id: 'best-value', label: 'Best Value' },
  { id: 'highest-rated', label: 'Highest Rated' },
  { id: 'free-cancel', label: 'Free Cancellation' },
]

interface OffersComparisonTableProps {
  offers: ComparisonOffer[]
  className?: string
}

function cellContent(offer: ComparisonOffer, key: string) {
  switch (key) {
    case 'price':
      return (
        <span className="text-base font-extrabold text-navy">${offer.price}</span>
      )
    case 'currency':
      return offer.currency
    case 'duration':
      return offer.duration
    case 'sharedPrivate':
      return offer.sharedPrivate
    case 'pickup':
      return offer.pickup
    case 'ticketsIncluded':
      return <BoolCell value={offer.ticketsIncluded} />
    case 'guideLanguage':
      return offer.guideLanguage
    case 'mealIncluded':
      return <BoolCell value={offer.mealIncluded} />
    case 'cancellation':
      return offer.cancellation
    case 'rating':
      return (
        <span className="inline-flex items-center justify-center gap-1">
          <Star className="h-3.5 w-3.5 fill-accent-orange text-accent-orange" />
          <span className="font-semibold text-navy">{offer.rating.toFixed(1)}</span>
          <span className="text-navy-400">
            ({offer.reviewCount.toLocaleString()})
          </span>
        </span>
      )
    case 'lastUpdated':
      return <span className="text-navy-500">{offer.lastUpdated}</span>
    case 'book':
      return (
        <a
          href={offer.dealUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center rounded-full bg-teal px-4 text-xs font-semibold text-white transition hover:bg-teal-700"
        >
          View Deal
        </a>
      )
    default:
      return '—'
  }
}

export function OffersComparisonTable({
  offers,
  className,
}: OffersComparisonTableProps) {
  const [mobileFilter, setMobileFilter] = useState<MobileFilter>('best-price')

  const mobileOffers = useMemo(() => {
    const list = [...offers]
    switch (mobileFilter) {
      case 'best-price':
        return list.sort((a, b) => a.price - b.price)
      case 'best-value':
        return list.sort(
          (a, b) => Number(b.bestValue) - Number(a.bestValue) || a.price - b.price
        )
      case 'highest-rated':
        return list.sort((a, b) => b.rating - a.rating)
      case 'free-cancel':
        return list.filter((o) =>
          o.cancellation.toLowerCase().includes('free')
        )
      default:
        return list
    }
  }, [offers, mobileFilter])

  return (
    <div className={cn('w-full', className)}>
      <div className="mb-4 flex flex-col gap-1 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
            Compare offers
          </h2>
          <p className="mt-1 text-sm text-navy-500">
            Prices may change. We update our data frequently.
          </p>
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto rounded-2xl border border-navy-100 bg-white shadow-soft lg:block">
        <table className="w-full min-w-[960px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-navy-100">
              <th className="sticky left-0 z-20 w-44 bg-white px-4 py-4 text-left text-xs font-semibold uppercase tracking-wide text-navy-400">
                Factor
              </th>
              {offers.map((offer) => {
                const platform = getPlatform(offer.platformId)
                return (
                  <th
                    key={offer.platformId}
                    className={cn(
                      'min-w-[132px] px-3 py-4 text-center',
                      offer.bestPrice && 'bg-teal-50/60'
                    )}
                  >
                    <div className="flex flex-col items-center gap-1.5">
                      <img
                        src={platform.logo}
                        alt=""
                        className="h-7 w-7 rounded-md object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                      <span className="text-xs font-bold text-navy">
                        {platform.name}
                      </span>
                      {offer.bestPrice && (
                        <span className="rounded-full bg-teal px-2 py-0.5 text-[9px] font-semibold text-white">
                          Best Price
                        </span>
                      )}
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row) => (
              <tr key={row.key} className="border-b border-navy-50 last:border-0">
                <th className="sticky left-0 z-10 bg-white px-4 py-3.5 text-left text-xs font-semibold text-navy-600">
                  {row.label}
                </th>
                {offers.map((offer) => (
                  <td
                    key={`${offer.platformId}-${row.key}`}
                    className={cn(
                      'px-3 py-3.5 text-center text-navy-700',
                      offer.bestPrice && 'bg-teal-50/40'
                    )}
                  >
                    {cellContent(offer, row.key)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile offer cards */}
      <div className="lg:hidden">
        <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
          {MOBILE_FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setMobileFilter(filter.id)}
              className={cn(
                'shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition',
                mobileFilter === filter.id
                  ? 'border-teal bg-teal text-white'
                  : 'border-navy-200 bg-white text-navy-600 hover:border-navy-300'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {mobileOffers.map((offer) => (
            <MobileOfferCard key={offer.platformId} offer={offer} />
          ))}
          {mobileOffers.length === 0 && (
            <p className="rounded-2xl border border-dashed border-navy-200 px-4 py-8 text-center text-sm text-navy-500">
              No offers match this filter.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
