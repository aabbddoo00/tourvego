import {
  destinations,
  type Destination,
} from '@/components/destinations/destinations'
import {
  experiences,
  type Experience,
} from '@/components/experiences/experiences'

function normalize(value: string) {
  return value.trim().toLowerCase()
}

function matchesQuery(haystack: string, query: string) {
  return normalize(haystack).includes(query)
}

export function searchDestinations(rawQuery: string): Destination[] {
  const query = normalize(rawQuery)
  if (!query) return []

  return destinations.filter(
    (destination) =>
      matchesQuery(destination.city, query) ||
      matchesQuery(destination.country, query) ||
      matchesQuery(destination.id, query) ||
      matchesQuery(destination.badge, query)
  )
}

export function searchExperiences(rawQuery: string): Experience[] {
  const query = normalize(rawQuery)
  if (!query) return []

  return experiences.filter(
    (experience) =>
      matchesQuery(experience.title, query) ||
      matchesQuery(experience.city, query) ||
      matchesQuery(experience.country, query) ||
      matchesQuery(experience.category, query) ||
      matchesQuery(experience.description, query) ||
      matchesQuery(experience.destinationId, query)
  )
}

export function searchAll(rawQuery: string) {
  return {
    destinations: searchDestinations(rawQuery),
    experiences: searchExperiences(rawQuery),
  }
}
