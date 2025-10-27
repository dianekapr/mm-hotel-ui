"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cormorant } from "../fonts";
import type { packageType } from "@/types";

const GOLD = "#C69C4D";

export default function PackageCard({ pkg, currentCard, totalCards, onCardChange }: { pkg: packageType, currentCard: number, totalCards: number, onCardChange: (newIndex: number) => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const scrollOne = (dir: "left" | "right") => {
    const newIndex = dir === "right" ? currentCard + 1 : currentCard - 1;
    if (newIndex >= 1 && newIndex <= totalCards) {
      onCardChange(newIndex); // Update the current card index
    }
  };

  return (
    <div className="snap-start w-[82vw] sm:w-[50vw] md:w-[32vw] lg:w-[24.2vw]">
      <article className="group w-full">
        {/* IMAGE */}
        <div className="relative w-full aspect-[0.78] overflow-hidden rounded-[18px]">
          <Image
            src={pkg.imageUrl}
            alt={pkg.name}
            width={800}  // Define width
            height={1050} // Define height to maintain aspect ratio
            className="object-cover transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:brightness-[.68] group-hover:translate-y-[-12px]"
            sizes="(max-width:1024px) 50vw, 24vw"
          />
        </div>

        {/* DURATION */}
        <div className="mt-3">
          <span className="inline-block text-[12px] text-[#A78A5A] bg-[#F1E9D8]/90 px-3 py-[5px] rounded-full">
            {pkg.duration}
          </span>
        </div>

        {/* TEXT */}
        <div className="pt-5">
          <h3 style={{ color: GOLD }} className={`${cormorant.className} text-[22px] md:text-[24px] leading-tight`}>
            {pkg.name}
          </h3>
          <button
            onClick={openModal} // Open modal on click
            style={{ color: GOLD, textDecoration: "none" }}
            className="mt-2 inline-block text-[12px] uppercase tracking-wider font-semibold relative no-underline"
          >
            <span className="relative z-10">DISCOVER</span>
            <span className="block w-full h-[1.5px] bg-current mt-0.5 transition-all duration-300 group-hover:opacity-0" />
          </button>
        </div>
      </article>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center z-50 p-6">
          <div className="flex bg-white rounded-lg p-8 w-full max-w-[1200px] relative">
            {/* Left Image Section (1/3 width) */}
            <div className="w-1/3 overflow-hidden rounded-lg">
              <Image
                src={pkg.imageUrl}
                alt={pkg.name}
                width={800}  // Define width
                height={1050} // Define height to maintain aspect ratio
                className="object-cover w-full h-full"
                layout="intrinsic"
                priority
              />
            </div>

            {/* Right Content Section (2/3 width) */}
            <div className="w-2/3 pl-8">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-2xl font-bold text-gray-500"
              >
                ×
              </button>

              {/* Current Card Information */}
              <div className="text-lg text-gray-600">
                <span className="font-semibold text-[#C69C4D]">{currentCard} / {totalCards}</span>
              </div>

              {/* Package Name */}
              <h2 className="text-3xl font-semibold text-left text-[#C69C4D] mt-4">{pkg.name}</h2>

              {/* Description */}
              <p className="text-lg text-gray-600 text-left mt-4">{pkg.description}</p>

              {/* Additional Info (two columns) */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {pkg.addInfo.map((info, idx) => (
                  <div key={idx} className="text-gray-700 text-left">
                    <p>{info}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="mt-6 text-left font-semibold text-xl text-gray-800">{pkg.price}</div>

              {/* Action Buttons (Book Now, View Terms, and Arrows) */}
              <div className="mt-6 flex justify-between items-center gap-4">
                {/* Book Now Button */}
                <button className="py-3 px-6 bg-[#C69C4D] text-white text-lg font-semibold rounded-lg">
                  BOOK NOW
                </button>

                {/* View Terms Link */}
                <Link
                  href="/"
                  passHref
                  className="text-[#C69C4D] text-sm font-semibold"
                >
                  VIEW TERMS
                </Link>
              </div>

              <div className="md:flex flex-row gap-5 hidden">
                <button
                  onClick={() => scrollOne("left")}
                  className="h-14 w-14 border rounded-md text-xl grid place-items-center hover:bg-white/60 transition"
                  style={{ borderColor: GOLD, color: GOLD }}
                  aria-label="Prev"
                >
                  ←
                </button>

                <button
                  onClick={() => scrollOne("right")}
                  className="h-14 w-14 border rounded-md text-xl grid place-items-center hover:bg-white/60 transition"
                  style={{ borderColor: GOLD, color: GOLD }}
                  aria-label="Next"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
