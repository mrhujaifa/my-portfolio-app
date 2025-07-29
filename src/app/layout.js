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
  title: "Mr. Hujaifa — MERN Stack Developer | Full-Stack Web Applications",
  description:
    "Discover the professional portfolio of Md. Hujaifa Islam Shanto, a passionate MERN Stack Developer from Bangladesh specializing in React, Node.js, Express, and MongoDB. Building scalable and modern web applications.",
  keywords: [
    "Md. Hujaifa Islam Shanto",
    "MERN Stack Developer",
    "Full Stack Developer Bangladesh",
    "React Developer",
    "Node.js Developer",
    "MongoDB Expert",
    "Next.js Developer",
    "Web Application Developer",
    "Portfolio of Hujaifa",
    "Bangladesh Web Developer",
    "JavaScript Developer",
    "Express.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
  ],
  authors: [
    { name: "Md. Hujaifa Islam Shanto", url: "https://mrhujaifa.vercel.app" },
  ],
  creator: "Md. Hujaifa Islam Shanto",
  publisher: "Md. Hujaifa Islam Shanto",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  openGraph: {
    title: "Mr. Hujaifa — MERN Stack Developer | Professional Portfolio",
    description:
      "Explore the portfolio and projects of Md. Hujaifa Islam Shanto, a dedicated MERN Stack Developer from Bangladesh specializing in modern web technologies.",
    url: "https://mrhujaifa.vercel.app",
    siteName: "Mr. Hujaifa Portfolio",
    images: [
      {
        url: "https://mrhujaifa.vercel.app/og-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio thumbnail of Mr. Hujaifa",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr. Hujaifa — MERN Stack Developer | Portfolio",
    description:
      "Professional portfolio of Md. Hujaifa Islam Shanto, MERN Stack Developer from Bangladesh.",
    site: "@mr___hujaifa", // replace with your actual Twitter handle without '@'
    creator: "@mr___hujaifa", // replace accordingly
    images: ["https://mrhujaifa.vercel.app/og-thumbnail.jpg"],
  },
  verification: {
    google: "3KUtrcoFYFof8Do-qtJVSQEfX0E41BmaEmxQ-3Uf3Ro",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data for social profiles */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md. Hujaifa Islam Shanto",
              url: "https://mrhujaifa.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/mrhujaifa",
                "https://github.com/mrhujaifa",
                "https://www.facebook.com/mrhujaifa0",
                "https://x.com/mr___hujaifa", // replace here too
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#301403]`}
      >
        {/* 🎇 Background Fixed Space Animation */}
        <div className="fixed inset-0 -z-10">
          <SpaceBackground />
        </div>
        <Navbar />
        <NavAnimation />
        <UltraAdvancedSpaceCursor />
        <CustomCursor></CustomCursor>
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
