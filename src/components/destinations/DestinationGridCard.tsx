import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import type { Destination } from '@/components/destinations/destinations'
import { cn } from '@/lib/utils'

interface DestinationGridCardProps {
  destination: Destination
  className?: string
  index?: number
  /** Force equal card height (ignores featured sizing) */
  equal?: boolean
}

export function DestinationGridCard({
  destination,
  className,
  index = 0,
  equal = false,
}: DestinationGridCardProps) {
  const { city, country, experiences, badge, image, featured } = destination
  const tall = !equal && featured

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
      className={cn('h-full', className)}
    >
      <Link
        to={`/destinations/${destination.id}`}
        className={cn(
          'group relative block h-full overflow-hidden rounded-3xl bg-navy-100 shadow-soft ring-1 ring-navy-900/5',
          'transition-transform duration-300 hover:-translate-y-1 hover:shadow-card',
          equal
            ? 'min-h-[260px] sm:min-h-[280px]'
            : tall
              ? 'min-h-[280px] lg:min-h-[520px]'
              : 'min-h-[240px] sm:min-h-[260px]'
        )}
      >
      {/* Fallback wash if image fails */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-navy-800 to-navy-900" />

      <img
        src={image}
        alt={`${city}, ${country}`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.visibility = 'hidden'
        }}
      />

      {/* Base gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/20 to-transparent" />

      {/* Teal hover overlay */}
      <div className="absolute inset-0 bg-teal/0 transition-colors duration-300 group-hover:bg-teal/15" />

      {/* Badge */}
      <span className="absolute left-4 top-4 z-10 rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white">
        {badge}
      </span>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4 sm:p-5">
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-white sm:text-xl">
            {city}, {country}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-white/90">
            {experiences} experiences
          </p>
          <p className="mt-1 text-xs text-white/75">
            Compare tours, tickets &amp; activities
          </p>
        </div>

        <span
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-navy',
            'transition-all duration-300 group-hover:scale-110 group-hover:bg-teal group-hover:text-white'
          )}
          aria-hidden="true"
        >
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>

      <span className="sr-only">Explore {city}, {country}</span>
      </Link>
    </motion.div>
  )
}
