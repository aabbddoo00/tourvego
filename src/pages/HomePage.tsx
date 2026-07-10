import { HeroSection } from '@/components/hero/HeroSection'
import { TopDestinations } from '@/components/destinations/TopDestinations'
import { PopularExperiences } from '@/components/experiences/PopularExperiences'
import { HowItWorks } from '@/components/how-it-works/HowItWorks'
import { Footer } from '@/components/layout/Footer'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TopDestinations />
      <PopularExperiences />
      <HowItWorks />
      <Footer />
    </>
  )
}
