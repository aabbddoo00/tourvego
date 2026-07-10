import { HeroContent } from '@/components/hero/HeroContent'
import { HeroSearch } from '@/components/hero/HeroSearch'
import { TrustBadges } from '@/components/hero/TrustBadges'
import { CTAButtons } from '@/components/hero/CTAButtons'
import { TravelVisual } from '@/components/hero/TravelVisual'
import { Navbar } from '@/components/layout/Navbar'

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Dotted world-map background */}
      <div
        className="pointer-events-none absolute inset-0 bg-contain bg-top bg-no-repeat md:bg-cover md:bg-center"
        style={{ backgroundImage: "url('/imgs/hero-bg.png')" }}
      />
      {/* Light wash to keep the left content crisp and readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />

      <Navbar />

      <section className="relative mx-auto max-w-7xl px-4 pb-2 pt-6 sm:px-6 sm:pb-3 sm:pt-8 lg:px-8 lg:pb-4 lg:pt-10">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          {/* Left column — content */}
          <div className="relative z-10 order-1 md:order-none">
            <HeroContent />
            <HeroSearch />
            <TrustBadges />
            <CTAButtons />
          </div>

          {/* Right column — visual collage */}
          <div className="relative z-10 order-2 md:order-none">
            <TravelVisual />
          </div>
        </div>
      </section>
    </div>
  )
}
