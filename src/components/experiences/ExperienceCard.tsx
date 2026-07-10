import { ArrowRight, MapPin, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import type { Experience } from '@/components/experiences/experiences'
import { PlatformIcons } from '@/components/experiences/PlatformIcons'
import { cn } from '@/lib/utils'

interface ExperienceCardProps {
  experience: Experience
  index?: number
}

export function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
  const {
    title,
    city,
    country,
    rating,
    fromPrice,
    platformIds,
    image,
    id,
  } = experience

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white',
        'shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card'
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-teal-100 to-navy-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.visibility = 'hidden'
          }}
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div>
          <h3 className="text-lg font-bold leading-snug text-navy">{title}</h3>
          <p className="mt-1 flex items-center gap-1 text-sm text-navy-500">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {city}, {country}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-accent-orange text-accent-orange" />
            <span className="font-semibold text-navy">{rating}</span>
          </div>
          <p className="text-right">
            <span className="text-xs text-navy-400">From </span>
            <span className="text-lg font-bold text-teal">${fromPrice}</span>
          </p>
        </div>

        <div className="mt-4 border-t border-navy-100 pt-4">
          <PlatformIcons platformIds={platformIds} />
        </div>

        <Link
          to={`/experiences/${id}`}
          className={cn(
            'mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full',
            'border border-teal-200 bg-teal-50 py-2.5 text-sm font-semibold text-teal-700',
            'transition-colors duration-300 group-hover:border-teal-300 group-hover:bg-teal group-hover:text-white'
          )}
        >
          Compare offers
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  )
}
