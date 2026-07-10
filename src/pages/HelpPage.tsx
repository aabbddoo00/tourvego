import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown,
  ChevronRight,
  GitCompareArrows,
  Mail,
  Search,
} from 'lucide-react'

import { MainLayout } from '@/components/layout/MainLayout'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What is TourVego?',
    answer:
      'TourVego is a comparison platform for travel experiences. We help you find the same tour, ticket, or activity across trusted booking sites — then compare prices and features before you book.',
  },
  {
    question: 'Does TourVego sell tickets or book tours?',
    answer:
      'No. TourVego does not process bookings. When you choose an offer, you complete the booking on the provider’s website (such as GetYourGuide, Viator, or Klook).',
  },
  {
    question: 'How do you compare prices?',
    answer:
      'We show listed prices for the same experience across multiple platforms side by side, so you can see the lowest price and what each offer includes before you decide.',
  },
  {
    question: 'Are the prices always up to date?',
    answer:
      'Prices can change on provider sites. Always confirm the final price and availability on the booking platform before you complete your purchase.',
  },
  {
    question: 'What do the features mean (skip the line, free cancellation)?',
    answer:
      'Feature labels reflect what each platform offer typically includes — such as free cancellation, skip-the-line entry, mobile tickets, instant confirmation, or a guided option. Details can vary by ticket type, so check the provider page before booking.',
  },
  {
    question: 'How do I find experiences for a city?',
    answer:
      'Browse Destinations, open a city page, or go to All Experiences and filter by destination. From any experience, tap Compare offers to see platform prices and features.',
  },
  {
    question: 'Who do I contact if something goes wrong with my booking?',
    answer:
      'Because bookings are completed with the provider, support for cancellations, refunds, or ticket issues should go through that platform’s help center. For questions about TourVego itself, email us at support@tourvego.com.',
  },
]

const quickLinks = [
  {
    title: 'Browse destinations',
    description: 'Explore cities and compare local experiences.',
    href: '/destinations',
    icon: Search,
  },
  {
    title: 'All experiences',
    description: 'See tours, tickets, and activities in one list.',
    href: '/experiences',
    icon: GitCompareArrows,
  },
  {
    title: 'How it works',
    description: 'Search, compare platforms, then book the best value.',
    href: '/about',
    icon: Mail,
  },
]

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string
  answer: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-navy-100 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
      >
        <span className="text-sm font-semibold text-navy sm:text-base">
          {question}
        </span>
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 text-teal transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
          <p className="max-w-3xl text-sm leading-relaxed text-navy-500 sm:text-[15px]">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

export function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
            <span className="font-medium text-navy">Help</span>
          </nav>

          <SectionHeader
            label="Help center"
            subtitle="Answers about how TourVego works, how we compare offers, and where bookings happen."
          >
            How can we <span className="text-teal">help you</span>?
          </SectionHeader>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {quickLinks.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.title}
                  to={item.href}
                  className="group rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-teal/25 hover:shadow-card"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 text-base font-bold text-navy">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
                    {item.description}
                  </p>
                </Link>
              )
            })}
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft sm:mt-12">
            <div className="border-b border-navy-100 px-5 py-4 sm:px-6">
              <h2 className="text-lg font-bold text-navy">
                Frequently asked questions
              </h2>
              <p className="mt-1 text-sm text-navy-500">
                Quick answers about comparing and booking with TourVego.
              </p>
            </div>
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                open={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? null : index))
                }
              />
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-teal/20 bg-teal-50/50 px-5 py-8 text-center sm:mt-12 sm:px-8">
            <h2 className="text-xl font-bold text-navy">Still need help?</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-navy-500">
              For questions about TourVego, email our team. For booking issues,
              contact the platform where you purchased your ticket.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="mailto:support@tourvego.com">
                  <Mail className="h-4 w-4" />
                  Email support
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/experiences">Browse experiences</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
