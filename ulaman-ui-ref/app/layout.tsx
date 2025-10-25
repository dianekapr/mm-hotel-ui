import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import { ToastContainer } from "react-toastify";
// import { WishlistProvider } from "@/context/wishlistContext";

export const metadata: Metadata = {
  title: "Welcome • Ulaman Eco Luxury Resort",
  description: "Ulaman Eco Luxury Resort, Bali",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* <WishlistProvider>
          <Navbar /> */}
          <main>{children}</main>
          {/* <Footer />
          <ToastContainer />
        </WishlistProvider> */}
      </body>
    </html>
  )
}


