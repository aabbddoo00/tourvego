export type DestinationBadge = 'Popular' | 'Trending' | 'Best Value' | 'Rising'

export interface Destination {
  id: string
  city: string
  country: string
  experiences: number
  badge: DestinationBadge
  image: string
  featured?: boolean
}

export const destinations: Destination[] = [
  {
    id: 'paris',
    city: 'Paris',
    country: 'France',
    experiences: 124,
    badge: 'Popular',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=1000&fit=crop&q=80',
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'UAE',
    experiences: 98,
    badge: 'Best Value',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 'rome',
    city: 'Rome',
    country: 'Italy',
    experiences: 112,
    badge: 'Trending',
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 'istanbul',
    city: 'Istanbul',
    country: 'Turkey',
    experiences: 86,
    badge: 'Popular',
    image:
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 'cairo',
    city: 'Cairo',
    country: 'Egypt',
    experiences: 74,
    badge: 'Rising',
    image:
      'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 'santorini',
    city: 'Santorini',
    country: 'Greece',
    experiences: 63,
    badge: 'Best Value',
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 'barcelona',
    city: 'Barcelona',
    country: 'Spain',
    experiences: 91,
    badge: 'Trending',
    image:
      'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&h=600&fit=crop&q=80',
  },
]
