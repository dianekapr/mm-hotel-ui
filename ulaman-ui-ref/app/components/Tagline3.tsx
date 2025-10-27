"use client";

import Link from "next/link";
import { cormorant } from "../fonts";

export default function Tagline3() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center text-center"
      style={{ padding: "140px 0 100px" }} // ✅ same vertical spacing feel
    >
      <h2
        className={`${cormorant.className} text-[#C69C4D] leading-snug font-normal`}
        style={{
          fontSize: "clamp(26px, 3.2vw, 42px)", // ✅ proportional like Ulaman
          letterSpacing: "0.4px",
          maxWidth: "1050px",
        }}
      >
        A world-class gastronomic journey where
        <br />
nature’s finest ingredients meet culinary
<br/>
craftsmanship.
      </h2>

      <Link
        href="https://earthbyulaman.com/"
        className="uppercase font-semibold tracking-[0.8px] mt-7 relative"
        style={{ fontSize: "13px", color: "#C69C4D" }}
      >
        <span className="relative z-10">VISIT THE WEBSITE</span>

        {/* Underline */}
        <span
          className="block w-full h-[1.4px] bg-current mt-1 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
        />
      </Link>
    </section>
  );
}
