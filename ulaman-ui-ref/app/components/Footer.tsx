import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="w-10 h-10 rounded-full bg-[#6B705C]" />
          <p className="mt-3 text-sm text-white/80">
            Eco-Luxury retreat surrounded by rice fields and rivers.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><a href="#rooms" className="hover:opacity-80">Rooms</a></li>
            <li><a href="#activities" className="hover:opacity-80">Activities</a></li>
            <li><a href="#retreats" className="hover:opacity-80">Retreats</a></li>
            <li><a href="#packages" className="hover:opacity-80">Packages</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>Buwit, Tabanan, Bali</li>
            <li>+62 812-0000-0000</li>
            <li>reservations@yourdomain.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-12 flex items-center justify-between text-xs text-white/70">
          <span>© {new Date().getFullYear()} Ulaman Eco Luxury Resort</span>
          <span>Privacy • Terms</span>
        </div>
      </div>
    </footer>
  );
}
