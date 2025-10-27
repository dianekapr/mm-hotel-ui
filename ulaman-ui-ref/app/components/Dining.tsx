"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const imagePaths = [
  "/dining1.avif",
  "/dining2.avif",
  "/dining3.avif",
];

function ParallaxImageComponent({ path }: { path: string }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden relative rounded md:rounded-xl aspect-[1/2] md:aspect-[3/4] w-full"
    >
      <motion.div
        style={{ y: parallaxY }}
        className="w-full h-full will-change-transform relative"
      >
        <Image src={path} alt="" fill className="object-cover" priority />
      </motion.div>
    </div>
  );
}

export default function DiningSection() {
  return (
    <section className="py-32 px-4 flex flex-col items-center">
      <h2 className="text-gold text-xl font-serif text-center max-w-2xl leading-relaxed mb-4">
        A world-class gastronomic journey where nature’s finest ingredients meet
        culinary craftsmanship.
      </h2>
      <a className="text-sm text-gold border-b border-gold mb-16 cursor-pointer hover:opacity-70">
        VISIT THE WEBSITE
      </a>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 w-full">
        {imagePaths.map((path, idx) => (
          <div key={idx} className={idx === 2 ? "hidden md:block" : "block"}>
            <ParallaxImageComponent path={path} />
          </div>
        ))}
      </div>
    </section>
  );
}
