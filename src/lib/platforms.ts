export const LOGO_TOKEN = 'pk_O5I51-bYTnW43cTmplZ1hQ'

export const platformLogo = (domain: string) =>
  `https://img.logo.dev/${domain}?token=${LOGO_TOKEN}&size=200&format=png`

export const platforms = {
  getyourguide: {
    id: 'getyourguide',
    name: 'GetYourGuide',
    domain: 'getyourguide.com',
  },
  viator: { id: 'viator', name: 'Viator', domain: 'viator.com' },
  klook: { id: 'klook', name: 'Klook', domain: 'klook.com' },
  tiqets: { id: 'tiqets', name: 'Tiqets', domain: 'tiqets.com' },
  headout: { id: 'headout', name: 'Headout', domain: 'headout.com' },
  musement: { id: 'musement', name: 'Musement', domain: 'musement.com' },
  civitatis: { id: 'civitatis', name: 'Civitatis', domain: 'civitatis.com' },
  tripadvisor: {
    id: 'tripadvisor',
    name: 'TripAdvisor',
    domain: 'tripadvisor.com',
  },
  tripcom: { id: 'tripcom', name: 'Trip.com', domain: 'trip.com' },
} as const

export type PlatformId = keyof typeof platforms

export function getPlatform(id: PlatformId) {
  return {
    ...platforms[id],
    logo: platformLogo(platforms[id].domain),
  }
}

export function getPlatforms(ids: PlatformId[]) {
  return ids.map(getPlatform)
}
