import { NextResponse } from "next/server"
import type { retreatType } from "@/types"

export async function GET() {
  const retreats: retreatType[] = [
    {
      id: 1,
      name: "Yoga & Wellness Retreat",
      duration: "3 Days / 2 Nights",
      description: "Discover your path to wellness and growth through daily yoga sessions and holistic treatments.",
      imageUrl: "/yoga-wellness-retreat-bali.jpg",
      benefits: ["Daily Yoga Sessions", "Spa Treatments", "Organic Meals", "Meditation", "Wellness Coaching"],
      price: "IDR 12.000.000++",
      category: "relaxation",
      schedule: ["Day 1: Arrival & Welcome Ceremony", "Day 2: Yoga & Spa", "Day 3: Meditation & Departure"],
    },
    {
      id: 2,
      name: "Healing & Renewal Retreat",
      duration: "5 Days / 4 Nights",
      description: "Immerse yourself in traditional Balinese healing practices and rejuvenation therapies.",
      imageUrl: "/healing-renewal-retreat.jpg",
      benefits: [
        "Traditional Balinese Massage",
        "Energy Healing",
        "Herbal Treatments",
        "Nature Walks",
        "Sound Therapy",
      ],
      price: "IDR 18.500.000++",
      category: "healing",
      schedule: ["Day 1-2: Healing Assessment", "Day 3-4: Intensive Treatments", "Day 5: Integration & Departure"],
    },
    {
      id: 3,
      name: "Transformation Journey",
      duration: "7 Days / 6 Nights",
      description: "A profound inner change experience through personalized programs and guided transformation.",
      imageUrl: "/transformation-journey-retreat.jpg",
      benefits: ["Personal Coaching", "Deep Meditation", "Wellness Workshops", "Spiritual Guidance", "Life Coaching"],
      price: "IDR 28.000.000++",
      category: "transformation",
      schedule: ["Day 1-2: Foundation", "Day 3-5: Deep Work", "Day 6-7: Integration & Celebration"],
    },
  ]

  return NextResponse.json(retreats)
}
