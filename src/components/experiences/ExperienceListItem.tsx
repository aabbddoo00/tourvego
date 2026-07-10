import {
  ArrowRight,
  Clock,
  MapPin,
  ShieldCheck,
  Star,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import type { Experience } from '@/components/experiences/experiences'
import { PlatformPriceList } from '@/components/experiences/PlatformPriceList'
import { cn } from '@/lib/utils'

interface ExperienceListItemProps {
  experience: Experience
  index?: number
}

function formatReviewCount(count: number) {
  return count.toLocaleString('en-US')
}

export function ExperienceListItem({
  experience,
  index = 0,
}: ExperienceListItemProps) {
  const {
    id,
    title,
    city,
    country,
    rating,
    fromPrice,
    maxPrice,
    platformPrices,
    platforms,
    badge,
    image,
    category,
    duration,
    reviewCount,
    freeCancellation,
  } = experience

  const savings = Math.max(0, maxPrice - fromPrice)

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: 'easeOut' }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-navy-100/90 bg-white',
        'shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/25 hover:shadow-card'
      )}
    >
      <div className="flex flex-col gap-4 p-4 sm:gap-5 sm:p-5 lg:flex-row lg:items-stretch lg:gap-6 lg:p-5">
        {/* Thumbnail */}
        <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-teal-100 to-navy-100 sm:h-48 lg:h-auto lg:w-[180px] lg:min-h-[168px]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.visibility = 'hidden'
            }}
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-navy shadow-sm backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Main content */}
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="text-lg font-bold tracking-tight text-navy sm:text-xl">
            {title}
          </h3>

          <p className="mt-1 flex items-center gap-1.5 text-sm text-navy-500">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-teal" />
            {city}, {country}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-1 font-semibold text-navy">
              <Star className="h-4 w-4 fill-accent-orange text-accent-orange" />
              {rating}
              <span className="font-normal text-navy-400">
                ({formatReviewCount(reviewCount)})
              </span>
            </span>

            <span className="inline-flex items-center gap-1.5 text-navy-500">
              <Clock className="h-3.5 w-3.5 text-teal" />
              {duration}
            </span>

            {freeCancellation && (
              <span className="inline-flex items-center gap-1.5 text-teal-700">
                <ShieldCheck className="h-3.5 w-3.5" />
                Free cancellation
              </span>
            )}
          </div>

          <div className="mt-4 border-t border-navy-100 pt-3">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400">
              Prices on {platforms} platforms
            </p>
            <PlatformPriceList
              offers={platformPrices}
              fromPrice={fromPrice}
            />
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex shrink-0 flex-row items-end justify-between gap-4 border-t border-navy-100 pt-4 lg:w-[200px] lg:flex-col lg:items-end lg:justify-between lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <div className="text-left lg:text-right">
            <span
              className={cn(
                'inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold',
                badge === 'Best Price'
                  ? 'bg-teal-50 text-teal-700'
                  : 'bg-navy-50 text-navy-600'
              )}
            >
              {badge}
            </span>
            <p className="mt-2 text-xs text-navy-400">From</p>
            <p className="text-2xl font-extrabold tracking-tight text-teal">
              ${fromPrice}
            </p>
            {savings > 0 && (
              <p className="mt-1 text-xs font-medium text-navy-500">
                Save up to{' '}
                <span className="font-semibold text-teal">${savings}</span>
              </p>
            )}
          </div>

          <Link
            to={`/experiences/${id}`}
            className={cn(
              'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5',
              'bg-teal text-sm font-semibold text-white',
              'transition-colors duration-300 hover:bg-teal-700',
              'lg:w-full'
            )}
          >
            Compare offers
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
