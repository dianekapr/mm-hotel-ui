"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// Data for menu items
const menuItems = [
  "Home",
  "About Us",
  "Services",
  "Contact",
  "FAQ",
  "Gallery",
  "Blog",
  "Testimonials",
  "Careers",
  "Privacy Policy",
  "Terms of Service",
  "Disclaimer",
];

const awardLogos = [
  "/images/award-1.avif",
  "/images/award-2.avif",
  "/images/award-3.avif",
  "/images/award-4.avif",
  "/images/award-5.avif",
  "/images/award-6.avif",
  "/images/award-7.avif",
];

const linksLeft = [
  { label: "Whatsapp", href: "#" },
  { label: "TripAdvisor", href: "#" },
  { label: "Facebook", href: "#" },
];

const linksRight = [
  { label: "Directions", href: "#" },
  { label: "Instagram", href: "#" },
];

const packages = [
  { title: "Yoga Retreat", duration: "7 days" },
  { title: "Spa & Wellness", duration: "5 days" },
  { title: "Adventure Tour", duration: "4 days" },
  { title: "Family Escape", duration: "6 days" },
];

export default function Footer() {
  return (
    <div className="bg-[rgb(96,109,97)] text-white py-12 text-sm flex flex-col items-center gap-10 px-[4rem]">
      {/* Review Stars */}
      <div className="space-y-1 text-center">
        <p className="flex justify-center items-center gap-2">
          <span className="font-semibold text-white">4.8</span>
          {/* Manual Star Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill="currentColor"
            />
          </svg>
          <span className="text-gray-300">/ 552 Google Reviews</span>
        </p>
        <p className="flex justify-center items-center gap-2">
          <span className="font-semibold text-white">5.0</span>
          {/* Manual Star Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill="currentColor"
            />
          </svg>
          <span className="text-gray-300">/ 242 TripAdvisor Reviews</span>
        </p>
      </div>

      {/* Booking Form */}
      <div className="w-full flex flex-col gap-10 md:flex-row max-w-3xl">
        <div className="flex flex-wrap justify-around items-between w-full items-center gap-4 text-white lg:border-r lg:border-white">
          <span className="mb-1">Check In</span>
          <span className="w-8 border-b border-white"></span>
          <span className="mb-1">Check Out</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <FooterAdultSelector />
          <button className="cursor-pointer border border-white px-8 py-2 rounded-tl-lg rounded-br-lg text-white hover:bg-white hover:text-dark-emphasis transition">
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full gap-8 md:flex-row-reverse md:mt-10">
        <div className="w-full aspect-square relative">
          <Image
            src={"/images/footer-map.avif"}
            alt={"footer map"}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col w-full gap-6 md:justify-center">
          <h2 className="font-semibold text-2xl font-serif">
            Tucked Within Majestic Balinese Nature.
          </h2>
          <p>
            Strategically located near popular areas like Canggu and Ubud,
            experience tranquil nature and luxury. With endless activities,
            you&apos;ll never want to leave Ulaman.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full md:flex-row md:gap-10 md:items-baseline">
        <FooterSubscribeForm />
        <FooterExploreMenu />
        <FooterConnectSection />
      </div>
      <FooterAwardsMarquee />
      <FooterInfo />

      {/* Hardcoded Packages Marquee */}
      <div className="overflow-hidden text-green-dark text-sm py-4">
        <div className="whitespace-nowrap animate-marquee text-dark-emphasis">
          {packages.map((pkg, i) => (
            <span key={i} className="inline-block mx-4">
              {pkg.title} | {pkg.duration}
              <span className="mx-3 text-3xl ml-4">•</span>
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}

// Adult Selector Component
function FooterAdultSelector() {
  const [adults, setAdults] = useState(2);
  return (
    <div className="flex items-center gap-2">
      <span>Adult</span>
      <button
        onClick={() => setAdults((a) => Math.max(1, a - 1))}
        className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-lg"
      >
        −
      </button>
      <span>{adults}</span>
      <button
        onClick={() => setAdults((a) => a + 1)}
        className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-lg text-white opacity-60"
      >
        +
      </button>
    </div>
  );
}

// Awards Marquee Component
function FooterAwardsMarquee() {
  return (
    <div className="overflow-hidden py-6 w-full">
      <div className="relative w-full">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {awardLogos.concat(awardLogos).map((src, i) => (
            <div key={i} className="flex-shrink-0 w-48 h-12 relative">
              <Image src={src} alt={`Award ${i + 1}`} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}

// Connect Section Component
function FooterConnectSection() {
  return (
    <div className="text-white w-full md:px-12 py-12 md:w-1/3">
      <h3 className="text-2xl font-serif mb-8">Connect</h3>
      <div className="grid grid-cols-2 gap-8 max-w-screen-md">
        <div className="flex flex-col gap-6">
          {linksLeft.map(({ label, href }) => (
            <Link key={label} href={href} className="text-lg leading-relaxed hover:underline md:text-sm">
              {label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {linksRight.map(({ label, href }) => (
            <Link key={label} href={href} className="text-lg leading-relaxed hover:underline md:text-sm">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Explore Menu Component
function FooterExploreMenu() {
  const leftMenuItems = menuItems.slice(0, 6);
  const rightMenuItems = menuItems.slice(6, 12);

  const renderLinks = (items: string[]) =>
    items.map((label) => {
      const href = `/${label.toLowerCase().replace(/\s+/g, "-")}`;
      return (
        <Link key={label} href={href} className="text-white font-light text-lg leading-relaxed hover:underline md:text-sm">
          {label}
        </Link>
      );
    });

  return (
    <div className="text-white w-full md:w-1/3 md:px-12 py-12">
      <h3 className="text-white text-2xl font-serif mb-8">Explore</h3>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-screen-md">
        <div className="flex flex-col gap-4">{renderLinks(leftMenuItems)}</div>
        <div className="flex flex-col gap-4">{renderLinks(rightMenuItems)}</div>
      </div>
    </div>
  );
}

// Footer Info Component
function FooterInfo() {
  return (
    <div className="text-white py-10 text-sm space-y-6 lg:flex lg:text-xs gap-3">
      {/* Footer Information */}
      <div className="flex flex-wrap justify-start gap-6 text-xs">
        {[
          "Terms",
          "Privacy",
          "Ulaman Bookings",
          "Kids under 6 are not advised.",
          "© 2024–2025 Two Moons Studio for ulamanbali.com. All Rights Reserved",
          "Made With ❤︎ By Two Moons Studio",
        ].map((text, idx) => (
          <span key={idx} className="border-b border-transparent hover:border-white transition-[border-color] duration-300 ease-linear cursor-pointer">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

// Subscribe Form Component
function FooterSubscribeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", { name, email });
  };

  return (
    <div className="py-16 px-6 text-left md:w-1/3">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-white text-3xl md:text-2xl font-serif mb-10">Get Notified On Our Offers</h2>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Name */}
          <div>
            <label className="block text-white text-xl md:text-base mb-1">Your Name*</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-b border-white text-white text-lg outline-none py-1"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white text-xl md:text-base mb-1">Your Email*</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-white text-white text-lg outline-none py-1"
            />
          </div>

          {/* Submit */}
          <button type="submit" className="text-lg text-white opacity-60 border-b border-white hover:opacity-100 transition">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
