"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type MenuItem = { href: string; label: string; image: string };

const GOLD = "#C8A45D";

// ✨ Ganti path gambar sesuai aset kamu (public/*)
const LEFT_MENU: MenuItem[] = [
  { href: "/", label: "Home", image: "/preview/home.jpg" },
  { href: "/rooms", label: "Villas", image: "/preview/villas.jpg" },
  { href: "/packages", label: "Packages", image: "/preview/packages.jpg" },
  { href: "/spa", label: "Spa", image: "/preview/spa.jpg" },
  { href: "/retreats", label: "Retreats", image: "/preview/retreats.jpg" },
  { href: "/dine", label: "Dine", image: "/preview/dine.jpg" },
  { href: "/activities", label: "Experiences", image: "/preview/experiences.jpg" },
];

const RIGHT_MENU: MenuItem[] = [
  { href: "/facilities", label: "Facilities", image: "/preview/facilities.jpg" },
  { href: "/blog", label: "Blog", image: "/preview/blog.jpg" },
  { href: "/reviews", label: "Reviews", image: "/preview/reviews.jpg" },
  { href: "/about", label: "About", image: "/preview/about.jpg" },
  { href: "/contact", label: "Contact", image: "/preview/contact.jpg" },
  { href: "/map", label: "The Map", image: "/preview/map.jpg" },
];

export default function MegaMenuOverlay({
  open,
  onClose,
  navbarHeight = 96, // px → sesuaikan kalau navbar kamu beda tinggi (h-24 = 96px)
}: {
  open: boolean;
  onClose: () => void;
  navbarHeight?: number;
}) {
  const [active, setActive] = useState<MenuItem | null>(LEFT_MENU[0]);

  // close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const all = useMemo(() => [...LEFT_MENU, ...RIGHT_MENU], []);
  useEffect(() => {
    if (!active && all.length) setActive(all[0]);
  }, [active, all]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed left-0 right-0 bottom-0 z-40 bg-[#F1EDE6] overflow-y-auto transition-all duration-500
      ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
      style={{ top: navbarHeight }} // persis “di bawah navbar”
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
        {/* GRID: kiri / center-preview / kanan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* LEFT LIST */}
          <nav className="order-1 md:order-none">
            <ul className="space-y-2 md:space-y-3">
              {LEFT_MENU.map((m) => (
                <li key={m.href}>
                  <Link
                    href={m.href}
                    onMouseEnter={() => setActive(m)}
                    onFocus={() => setActive(m)}
                    onClick={onClose}
                    className="block text-[clamp(24px,3.2vw,38px)] leading-tight tracking-wide"
                    style={{ color: GOLD }}
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* sublinks kecil contoh */}
            <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-6 text-sm" style={{ color: GOLD }}>
              <li><Link href="https://wa.me/62812xxxx" className="opacity-80 hover:opacity-100">Whatsapp</Link></li>
              <li><Link href="#" className="opacity-80 hover:opacity-100">Directions</Link></li>
              <li><Link href="#" className="opacity-80 hover:opacity-100">TripAdvisor</Link></li>
              <li><Link href="#" className="opacity-80 hover:opacity-100">Instagram</Link></li>
              <li><Link href="#" className="opacity-80 hover:opacity-100">Facebook</Link></li>
            </ul>
          </nav>

          {/* CENTER PREVIEW (HIDDEN on small) */}
          <div className="relative hidden md:flex items-center justify-center">
            {/* bingkai arch sederhana pakai rounded-top + overflow */}
            <div className="w-[min(520px,32vw)] aspect-square rounded-t-[45%] rounded-b-[8%] overflow-hidden shadow-lg bg-black/5">
              {/* crossfade 2-layer: current & fallback */}
              {active && (
                <Image
                  key={active.image}
                  src={active.image}
                  alt={active.label}
                  fill
                  className="object-cover animate-fadein"
                  sizes="(max-width:768px) 0, 520px"
                />
              )}
            </div>
          </div>

          {/* RIGHT LIST */}
          <nav className="order-2 md:order-none md:text-right">
            <ul className="space-y-2 md:space-y-3">
              {RIGHT_MENU.map((m) => (
                <li key={m.href}>
                  <Link
                    href={m.href}
                    onMouseEnter={() => setActive(m)}
                    onFocus={() => setActive(m)}
                    onClick={onClose}
                    className="block text-[clamp(22px,2.6vw,32px)] leading-tight tracking-wide"
                    style={{ color: GOLD }}
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* badge contoh (kanan bawah) */}
            <div className="mt-8 md:mt-16 flex md:justify-end">
              <div className="text-[10px] uppercase tracking-wide text-black/40 bg-white/70 px-3 py-1 rounded-full border border-black/5">
                Traveler’s Choice 2024
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* little css for fade-in */}
      <style jsx global>{`
        .animate-fadein { animation: fadein .35s ease both; }
        @keyframes fadein { from { opacity: 0; transform: scale(1.02); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
}
