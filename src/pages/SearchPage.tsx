import { FormEvent, useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ChevronRight, Search } from 'lucide-react'

import { DestinationGridCard } from '@/components/destinations/DestinationGridCard'
import { ExperienceListItem } from '@/components/experiences/ExperienceListItem'
import { MainLayout } from '@/components/layout/MainLayout'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Button } from '@/components/ui/button'
import { searchAll } from '@/lib/search'

export function SearchPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const queryFromUrl = searchParams.get('q')?.trim() ?? ''
  const [inputValue, setInputValue] = useState(queryFromUrl)

  useEffect(() => {
    setInputValue(queryFromUrl)
  }, [queryFromUrl])

  const { destinations: matchedDestinations, experiences: matchedExperiences } =
    useMemo(() => searchAll(queryFromUrl), [queryFromUrl])

  const totalResults =
    matchedDestinations.length + matchedExperiences.length
  const hasQuery = queryFromUrl.length > 0

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next = inputValue.trim()
    if (!next) {
      navigate('/search')
      return
    }
    navigate(`/search?q=${encodeURIComponent(next)}`)
  }

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
            <span className="font-medium text-navy">Search</span>
          </nav>

          <SectionHeader
            label="Search results"
            subtitle="Find destinations and experiences to compare across trusted booking platforms."
          >
            {hasQuery ? (
              <>
                Results for{' '}
                <span className="text-teal">&ldquo;{queryFromUrl}&rdquo;</span>
              </>
            ) : (
              <>
                Search travel <span className="text-teal">experiences</span>
              </>
            )}
          </SectionHeader>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex max-w-2xl items-center gap-2 rounded-full border border-navy-200 bg-white p-2 pl-5 transition-colors focus-within:border-teal-400"
          >
            <Search className="h-5 w-5 shrink-0 text-navy-400" />
            <input
              type="search"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Search tours, attractions, tickets, or destinations"
              className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-navy placeholder:text-navy-400 focus:outline-none sm:text-base"
              aria-label="Search query"
            />
            <Button
              type="submit"
              className="hidden shrink-0 rounded-full px-6 shadow-none sm:inline-flex"
            >
              Search
            </Button>
            <Button
              type="submit"
              size="icon"
              className="shrink-0 rounded-full shadow-none sm:hidden"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>

          {hasQuery && (
            <p className="mt-5 text-sm text-navy-500">
              <span className="font-semibold text-navy">{totalResults}</span>{' '}
              {totalResults === 1 ? 'result' : 'results'}
              {' · '}
              <span className="font-semibold text-teal">
                {matchedDestinations.length}
              </span>{' '}
              destinations
              {' · '}
              <span className="font-semibold text-teal">
                {matchedExperiences.length}
              </span>{' '}
              experiences
            </p>
          )}
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {!hasQuery && (
            <div className="rounded-2xl border border-navy-100 bg-white px-6 py-16 text-center shadow-soft">
              <p className="text-lg font-semibold text-navy">
                Start with a search
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm text-navy-500">
                Try a city like Paris, or an experience like Louvre, Colosseum,
                or desert safari.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {['Paris', 'Dubai', 'Louvre', 'Colosseum', 'Safari'].map(
                  (suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() =>
                        navigate(`/search?q=${encodeURIComponent(suggestion)}`)
                      }
                      className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 ring-1 ring-teal/20 transition-colors hover:bg-teal hover:text-white"
                    >
                      {suggestion}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {hasQuery && totalResults === 0 && (
            <div className="rounded-2xl border border-navy-100 bg-white px-6 py-16 text-center shadow-soft">
              <p className="text-lg font-semibold text-navy">No results found</p>
              <p className="mx-auto mt-2 max-w-md text-sm text-navy-500">
                We couldn&apos;t find destinations or experiences matching
                &ldquo;{queryFromUrl}&rdquo;. Try another keyword.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button asChild className="rounded-full">
                  <Link to="/destinations">Browse destinations</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/experiences">Browse experiences</Link>
                </Button>
              </div>
            </div>
          )}

          {matchedDestinations.length > 0 && (
            <div className="mb-12 sm:mb-14">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal">
                    Destinations
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-navy sm:text-2xl">
                    Matching destinations
                  </h2>
                </div>
                <Link
                  to="/destinations"
                  className="shrink-0 text-sm font-semibold text-teal hover:underline"
                >
                  View all
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                {matchedDestinations.map((destination, index) => (
                  <DestinationGridCard
                    key={destination.id}
                    destination={destination}
                    index={index}
                    equal
                  />
                ))}
              </div>
            </div>
          )}

          {matchedExperiences.length > 0 && (
            <div>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal">
                    Experiences
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-navy sm:text-2xl">
                    Matching experiences
                  </h2>
                </div>
                <Link
                  to="/experiences"
                  className="shrink-0 text-sm font-semibold text-teal hover:underline"
                >
                  View all
                </Link>
              </div>
              <div className="flex flex-col gap-4 sm:gap-5">
                {matchedExperiences.map((experience, index) => (
                  <ExperienceListItem
                    key={experience.id}
                    experience={experience}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  )
}
