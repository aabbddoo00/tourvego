import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { CompareTable } from '@/components/experience-page/CompareTable'
import { ExperienceHero } from '@/components/experience-page/ExperienceHero'
import { ExperienceListItem } from '@/components/experiences/ExperienceListItem'
import { MainLayout } from '@/components/layout/MainLayout'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Button } from '@/components/ui/button'
import {
  getExperienceBySlug,
  getRelatedExperiences,
} from '@/lib/destination-data'

export function ExperiencePage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const experience = getExperienceBySlug(slug)

  if (!experience) {
    return (
      <MainLayout>
        <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-navy sm:text-3xl">
            Experience not found
          </h1>
          <p className="mt-3 max-w-md text-navy-500">
            We couldn&apos;t find that experience. Browse destinations or pick
            another tour to compare prices and features.
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

  const related = getRelatedExperiences(experience)

  return (
    <MainLayout>
      <ExperienceHero experience={experience} />

      <section className="relative bg-gradient-to-b from-white via-slate-50/60 to-white pb-12 pt-10 sm:pb-16 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Compare offers"
            subtitle="Compare prices and features for the same experience across trusted platforms — then book where the value is best."
          >
            Prices &amp; features in{' '}
            <span className="text-teal">{experience.city}</span>
          </SectionHeader>

          <div className="mt-8 sm:mt-10">
            <CompareTable experience={experience} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-navy-100 bg-white pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="More in this city"
              subtitle={`Other experiences in ${experience.city} you can compare across platforms.`}
            >
              Related experiences in{' '}
              <span className="text-teal">{experience.city}</span>
            </SectionHeader>

            <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:gap-5">
              {related.map((item, index) => (
                <ExperienceListItem
                  key={item.id}
                  experience={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  )
}
