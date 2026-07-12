import { Clock, MapPin, Star, Zap } from 'lucide-react'

import type { Experience } from '@/components/experiences/experiences'
import { cn } from '@/lib/utils'

interface ExperienceHeaderProps {
  experience: Experience
  platformCount: number
  description?: string
  className?: string
}

export function ExperienceHeader({
  experience,
  platformCount,
  description,
  className,
}: ExperienceHeaderProps) {
  const copy =
    description ??
    experience.description

  return (
    <div className={cn('min-w-0', className)}>
      <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
        Compare {platformCount} platforms
      </span>

      <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-[2rem] lg:leading-tight">
        {experience.title}
      </h1>

      <p className="mt-2 flex items-center gap-1.5 text-sm text-navy-500">
        <MapPin className="h-4 w-4 shrink-0 text-teal" />
        {experience.city}, {experience.country}
      </p>

      <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy-600 sm:text-[15px]">
        {copy}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white px-3 py-1.5 text-xs font-medium text-navy-700">
          <Clock className="h-3.5 w-3.5 text-teal" />
          {experience.duration.includes('–') || experience.duration.includes('-')
            ? experience.duration
            : experience.id === 'colosseum-guided-tour'
              ? '2.5 – 3 hours'
              : experience.duration}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-100 bg-orange-50/70 px-3 py-1.5 text-xs font-medium text-navy-700">
          <Zap className="h-3.5 w-3.5 text-accent-orange" />
          Likely to sell out
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white px-3 py-1.5 text-xs font-medium text-navy-700">
          Instant confirmation
        </span>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-sm">
        <Star className="h-4 w-4 fill-accent-orange text-accent-orange" />
        <span className="font-bold text-navy">{experience.rating.toFixed(1)}</span>
        <span className="text-navy-400">
          ({experience.reviewCount.toLocaleString()} reviews)
        </span>
      </div>
    </div>
  )
}
