import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { Breadcrumbs } from '@/components/experience-page/Breadcrumbs'
import { ExperienceGallery } from '@/components/experience-page/ExperienceGallery'
import { ExperienceHeader } from '@/components/experience-page/ExperienceHeader'
import { ExperienceNavbar } from '@/components/experience-page/ExperienceNavbar'
import { IncludedCard } from '@/components/experience-page/IncludedCard'
import { OffersComparisonTable } from '@/components/experience-page/OffersComparisonTable'
import {
  getComparisonOffers,
  getGalleryImages,
} from '@/components/experience-page/offer-data'
import { RecommendationCard } from '@/components/experience-page/RecommendationCard'
import { TrustCard } from '@/components/experience-page/TrustCard'
import { TrustStrip } from '@/components/experience-page/TrustStrip'
import { VariationCard } from '@/components/experience-page/VariationCard'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { getExperienceBySlug } from '@/lib/destination-data'
import { getPlatform } from '@/lib/platforms'

const COLOSSEUM_DESCRIPTION =
  'Explore the iconic Colosseum with an expert guide. Learn about the history of ancient Rome and walk in the footsteps of gladiators.'

export function ExperiencePage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const experience = getExperienceBySlug(slug)

  if (!experience) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <ExperienceNavbar />
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
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
        </main>
        <Footer />
      </div>
    )
  }

  const offers = getComparisonOffers(experience)
  const images = getGalleryImages(experience)
  const bestOffer = offers.find((o) => o.bestValue || o.bestPrice) ?? offers[0]
  const bestPlatform = bestOffer ? getPlatform(bestOffer.platformId) : null
  const bestProvider = bestPlatform?.name ?? 'Klook'
  const description =
    experience.id === 'colosseum-guided-tour'
      ? COLOSSEUM_DESCRIPTION
      : experience.description

  const scrollToCompare = () => {
    document
      .getElementById('compare-offers')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ExperienceNavbar />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              {
                label: experience.city,
                href: `/destinations/${experience.destinationId}`,
              },
              { label: experience.title },
            ]}
          />
        </div>

        {/* Header: gallery + details + trust */}
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr_0.78fr] lg:gap-7 xl:gap-8">
            <ExperienceGallery images={images} title={experience.title} />

            <ExperienceHeader
              experience={
                experience.id === 'colosseum-guided-tour'
                  ? { ...experience, reviewCount: 3245, rating: 4.6 }
                  : experience
              }
              platformCount={offers.length}
              description={description}
            />

            <TrustCard className="lg:self-start" />
          </div>
        </section>

        {/* Info cards */}
        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            <IncludedCard />
            <VariationCard />
            <RecommendationCard
              providerName={bestProvider}
              providerLogo={bestPlatform?.logo}
              price={bestOffer?.price}
              onSeeWhy={scrollToCompare}
            />
          </div>
        </section>

        {/* Comparison */}
        <section
          id="compare-offers"
          className="border-t border-navy-100 bg-gradient-to-b from-navy-50/40 to-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <OffersComparisonTable offers={offers} />
            <TrustStrip className="mt-8 sm:mt-10" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
