import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-xl font-bold">
          <Link href="/" className="text-black">Ulaman Bali</Link>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/villas">Villas</Link></li>
            <li><Link href="/packages">Packages</Link></li>
            <li><Link href="/experiences">Experiences</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
