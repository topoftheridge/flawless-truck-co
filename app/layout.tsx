import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flawless Truck Co | Custom Paint & Color Matching",
  description:
    "Flawless Truck Co specializes in custom paint jobs, color matching, and panel work on trucks, SUVs, and BMWs. Get a free quote today.",
  openGraph: {
    title: "Flawless Truck Co | Custom Paint & Color Matching",
    description: "Custom paint. Perfect color matching. Trucks, BMWs, and more.",
    siteName: "Flawless Truck Co",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
