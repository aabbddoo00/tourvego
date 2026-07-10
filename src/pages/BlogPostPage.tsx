import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ChevronRight, Clock } from 'lucide-react'

import { BlogCard } from '@/components/blog/BlogCard'
import { MainLayout } from '@/components/layout/MainLayout'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Button } from '@/components/ui/button'
import {
  formatBlogDate,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from '@/data/blog'

export function BlogPostPage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return (
      <MainLayout>
        <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-navy sm:text-3xl">
            Article not found
          </h1>
          <p className="mt-3 max-w-md text-navy-500">
            We couldn&apos;t find that blog post. Browse the latest articles from
            the TourVego blog.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full bg-teal px-8 hover:bg-teal-700"
          >
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
          </Button>
        </div>
      </MainLayout>
    )
  }

  const related = getRelatedBlogPosts(post.id)

  return (
    <MainLayout>
      <article>
        <section className="relative overflow-hidden border-b border-navy-100">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-navy-800 to-navy-900" />
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.visibility = 'hidden'
            }}
          />
          <div className="absolute inset-0 bg-navy/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/55 to-navy/30" />

          <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-white/80"
            >
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" />
              <Link to="/blog" className="transition-colors hover:text-white">
                Blog
              </Link>
              <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" />
              <span className="truncate text-white/90">{post.title}</span>
            </nav>

            <span className="inline-flex rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white">
              {post.category}
            </span>

            <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {post.excerpt}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/75">
              <span className="font-medium text-white">{post.author}</span>
              <span>{formatBlogDate(post.date)}</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-teal-300" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-5">
              {post.content.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base leading-relaxed text-navy-600 sm:text-lg sm:leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-teal/20 bg-teal-50/50 p-5 sm:p-6">
              <p className="text-sm font-semibold text-navy">
                Ready to compare an experience?
              </p>
              <p className="mt-1 text-sm text-navy-500">
                Browse destinations and see platform prices side by side.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild className="rounded-full">
                  <Link to="/experiences">Browse experiences</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/blog">More articles</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="border-t border-navy-100 bg-gradient-to-b from-slate-50/60 to-white pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Keep reading"
              subtitle="More guides and tips for comparing travel experiences across platforms."
            >
              Related <span className="text-teal">articles</span>
            </SectionHeader>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {related.map((item, index) => (
                <BlogCard key={item.id} post={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  )
}
