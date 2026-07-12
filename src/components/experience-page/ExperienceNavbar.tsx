import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, Globe, Menu, Search, User, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

import { Logo } from '@/components/layout/Logo'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navLinks = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'Tours & Attractions', href: '/experiences' },
  { label: 'How It Works', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

const currencies = ['USD', 'EUR', 'GBP', 'AUD', 'CAD']

export function ExperienceNavbar() {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [currency, setCurrency] = useState('USD')
  const [query, setQuery] = useState('')

  const submitSearch = (event?: FormEvent) => {
    event?.preventDefault()
    const q = query.trim()
    if (!q) return
    navigate(`/search?q=${encodeURIComponent(q)}`)
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-100/70 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Logo className="shrink-0" />

        <form
          onSubmit={submitSearch}
          className="relative hidden min-w-0 flex-1 md:block lg:mx-4 lg:max-w-md"
        >
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tours, attractions, tickets…"
            className="h-10 w-full rounded-full border border-navy-200 bg-navy-50/50 pl-10 pr-4 text-sm text-navy placeholder:text-navy-400 outline-none transition focus:border-teal-300 focus:bg-white focus:ring-2 focus:ring-teal-100"
          />
        </form>

        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-navy-600 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 sm:flex">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-navy-500 transition-colors hover:bg-navy-50 hover:text-navy"
            aria-label="Change language"
          >
            <Globe className="h-[18px] w-[18px]" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex h-9 items-center gap-1 rounded-full border border-navy-200 px-3 text-sm font-medium text-navy transition-colors hover:bg-navy-50"
              >
                {currency}
                <ChevronDown className="h-3.5 w-3.5 text-navy-400" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {currencies.map((c) => (
                <DropdownMenuItem key={c} onClick={() => setCurrency(c)}>
                  {c}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition-colors hover:bg-navy-50 hover:text-navy"
            aria-label="Account"
          >
            <User className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg text-navy sm:ml-0 xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className="border-t border-navy-100 px-4 py-2.5 md:hidden">
        <form onSubmit={submitSearch} className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tours, attractions, tickets…"
            className="h-10 w-full rounded-full border border-navy-200 bg-navy-50/50 pl-10 pr-4 text-sm text-navy placeholder:text-navy-400 outline-none focus:border-teal-300 focus:bg-white focus:ring-2 focus:ring-teal-100"
          />
        </form>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-navy-100 bg-white xl:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy-600 hover:bg-navy-50 hover:text-navy"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
