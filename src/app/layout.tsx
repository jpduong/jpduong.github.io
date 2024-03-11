import { fonts } from "@/app/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/footer";

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
      className={`${fonts.rubik.variable} bg-gray-900 text-white lowercase`}
    >
      <body>
        <main className="p-8">
          <div className="container max-w-xl mx-auto pt-16">
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
