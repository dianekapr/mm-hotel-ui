import { NextResponse } from "next/server"
import type { Room } from "@/types"

export async function GET() {
  const rooms: Room[] = [
    {
      id: 1,
      name: "Floating Lake Villa",
      availability: "5 Units Available",
      size: "52m²",
      capacity: 3,
      roomType: ["Sleeps 3 (With sofa bed)", "King sized bed"],
      description: `Set above Bali's only bio-filtered, koi-filled lake, Ulaman's Floating Lake Villas offer a serene and luxurious experience. Each villa features a private floating deck and a sunken round hammock, perfect for stargazing or feeding the koi below.`,
      features: ["Private floating deck", "Sunken hammock", "Teakwood bathtub", "Sun deck patio", "Hanging net"],
      imageUrl: ["/floating-lake-villa-bali.jpg", "/luxury-villa-interior.jpg"],
      pricePerNight: "IDR 2.500.000++",
    },
    {
      id: 2,
      name: "Cocoon Jungle Villa",
      availability: "3 Units Available",
      size: "72m²",
      capacity: 2,
      roomType: ["Sleeps 2", "King sized bed"],
      description:
        "Elevated among the treetops, the Cocoon Jungle Villa is a bamboo-woven sanctuary featuring a black bamboo bathroom and a spacious private balcony overlooking the jungle, garden, and pool.",
      features: ["Bamboo floors", "Private balcony", "Black bamboo bathroom", "Jungle views", "Refined ensuite"],
      imageUrl: ["/cocoon-jungle-villa-bali.jpg", "/bamboo-villa-interior.jpg"],
      pricePerNight: "IDR 3.000.000++",
    },
    {
      id: 3,
      name: "Avatar Tree House",
      availability: "4 Units Available",
      size: "64m²",
      capacity: 3,
      roomType: ["Sleeps 3", "King sized bed"],
      description: `Elevated 9 meters above ground, Avatar Tree House Villas offer a unique sanctuary surrounded by breathtaking rice field views and lush jungle landscapes. Accessed via a striking bamboo-woven tunnel.`,
      features: [
        "9m elevation",
        "Rice field views",
        "Bamboo tunnel access",
        "Jungle immersion",
        "Architectural elegance",
      ],
      imageUrl: ["/avatar-treehouse-villa-bali.jpg", "/treehouse-interior.jpg"],
      pricePerNight: "IDR 2.800.000++",
    },
  ]

  return NextResponse.json(rooms)
}
