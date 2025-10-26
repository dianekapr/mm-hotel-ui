"use client";

import { cormorant } from "../fonts";
import Link from "next/link";
import Image from "next/image";
import type { packageType } from "@/types";

const GOLD = "#C69C4D";

export default function PackageCard({ pkg }: { pkg: packageType }) {
  return (
    <div
      data-card
      className="snap-start w-[82vw] sm:w-[50vw] md:w-[32vw] lg:w-[24.2vw]"
    >
      <article className="group w-full">
        {/* IMAGE */}
        <div className="relative w-full aspect-[0.78] overflow-hidden rounded-[18px]">
          <Image
            src={pkg.imageUrl}
            alt={pkg.name}
            fill
            priority={pkg.id === 1}
            className="
              object-cover 
              transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)]
              group-hover:brightness-[.68]
              group-hover:translate-y-[-12px]
            "
            sizes="(max-width:1024px) 50vw, 24vw"
          />
        </div>

        {/* DURATION — di bawah image, kiri */}
        <div className="mt-3">
          <span className="inline-block text-[12px] text-[#A78A5A] bg-[#F1E9D8]/90 px-3 py-[5px] rounded-full">
            {pkg.duration}
          </span>
        </div>

        {/* TEXT — kiri semua seperti mock */}
        <div className="pt-5">
          <h3
            style={{ color: GOLD }}
            className={`${cormorant.className} text-[22px] md:text-[24px] leading-tight`}
          >
            {pkg.name}
          </h3>

          <Link
            href={`/packages/${pkg.slug}`}
            style={{ color: GOLD, textDecoration: "none" }}
            className="mt-2 inline-block text-[12px] uppercase tracking-wider font-semibold relative no-underline"
          >
            <span className="relative z-10">DISCOVER</span>
  <span
    className="
      block w-full h-[1.5px] bg-current mt-0.5
      transition-all duration-300
      group-hover:opacity-0
    "
  />
          </Link>
        </div>
      </article>
    </div>
  );
}
