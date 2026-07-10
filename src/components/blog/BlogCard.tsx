import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

import type { BlogPost } from '@/data/blog'
import { formatBlogDate } from '@/data/blog'
import { cn } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
  index?: number
  featured?: boolean
}

export function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: 'easeOut' }}
      className={cn(
        'group overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/25 hover:shadow-card',
        featured && 'sm:col-span-2 lg:col-span-2 lg:grid lg:grid-cols-2'
      )}
    >
      <Link to={`/blog/${post.id}`} className="contents">
        <div
          className={cn(
            'relative overflow-hidden bg-gradient-to-br from-teal-100 to-navy-100',
            featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-full' : 'aspect-[16/10]'
          )}
        >
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.visibility = 'hidden'
            }}
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy shadow-sm backdrop-blur-sm">
            {post.category}
          </span>
        </div>

        <div className="flex flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-navy-400">
            <span>{formatBlogDate(post.date)}</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h2
            className={cn(
              'mt-3 font-bold tracking-tight text-navy transition-colors group-hover:text-teal',
              featured ? 'text-xl sm:text-2xl' : 'text-lg'
            )}
          >
            {post.title}
          </h2>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
            {post.excerpt}
          </p>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-navy-100 pt-4">
            <span className="text-xs font-medium text-navy-500">{post.author}</span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal">
              Read article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
