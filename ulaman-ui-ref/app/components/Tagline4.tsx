"use client";

import Link from "next/link";
import { cormorant } from "../fonts";

export default function Tagline4() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center text-center"
      style={{ padding: "140px 0 100px" }} 
    >
      <h2
        className={`${cormorant.className} text-[#C69C4D] leading-snug font-normal`}
        style={{
          fontSize: "clamp(26px, 3.2vw, 42px)", 
          letterSpacing: "0.4px",
          maxWidth: "1050px",
        }}
      >
Reconnect With Yourself In        <br />
Luxurious Comfort.
      </h2>

      <Link
        href="https://earthbyulaman.com/"
        className="uppercase font-semibold tracking-[0.8px] mt-7 relative"
        style={{ fontSize: "13px", color: "#C69C4D" }}
      >
        <span className="relative z-10">BOOK YOUR STAY</span>

        <span
          className="block w-full h-[1.4px] bg-current mt-1 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
        />
      </Link>
    </section>
  );
}
