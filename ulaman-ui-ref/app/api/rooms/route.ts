import { NextResponse } from "next/server"
import type { roomType } from "@/types"

export async function GET() {
  const rooms: roomType[] = [
    {
      id: 1,
      name: "Floating Lake",
      slug: "floating-lake",
      availability: "5 Units Available",
      size: "52m²",
      capacity: 3,
      type: ["Sleeps 3 (With sofa bed)", "King sized bed"],
      shortDesc: "A luxurious floating villa on Ulaman's bio-filtered lake.",
      description: `Set above Bali's only bio-filtered, koi-filled lake, Ulaman's Floating Lake Villas offer a serene and luxurious experience. Each villa features a private floating deck and a sunken round hammock, perfect for stargazing or feeding the koi below.`,
      features: ["Private floating deck", "Sunken hammock", "Teakwood bathtub", "Sun deck patio", "Hanging net"],
      imageUrl: ["/floating-lake1.avif", "/floating-lake2.avif", "/floating-lake-3.avif"],
      pricePerNight: "IDR 2.500.000++",
    },
    {
      id: 2,
      name: "Cocoon Jungle",
      slug: "cocoon-jungle",
      availability: "3 Units Available",
      size: "72m²",
      capacity: 2,
      type: ["Sleeps 2", "King sized bed"],
      shortDesc: "Indulge in an unparalleled blend of exotic elegance and coziness.",
      description:
        "Elevated among the treetops, the Cocoon Jungle Villa is a bamboo-woven sanctuary featuring a black bamboo bathroom and a spacious private balcony overlooking the jungle, garden, and pool.",
      features: ["Bamboo floors", "Private balcony", "Black bamboo bathroom", "Jungle views", "Refined ensuite"],
      imageUrl: ["/cocoon-jungle1.avif", "/cocoon-jungle2.avif","/cocoon-jungle3.avif"],
      pricePerNight: "IDR 3.000.000++",
    },
    {
      id: 3,
      name: "Avatar Tree House",
      slug: "avatar-tree-house",
      availability: "4 Units Available",
      size: "64m²",
      capacity: 3,
      type: ["Sleeps 3", "King sized bed"],
      shortDesc: "Experience luxury in an avatar-inspired sky villa with 180° view",
      description: `Elevated 9 meters above ground, Avatar Tree House Villas offer a unique sanctuary surrounded by breathtaking rice field views and lush jungle landscapes. Accessed via a striking bamboo-woven tunnel.`,
      features: [
        "9m elevation",
        "Rice field views",
        "Bamboo tunnel access",
        "Jungle immersion",
        "Architectural elegance",
      ],
      imageUrl: ["/cocoon-jungle1.avif", "/cocoon-jungle2.avif","/cocoon-jungle3.avif"],
      pricePerNight: "IDR 2.800.000++",
    },
  ]

  return NextResponse.json(rooms)
}
