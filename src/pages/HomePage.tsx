import { HeroSection } from '@/components/hero/HeroSection'
import { TopDestinations } from '@/components/destinations/TopDestinations'
import { Footer } from '@/components/layout/Footer'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TopDestinations />
      <Footer />
    </>
  )
}
