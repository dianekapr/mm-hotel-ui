"use client";

import { useEffect, useRef, useState } from "react";
import { cormorant } from "../fonts"; 

const GOLD = "#C8A45D";

export default function Tagline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const total = winH + rect.height;
      const p = Math.max(0, Math.min(1, (winH - rect.top) / total));

      setProgress(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const LINES = [
    "Nestled among the rice fields",
    "and coconut trees of Tabanan,",
    "Ulaman is only 20 minutes",
    "away from the vibrant town of Canggu.",
  ];

  const allChars = LINES.map((l) => l.split("")).flat();
  const highlightIndex = Math.floor(progress * allChars.length);

  let pointer = 0;

  return (
    <section className="py-24 bg-[#EDE8D9]">
      {/* ✅ CORMORANT APPLIED HERE */}
      <div
        ref={containerRef}
        className={`${cormorant.className} max-w-4xl mx-auto px-6 text-center leading-[1.12] tracking-[0.4px]`}
      >
        {LINES.map((line, li) => {
          const chars = line.split("");
          return (
            <h2
              key={li}
              className="text-[clamp(20px,2.8vw,36px)] font-light"
              style={{ color: GOLD }}
            >
              {chars.map((ch) => {
                const idx = pointer++;
                const active = idx <= highlightIndex;

                return (
                  <span
                    key={idx}
                    className="inline-block transition-all duration-300"
                    style={{
                      opacity: active ? 1 : 0.3,
                      transitionTimingFunction: "cubic-bezier(.25,.6,.2,1)",
                    }}
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </span>
                );
              })}
            </h2>
          );
        })}
      </div>
    </section>
  );
}
