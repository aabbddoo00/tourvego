import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ChevronRight,
  Clock,
  MapPin,
  ShieldCheck,
  Star,
} from 'lucide-react'

import type { Experience } from '@/components/experiences/experiences'

interface ExperienceHeroProps {
  experience: Experience
}

function formatReviewCount(count: number) {
  return count.toLocaleString('en-US')
}

export function ExperienceHero({ experience }: ExperienceHeroProps) {
  const {
    title,
    city,
    country,
    destinationId,
    category,
    rating,
    reviewCount,
    duration,
    freeCancellation,
    image,
    fromPrice,
    platforms,
  } = experience

  return (
    <section className="relative min-h-[340px] overflow-hidden sm:min-h-[400px] lg:min-h-[440px]">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-navy-800 to-navy-900" />

      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.visibility = 'hidden'
        }}
      />

      {/* Full-section overlays for text contrast */}
      <div className="absolute inset-0 bg-navy/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-navy/35" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/80 sm:text-sm"
          >
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" />
            <Link
              to={`/destinations/${destinationId}`}
              className="transition-colors hover:text-white"
            >
              {city}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" />
            <span className="truncate text-white/90">{title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white">
              {category}
            </span>
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              Compare {platforms} platforms
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-3 flex items-center gap-2 text-sm font-medium text-white/80 sm:text-base">
            <MapPin className="h-4 w-4 shrink-0 text-teal-300" />
            {city}, {country}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85">
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <Star className="h-4 w-4 fill-accent-orange text-accent-orange" />
              {rating}
              <span className="font-normal text-white/65">
                ({formatReviewCount(reviewCount)} reviews)
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-teal-300" />
              {duration}
            </span>
            {freeCancellation && (
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-teal-300" />
                Free cancellation
              </span>
            )}
            <span className="font-semibold text-teal-200">From ${fromPrice}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
