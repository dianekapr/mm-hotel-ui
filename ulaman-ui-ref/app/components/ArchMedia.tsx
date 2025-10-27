"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  startRadiusVW?: number;
  offsetYVH?: number;
};

export default function ArchMedia({
  src,
  startRadiusVW = 28,
  offsetYVH = 10,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = vh * 1.2;   // mulai lebih awal
      const end   = -vh * 1.2;  // selesai lebih lambat
      
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.min(1, Math.max(0, raw));
      
      // ✅ cubic smooth + slowdown
      const slow = Math.pow(clamped, 1.8);

      setT(slow);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const lerp = (a: number, b: number, p: number) => a + (b - a) * p;

  const radius = `${lerp(startRadiusVW, 160, t)}vmax`; // ✅ bigger max size
  const scale = 1 + 0.03 * t;                         // ✅ keep subtle
  
  const centerY = 50 + offsetYVH - t * 5;             // ✅ anti-cut

  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{
        height: "260vh",  // ✅ lebih panjang area → lebih slow
        marginTop: "90px",
        zIndex: 1,
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-visible">
        <div
          className="relative w-full h-full will-change-[clip-path,transform]"
          style={{
            clipPath: `circle(${radius} at 50% ${centerY}%)`,
            WebkitClipPath: `circle(${radius} at 50% ${centerY}%)`,
            transform: `scale(${scale})`,
            transition: "clip-path 280ms cubic-bezier(0.22, 0.17, 0.03, 1)", // ✅ cinematic
          }}
        >
          <Image
            src={src}
            alt="arch media"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
