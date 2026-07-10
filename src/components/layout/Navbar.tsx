import { useState } from 'react'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import { Logo } from '@/components/layout/Logo'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'Tours & Attractions', href: '/experiences' },
  { label: 'How It Works', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Help', href: '/help' },
]

const currencies = ['USD', 'EUR', 'GBP', 'AUD', 'CAD']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [currency, setCurrency] = useState('USD')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-100/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-navy-600 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
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

          <Button variant="outline" size="sm" className="rounded-full px-5">
            Sign in
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-navy-100 bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy-600 transition-colors hover:bg-navy-50 hover:text-navy"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex items-center gap-3 border-t border-navy-100 pt-4">
                <button
                  type="button"
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-full text-navy-500',
                    'hover:bg-navy-50'
                  )}
                >
                  <Globe className="h-[18px] w-[18px]" />
                </button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="flex h-9 items-center gap-1 rounded-full border border-navy-200 px-3 text-sm font-medium text-navy"
                    >
                      {currency}
                      <ChevronDown className="h-3.5 w-3.5 text-navy-400" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {currencies.map((c) => (
                      <DropdownMenuItem key={c} onClick={() => setCurrency(c)}>
                        {c}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="sm" className="ml-auto rounded-full">
                  Sign in
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
