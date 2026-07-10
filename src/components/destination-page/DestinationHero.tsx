import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

import type { Destination } from '@/components/destinations/destinations'

interface DestinationHeroProps {
  destination: Destination
  experienceCount: number
}

export function DestinationHero({
  destination,
  experienceCount,
}: DestinationHeroProps) {
  const { city, country, badge, image } = destination

  return (
    <section className="relative min-h-[320px] overflow-hidden sm:min-h-[380px] lg:min-h-[420px]">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-navy-800 to-navy-900" />

      <img
        src={image}
        alt={`${city}, ${country}`}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.visibility = 'hidden'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-navy/20" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className="inline-flex rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white">
            {badge}
          </span>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {city}, {country}
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Compare tours, tickets &amp; activities in {city}.
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-white/75 sm:text-base">
            <MapPin className="h-4 w-4 shrink-0 text-teal-300" />
            {experienceCount} experiences to compare across top platforms
          </p>
        </motion.div>
      </div>
    </section>
  )
}
