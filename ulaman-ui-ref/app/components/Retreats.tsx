"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cormorant } from "../fonts";

type Props = {
  leftSrc: string;
  rightSrc: string;
  heading?: string;
  body?: string;
  ctaLabel?: string;
  onCtaHref?: string;
  /** total scroll runway for the sticky stage */
  sectionHeightVH?: number;
  /** where to start opening (fraction of viewport height) */
  openThreshold?: number;   // 0.33 ≈ 1/3
  /** where to start closing on exit (fraction of viewport height) */
  closeThreshold?: number;  // 0.33 ≈ 1/3
};

const GOLD = "#C69C4D";

export default function RetreatSplit({
  leftSrc,
  rightSrc,
  heading = "Discover your path to wellness and growth.",
  body = `At Ulaman we redefine luxury as an experience that not only pampers the senses but also nurtures the soul. Nestled in pristine nature, our eco-luxury retreat offers a sanctuary for healing and transformation.`,
  ctaLabel = "LEARN MORE",
  onCtaHref = "#",
  sectionHeightVH = 100,
  openThreshold = 0.33,
  closeThreshold = 0.33,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [t, setT] = useState(0); // 0..1

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;

      const enterStart = vh * (1 - openThreshold);
      const exitStop   = vh * closeThreshold;

      const tEnter = Math.max(0, Math.min(1, (enterStart - r.top) / enterStart));
      const denom  = Math.max(1, vh - exitStop);
      const tExit  = Math.max(0, Math.min(1, (r.bottom - exitStop) / denom));

      let p = Math.min(tEnter, tExit);
      // smoothstep
      p = p * p * (3 - 2 * p);
      setT(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [openThreshold, closeThreshold]);

  // --- Motion parameters (small & tasteful) ---
  const spreadPx = 60;               // how far each image moves horizontally
  const leftTx   = -spreadPx * t;
  const rightTx  =  spreadPx * t;
  const leftRot0 = -4;
  const rightRot0 = 4;
  const leftRot  = leftRot0  + 3 * t;
  const rightRot = rightRot0 - 3 * t;

  const textOpacity = t;
  const textY = 14 * (1 - t);

  // --- Controlled image sizes, fixed width for consistency ---
  const IMG_W = "clamp(220px, 25vw, 340px)"; // Fixed width for images with proportionate size

  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{ height: `${sectionHeightVH}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* MEDIA LAYER — centered, fixed image width */}
        <div className="absolute inset-0 flex justify-center items-center gap-0">
          {/* Left Image */}
          <div
            className="relative aspect-[3/4] rounded-none overflow-hidden shadow-xl will-change-transform"
            style={{
              width: IMG_W,
              transform: `translateX(${leftTx}px) rotate(${leftRot}deg)`,
              transition: "transform 60ms linear",
            }}
          >
            <Image
              src={leftSrc}
              alt="Left Retreat Image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Center Text */}
          <div
            className="relative flex-1 flex justify-center items-center"
            style={{
              opacity: textOpacity,
              transform: `translateY(${textY}px)`,
              transition: "opacity 60ms linear, transform 60ms linear",
            }}
          >
            <div
              className="text-center max-w-[720px] mx-auto px-6"
              style={{ pointerEvents: "none" }}
            >
              <h3
                className={`${cormorant.className} leading-snug mb-4`}
                style={{
                  color: GOLD,
                  fontSize: "clamp(22px, 2.2vw, 34px)",
                }}
              >
                {heading}
              </h3>

              <p className="text-[14px] md:text-[15px] leading-relaxed text-[#4A4A4A] mb-5">
                {body}
              </p>

              <a
                href={onCtaHref}
                className="inline-block border-b border-current text-[12px] tracking-wider font-semibold"
                style={{ color: GOLD, pointerEvents: "auto" }}
              >
                {ctaLabel}
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative aspect-[3/4] rounded-none overflow-hidden shadow-xl will-change-transform"
            style={{
              width: IMG_W,
              transform: `translateX(${rightTx}px) rotate(${rightRot}deg)`,
              transition: "transform 60ms linear",
            }}
          >
            <Image
              src={rightSrc}
              alt="Right Retreat Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
