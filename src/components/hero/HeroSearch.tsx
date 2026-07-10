import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'

export function HeroSearch() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next = query.trim()
    if (!next) return
    navigate(`/search?q=${encodeURIComponent(next)}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mt-8 w-full max-w-xl"
    >
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-full border border-navy-200 bg-white p-2 pl-5 transition-colors focus-within:border-teal-400"
      >
        <Search className="h-5 w-5 shrink-0 text-navy-400" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search tours, attractions, tickets, or destinations"
          className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-navy placeholder:text-navy-400 focus:outline-none sm:text-base"
          aria-label="Search tours, attractions, tickets, or destinations"
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
    </motion.div>
  )
}
