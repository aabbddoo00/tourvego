import {
  destinations,
  type Destination,
} from '@/components/destinations/destinations'
import {
  experiences,
  type Experience,
} from '@/components/experiences/experiences'

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.id === slug)
}

export function getExperiencesByDestination(slug: string): Experience[] {
  return experiences.filter((experience) => experience.destinationId === slug)
}

export function getRelatedDestinations(
  slug: string,
  limit = 3
): Destination[] {
  return destinations.filter((destination) => destination.id !== slug).slice(0, limit)
}

export function getFeaturedExperiences(limit = 6): Experience[] {
  return experiences.slice(0, limit)
}

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((experience) => experience.id === slug)
}

export function getRelatedExperiences(
  experience: Experience,
  limit = 3
): Experience[] {
  return experiences
    .filter(
      (item) =>
        item.destinationId === experience.destinationId &&
        item.id !== experience.id
    )
    .slice(0, limit)
}
