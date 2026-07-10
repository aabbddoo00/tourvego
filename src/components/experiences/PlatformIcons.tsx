import type { PlatformId } from '@/lib/platforms'
import { getPlatforms } from '@/lib/platforms'

interface PlatformIconsProps {
  platformIds: PlatformId[]
  showLabel?: boolean
}

export function PlatformIcons({
  platformIds,
  showLabel = true,
}: PlatformIconsProps) {
  const items = getPlatforms(platformIds)
  const visible = items.length <= 6 ? items : items.slice(0, 5)
  const extra = items.length - visible.length

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center -space-x-2">
        {visible.map((platform) => (
          <span
            key={platform.id}
            className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-sm ring-1 ring-navy-100"
            title={platform.name}
          >
            <img
              src={platform.logo}
              alt={platform.name}
              className="h-5 w-5 object-contain"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </span>
        ))}
        {extra > 0 && (
          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white bg-navy-50 text-[10px] font-bold text-navy-600 ring-1 ring-navy-100">
            +{extra}
          </span>
        )}
      </div>
      {showLabel && <span className="text-xs text-navy-400">Available on</span>}
    </div>
  )
}
