import { motion } from 'framer-motion'

import { ComparisonCard } from '@/components/hero/ComparisonCard'
import { DestinationCard } from '@/components/hero/DestinationCard'
import { SavingsCard } from '@/components/hero/SavingsCard'
import { TrustpilotCard } from '@/components/hero/TrustpilotCard'

const PHOTOS = {
  santorini:
    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=500&fit=crop&q=80',
  paris:
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=820&fit=crop&q=80',
  lake: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=520&fit=crop&q=80',
}

/** Desktop collage — fixed design canvas that scales to the column width. */
function CollageVisual() {
  return (
    <div className="relative mx-auto hidden h-[500px] w-full max-w-[600px] lg:block xl:h-[620px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-x-0 top-0 mx-auto h-[610px] w-[600px] origin-top scale-[0.76] xl:scale-[0.98]"
      >
        <DestinationCard
          label="Santorini"
          image={PHOTOS.santorini}
          delay={0.3}
          className="absolute left-0 top-[48px] z-10 h-[180px] w-[248px]"
        />
        <DestinationCard
          label="Paris"
          image={PHOTOS.paris}
          delay={0.2}
          className="absolute left-[224px] top-0 z-20 h-[288px] w-[196px]"
        />
        <DestinationCard
          label="Lake Bled"
          image={PHOTOS.lake}
          delay={0.4}
          className="absolute right-0 top-[64px] z-10 h-[176px] w-[202px]"
        />

        <ComparisonCard className="absolute left-[24px] top-[300px] z-40 w-[372px] animate-float" />
        <SavingsCard className="absolute right-0 top-[262px] z-40 w-[168px] animate-float-delayed" />
        <TrustpilotCard className="absolute bottom-[4px] right-0 z-40 w-[186px]" />
      </motion.div>
    </div>
  )
}

/** Mobile + tablet — fluid, readable stacked layout. */
function StackedVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] lg:hidden">
      {/* Soft glow backdrop */}
      <div className="pointer-events-none absolute -inset-4 -z-10">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-teal-100/40 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-40 w-40 rounded-full bg-navy-100/25 blur-3xl" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <DestinationCard
          label="Santorini"
          image={PHOTOS.santorini}
          delay={0.2}
          className="h-32 w-full sm:h-40"
        />
        <DestinationCard
          label="Paris"
          image={PHOTOS.paris}
          delay={0.3}
          className="h-32 w-full sm:h-40"
        />
      </div>

      <ComparisonCard className="mt-4 w-full" />

      <div className="mt-4 grid grid-cols-2 items-stretch gap-3">
        <SavingsCard className="flex flex-col justify-center" />
        <TrustpilotCard className="flex flex-col justify-center" />
      </div>
    </div>
  )
}

export function TravelVisual() {
  return (
    <>
      <StackedVisual />
      <CollageVisual />
    </>
  )
}
