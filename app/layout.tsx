import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flawless Truck Co | Custom & Restoration Paint Shop",
  description:
    "Flawless Truck Co specializes in custom paint jobs and full restorations on trucks, SUVs, and BMWs. Get a free quote today.",
  openGraph: {
    title: "Flawless Truck Co | Custom & Restoration Paint",
    description: "Custom paint. Flawless results. Trucks, restorations, and more.",
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
