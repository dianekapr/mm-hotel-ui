import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream' : 'bg-transparent'
      } shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className="text-black">
            <img src="/images/logo.png" alt="Ulaman Bali Logo" className="h-12" />
          </Link>
        </div>

        {/* Navbar Links (Desktop) */}
        <nav>
          <ul className="hidden md:flex space-x-8 text-black">
            <li><Link href="/rooms">Villas</Link></li>
            <li><Link href="/">Spa</Link></li>
            <li><Link href="/">Dine</Link></li>
            <li><Link href="/retreats">Retreats</Link></li>
          </ul>
        </nav>

        {/* Hamburger Menu & Stay Button (Mobile) */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
            ☰
          </button>
          <Link href="/" className="bg-black text-white px-4 py-2 rounded-full">
            Stay with Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><Link href="/rooms">Villas</Link></li>
            <li><Link href="/">Spa</Link></li>
            <li><Link href="/">Dine</Link></li>
            <li><Link href="/retreats">Retreats</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
