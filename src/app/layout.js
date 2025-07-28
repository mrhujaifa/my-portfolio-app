import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SpaceBackground from "./{My-app}/animation/animation";
import Navbar from "./{My-app}/Navbar/Navbar";
import NavAnimation from "./{My-app}/NavAnimation/NavAnimation";
import CustomCursor from "./Components/CustomCursor";
import UltraAdvancedSpaceCursor from "./Components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mr. Hujaifa — MERN Stack Developer",
  description:
    "Explore the portfolio of Mr. Hujaifa, a passionate MERN Stack Developer from Bangladesh. Specialized in building full-stack web applications using React, Node, MongoDB, and Express.",
  keywords: [
    "Mr. Hujaifa",
    "MERN Developer",
    "Portfolio",
    "Web Developer Bangladesh",
    "React Developer",
    "Node.js",
    "MongoDB",
    "Full Stack Developer",
    "Next.js",
  ],
  authors: [{ name: "Mr. Hujaifa", url: "https://mrhujaifa.vercel.app" }],
  creator: "Mr. Hujaifa",
  publisher: "Mr. Hujaifa",
  openGraph: {
    title: "Mr. Hujaifa — MERN Stack Developer",
    description:
      "Explore the portfolio and projects of Mr. Hujaifa, a professional MERN Stack Developer based in Bangladesh.",
    url: "https://mrhujaifa.vercel.app",
    siteName: "Mr. Hujaifa Portfolio",
    images: [
      {
        url: "https://mrhujaifa.vercel.app/og-thumbnail.jpg", 
        width: 1200,
        height: 630,
        alt: "Mr. Hujaifa Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "3KUtrcoFYFof8Do-qtJVSQEfX0E41BmaEmxQ-3Uf3Ro",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#301403]`}
      >
        {/* 🎇 Background Fixed Space Animation */}
        <div className="fixed inset-0 -z-10">
          <SpaceBackground />
        </div>
        <div>
          <Navbar />
        </div>
        <div>
          <NavAnimation />
        </div>
        <UltraAdvancedSpaceCursor></UltraAdvancedSpaceCursor>

        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
