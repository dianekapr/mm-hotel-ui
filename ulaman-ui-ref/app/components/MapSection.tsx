"use client";

import Image from "next/image";
import { useState } from "react";
import MapModal from "./MapModal";

// Hardcoded map points data with 10 entries
const mapPoints = [
  {
    id: "1",
    name: "Yoga Shala",
    x: 41.7,
    y: 40,
    icon: "/icon1.svg", // Use the path directly from public folder
    category: "Facilities",
    description:
      "Immerse in tranquility at our Mandala Shala, a private haven with great acoustics and peaceful energy. Surrounded by natural elements, it’s perfect for small groups and private sessions, ideal for sound healing, yoga, and mindfulness practices.",
    images: [
      "/retreats1.avip",
      "/retreats1.avip"
    ],
  },
  {
    id: "2",
    name: "Sound Healing Room",
    x: 60.2,
    y: 50,
    icon: "/icon2.svg", // Use the path directly from public folder
    category: "Facilities",
    description:
      "Experience profound relaxation and healing in our Sound Healing Room, designed for deep meditation, sound therapy, and rejuvenation.",
    images: [
      "https://images.prismic.io/ulaman/Yoga-Sound-Healing.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Healing-Room.jpg?auto=format,compress",
    ],
  },
  {
    id: "3",
    name: "Spa Sanctuary",
    x: 45.5,
    y: 72.3,
    icon: "/icon3.svg", // Use the path directly from public folder
    category: "Wellness",
    description:
      "Our Spa Sanctuary offers a range of rejuvenating treatments, from luxurious massages to holistic therapies. Indulge in relaxation surrounded by nature.",
    images: [
      "https://images.prismic.io/ulaman/Spa-Relaxation.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Spa-Counseling.jpg?auto=format,compress",
    ],
  },
  {
    id: "4",
    name: "Swimming Pool",
    x: 70.1,
    y: 60.9,
    icon: "/icons/pool.svg", // Use the path directly from public folder
    category: "Amenities",
    description:
      "Take a dip in our expansive swimming pool, designed with luxurious finishes and surrounded by lush tropical gardens, offering a serene and refreshing experience.",
    images: [
      "https://images.prismic.io/ulaman/Pool-Luxury.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Pool-Garden.jpg?auto=format,compress",
    ],
  },
  {
    id: "5",
    name: "Restaurant",
    x: 50.4,
    y: 35.6,
    icon: "/icons/restaurant.svg", // Use the path directly from public folder
    category: "Dining",
    description:
      "Our restaurant offers a fusion of traditional and contemporary cuisine, featuring organic ingredients sourced from local farms and served in a beautiful, open-air setting.",
    images: [
      "https://images.prismic.io/ulaman/Restaurant-Dining.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Restaurant-Food.jpg?auto=format,compress",
    ],
  },
  {
    id: "6",
    name: "Wellness Center",
    x: 55.9,
    y: 45.2,
    icon: "/icons/wellness.svg", // Use the path directly from public folder
    category: "Wellness",
    description:
      "Our Wellness Center combines ancient healing practices with modern wellness therapies. Experience personalized treatments and rejuvenate your body and mind.",
    images: [
      "https://images.prismic.io/ulaman/Wellness-Center.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Wellness-Massage.jpg?auto=format,compress",
    ],
  },
  {
    id: "7",
    name: "Meditation Deck",
    x: 40.2,
    y: 33.1,
    icon: "/icons/meditation.svg", // Use the path directly from public folder
    category: "Facilities",
    description:
      "Find your inner peace at the Meditation Deck, an open-air space designed for mindfulness, yoga, and meditation. Enjoy the breathtaking views of nature during your practice.",
    images: [
      "https://images.prismic.io/ulaman/Meditation-Deck.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Meditation-Relax.jpg?auto=format,compress",
    ],
  },
  {
    id: "8",
    name: "Private Villas",
    x: 80.1,
    y: 25.4,
    icon: "/icons/villa.svg", // Use the path directly from public folder
    category: "Accommodation",
    description:
      "Stay in our luxurious private villas, each designed with natural materials, offering a blend of comfort, privacy, and breathtaking views of the surrounding nature.",
    images: [
      "https://images.prismic.io/ulaman/Private-Villa.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Villa-Interior.jpg?auto=format,compress",
    ],
  },
  {
    id: "9",
    name: "Fitness Center",
    x: 25.3,
    y: 58.7,
    icon: "/icons/fitness.svg", // Use the path directly from public folder
    category: "Wellness",
    description:
      "Our state-of-the-art fitness center features a range of equipment for your workout needs, from cardio machines to strength training equipment, all with scenic views of the resort.",
    images: [
      "https://images.prismic.io/ulaman/Fitness-Center.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Fitness-Workout.jpg?auto=format,compress",
    ],
  },
  {
    id: "10",
    name: "The Gallery",
    x: 65.4,
    y: 62.2,
    icon: "/icons/gallery.svg", // Use the path directly from public folder
    category: "Art & Culture",
    description:
      "Explore a curated collection of contemporary art at The Gallery, showcasing works by local and international artists in a beautiful, serene environment.",
    images: [
      "https://images.prismic.io/ulaman/Art-Gallery.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Art-Exhibition.jpg?auto=format,compress",
    ],
  },
];

export default function MapSection() {
  const [selectedPoint, setSelectedPoint] = useState<{
    id: string;
    name: string;
    x: number;
    y: number;
    icon: string;
    category: string;
    description: string;
    images: string[];
  } | null>(null);

  return (
    <section className="relative w-full py-20 px-4">
      {/* Title + Tag */}
      <div className="max-w-screen-xl mx-auto text-left mb-10">
        <h2 className="text-gold text-2xl font-serif mb-4 leading-snug">
          Discover Ulaman <br className="md:hidden" />
          From Above
        </h2>
        <div className="inline-block text-sm text-white bg-gold px-4 py-2 rounded-full cursor-default select-none">
          ● Tap on an icon
        </div>
      </div>

      {/* Map and Points */}
      <div className="w-full overflow-auto">
        <div className="relative w-full max-w-screen-xl mx-auto aspect-[16/9] min-w-[900px]">
          <Image
            src="/map.jpg"
            alt="Ulaman Map"
            fill
            priority
            className="object-contain rounded-xl"
          />

          {mapPoints.map((point) => (
            <div
              key={point.id}
              className="absolute z-10 group"
              style={{
                top: `${point.y}%`,
                left: `${point.x}%`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => setSelectedPoint(point)}
            >
              <div className="relative flex items-center">
                <div className="text-gold w-8 h-8 p-2 bg-beige rounded-full shadow-sm z-10">
                  <img src={point.icon} alt={point.name} className="w-full h-full" />
                </div>
                <div className="opacity-0 group-hover:opacity-100 ml-0 transition-opacity duration-200 text-gold bg-beige px-3 py-1 rounded-full text-sm whitespace-nowrap shadow">
                  {point.name}
                </div>
              </div>
            </div>
          ))}

          {/* Fixed Panel (desktop only, absolute inside map area) */}
          {selectedPoint && (
            <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[60%] h-[65%] max-w-5xl shadow-xl rounded-lg bg-beige overflow-hidden">
              <MapModal
                point={selectedPoint}
                onClose={() => setSelectedPoint(null)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Overlay (full screen) */}
      {selectedPoint && (
        <div className="lg:hidden fixed inset-0 bg-beige z-50">
          <MapModal point={selectedPoint} onClose={() => setSelectedPoint(null)} />
        </div>
      )}
    </section>
  );
}
