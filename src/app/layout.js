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
    "Md. Hujaifa Islam Shanto — Expert MERN Stack Developer | Full-Stack Portfolio | Mr. Hujaifa",
  description:
    "Official portfolio of Md. Hujaifa Islam Shanto (Mr. Hujaifa), a professional MERN Stack Developer from Bangladesh. Explore advanced React.js, Node.js, Express.js, MongoDB projects, blog, and contact info.",
  keywords: [
    "Md. Hujaifa Islam",
    "Md. Hujaifa Islam Shanto",
    "Mr. Hujaifa",
    "MERN Stack Developer Bangladesh",
    "Full-Stack Developer Bangladesh",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "Software Engineer Bangladesh",
    "Portfolio Md. Hujaifa Islam",
    "Web Developer Bangladesh",
    "Frontend Developer",
    "Backend Developer",
    "Mr. Hujaifa",
    "web developement",
    "web developer Mr. hujaifa",
    "web developer Md. Hujaifa Islam",
    "web developer md hujaifa islam",
    "web developer md hujaifa islam shanto ",
    "web developer Md. Hujaifa Islam Shanto ",
    "Software Engineer",
    "Developer Hujaifa",
    "mdhujaifaislamshanto",
    "md hujaifa islam shanto",
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

  // ➕ ADDED: let Google reliably pick your favicon (ICO)
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },

  openGraph: {
    title:
      "Md. Hujaifa Islam Shanto — MERN Stack Developer | Professional Portfolio",
    description:
      "Explore the professional portfolio of Md. Hujaifa Islam Shanto, a MERN Stack Developer specializing in React, Node, Express, MongoDB, and Next.js.",
    url: "https://mrhujaifa.vercel.app",
    siteName: "Mr. Hujaifa Portfolio",
    images: [
      {
        url: "https://mrhujaifa.vercel.app/images/about-img.png",
        width: 1200,
        height: 630,
        alt: "Md. Hujaifa Islam Shanto - MERN Stack Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Md. Hujaifa Islam Shanto — MERN Stack Developer | Portfolio",
    description:
      "Portfolio website of MERN Stack Developer Md. Hujaifa Islam Shanto (Mr. Hujaifa). Check out projects, skills, and contact information.",
    site: "@mr___hujaifa",
    creator: "@mr___hujaifa",
    images: ["https://mrhujaifa.vercel.app/images/about-img.png"],
  },

  verification: {
    google: "3KUtrcoFYFof8Do-qtJVSQEfX0E41BmaEmxQ-3Uf3Ro",
  },

  // Additional structured data for SEO (JSON-LD)
  additionalMetaTags: [
    {
      name: "google-site-verification",
      content: "3KUtrcoFYFof8Do-qtJVSQEfX0E41BmaEmxQ-3Uf3Ro",
    },
  ],

  // Adding JSON-LD structured data for Person schema
  metadataBase: new URL("https://mrhujaifa.vercel.app"),
  alternates: {
    canonical: "https://mrhujaifa.vercel.app",
  },

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md. Hujaifa Islam Shanto",
    url: "https://mrhujaifa.vercel.app",
    sameAs: [
      "https://www.linkedin.com/in/mrhujaifa",
      "https://github.com/mrhujaifa",
      "https://twitter.com/mr___hujaifa",
    ],
    jobTitle: "MERN Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Self-employed",
    },
    image: "https://mrhujaifa.vercel.app/images/about-img.png",
    description:
      "Professional MERN Stack Developer specializing in React, Node.js, Express.js, MongoDB and Next.js.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://mrhujaifa.vercel.app/" />

        <meta
          name="description"
          content="Official portfolio of Md. Hujaifa Islam Shanto, a professional MERN Stack Developer from Bangladesh."
        />
        <meta
          name="keywords"
          content="Md. Hujaifa Islam, MERN Stack Developer, React Developer, Node.js Developer, Portfolio, Bangladesh Developer"
        />
        <meta name="author" content="Md. Hujaifa Islam Shanto" />
        <meta name="robots" content="index, follow, noarchive" />
        <meta
          name="google-site-verification"
          content="3KUtrcoFYFof8Do-qtJVSQEfX0E41BmaEmxQ-3Uf3Ro"
        />

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
