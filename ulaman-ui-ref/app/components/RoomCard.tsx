import React from "react";
import type { RoomsCardProps } from "@/types";

export default function RoomCard({ room }: RoomsCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={room.imageUrl[0]}
        alt={room.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-semibold">{room.name}</h3>
        <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">
          {room.size} • Sleeps {room.capacity}
        </p>
        <p className="mt-3 text-sm leading-relaxed">{room.description}</p>
        <div className="mt-4 text-sm font-medium">{room.pricePerNight}</div>
      </div>
    </article>
  );
}
