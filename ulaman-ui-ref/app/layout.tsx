import type { Metadata } from "next";
import "./globals.css"; 
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Welcome • Ulaman Eco Luxury Resort",
  description: "Ulaman Eco Luxury Resort, Bali",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans bg-[#F7F7F7] text-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
