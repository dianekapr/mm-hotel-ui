import { NextResponse } from "next/server"
import type { packageType } from "@/types"

export async function GET() {
  const packages: packageType[] = [
    {
      id: 1,
      name: "The Avatar Experience",
      slug: "the-avatar-experience",
      duration: "3 Days / 2 Nights",
      description:
        "Experience sustainable luxury in a sky villa with breathtaking 180° jungle and river views. Includes spa rituals, yoga, and organic meals.",
      imageUrl: "/t-a-e.avif",
      addInfo: [
        "3D2N stay at Avatar Tree House or Floating Lake",
        "Chef's Special Selection Lunch or Dinner for Couple",
        "Nature Trekking or Village Tour for Couple",
        "Airport Pick Up",
      ],
      price: "IDR 15.000.000++",
      includes: ["Accommodation", "Meals", "Activities", "Transfers"],
    },
    {
      id: 2,
      name: "The Ultimate Honeymoon",
      slug: "the-ultimate-honeymoon",
      duration: "3 Days / 2 Nights",
      description:
        "A romantic eco-luxury escape designed for couples, featuring candlelight dinners, couple's spa sessions, and private villa stays.",
      imageUrl: "/t-u-h.avif",
      addInfo: [
        "3D2N stay at Jungle Garden Pool Villa",
        "Romantic Dinner with Wine / Cocktail",
        "60-Minute Balinese Massage for Couple",
        "Flower Bath",
        "Floating Breakfast in Pool Villa",
      ],
      price: "IDR 15.750.000++",
      includes: ["Luxury accommodation", "Romantic dinners", "Spa treatments", "Breakfast"],
    }
  ]

  return NextResponse.json(packages)
}
