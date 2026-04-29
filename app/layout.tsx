import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ragged Old Flag: The Pyromusical",
  description:
    "A Meadowmoore Boom celebration of America's 250th birthday, our first responders, and our military.",
  openGraph: {
    title: "Ragged Old Flag: The Pyromusical",
    description:
      "A Meadowmoore Boom celebration of America's 250th birthday, our first responders, and our military.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ragged Old Flag: The Pyromusical",
    description:
      "A Meadowmoore Boom celebration of America's 250th birthday, our first responders, and our military.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="antialiased scroll-smooth">{children}</body>
    </html>
  );
}
