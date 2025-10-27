"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cormorant } from "../fonts";
import type { RoomsCardProps } from "@/types";

const GOLD = "#C69C4D";

export default function RoomCard({ room }: RoomsCardProps) {
  const imgs = room.imageUrl?.length ? room.imageUrl : ["/placeholder.jpg"];
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((p) => (p + 1) % imgs.length);
  const prev = () => setIdx((p) => (p - 1 + imgs.length) % imgs.length);

  return (
    <article className="w-[26 rem] shrink-0">
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[12px] group">
        <Image
          src={imgs[idx]}
          alt={room.name}
          fill
          className="object-cover transition duration-700"
          sizes="352px"
          priority={idx === 0}
        />

        <button
          onClick={prev}
          aria-label="Prev image"
          className="
            absolute left-3 bottom-3
            w-[50px] h-[50px] rounded-md
            border border-white/80 bg-transparent
            opacity-0 group-hover:opacity-100 transition
            grid place-items-center text-white/90
          "
        >
          ←
        </button>

        <button
          onClick={next}
          aria-label="Next image"
          className="
            absolute right-3 bottom-3
            w-[50px] h-[50px] rounded-md
            border border-white/80 bg-transparent
            opacity-0 group-hover:opacity-100 transition
            grid place-items-center text-white/90
          "
        >
          →
        </button>

        <div className="absolute bottom-3 left-0 right-0 flex justify-center items-center gap-2">
          {imgs.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === idx ? "bg-[#C69C4D]" : "bg-white/70"
              }`}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="pt-3 w-full">
        <h3
          className={`${cormorant.className} text-[25px] leading-tight font-medium text-[#C69C4D]`}
        >
          {room.name}
        </h3>
        <p className="mt-1 text-[14px] text-[#6D6D6D] italic leading-snug">
          {(room as any).shortDesc ?? room.description}
        </p>
        <Link
          href={`/rooms/${room.slug}`}
          className="
    group mt-2 inline-block text-[11px] uppercase tracking-wide font-semibold
    text-[#C69C4D] no-underline
  "
          style={{ textDecoration: "none", color: GOLD }}
        >
          <span className="relative z-10">DISCOVER</span>
          <span
            className="
      block w-full h-[1.5px] bg-current mt-0.5
      transition-all duration-300
      group-hover:opacity-0
    "
          />
        </Link>
      </div>
    </article>
  );
}
