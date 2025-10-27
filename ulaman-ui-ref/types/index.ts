export type roomType = {
  id: number
  name: string
  slug: string
  availability: string
  size: string
  capacity: number
  type: string[]
  shortDesc: string
  description: string
  features: string[]
  imageUrl: string[]
  pricePerNight: string
}

export type activityType = {
  id: number
  name: string
  description: string[]
  duration: string
  price: string[]
  imageUrl: string
  addInfo: string
  category: "wellness" | "adventure" | "cultural"
}

export type packageType = {
  id: number
  name: string
  slug: string
  duration: string
  description: string
  imageUrl: string
  addInfo: string[]
  price: string
  includes: string[]
}

export type experienceType = {
  id: number
  imageUrl: string
  name: string
  description: string | string[]
  price: string | number
  duration?: string
}

export type retreatType = {
  id: number
  name: string
  duration: string
  description: string
  imageUrl: string
  benefits: string[]
  price: string
  category: "relaxation" | "healing" | "transformation"
  schedule: string[]
}

export type facilityType = {
  id: number
  name: string
  imageUrl: string
  description: string
  icon?: string
}

export type reviewType = {
  id: number
  content: string
  author: string
  rating: number
  role?: string
}

export type NavLinkType = {
  label: string
  href: string
}

// Component Props Types
export type HeaderProps = {}

export type HeroSectProps = {}

export type MapSectionProps = {}

export type FooterProps = {}

export type RoomsCardProps = {
  room: roomType
}

export type ActivityCardProps = {
  activity: activityType
}

export type PackageCardProps = {
  package: packageType
}

export type RetreatCardProps = {
  retreat: retreatType
}

export type ExperienceCardProps = {
  experience: experienceType
}
