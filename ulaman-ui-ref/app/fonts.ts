import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";

export const geist = Geist({ subsets: ["latin"] });
export const geistMono = Geist_Mono({ subsets: ["latin"] });
export const playfair = Playfair_Display({ subsets: ["latin"] });

export const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});
