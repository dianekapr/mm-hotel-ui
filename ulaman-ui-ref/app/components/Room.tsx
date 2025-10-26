"use client";

import React, { useEffect, useRef, useState } from "react";
import type { roomType } from "@/types";
import RoomCard from "./RoomCard";
import { cormorant } from "../fonts";

const GOLD = "#C69C4D";

export default function Room() {
  const [items, setItems] = useState<roomType[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/rooms", { cache: "no-store" });
        const data = await res.json();
        setItems(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // geser tepat 1 kartu (22rem) + gap-3 (0.75rem)
  const scrollOne = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const one = 22 * 16 + 0.75 * 16; // px
    el.scrollBy({ left: dir === "right" ? one : -one, behavior: "smooth" });
  };

  return (
    <section className="bg-[#EDE8D9] py-24">
      {/* Heading */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <h2
  className={`${cormorant.className} text-center 
  text-[clamp(24px,2.6vw,36px)]
  font-normal leading-snug mb-12 text-[#C69C4D]`}
>
  Discover cozy elegance, where tranquility
  <br className="hidden md:block" />
  meets Bali’s serene beauty.
</h2>

      </div>

{/* Row: padding kiri > arrows > spacer > strip cards */}
<div className="flex items-start">
  {/* Kiri padding besar biar komposisi sama aslinya */}
  <div className="hidden md:block w-32 lg:w-40" />

  {/* Transparent square + arrows */}
  <div className="hidden md:flex w-16 flex-col items-center">
    <div className="w-14 h-14 rounded-md border border-transparent mb-4" />
    <div className="flex flex-col gap-5 pt-32">
      <button
        onClick={() => scrollOne("left")}
        aria-label="Prev"
        className="h-17 w-17 border rounded-md grid place-items-center
        text-[#C69C4D] border-[#C69C4D] bg-transparent hover:bg-white/70 transition"
      >
        ←
      </button>
      <button
        onClick={() => scrollOne("right")}
        aria-label="Next"
        className="h-17 w-17 border rounded-md grid place-items-center
        text-[#C69C4D] border-[#C69C4D] bg-transparent hover:bg-white/70 transition"
      >
        →
      </button>
    </div>
  </div>

  {/* SPACER lebar supaya EXACT 2.5 tampil */}
  <div className="hidden md:block w-12 lg:w-16" />

  {/* STRIP: Lebar dikunci → 2.5 card, no padding kanan */}
  <div
    ref={scrollerRef}
    className="
      hide-scrollbar overflow-x-auto scroll-smooth pr-0 [-webkit-overflow-scrolling:touch]
      w-full md:w-[calc(2.5*26rem+2*1rem)]
    "
    style={{ paddingRight: 0 }}
  >
    <div className="flex gap-4 min-w-max">
      {items.map((room) => (
        <div
          key={room.id}
          data-card
          className="snap-start shrink-0 w-[26rem]"
        >
          <RoomCard room={room} />
        </div>
      ))}
    </div>
  </div>
</div>

      {/* arrows mobile */}
      <div className="md:hidden mt-6 flex justify-center gap-4">
        <button
          onClick={() => scrollOne("left")}
          className="h-11 w-11 grid place-items-center rounded-md border text-[#C69C4D] border-[#C69C4D]"
        >
          ←
        </button>
        <button
          onClick={() => scrollOne("right")}
          className="h-11 w-11 grid place-items-center rounded-md border text-[#C69C4D] border-[#C69C4D]"
        >
          →
        </button>
      </div>
    </section>
  );
}
