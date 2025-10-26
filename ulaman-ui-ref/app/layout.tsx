import type { Metadata } from "next";
import "./globals.css"; 
import { Geist, Geist_Mono } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Welcome • Ulaman Eco Luxury Resort",
  description: "Ulaman Eco Luxury Resort, Bali",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#D8E2DC] text-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
