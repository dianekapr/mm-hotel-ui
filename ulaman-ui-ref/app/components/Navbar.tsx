"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import MenuOverlay from "./MenuOverlay";

const NAV_ITEMS = [
  { href: "/rooms", label: "Villas" },
  { href: "/spa", label: "Spa" },
  { href: "/dine", label: "Dine" },
  { href: "/retreats", label: "Retreats" },
];

const GOLD_HEX = "#C8A45D";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // overlay

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsModalOpen(false);
  }, []);
  useEffect(() => {
    if (isModalOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen, onKey]);

  const linksColor = isScrolled || isModalOpen ? GOLD_HEX : "#FFFFFF";
  const iconColor = isScrolled || isModalOpen ? GOLD_HEX : "#FFFFFF";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isModalOpen
            ? "bg-[#EFEBE2]/95 backdrop-blur shadow"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="hidden md:grid grid-cols-3 items-center h-24">
            <div className="flex items-center gap-6">
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setIsModalOpen((v) => !v)}
                className="group inline-flex flex-col"
              >
                <span
                  className="block w-7 h-[2px] mb-[6px] transition-all"
                  style={{
                    backgroundColor: iconColor,
                    transform: isModalOpen
                      ? "rotate(45deg) translateY(4px)"
                      : "none",
                  }}
                />
                <span
                  className="block w-7 h-[2px] transition-all"
                  style={{
                    backgroundColor: iconColor,
                    transform: isModalOpen
                      ? "rotate(-45deg) translateY(-4px)"
                      : "none",
                  }}
                />
              </button>

              <nav aria-label="Primary">
                <ul className="flex items-center gap-7 text-[15px] font-medium tracking-wide">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="hover:opacity-80 transition-opacity"
                        style={{ color: linksColor }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex justify-center">
              <Link
                href="/"
                aria-label="Home"
                className="inline-flex items-center"
              >
                <Image
                  src="/logo.svg"
                  alt="Ulaman Logo"
                  width={140}
                  height={44}
                  priority
                  className="h-11 w-auto"
                />
              </Link>
            </div>

            <div className="flex justify-end">
              <motion.div
            animate={{ scale: isScrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/book"
              className={`px-5 py-2 border text-sm font-medium transition-all duration-300 rounded-tl-xl rounded-br-xl hidden lg:flex hover:bg-gold hover:text-white hover:border-gold ${
                isScrolled || isMenuOpen
                  ? "text-gold border-gold"
                  : "text-white border-white"
              }`}
            >
              Stay With Us
            </Link>
            </motion.div>
            </div>

            {/* Mobile bar */}
            <div className="md:hidden flex items-center justify-between h-16">
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setIsModalOpen((v) => !v)}
                className="group inline-flex flex-col"
              >
                <span
                  className="block w-6 h-[2px] mb-[6px] transition-all"
                  style={{
                    backgroundColor: iconColor,
                    transform: isModalOpen
                      ? "rotate(45deg) translateY(3px)"
                      : "none",
                  }}
                />
                <span
                  className="block w-6 h-[2px] transition-all"
                  style={{
                    backgroundColor: iconColor,
                    transform: isModalOpen
                      ? "rotate(-45deg) translateY(-3px)"
                      : "none",
                  }}
                />
              </button>

              <Link href="/" aria-label="Home" className="inline-flex">
                <Image
                  src="/logo.svg"
                  alt="Ulaman Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>

              <div className="flex items-center gap-3">
                <motion.div
            animate={{ scale: isScrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
          >
                <Link
              href="/book"
              className={`px-5 py-2 border text-sm font-medium transition-all duration-300 rounded-tl-xl rounded-br-xl flex lg:hidden ${
                isScrolled || isMenuOpen
                  ? "text-gold border-gold"
                  : "text-white border-white"
              }`}
            >
              Book
            </Link>
          </motion.div>
                <button
                  onClick={() => setIsMenuOpen((v) => !v)}
                  aria-label="Toggle links"
                  aria-expanded={isMenuOpen}
                  style={{ color: linksColor }}
                  className="text-2xl leading-none"
                >
                  ☰
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="bg-white shadow-md border-t">
            <ul className="flex flex-col items-center gap-4 py-6 text-black font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-1.5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/"
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-black text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Stay with Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <MenuOverlay
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        navbarHeight={96}
      />
    </>
  );
}
