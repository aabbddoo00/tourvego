import { getPlatform, type PlatformId } from '@/lib/platforms'
import { cn } from '@/lib/utils'

export interface PlatformPriceOffer {
  platformId: PlatformId
  price: number
}

interface PlatformPriceListProps {
  offers: PlatformPriceOffer[]
  fromPrice: number
  className?: string
}

export function PlatformPriceList({
  offers,
  fromPrice,
  className,
}: PlatformPriceListProps) {
  const sorted = [...offers].sort((a, b) => a.price - b.price)

  return (
    <ul className={cn('grid grid-cols-1 gap-1.5 sm:grid-cols-2', className)}>
      {sorted.map((offer) => {
        const platform = getPlatform(offer.platformId)
        const isBest = offer.price === fromPrice

        return (
          <li
            key={offer.platformId}
            className={cn(
              'flex items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5',
              isBest
                ? 'border-teal/30 bg-teal-50/80'
                : 'border-navy-100 bg-navy-50/40'
            )}
          >
            <span className="flex min-w-0 items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-navy-100">
                <img
                  src={platform.logo}
                  alt=""
                  className="h-3.5 w-3.5 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </span>
              <span className="truncate text-xs font-medium text-navy-600">
                {platform.name}
              </span>
            </span>
            <span
              className={cn(
                'shrink-0 text-xs font-bold tabular-nums',
                isBest ? 'text-teal' : 'text-navy'
              )}
            >
              ${offer.price}
              {isBest && (
                <span className="ml-1 text-[10px] font-semibold uppercase tracking-wide text-teal-700">
                  best
                </span>
              )}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
