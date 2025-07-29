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
  title:
    "Md. Hujaifa Islam Shanto — MERN Stack Developer | Portfolio of Mr. Hujaifa",
  description:
    "Welcome to the official portfolio of Md. Hujaifa Islam Shanto, also known as Mr. Hujaifa — a professional MERN Stack Developer from Bangladesh. Specialized in React.js, Node.js, Express.js, and MongoDB. Discover full-stack projects, developer skills, and more.",
  keywords: [
    "Md. Hujaifa Islam",
    "Md. Hujaifa Islam Shanto",
    "Mr. Hujaifa",
    "Developer Hujaifa",
    "Web Developer Md. Hujaifa Islam Shanto",
    "MERN Stack Developer",
    "MERN Stack Developer Hujaifa",
    "MERN Stack Developer Md. Hujaifa Islam Shanto",
    "Full Stack Developer Bangladesh",
    "React Developer Bangladesh",
    "Next.js Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Full-Stack Developer Hujaifa",
    "Developer Mr. Hujaifa",
    "Portfolio of Md. Hujaifa Islam",
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
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  openGraph: {
    title:
      "Md. Hujaifa Islam Shanto — MERN Stack Developer | Mr. Hujaifa Portfolio",
    description:
      "Explore the professional full-stack portfolio of Md. Hujaifa Islam Shanto aka Mr. Hujaifa — MERN Stack Developer from Bangladesh. Projects in React, Node, Express, MongoDB & Next.js.",
    url: "https://mrhujaifa.vercel.app",
    siteName: "Mr. Hujaifa Portfolio",
    images: [
      {
        url: "https://mrhujaifa.vercel.app/images/about-img.png",
        width: 1200,
        height: 630,
        alt: "Md. Hujaifa Islam Shanto | MERN Stack Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Md. Hujaifa Islam Shanto — MERN Stack Developer | Mr. Hujaifa",
    description:
      "Official portfolio of MERN Stack Developer Md. Hujaifa Islam Shanto (Mr. Hujaifa) — showcasing full-stack web projects and development skills.",
    site: "@mr___hujaifa",
    creator: "@mr___hujaifa",
    images: ["https://mrhujaifa.vercel.app/images/about-img.png"],
  },

  verification: {
    google: "3KUtrcoFYFof8Do-qtJVSQEfX0E41BmaEmxQ-3Uf3Ro",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://mrhujaifa.vercel.app/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://mrhujaifa.vercel.app/#person",
                  name: "Md. Hujaifa Islam Shanto",
                  url: "https://mrhujaifa.vercel.app",
                  image: "https://mrhujaifa.vercel.app/images/about-img.png",
                  jobTitle: "MERN Stack Developer",
                  sameAs: [
                    "https://www.linkedin.com/in/mrhujaifa",
                    "https://github.com/mrhujaifa",
                    "https://facebook.com/mrhujaifa0",
                    "https://x.com/mr___hujaifa",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mrhujaifa.vercel.app/#website",
                  url: "https://mrhujaifa.vercel.app",
                  name: "Md. Hujaifa Islam Shanto — Portfolio",
                  description:
                    "Portfolio of Md. Hujaifa Islam Shanto — MERN Stack Developer from Bangladesh",
                  publisher: {
                    "@id": "https://mrhujaifa.vercel.app/#person",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://mrhujaifa.vercel.app/#organization",
                  name: "Md. Hujaifa Islam Shanto",
                  url: "https://mrhujaifa.vercel.app",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://mrhujaifa.vercel.app/favicon-512.png",
                  },
                  sameAs: [
                    "https://www.linkedin.com/in/mrhujaifa",
                    "https://github.com/mrhujaifa",
                    "https://facebook.com/mrhujaifa0",
                  ],
                },
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
