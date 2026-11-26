import * as React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "@/app/globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "The Laughing House - Stand-up Comedy & Live Entertainment",
  description:
    "Your home for stand-up comedy and live entertainment. Join us for an unforgettable night of laughter.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} antialiased bg-[#1a1a1a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
