import { fonts } from "@/app/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "./theme";

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
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
