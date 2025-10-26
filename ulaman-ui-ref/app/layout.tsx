import type { Metadata } from "next";
import "./globals.css";
import { geist } from "./fonts"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Welcome • Ulaman Eco Luxury Resort",
  description: "Ulaman Eco Luxury Resort, Bali",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-[#EDE8D9] text-black`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
