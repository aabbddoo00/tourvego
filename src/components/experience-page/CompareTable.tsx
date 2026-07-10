import { Check, ExternalLink, X } from 'lucide-react'
import { motion } from 'framer-motion'

import type {
  Experience,
  PlatformOfferFeatures,
} from '@/components/experiences/experiences'
import { getPlatform } from '@/lib/platforms'
import { cn } from '@/lib/utils'

interface CompareTableProps {
  experience: Experience
}

const FEATURE_LABELS: {
  key: keyof PlatformOfferFeatures
  label: string
}[] = [
  { key: 'freeCancellation', label: 'Free cancellation' },
  { key: 'skipTheLine', label: 'Skip the line' },
  { key: 'mobileTicket', label: 'Mobile ticket' },
  { key: 'instantConfirmation', label: 'Instant confirmation' },
  { key: 'guidedOption', label: 'Guided option' },
]

export function CompareTable({ experience }: CompareTableProps) {
  const { platformPrices, fromPrice, maxPrice, platforms } = experience
  const savings = Math.max(0, maxPrice - fromPrice)
  const sorted = [...platformPrices].sort((a, b) => a.price - b.price)

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-teal/20 bg-teal-50/60 px-4 py-3 text-sm sm:px-5">
        <span className="font-semibold text-navy">
          From <span className="text-teal">${fromPrice}</span>
        </span>
        <span className="hidden h-4 w-px bg-navy-200 sm:block" aria-hidden="true" />
        {savings > 0 && (
          <>
            <span className="text-navy-600">
              Save up to{' '}
              <span className="font-semibold text-teal">${savings}</span>
            </span>
            <span
              className="hidden h-4 w-px bg-navy-200 sm:block"
              aria-hidden="true"
            />
          </>
        )}
        <span className="text-navy-500">
          Prices &amp; features on {platforms} platforms
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft">
        <ul className="divide-y divide-navy-100">
          {sorted.map((offer, index) => {
            const platform = getPlatform(offer.platformId)
            const isBest = offer.price === fromPrice
            const vsMax = Math.max(0, maxPrice - offer.price)
            const includedCount = FEATURE_LABELS.filter(
              (feature) => offer.features[feature.key]
            ).length

            return (
              <motion.li
                key={offer.platformId}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.35 }}
                className={cn('px-4 py-5 sm:px-5', isBest && 'bg-teal-50/70')}
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
                  <div className="flex min-w-0 flex-1 items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-navy-100">
                      <img
                        src={platform.logo}
                        alt=""
                        className="h-7 w-7 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-navy">
                          {platform.name}
                        </p>
                        {isBest && (
                          <span className="rounded-full bg-teal px-2 py-0.5 text-[10px] font-semibold text-white">
                            Best price
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-navy-400">
                        {isBest
                          ? 'Lowest price on TourVego'
                          : vsMax > 0
                            ? `$${vsMax} more than the best price`
                            : 'Highest listed price'}
                        {' · '}
                        {includedCount}/{FEATURE_LABELS.length} features
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 lg:shrink-0 lg:justify-end">
                    <div className="text-left lg:text-right">
                      <p className="text-xs text-navy-400">Price</p>
                      <p
                        className={cn(
                          'text-2xl font-extrabold tabular-nums',
                          isBest ? 'text-teal' : 'text-navy'
                        )}
                      >
                        ${offer.price}
                      </p>
                    </div>
                    <a
                      href={`https://${platform.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors',
                        isBest
                          ? 'bg-teal text-white hover:bg-teal-700'
                          : 'border border-navy-200 bg-white text-navy hover:border-teal/40 hover:bg-teal-50 hover:text-teal-800'
                      )}
                    >
                      Book on {platform.name.split(' ')[0]}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="mt-4 border-t border-navy-100/80 pt-4">
                  <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-navy-400">
                    Features
                  </p>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-5">
                    {FEATURE_LABELS.map((feature) => {
                      const included = offer.features[feature.key]

                      return (
                        <li
                          key={feature.key}
                          className={cn(
                            'flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium',
                            included
                              ? 'bg-teal-50 text-navy ring-1 ring-teal/20'
                              : 'bg-navy-50/70 text-navy-400 ring-1 ring-navy-100'
                          )}
                        >
                          <span
                            className={cn(
                              'flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
                              included
                                ? 'bg-teal text-white'
                                : 'bg-navy-200/80 text-white'
                            )}
                          >
                            {included ? (
                              <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
                            ) : (
                              <X className="h-3 w-3" strokeWidth={2.5} />
                            )}
                          </span>
                          <span className="leading-snug">{feature.label}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-navy-400">
        TourVego compares prices and features across platforms. Booking happens
        on the provider&apos;s site — we never charge you a booking fee.
      </p>
    </div>
  )
}
