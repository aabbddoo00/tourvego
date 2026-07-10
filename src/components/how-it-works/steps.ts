import { ExternalLink, GitCompareArrows, Search, type LucideIcon } from 'lucide-react'

export interface HowItWorksStep {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: '01',
    title: 'Search an experience',
    description:
      'Find a tour, ticket, attraction, or activity by destination or keyword.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Compare platforms',
    description:
      'See the same experience across GetYourGuide, Viator, Klook, and more side by side.',
    icon: GitCompareArrows,
  },
  {
    number: '03',
    title: 'Book the best value',
    description:
      'Choose the best price or best value, then book directly with the provider.',
    icon: ExternalLink,
  },
]
