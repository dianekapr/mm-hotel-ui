import React from "react";
import { RoomsCardProps } from "@/types";

export const RoomCard = ({ room }: RoomsCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src={room.imageUrl[0]}
        alt={room.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{room.name}</h3>
        <p className="text-gray-500">{room.size} | {room.capacity} guests</p>
        <p className="mt-2">{room.description}</p>
        <p className="mt-4 text-lg font-semibold">{room.pricePerNight}</p>
      </div>
    </div>
  );
};
