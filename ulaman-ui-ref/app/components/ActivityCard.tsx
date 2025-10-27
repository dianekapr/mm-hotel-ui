"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from 'react';

type ActivityCardProps = {
  name: string;
  description: string;
  duration: string;
  price: string[];
  imageUrl: string;
  addInfo: string;
};

export default function ActivityCard({
  name,
  description,
  duration,
  price,
  imageUrl,
  addInfo,
}: ActivityCardProps) {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Image */}
        <div className="relative h-56">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h3 className="text-gold text-xl font-semibold">{name}</h3>
          <p className="text-gray-700 text-sm mt-2">{description}</p>
          <p className="text-gray-600 text-xs mt-2">
            Duration: {duration}
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Price: {price.join(" / ")}
          </p>
          <p className="text-gray-500 text-xs mt-1">{addInfo}</p>
        </div>
      </div>
    </div>
  );
}

