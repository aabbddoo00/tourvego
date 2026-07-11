import { ChevronDown, ChevronRight, Clock, MapPin, Star } from 'lucide-react'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

const LOGO_TOKEN = 'pk_O5I51-bYTnW43cTmplZ1hQ'

const logo = (domain: string) =>
  `https://img.logo.dev/${domain}?token=${LOGO_TOKEN}&size=200&format=png`

interface ProviderRow {
  name: string
  logo: string
  rating: number
  price: number
  bestPrice?: boolean
}

const providers: ProviderRow[] = [
  { name: 'GetYourGuide', logo: logo('getyourguide.com'), rating: 4.6, price: 48 },
  { name: 'Viator', logo: logo('viator.com'), rating: 4.4, price: 45 },
  { name: 'Klook', logo: logo('klook.com'), rating: 4.5, price: 43, bestPrice: true },
]

interface ComparisonCardProps {
  className?: string
}

export function ComparisonCard({ className }: ComparisonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.55, ease: 'easeOut' }}
      className={cn(
        'rounded-3xl border border-navy-100 bg-white p-5 shadow-card',
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-[15px] font-bold leading-tight text-navy sm:text-base">
              Colosseum Guided Tour
            </h3>
            <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-semibold text-teal-700">
              Compare 6 platforms
            </span>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-navy-400">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Rome, Italy
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              2.5h
            </span>
            <span className="flex items-center gap-1 text-navy">
              <Star className="h-3.5 w-3.5 fill-accent-orange text-accent-orange" />
              <span className="font-semibold">4.6</span>
              <span className="text-navy-400">(1,247)</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-0.5">
        {providers.map((provider) => (
          <div
            key={provider.name}
            className={cn(
              'relative flex items-center gap-3 rounded-xl px-2.5 py-2.5',
              provider.bestPrice && 'bg-teal-50/70'
            )}
          >
            <img
              src={provider.logo}
              alt={provider.name}
              className="h-7 w-7 shrink-0 rounded-lg object-contain"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="flex-1 text-sm font-semibold text-navy">
              {provider.name}
            </span>
            <span className="flex items-center gap-1 text-xs text-navy-500">
              <Star className="h-3 w-3 fill-accent-orange text-accent-orange" />
              {provider.rating}
            </span>
            <div className="relative w-12 text-right">
              <span
                className={cn(
                  'text-sm font-bold',
                  provider.bestPrice ? 'text-teal-700' : 'text-navy'
                )}
              >
                ${provider.price}
              </span>
              {provider.bestPrice && (
                <span className="absolute -bottom-4 right-0 whitespace-nowrap rounded-full bg-teal px-2 py-0.5 text-[9px] font-semibold text-white">
                  Best Price
                </span>
              )}
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-navy-300" />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-5 flex w-full items-center justify-center gap-1 border-t border-navy-100 pt-3 text-xs font-medium text-navy-500 transition-colors hover:text-teal"
      >
        View all 6 platforms
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
    </motion.div>
  )
}
