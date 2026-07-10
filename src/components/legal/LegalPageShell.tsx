import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'

import { MainLayout } from '@/components/layout/MainLayout'
import { SectionHeader } from '@/components/layout/SectionHeader'

interface LegalSection {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

interface LegalPageShellProps {
  breadcrumb: string
  label: string
  title: ReactNode
  subtitle: string
  updated: string
  sections: LegalSection[]
}

export function LegalPageShell({
  breadcrumb,
  label,
  title,
  subtitle,
  updated,
  sections,
}: LegalPageShellProps) {
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
            <span className="font-medium text-navy">{breadcrumb}</span>
          </nav>

          <SectionHeader label={label} subtitle={subtitle}>
            {title}
          </SectionHeader>

          <p className="mt-5 text-sm text-navy-500">
            Last updated:{' '}
            <span className="font-semibold text-navy">{updated}</span>
          </p>
        </div>
      </section>

      <section className="bg-white pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold tracking-tight text-navy">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-sm leading-relaxed text-navy-500 sm:text-[15px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-navy-500 sm:text-[15px]">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-navy-100 bg-slate-50/80 p-5 sm:p-6">
            <p className="text-sm font-semibold text-navy">Questions?</p>
            <p className="mt-1 text-sm text-navy-500">
              Contact us at{' '}
              <a
                href="mailto:support@tourvego.com"
                className="font-medium text-teal hover:underline"
              >
                support@tourvego.com
              </a>{' '}
              or visit our{' '}
              <Link to="/help" className="font-medium text-teal hover:underline">
                Help Center
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
