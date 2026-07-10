import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ExperienceCard } from '@/components/experiences/ExperienceCard'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Button } from '@/components/ui/button'
import { getFeaturedExperiences } from '@/lib/destination-data'

export function PopularExperiences() {
  const featuredExperiences = getFeaturedExperiences(6)

  return (
    <section
      id="experiences"
      className="relative bg-gradient-to-b from-white via-slate-50/60 to-white pb-16 pt-4 sm:pb-20 sm:pt-5 lg:pb-24 lg:pt-6"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Popular experiences"
          subtitle="Find the same tour, ticket, or activity across trusted platforms and compare the best value before you book."
          action={
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-teal-300 px-6 text-teal-700 hover:border-teal-400 hover:bg-teal-50 hover:text-teal-800 sm:px-8"
            >
              <Link to="/experiences">
                Explore all experiences
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          }
        >
          Popular travel experiences{' '}
          <span className="text-teal">people compare</span>
        </SectionHeader>

        {/* Experience grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {featuredExperiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
