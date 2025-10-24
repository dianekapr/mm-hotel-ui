import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const lora = Lora({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Ulaman Eco Luxury Resort | Bali Wellness Retreat",
  description:
    "Award-winning eco-luxury resort in Bali offering wellness retreats, luxury accommodations, and authentic Balinese experiences.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
