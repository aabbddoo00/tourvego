import { ComparisonCard } from '@/components/hero/ComparisonCard'
import { ComparisonInsights } from '@/components/hero/ComparisonInsights'
import { LiveStatsStrip } from '@/components/hero/LiveStatsStrip'

export function TravelVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="pointer-events-none absolute -inset-6 -z-10">
        <div className="absolute right-0 top-8 h-48 w-48 rounded-full bg-teal-100/50 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-40 w-40 rounded-full bg-navy-100/40 blur-3xl" />
      </div>

      <LiveStatsStrip className="mb-3" />
      <ComparisonCard className="w-full" />
      <ComparisonInsights className="mt-3" />
    </div>
  )
}
