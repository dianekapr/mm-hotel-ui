import { NextResponse } from "next/server"
import type { packageType } from "@/types"

export async function GET() {
  const packages: packageType[] = [
    {
      id: 1,
      name: "The Avatar Experience",
      duration: "3 Days / 2 Nights",
      description:
        "Experience sustainable luxury in a sky villa with breathtaking 180° jungle and river views. Includes spa rituals, yoga, and organic meals.",
      imageUrl: "/avatar-experience-package.jpg",
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
      duration: "3 Days / 2 Nights",
      description:
        "A romantic eco-luxury escape designed for couples, featuring candlelight dinners, couple's spa sessions, and private villa stays.",
      imageUrl: "/honeymoon-package-bali.jpg",
      addInfo: [
        "3D2N stay at Jungle Garden Pool Villa",
        "Romantic Dinner with Wine / Cocktail",
        "60-Minute Balinese Massage for Couple",
        "Flower Bath",
        "Floating Breakfast in Pool Villa",
      ],
      price: "IDR 15.750.000++",
      includes: ["Luxury accommodation", "Romantic dinners", "Spa treatments", "Breakfast"],
    },
    {
      id: 3,
      name: "Wellness Retreat Package",
      duration: "5 Days / 4 Nights",
      description:
        "A comprehensive wellness journey combining yoga, meditation, spa treatments, and healthy organic cuisine.",
      imageUrl: "/wellness-retreat-package.jpg",
      addInfo: [
        "5D4N accommodation in premium villa",
        "Daily yoga and meditation sessions",
        "3 spa treatments",
        "Organic wellness meals",
        "Wellness consultation",
      ],
      price: "IDR 22.500.000++",
      includes: ["Accommodation", "Yoga classes", "Spa", "Meals", "Consultation"],
    },
  ]

  return NextResponse.json(packages)
}
