import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { DestinationGridCard } from '@/components/destinations/DestinationGridCard'
import { destinations } from '@/components/destinations/destinations'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Button } from '@/components/ui/button'

export function TopDestinations() {
  const paris = destinations.find((d) => d.id === 'paris')!
  const dubai = destinations.find((d) => d.id === 'dubai')!
  const rome = destinations.find((d) => d.id === 'rome')!
  const istanbul = destinations.find((d) => d.id === 'istanbul')!
  const cairo = destinations.find((d) => d.id === 'cairo')!
  const santorini = destinations.find((d) => d.id === 'santorini')!
  const barcelona = destinations.find((d) => d.id === 'barcelona')!

  return (
    <section
      id="destinations"
      className="relative bg-gradient-to-b from-white via-slate-50/60 to-white pb-16 pt-4 sm:pb-20 sm:pt-5 lg:pb-24 lg:pt-6"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Explore the world"
          subtitle="Discover tours, tickets, attractions, and activities across the world's most popular destinations."
          action={
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-teal-300 px-6 text-teal-700 hover:border-teal-400 hover:bg-teal-50 hover:text-teal-800 sm:px-8"
            >
              <Link to="/destinations">
                View all destinations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          }
        >
          Top destinations to{' '}
          <span className="text-teal">compare travel experiences</span>
        </SectionHeader>

        {/* Destination grid — asymmetric bento on desktop */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-4 lg:grid-rows-3 lg:gap-5">
          <DestinationGridCard
            destination={paris}
            index={0}
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
          />
          <DestinationGridCard
            destination={dubai}
            index={1}
            className="lg:col-start-3 lg:row-start-1"
          />
          <DestinationGridCard
            destination={rome}
            index={2}
            className="lg:col-start-4 lg:row-start-1"
          />
          <DestinationGridCard
            destination={istanbul}
            index={3}
            className="lg:col-start-3 lg:row-start-2"
          />
          <DestinationGridCard
            destination={cairo}
            index={4}
            className="lg:col-start-4 lg:row-start-2"
          />
          <DestinationGridCard
            destination={barcelona}
            index={5}
            className="sm:col-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-3"
          />
          <DestinationGridCard
            destination={santorini}
            index={6}
            className="sm:col-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-3"
          />
        </div>
      </div>
    </section>
  )
}
