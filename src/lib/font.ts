import { Quicksand, Exo, Itim, Josefin_Sans, Amaranth } from "next/font/google";

export const quickSand = Quicksand({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const exo = Exo({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-exo",
  display: "swap",
});

export const itimRegular = Itim({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-itim",
  display: "swap",
});

export const josefinSans = Josefin_Sans({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  display: "swap",
});

export const amaranthRegular = Amaranth({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-amaranth",
  display: "swap",
});

export const amaranthBold = Amaranth({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-amaranth-bold",
  display: "swap",
});
