import type { Metadata } from "next";

import "./globals.css";
import {
  amaranthBold,
  amaranthRegular,
  exo,
  itimRegular,
  josefinSans,
  quickSand,
} from "@/lib/font";
import { ThemeProvider } from "@/providers/theme-provider";
import LenisScrollProvider from "@/providers/lenis-provider";
import NavBar from "@/components/Header/NavBar";

export const metadata: Metadata = {
  title: "Nikolaire",
  description:
    "Nikolaire is an award-winning Software Development agency focused on fostering relationships & work culture to deliver world-class digital products.",
  openGraph: {
    title: "Nikolaire",
    description:
      "Nikolaire is an award-winning web Software Development agency focused on fostering relationships & work culture to deliver world-class digital products.",
    type: "website",
    url: "https://nikolaire.com",
    siteName: "Nikolaire",
    images: [
      {
        url: "./icon.svg",
        width: 800,
        height: 600,
        alt: "Nikolaire",
      },
    ],
  },
  twitter: {
    site: "@nikolaire",
    card: "summary_large_image",
    title: "Nikolaire",
    description:
      "Nikolaire is an award-winning Software Development agency focused on fostering relationships & work culture to deliver world-class digital products.",
    images: [
      {
        url: "./icon.svg",
        width: 800,
        height: 600,
        alt: "Nikolaire",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quickSand.variable} ${exo.variable} ${itimRegular.variable} ${josefinSans.variable} ${amaranthRegular.variable} ${amaranthBold.variable} antialiased container mx-auto  `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LenisScrollProvider>
            <NavBar />
            {children}
          </LenisScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
