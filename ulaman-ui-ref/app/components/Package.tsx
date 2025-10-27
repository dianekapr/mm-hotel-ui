"use client";

import React, { useEffect, useRef, useState } from "react";
import type { packageType } from "@/types";
import { cormorant } from "../fonts";
import PackageCard from "./PackageCard";

const GOLD = "#C69C4D";

export default function Package() {
  const [items, setItems] = useState<packageType[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/packages", { cache: "no-store" });
        const data = await res.json();
        setItems(data);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = (card?.offsetWidth ?? 420) + 28;
    el.scrollBy({ left: dir === "right" ? step : -step, behavior: "smooth" });
  };

  return (
    <section className="bg-[#EDE8D9] py-28">
      <h2
        className={`${cormorant.className} text-center text-[#C69C4D] font-normal mb-16`}
        style={{ fontSize: "clamp(23px, 2.8vw, 37px)", letterSpacing: "0.4px" }}
      >
        Book one of our special <br/>
        packages for a getaway you’ll <br/>
        never forget.
      </h2>

      {/* pl ditambah supaya arrow agak geser ke kanan */}
      <div className="flex items-center gap-10 max-w-[1600px] mx-auto pl-[9vw] pr-[2vw]">
        {/* ARROWS */}
        <div className="hidden md:flex flex-col gap-5">
          <button
            onClick={() => scroll("left")}
            className="h-14 w-14 border rounded-md text-xl grid place-items-center hover:bg-white/60 transition"
            style={{ borderColor: GOLD, color: GOLD }}
            aria-label="Prev"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="h-14 w-14 border rounded-md text-xl grid place-items-center hover:bg-white/60 transition"
            style={{ borderColor: GOLD, color: GOLD }}
            aria-label="Next"
          >
            →
          </button>
        </div>

        {/* CAROUSEL — track di-center */}
        <div
          ref={scrollerRef}
          className="overflow-x-auto scroll-smooth no-scrollbar flex-1"
        >
          <div className="flex gap-8 min-w-max mx-auto justify-center">
            {loading ? (
              <div className="py-24 text-black/60">Loading…</div>
            ) : (
              items.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
