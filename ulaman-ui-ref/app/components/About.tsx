"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cormorant, geist } from "../fonts";
import { motion, AnimatePresence } from "framer-motion";

const GOLD = "#C69C4D";

const images = [
  "/about-img1.jpg",
  "/about-img2.jpg",
  "/about-img3.jpg",
]; // ✅ replace with your real image paths

export default function About() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="bg-[#EDE8D9] py-24">
      <div className="max-w-6xl xl:max-w-5xl mx-auto grid md:grid-cols-2 gap-12 px-8 md:px-16 xl:px-24 items-center">
        
        {/* LEFT IMAGE SLIDER */}
        <div className="relative w-full aspect-[3/4] md:aspect-[5/6] overflow-hidden rounded-lg shadow-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                alt={`Ulaman Image ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* ARROWS */}
          <button
            onClick={prevSlide}
            className="absolute left-3 bottom-4 md:bottom-6 bg-white/70 hover:bg-white text-[#5A4B2F] p-2 rounded-full shadow-md transition"
          >
            <span className="text-lg font-semibold">←</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 bottom-4 md:bottom-6 bg-white/70 hover:bg-white text-[#5A4B2F] p-2 rounded-full shadow-md transition"
          >
            <span className="text-lg font-semibold">→</span>
          </button>

          {/* BULLETS */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === index ? "bg-[#C69C4D]" : "bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <p
            className={`${cormorant.className} text-[clamp(20px,2.5vw,30px)] font-normal leading-[1.35] tracking-[0.2px]`}
            style={{ color: GOLD }}
          >
            An award-winning eco-luxury resort offering a unique hideaway
            experience. Embrace authenticity, balance, and harmony with nature
            in a healing, luxurious environment.
          </p>

          <p
            className={`text-[13px] md:text-[14px] font-normal text-[#4A4A4A] leading-[1.55] mt-8 max-w-sm`}
          >
            We believe nature and luxury can coexist. Ulaman Eco Luxury Resort
            offers{" "}
            <em className="italic">
              a secluded, lush haven with luxurious amenities and impeccable
              service.
            </em>{" "}
            Immerse yourself in traditional Balinese culture and leave feeling
            renewed, all while minimizing your ecological footprint. Recharge
            your mind, body, and soul in this unique holistic retreat.
          </p>

          <Link
            href="/about"
            className="group inline-block mt-8 text-[13px] font-semibold tracking-wide uppercase relative no-underline"
            style={{ color: GOLD, textDecoration: "none" }}
          >
            <span className="relative z-10">ABOUT US</span>
            <span className="block w-full h-[1.5px] bg-current mt-0.5 transition-all duration-300 group-hover:opacity-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
