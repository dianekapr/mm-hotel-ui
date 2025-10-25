export type Room = {
  id: number
  name: string
  availability: string
  size: string
  capacity: number
  roomType: string[]
  description: string
  features: string[]
  imageUrl: string[]
  pricePerNight: string
}

export type Activity = {
  id: number
  name: string
  description: string[]
  duration: string
  price: string[]
  imageUrl: string
  addInfo: string
  category: "wellness" | "adventure" | "cultural"
}

export type Package = {
  id: number
  name: string
  duration: string
  description: string
  imageUrl: string
  addInfo: string[]
  price: string
  includes: string[]
}

export type Experience = {
  id: number
  imageUrl: string
  name: string
  description: string | string[]
  price: string | number
  duration?: string
}

export type Retreat = {
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

export type Facility = {
  id: number
  name: string
  imageUrl: string
  description: string
  icon?: string
}

export type Review = {
  id: number
  content: string
  author: string
  rating: number
  role?: string
}

export type NavLink = {
  label: string
  href: string
}

// Component Props Types
export type HeaderProps = {}

export type HeroSectProps = {}

export type MapSectionProps = {}

export type FooterProps = {}

export type RoomsCardProps = {
  room: Room
}

export type ActivityCardProps = {
  activity: Activity
}

export type PackageCardProps = {
  package: Package
}

export type RetreatCardProps = {
  retreat: Retreat
}

export type ExperienceCardProps = {
  experience: Experience
}
