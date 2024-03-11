import { fonts } from "@/app/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jd",
  description: "jd is a senior software engineer at leonardo.ai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fonts.rubik.variable} bg-gray-900 text-white`}
    >
      <body>{children}</body>
    </html>
  );
}
