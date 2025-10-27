"use client";

import React, { useState } from "react";
import clsx from "clsx";

// ---- tune colors once, reuse everywhere ----
const GOLD = "#C69C4D";
const MUTED = "#617262";
const FONT_PRIMARY = "'Cormorant', serif";

type Review = {
  id: number;
  author: string;
  date: string;
  shortTitle: string;
  platform: "TripAdvisor" | "Google Reviews";
  longText: string;
  taScore?: number;        // if present, shows in recap
  googleScore?: number;    // if present, shows in recap
};

const data: Review[] = [
  {
    id: 1,
    author: "Anne & Steve",
    date: "May 2024",
    platform: "TripAdvisor",
    shortTitle: '“A Truly Memorable Experience.”',
    longText:
      "Fabulous architecture, beautiful natural setting and wonderful staff combine to provide a truly memorable experience. Our stay at Ulaman Eco Resort was one we will remember forever. We came to just relax in this amazing setting with its beautiful architecture set around a waterfall and surrounded by rice paddies…",
    taScore: 4.8,
    googleScore: 4.7,
  },
  {
    id: 2,
    author: "Alsana Trawally",
    date: "June 2024",
    platform: "Google Reviews",
    shortTitle: '“Best Experience In Bali.”',
    longText:
      "Best experience I had in Bali out of all the resorts I’ve been to, customer service was impeccable and the staff were so kind. Komang made sure we had accommodations and did the best of his ability to make sure we had a warming welcoming, it’s unbelievable that everything is made of bamboo.",
    taScore: 4.8,
    googleScore: 4.7,
  },
  {
    id: 3,
    author: "Kenji",
    date: "April 2024",
    platform: "TripAdvisor",
    shortTitle: '“Spa & Waterfall Dining — Unforgettable!”',
    longText:
      "The waterfall restaurant and the spa rituals were next-level. Calm, curated, and connected to nature. The bamboo design is stunning and the staff genuinely warm.",
    taScore: 4.8,
    googleScore: 4.7,
  },
];

export default function ReviewsExact() {
  const [i, setI] = useState(0);
  const r = data[i];

  const next = () => setI((p) => (p + 1) % data.length);
  const prev = () => setI((p) => (p - 1 + data.length) % data.length);

  const isPrevDisabled = i === 0;
  const isNextDisabled = i === data.length - 1;

  return (
    <section className="py-16 md:py-20">
      {/* page padding (pl/pr) + max width */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 xl:px-14">
        {/* === TOP ROW: Title + recap on left, arrows on right (inline) === */}
        <div className="flex items-start justify-between gap-6">
          {/* LEFT: title + recap */}
          <div className="min-w-0">
            <h2
              className="text-[clamp(26px,2.6vw,40px)] leading-tight font-normal"
              style={{ color: GOLD, fontFamily: FONT_PRIMARY }}
            >
              What Our Guests
              <br />
              Have To Say About Us
            </h2>

            {/* recap line */}
            <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-2 text-[17px]" style={{ fontFamily: FONT_PRIMARY }}>
              <div className="flex items-center gap-2" style={{ color: GOLD }}>
                <span className="font-semibold">{(r.taScore ?? 4.8).toFixed(1)}</span>
                <span>★</span>
                <span className="text-[16px] text-[color:var(--muted,#777)] font-normal" style={{ color: MUTED }}>
                  /&nbsp;295 TripAdvisor Reviews
                </span>
              </div>

              <div className="flex items-center gap-2" style={{ color: GOLD }}>
                <span className="font-semibold">{(r.googleScore ?? 4.7).toFixed(1)}</span>
                <span>★</span>
                <span className="text-[16px]" style={{ color: MUTED }}>
                  /&nbsp;742 Google Reviews
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: arrow boxes */}
          <div className="flex shrink-0 items-center gap-4">
            <ArrowBox label="Prev" onClick={prev} dir="left" disabled={isPrevDisabled} />
            <ArrowBox label="Next" onClick={next} dir="right" disabled={isNextDisabled} />
          </div>
        </div>

        {/* divider */}
        <hr className="mt-8 border-t border-[#CABFA4]" />

        {/* === BODY: 3 columns below the line === */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[minmax(220px,1fr)_minmax(280px,1.2fr)_minmax(420px,1.8fr)] gap-10">
          {/* col 1: name/date */}
          <div className="space-y-5">
            <div
              className="text-[20px] leading-snug"
              style={{ color: MUTED, fontFamily: FONT_PRIMARY }}
            >
              {r.author}
            </div>
            <div className="text-[13px]" style={{ color: MUTED }}>
              {r.date}
            </div>
          </div>

          {/* col 2: short quote */}
          <div>
            <h3
              className="text-[20px] leading-snug"
              style={{ color: MUTED, fontFamily: FONT_PRIMARY }}
            >
              {r.shortTitle}
            </h3>
          </div>

          {/* col 3: long text + link */}
          <div className="text-[16px] leading-[1.75] text-[#2d2d2d]" style={{ fontFamily: FONT_PRIMARY }}>
            <p className="text-[15px]" style={{ color: MUTED }}>
              {r.longText}
            </p>

            <button
              onClick={next}
              className="mt-6 inline-block border-b-2 font-semibold uppercase tracking-[0.08em] text-[14px]"
              style={{ color: GOLD, borderColor: GOLD }}
            >
              Continue Reading
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowBox({
  label,
  onClick,
  dir,
  disabled,
}: {
  label: string;
  onClick: () => void;
  dir: "left" | "right";
  disabled: boolean;
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "grid h-[70px] w-[70px] place-items-center rounded-md border transition",
        disabled && "opacity-40 cursor-not-allowed",
        "hover:bg-white/30 active:scale-[0.98]"
      )}
      style={{
        borderColor: "#CABFA4",
        color: GOLD,
        backgroundColor: "transparent",
      }}
    >
      <span className="text-[22px]">{dir === "left" ? "←" : "→"}</span>
    </button>
  );
}
