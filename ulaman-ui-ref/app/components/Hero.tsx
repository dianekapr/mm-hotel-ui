import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-[420px] md:h-[600px] overflow-hidden">
      <video
        src="/hero1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </section>
  );
}
