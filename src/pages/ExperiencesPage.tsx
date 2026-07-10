import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

import { destinations } from '@/components/destinations/destinations'
import { experiences } from '@/components/experiences/experiences'
import { ExperienceListItem } from '@/components/experiences/ExperienceListItem'
import { MainLayout } from '@/components/layout/MainLayout'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { cn } from '@/lib/utils'

type DestinationFilter = 'all' | string

export function ExperiencesPage() {
  const [filter, setFilter] = useState<DestinationFilter>('all')

  const filteredExperiences = useMemo(() => {
    if (filter === 'all') return experiences
    return experiences.filter(
      (experience) => experience.destinationId === filter
    )
  }, [filter])

  const filterOptions = [
    { id: 'all' as const, label: 'All' },
    ...destinations.map((destination) => ({
      id: destination.id,
      label: destination.city,
    })),
  ]

  return (
    <MainLayout>
      <section className="relative overflow-hidden border-b border-navy-100 bg-gradient-to-b from-slate-50 via-white to-white">
        <div
          className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-teal/10 blur-3xl"
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
            <span className="font-medium text-navy">Experiences</span>
          </nav>

          <SectionHeader
            label="All experiences"
            subtitle="Browse tours, tickets, and activities across destinations — then compare prices and features on trusted platforms."
          >
            Experiences people{' '}
            <span className="text-teal">compare before booking</span>
          </SectionHeader>

          <p className="mt-5 text-sm text-navy-500">
            <span className="font-semibold text-navy">
              {filteredExperiences.length} experiences
            </span>
            {filter !== 'all' && (
              <>
                {' '}
                in{' '}
                <span className="font-semibold text-teal">
                  {destinations.find((d) => d.id === filter)?.city}
                </span>
              </>
            )}
            {' · '}
            compared across top booking platforms
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {filterOptions.map((option) => {
              const active = filter === option.id

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setFilter(option.id)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                    active
                      ? 'bg-teal text-white'
                      : 'bg-white text-navy-600 ring-1 ring-navy-200 hover:bg-teal-50 hover:text-teal-800 hover:ring-teal/30'
                  )}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredExperiences.length > 0 ? (
            <div className="flex flex-col gap-4 sm:gap-5">
              {filteredExperiences.map((experience, index) => (
                <ExperienceListItem
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-navy-100 bg-white px-6 py-16 text-center shadow-soft">
              <p className="text-lg font-semibold text-navy">
                No experiences found
              </p>
              <p className="mt-2 text-sm text-navy-500">
                Try another destination filter to see more results.
              </p>
              <button
                type="button"
                onClick={() => setFilter('all')}
                className="mt-6 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
              >
                Show all experiences
              </button>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  )
}
