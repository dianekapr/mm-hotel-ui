import { NextResponse } from "next/server"
import type { Activity } from "@/types"

export async function GET() {
  const activities: Activity[] = [
    {
      id: 1,
      name: "Private Yoga Session",
      description: [
        "Enjoy a private yoga session designed for you. Choose from Hatha for strength, Yin for deep relaxation, or Fly High Yoga with aerial support.",
      ],
      duration: "60 minutes",
      price: ["IDR 1.000.000++", "IDR 1.500.000++"],
      imageUrl: "/private-yoga-session-bali.jpg",
      addInfo: "Personalized instruction from certified yoga masters",
      category: "wellness",
    },
    {
      id: 2,
      name: "Waterfall Dining",
      description: [
        "An exclusive and intimate dining experience set in front of a magical natural waterfall with handmade Balinese ornaments and personalized service.",
      ],
      duration: "2-3 hours",
      price: ["IDR 350.000++"],
      imageUrl: "/waterfall-dining-bali.jpg",
      addInfo: "4-Course Chef's Selection menu with romantic ambiance",
      category: "cultural",
    },
    {
      id: 3,
      name: "Balinese Massage",
      description: [
        "Traditional Balinese massage using ancient techniques and natural oils to rejuvenate your body and mind.",
      ],
      duration: "60-90 minutes",
      price: ["IDR 800.000++"],
      imageUrl: "/balinese-massage-spa.jpg",
      addInfo: "Performed by certified traditional massage therapists",
      category: "wellness",
    },
    {
      id: 4,
      name: "Jungle Trekking",
      description: [
        "Explore the lush Balinese jungle with expert guides, discovering hidden waterfalls, rice terraces, and local villages.",
      ],
      duration: "3-4 hours",
      price: ["IDR 600.000++"],
      imageUrl: "/jungle-trekking-bali.jpg",
      addInfo: "Includes refreshments and local guide expertise",
      category: "adventure",
    },
  ]

  return NextResponse.json(activities)
}
