"use client";

import Image from "next/image";
import { useState } from "react";
import MapModal from "./MapModal";

const mapPoints = [
  {
    id: "1",
    name: "Yoga Shala",
    x: 20.5,
    y: 30.5,
    icon: "/icon1.svg",
    category: "Facilities",
    description:
      "Immerse in tranquility at our Mandala Shala, a private haven with great acoustics and peaceful energy. Surrounded by natural elements, it’s perfect for small groups and private sessions, ideal for sound healing, yoga, and mindfulness practices.",
    images: [
      "https://images.prismic.io/ulaman/Zlas5KWtHYXtT4Cm_yoga-in-bali.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/ZobH6x5LeNNTwzNj_ulaman.jpg?auto=format,compress"
    ],
  },
  {
    id: "2",
    name: "Sound Healing Room",
    x: 60.2,
    y: 50,
    icon: "/icon2.svg", 
    category: "Facilities",
    description:
      "Experience profound relaxation and healing in our Sound Healing Room, designed for deep meditation, sound therapy, and rejuvenation.",
    images: [
      "https://images.prismic.io/ulaman/ZpHjVB5LeNNTxIQI_ulaman.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/ZpHlBR5LeNNTxIQM_best-eco-restreat-bali.jpg?auto=format,compress",
    ],
  },
  {
    id: "3",
    name: "Spa Sanctuary",
    x: 45.5,
    y: 30,
    icon: "/icon3.svg",
    category: "Wellness",
    description:
      "Our Spa Sanctuary offers a range of rejuvenating treatments, from luxurious massages to holistic therapies. Indulge in relaxation surrounded by nature.",
    images: [
      "https://images.prismic.io/ulaman/ZpH9VR5LeNNTxIQl_riverside-spa.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Zlf2V6WtHYXtT6zo_luxury-spa-bali-ubud.jpg?auto=format,compress"
        ],
  },
  {
    id: "4",
    name: "Swimming Pool",
    x: 51.4,
    y: 35.6,
    icon: "/icon1.svg", 
    category: "Amenities",
    description:
      "Take a dip in our expansive swimming pool, designed with luxurious finishes and surrounded by lush tropical gardens, offering a serene and refreshing experience.",
    images: [
    "https://images.prismic.io/ulaman/Zm_mFZm069VX1y53_eco-retreat-bali.jpg?auto=format,compress",
    "https://images.prismic.io/ulaman/ZnWONZbWFbowew-6_pool.jpg?auto=format,compress"
    ],
  },
  {
    id: "5",
    name: "Restaurant",
    x: 68.6,
    y: 35.6,
    icon: "/icon2.svg", 
    category: "Dining",
    description:
      "Our restaurant offers a fusion of traditional and contemporary cuisine, featuring organic ingredients sourced from local farms and served in a beautiful, open-air setting.",
    images: [
"https://images.prismic.io/ulaman/ZiSAvPPdc1huKqB-_restuarant-near-ubud.jpg?auto=format,compress",
"https://images.prismic.io/ulaman/ZpII6B5LeNNTxIQu_ulaman.jpg?auto=format,compress"
    ],
  },
  {
    id: "6",
    name: "Wellness Center",
    x: 55.9,
    y: 45.2,
    icon: "/icon3.svg",
    category: "Wellness",
    description:
      "Our Wellness Center combines ancient healing practices with modern wellness therapies. Experience personalized treatments and rejuvenate your body and mind.",
    images: [
     "https://images.prismic.io/ulaman/ZpIOkB5LeNNTxIQ6_tree-house.jpg?auto=format,compress",
    "https://images.prismic.io/ulaman/ZpdRDh5LeNNTxOEe_tree-house-romantic-dinner-1.jpg?auto=format,compress" ],
  },
  {
    id: "7",
    name: "Meditation Deck",
    x: 45,
    y: 42,
    icon: "/icon1.svg", 
    category: "Facilities",
    description:
      "Find your inner peace at the Meditation Deck, an open-air space designed for mindfulness, yoga, and meditation. Enjoy the breathtaking views of nature during your practice.",
    images: [
    "https://images.prismic.io/ulaman/ZoAuAR5LeNNTwpgI_hotel-bali.jpg?auto=format,compress",
    "https://images.prismic.io/ulaman/ZjHdf0MTzAJOCdgw_ulaman.jpg?auto=format,compress" 
    ],
  },
  {
    id: "8",
    name: "Private Villas",
    x: 40,
    y: 25.4,
    icon: "/icon2.svg", 
    category: "Accommodation",
    description:
      "Stay in our luxurious private villas, each designed with natural materials, offering a blend of comfort, privacy, and breathtaking views of the surrounding nature.",
    images: [
      "https://images.prismic.io/ulaman/Zj16T0MTzAJOCrGZ_eco-luxury-retreat-bali.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Zj16UUMTzAJOCrGb_hotels-bali.jpg?auto=format,compress"
     ],
  },
  {
    id: "9",
    name: "Fitness Center",
    x: 60,
    y: 30,
    icon: "/icon3.svg", 
    category: "Wellness",
    description:
      "Our state-of-the-art fitness center features a range of equipment for your workout needs, from cardio machines to strength training equipment, all with scenic views of the resort.",
    images: [
   "https://images.prismic.io/ulaman/ZpHn1B5LeNNTxIQV_ulaman-luxury-retreat.jpg?auto=format,compress",
   "https://images.prismic.io/ulaman/ZmEb_pm069VX1f0c_ecoresort-bali.jpg?auto=format,compress"
    ],
  },
  {
    id: "10",
    name: "The Gallery",
    x: 70,
    y: 45,
    icon: "/icon3.svg", 
    category: "Art & Culture",
    description:
      "Explore a curated collection of contemporary art at The Gallery, showcasing works by local and international artists in a beautiful, serene environment.",
    images: [
      "https://images.prismic.io/ulaman/Zo4FqR5LeNNTw-MB_ulaman.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Zo4FqR5LeNNTw-MA_hall.jpg?auto=format,compress"
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
    <section className="relative w-full py-20">
      <div className="max-w-screen-xl mx-auto text-left mb-90 px-20">
        <h2 className="text-[#C69C4D] text-4xl font-serif mb-4 leading-snug">
          Discover Ulaman <br />
          From Above
        </h2>
        <div className="inline-block text-sm text-white bg-[#C69C4D] px-4 py-2 rounded-full cursor-default select-none">
          ● Tap on an icon
        </div>
      </div>

      <div className="w-full overflow-auto">
        <div className=" w-full max-w-screen-xl mx-auto aspect-[16/9] min-w-[900px]">
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
                <div className="text-[#C69C4D] w-8 h-8 p-2 bg-[#EFEBE2] rounded-full shadow-sm z-10">
                  <img src={point.icon} alt={point.name} className="w-full h-full" />
                </div>
                <div className="opacity-0 group-hover:opacity-100 ml-0 transition-opacity duration-200 text-[#C69C4D] bg-[#EFEBE2] px-3 py-1 rounded-full text-sm whitespace-nowrap shadow">
                  {point.name}
                </div>
              </div>
            </div>
          ))}

          {selectedPoint && (
            <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 z-10 w-[60%] h-[65%] max-w-3xl shadow-xl rounded-lg bg-[#EFEBE2] overflow-hidden">
              <MapModal
                point={selectedPoint}
                onCloseAction={() => setSelectedPoint(null)} 
              />
            </div>
          )}
        </div>
      </div>

      {selectedPoint && (
        <div className="lg:hidden fixed inset-0 bg-beige z-50">
          <MapModal point={selectedPoint} onCloseAction={() => setSelectedPoint(null)} />
        </div>
      )}
    </section>
  );
}