import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

import { DestinationGridCard } from '@/components/destinations/DestinationGridCard'
import { destinations } from '@/components/destinations/destinations'
import { MainLayout } from '@/components/layout/MainLayout'
import { SectionHeader } from '@/components/layout/SectionHeader'

export function DestinationsPage() {
  const totalExperiences = destinations.reduce(
    (sum, destination) => sum + destination.experiences,
    0
  )

  return (
    <MainLayout>
      <section className="relative overflow-hidden border-b border-navy-100 bg-gradient-to-b from-slate-50 via-white to-white">
        <div
          className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-teal/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-navy-500"
          >
            <Link to="/" className="transition-colors hover:text-teal">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-navy-300" />
            <span className="font-medium text-navy">Destinations</span>
          </nav>

          <SectionHeader
            label="All destinations"
            subtitle="Browse every destination on TourVego and compare tours, tickets, and activities across trusted booking platforms."
          >
            Explore destinations to{' '}
            <span className="text-teal">compare experiences</span>
          </SectionHeader>

          <p className="mt-5 text-sm text-navy-500">
            <span className="font-semibold text-navy">
              {destinations.length} destinations
            </span>
            {' · '}
            <span className="font-semibold text-teal">
              {totalExperiences.toLocaleString('en-US')}+
            </span>{' '}
            experiences to compare
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {destinations.map((destination, index) => (
              <DestinationGridCard
                key={destination.id}
                destination={destination}
                index={index}
                equal
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
