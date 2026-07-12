import { useState } from 'react'
import { Images } from 'lucide-react'

import { cn } from '@/lib/utils'

interface ExperienceGalleryProps {
  images: string[]
  title: string
  photoCount?: number
  className?: string
}

export function ExperienceGallery({
  images,
  title,
  photoCount = 24,
  className,
}: ExperienceGalleryProps) {
  const [active, setActive] = useState(0)
  const main = images[active] ?? images[0]
  const thumbs = images.slice(0, 4)

  return (
    <div className={cn('w-full', className)}>
      {/* Desktop: main + stacked thumbs */}
      <div className="hidden gap-2 sm:grid sm:grid-cols-[1fr_88px] md:grid-cols-[1fr_100px] lg:grid-cols-[1fr_112px]">
        <div className="relative overflow-hidden rounded-2xl bg-navy-100">
          <img
            src={main}
            alt={title}
            className="aspect-[4/3] h-full w-full object-cover"
          />
          <button
            type="button"
            className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy shadow-soft backdrop-blur-sm transition hover:bg-white"
          >
            <Images className="h-3.5 w-3.5" />
            View photos ({photoCount})
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {thumbs.slice(0, 3).map((src, index) => (
            <button
              key={src + index}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                'relative flex-1 overflow-hidden rounded-xl ring-2 ring-offset-1 transition',
                active === index
                  ? 'ring-teal'
                  : 'ring-transparent hover:ring-navy-200'
              )}
            >
              <img
                src={src}
                alt=""
                className="h-full min-h-[72px] w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Mobile: main + horizontal thumbs */}
      <div className="sm:hidden">
        <div className="relative overflow-hidden rounded-2xl bg-navy-100">
          <img
            src={main}
            alt={title}
            className="aspect-[4/3] w-full object-cover"
          />
          <button
            type="button"
            className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy shadow-soft"
          >
            <Images className="h-3.5 w-3.5" />
            View photos ({photoCount})
          </button>
        </div>
        <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
          {thumbs.map((src, index) => (
            <button
              key={src + index}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                'h-16 w-20 shrink-0 overflow-hidden rounded-xl ring-2 ring-offset-1',
                active === index ? 'ring-teal' : 'ring-transparent'
              )}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
