// app/fonts.ts
import { Rubik, Inter } from "next/font/google";

const rubik = Inter({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const fonts = {
  rubik,
};
