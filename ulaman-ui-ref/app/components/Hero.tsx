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
      {/* Overlay gradasi tipis biar teks kebaca */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-4 text-center">
          <h1 className="text-white text-3xl md:text-5xl tracking-wide font-semibold drop-shadow">
            Eco-Luxury Sanctuary in Bali
          </h1>
          <p className="mt-3 md:mt-4 text-white/90 text-sm md:text-base max-w-2xl mx-auto">
            Bamboo architecture • Bio-filtered lake • Wellness & nature
          </p>
        </div>
      </div>
    </section>
  );
}
