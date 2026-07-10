import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

import { BlogCard } from '@/components/blog/BlogCard'
import { MainLayout } from '@/components/layout/MainLayout'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { blogPosts } from '@/data/blog'

export function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <MainLayout>
      <section className="relative overflow-hidden border-b border-navy-100 bg-gradient-to-b from-slate-50 via-white to-white">
        <div
          className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-teal/10 blur-3xl"
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
            <span className="font-medium text-navy">Blog</span>
          </nav>

          <SectionHeader
            label="TourVego blog"
            subtitle="Guides and tips for comparing travel experiences — prices, features, and smarter booking decisions."
          >
            Ideas for travelers who{' '}
            <span className="text-teal">compare before they book</span>
          </SectionHeader>

          <p className="mt-5 text-sm text-navy-500">
            <span className="font-semibold text-navy">{blogPosts.length} articles</span>
            {' · '}
            destinations, tips, and product insights
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {featured && (
              <BlogCard post={featured} index={0} featured />
            )}
            {rest.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
