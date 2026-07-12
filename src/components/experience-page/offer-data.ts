import type { PlatformId } from '@/lib/platforms'
import type { Experience } from '@/components/experiences/experiences'

export type OfferCellValue = string | boolean | null

export interface ComparisonOffer {
  platformId: PlatformId
  price: number
  currency: string
  duration: string
  sharedPrivate: string
  pickup: string
  ticketsIncluded: boolean | null
  guideLanguage: string
  mealIncluded: boolean | null
  cancellation: string
  rating: number
  reviewCount: number
  lastUpdated: string
  bestPrice?: boolean
  bestValue?: boolean
  dealUrl: string
}

export interface ComparisonRowDef {
  key: keyof ComparisonOffer | 'book'
  label: string
  type: 'price' | 'text' | 'bool' | 'rating' | 'cta'
}

export const COMPARISON_ROWS: ComparisonRowDef[] = [
  { key: 'price', label: 'Price', type: 'price' },
  { key: 'currency', label: 'Currency', type: 'text' },
  { key: 'duration', label: 'Duration', type: 'text' },
  { key: 'sharedPrivate', label: 'Shared / Private', type: 'text' },
  { key: 'pickup', label: 'Pickup', type: 'text' },
  { key: 'ticketsIncluded', label: 'Tickets included', type: 'bool' },
  { key: 'guideLanguage', label: 'Guide language', type: 'text' },
  { key: 'mealIncluded', label: 'Meal included', type: 'bool' },
  { key: 'cancellation', label: 'Cancellation policy', type: 'text' },
  { key: 'rating', label: 'Rating / review count', type: 'rating' },
  { key: 'lastUpdated', label: 'Last updated', type: 'text' },
  { key: 'book', label: 'Book on provider site', type: 'cta' },
]

const COLOSSEUM_OFFERS: ComparisonOffer[] = [
  {
    platformId: 'klook',
    price: 43,
    currency: 'USD',
    duration: '2.5 hours',
    sharedPrivate: 'Shared',
    pickup: 'Optional',
    ticketsIncluded: true,
    guideLanguage: 'English',
    mealIncluded: false,
    cancellation: 'Free up to 24h',
    rating: 4.7,
    reviewCount: 12562,
    lastUpdated: '2h ago',
    bestPrice: true,
    bestValue: true,
    dealUrl: 'https://www.klook.com',
  },
  {
    platformId: 'getyourguide',
    price: 45,
    currency: 'USD',
    duration: '2.5 hours',
    sharedPrivate: 'Shared',
    pickup: 'Yes',
    ticketsIncluded: true,
    guideLanguage: 'English',
    mealIncluded: false,
    cancellation: 'Free up to 24h',
    rating: 4.6,
    reviewCount: 8943,
    lastUpdated: '3h ago',
    dealUrl: 'https://www.getyourguide.com',
  },
  {
    platformId: 'viator',
    price: 48,
    currency: 'USD',
    duration: '3 hours',
    sharedPrivate: 'Shared',
    pickup: 'Not included',
    ticketsIncluded: false,
    guideLanguage: 'English',
    mealIncluded: false,
    cancellation: 'Free up to 24h',
    rating: 4.5,
    reviewCount: 6421,
    lastUpdated: '4h ago',
    dealUrl: 'https://www.viator.com',
  },
  {
    platformId: 'tiqets',
    price: 49,
    currency: 'USD',
    duration: '2.5 hours',
    sharedPrivate: 'Shared',
    pickup: 'Not included',
    ticketsIncluded: true,
    guideLanguage: 'English',
    mealIncluded: false,
    cancellation: 'Non-refundable',
    rating: 4.4,
    reviewCount: 3810,
    lastUpdated: '5h ago',
    dealUrl: 'https://www.tiqets.com',
  },
  {
    platformId: 'headout',
    price: 52,
    currency: 'USD',
    duration: '3 hours',
    sharedPrivate: 'Shared & Private',
    pickup: 'Optional',
    ticketsIncluded: true,
    guideLanguage: 'English',
    mealIncluded: true,
    cancellation: 'Free up to 48h',
    rating: 4.6,
    reviewCount: 5120,
    lastUpdated: '2h ago',
    dealUrl: 'https://www.headout.com',
  },
  {
    platformId: 'tripcom',
    price: 55,
    currency: 'USD',
    duration: '2.5 hours',
    sharedPrivate: 'Shared',
    pickup: 'Yes',
    ticketsIncluded: true,
    guideLanguage: 'Multiple',
    mealIncluded: false,
    cancellation: 'Free up to 24h',
    rating: 4.5,
    reviewCount: 2890,
    lastUpdated: '6h ago',
    dealUrl: 'https://www.trip.com',
  },
]

function offersFromExperience(experience: Experience): ComparisonOffer[] {
  const sorted = [...experience.platformPrices].sort((a, b) => a.price - b.price)
  const min = sorted[0]?.price ?? experience.fromPrice

  return sorted.map((offer, index) => ({
    platformId: offer.platformId,
    price: offer.price,
    currency: 'USD',
    duration: experience.duration,
    sharedPrivate: 'Shared',
    pickup: offer.features.guidedOption ? 'Optional' : 'Not included',
    ticketsIncluded: offer.features.mobileTicket,
    guideLanguage: 'English',
    mealIncluded: false,
    cancellation: offer.features.freeCancellation
      ? 'Free up to 24h'
      : 'Non-refundable',
    rating: Math.max(4.2, experience.rating - index * 0.05),
    reviewCount: Math.max(500, Math.round(experience.reviewCount / (index + 2))),
    lastUpdated: `${index + 2}h ago`,
    bestPrice: offer.price === min,
    bestValue: index === 0,
    dealUrl: `https://www.${offer.platformId === 'getyourguide' ? 'getyourguide.com' : offer.platformId === 'tripadvisor' ? 'tripadvisor.com' : offer.platformId + '.com'}`,
  }))
}

export function getComparisonOffers(experience: Experience): ComparisonOffer[] {
  if (experience.id === 'colosseum-guided-tour') {
    return COLOSSEUM_OFFERS
  }
  return offersFromExperience(experience)
}

export const GALLERY_IMAGES = {
  colosseum: [
    'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&h=900&fit=crop&q=80',
    'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&h=450&fit=crop&q=80',
    'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=600&h=450&fit=crop&q=80',
    'https://images.unsplash.com/photo-1531572753320-87aaf6ef93ad?w=600&h=450&fit=crop&q=80',
  ],
}

export function getGalleryImages(experience: Experience): string[] {
  if (experience.id === 'colosseum-guided-tour') {
    return GALLERY_IMAGES.colosseum
  }
  return [
    experience.image,
    experience.image,
    experience.image,
    experience.image,
  ]
}
