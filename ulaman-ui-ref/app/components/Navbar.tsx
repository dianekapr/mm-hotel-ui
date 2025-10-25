'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* 🔹 Logo (SVG) */}
        <Link href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 50"
            className="h-10 w-auto"
          >
            {/* Example SVG Logo — Replace this path with your actual logo SVG */}
            <text
              x="0"
              y="35"
              fill={isScrolled ? '#000' : '#fff'}
              fontSize="32"
              fontWeight="bold"
              fontFamily="serif"
            >
              Ulaman
            </text>
          </svg>
        </Link>

        {/* 🔹 Navbar Links (Desktop) */}
        <nav>
          <ul
            className={`hidden md:flex space-x-8 ${
              isScrolled ? 'text-black' : 'text-white'
            } font-medium`}
          >
            <li><Link href="/rooms">Villas</Link></li>
            <li><Link href="/spa">Spa</Link></li>
            <li><Link href="/dine">Dine</Link></li>
            <li><Link href="/retreats">Retreats</Link></li>
          </ul>
        </nav>

        {/* 🔹 Hamburger & Stay Button (Mobile) */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${isScrolled ? 'text-black' : 'text-white'} text-2xl`}
          >
            ☰
          </button>
          <Link
            href="/"
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Stay with Us
          </Link>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4 py-6 text-black font-medium">
            <li><Link href="/rooms">Villas</Link></li>
            <li><Link href="/spa">Spa</Link></li>
            <li><Link href="/dine">Dine</Link></li>
            <li><Link href="/retreats">Retreats</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
