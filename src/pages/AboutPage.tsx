import { Link } from 'react-router-dom'
import {
  ChevronRight,
  Eye,
  GitCompareArrows,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import { MainLayout } from '@/components/layout/MainLayout'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Button } from '@/components/ui/button'

const values = [
  {
    title: 'Compare, don’t sell',
    description:
      'TourVego is not a booking agency. We surface the same experience across platforms so you can choose where the value is best.',
    icon: GitCompareArrows,
  },
  {
    title: 'Clarity over clutter',
    description:
      'Prices and key features side by side — free cancellation, skip the line, mobile tickets, and more — without the noise.',
    icon: Eye,
  },
  {
    title: 'Book with the provider',
    description:
      'When you’re ready, you complete the booking on the platform you trust. We never charge a TourVego booking fee.',
    icon: ShieldCheck,
  },
]

const steps = [
  {
    number: '01',
    title: 'Search an experience',
    text: 'Find a tour, ticket, or activity by destination or keyword.',
  },
  {
    number: '02',
    title: 'Compare platforms',
    text: 'See prices and features across GetYourGuide, Viator, Klook, and more.',
  },
  {
    number: '03',
    title: 'Book the best value',
    text: 'Choose the offer that fits you, then book directly with the provider.',
  },
]

export function AboutPage() {
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
            <span className="font-medium text-navy">About</span>
          </nav>

          <SectionHeader
            label="About TourVego"
            subtitle="We’re building a clearer way to compare travel experiences — so you spend less time hunting deals and more time planning the trip."
          >
            The smarter way to{' '}
            <span className="text-teal">compare travel experiences</span>
          </SectionHeader>
        </div>
      </section>

      <section className="bg-white pb-12 pt-10 sm:pb-16 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal">
                Our mission
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Help travelers see the full picture before they book
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-500 sm:text-lg">
                The same Colosseum tour or Eiffel Tower ticket can look different
                on every platform — different prices, different inclusions,
                different cancellation rules. TourVego brings those offers
                together so you can compare with confidence.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-500 sm:text-lg">
                We focus on tours, attractions, and activities — not flights or
                hotels — because experience booking is where comparison matters
                most.
              </p>
            </div>

            <div className="rounded-3xl border border-navy-100 bg-gradient-to-br from-teal-50 via-white to-slate-50 p-6 shadow-soft sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white">
                <Sparkles className="h-3.5 w-3.5" />
                Comparison first
              </span>
              <p className="mt-5 text-lg font-bold leading-snug text-navy sm:text-xl">
                TourVego is a comparison layer — not a travel agency.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-500">
                Search destinations, open an experience, and compare platform
                offers. Booking always happens on the provider’s site.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full">
                  <Link to="/destinations">Explore destinations</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/#how-it-works">How it works</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-navy-100 bg-gradient-to-b from-slate-50/80 to-white pb-14 pt-10 sm:pb-20 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What we believe"
            subtitle="A few principles that shape every page on TourVego."
          >
            Built for <span className="text-teal">clear decisions</span>
          </SectionHeader>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
            {values.map((value) => {
              const Icon = value.icon

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-navy-100 bg-white pb-16 pt-10 sm:pb-20 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="How TourVego works"
            subtitle="Three simple steps from search to booking on the platform you choose."
          >
            From search to <span className="text-teal">best value</span>
          </SectionHeader>

          <ol className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
            {steps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft"
              >
                <span className="text-sm font-bold text-teal">{step.number}</span>
                <h3 className="mt-3 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl border border-teal/20 bg-teal-50/50 px-5 py-8 text-center sm:px-8">
            <h2 className="text-xl font-bold text-navy">
              Ready to compare your next experience?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-navy-500">
              Browse destinations or jump into experiences and see platform
              offers side by side.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/experiences">Browse experiences</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <Link to="/help">Visit help center</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
