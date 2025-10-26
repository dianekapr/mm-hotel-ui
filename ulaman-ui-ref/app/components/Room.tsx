"use client";

import React, { useEffect, useState } from "react";
import { RoomCard } from "./RoomCard";
import type { roomType } from "@/types";

const Room = () => {
  const [rooms, setRooms] = useState<roomType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("/api/rooms", { cache: "no-store" });
        const data = (await response.json()) as roomType[];
        setRooms(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Rooms
        </h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Room;
