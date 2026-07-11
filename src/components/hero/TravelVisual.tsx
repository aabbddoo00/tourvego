import { ComparisonCard } from '@/components/hero/ComparisonCard'
import { LiveStatsStrip } from '@/components/hero/LiveStatsStrip'
import { SavingsCard } from '@/components/hero/SavingsCard'
import { TrustpilotCard } from '@/components/hero/TrustpilotCard'

export function TravelVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div className="pointer-events-none absolute -inset-6 -z-10">
        <div className="absolute right-0 top-8 h-48 w-48 rounded-full bg-teal-100/50 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-40 w-40 rounded-full bg-navy-100/40 blur-3xl" />
      </div>

      <LiveStatsStrip className="mb-3" />

      <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
        <ComparisonCard className="min-w-0 flex-1" />

        <div className="grid grid-cols-2 gap-3 lg:w-[168px] lg:shrink-0 lg:grid-cols-1 lg:gap-3">
          <SavingsCard className="h-full" />
          <TrustpilotCard className="h-full" />
        </div>
      </div>
    </div>
  )
}
