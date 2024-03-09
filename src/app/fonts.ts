// app/fonts.ts
import { Rubik, Inter } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const fonts = {
  rubik,
};
