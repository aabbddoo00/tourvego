import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { DestinationHero } from '@/components/destination-page/DestinationHero'
import { DestinationGridCard } from '@/components/destinations/DestinationGridCard'
import { ExperienceListItem } from '@/components/experiences/ExperienceListItem'
import { MainLayout } from '@/components/layout/MainLayout'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Button } from '@/components/ui/button'
import {
  getDestinationBySlug,
  getExperiencesByDestination,
  getRelatedDestinations,
} from '@/lib/destination-data'

export function DestinationPage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    return (
      <MainLayout>
        <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-navy sm:text-3xl">
            Destination not found
          </h1>
          <p className="mt-3 max-w-md text-navy-500">
            We couldn&apos;t find that destination. Browse from the homepage or
            pick another city to compare experiences.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full bg-teal px-8 hover:bg-teal-700"
          >
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </MainLayout>
    )
  }

  const destinationExperiences = getExperiencesByDestination(slug)
  const relatedDestinations = getRelatedDestinations(slug)

  return (
    <MainLayout>
      <DestinationHero
        destination={destination}
        experienceCount={destinationExperiences.length}
      />

      <section className="relative bg-gradient-to-b from-white via-slate-50/60 to-white pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Experiences"
            subtitle={`See the same tours, tickets, and activities in ${destination.city} across GetYourGuide, Viator, Klook, and more — then compare the best value.`}
          >
            Compare experiences in{' '}
            <span className="text-teal">{destination.city}</span>
          </SectionHeader>

          <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:gap-5">
            {destinationExperiences.map((experience, index) => (
              <ExperienceListItem
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy-100 bg-white pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Explore more"
            subtitle="Discover other top destinations and compare travel experiences across trusted booking platforms."
          >
            Other destinations to{' '}
            <span className="text-teal">compare</span>
          </SectionHeader>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {relatedDestinations.map((related, index) => (
              <DestinationGridCard
                key={related.id}
                destination={related}
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
