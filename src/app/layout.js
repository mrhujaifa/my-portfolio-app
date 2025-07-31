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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title:
    "Md. Hujaifa Islam Shanto — MERN Stack Developer | Full-Stack Portfolio | Mr. Hujaifa",
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
    "mdhujaifa",
    "mdhujaifaislam",
    "md hujaifa",
    "Hujaifa",
    "Hujaifa islam",
    "Hujaifa islam shanto",
    "hujaifa",
    "huzaifa",
    "md huzaifa islam",
    "Md. Huzaifa Islam",
    "Md. Huzaifa Islam Shanto",
    "Md. Huzaifa Islam Shanto",
    "mdhuzaifaislam",
    "md huzaifa islam portfolio",
    "md huzaifa islam portfolio website",
    "md huzaifa islam website",
    "md huzaifa islam shanto website",
    "md huzaifa islam shanto developer",
    "md huzaifa islam developer",
    "huzaifa developer",
    "Md. Huzaifa Islam Shanto developer",
    "Md. Huzaifa Islam developer",
    "Md. Huzaifa Islam dev",
    "Md. Huzaifa Islam web developer",
    "Md. Huzaifa Islam mern stack developer",
    "Md. Huzaifa Islam React",
    "Md. Huzaifa Islam next js",
    "mdhuzaifaislam",
    "mdhuzaifaislam",
    "mdhuzaifaislamshanto",
    "Md. Huzaifa Islam Portfolio web site",
    "Md. Huzaifa Islam Portfolio",
    "Md. Huzaifa Islam personal web",
    "Md. Huzaifa Islam personal website",
    "md hujaifa islam shanto mern developer",
    "hujaifa islam shanto portfolio 2025",
    "best mern stack developer bangladesh",
    "top web developer bangladesh",
    "full stack developer portfolio 2025",
    "react nextjs node mern developer",
    "hujaifa islam shanto blog",
    "personal portfolio website mern developer",
    "bangladeshi software engineer 2025",
    "hujaifa islam github projects",
    "hire md hujaifa islam developer",
    "software developer portfolio bangladesh",
    "hujaifa islam shanto react projects",
    "freelance web developer bangladesh",
    "professional developer portfolio website",
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
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
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
        <title>
          Md. Hujaifa Islam Shanto — MERN Stack Developer | Full-Stack Portfolio
          | Mr. Hujaifa
        </title>

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="description"
          content="Official portfolio of Md. Hujaifa Islam Shanto, a professional MERN Stack Developer from Bangladesh."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mrhujaifa.vercel.app/" />
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
        <noscript>
          <div
            style={{ padding: "12px", background: "#0b0b0b", color: "#fff" }}
          >
            <h1 style={{ margin: 0 }}>
              Md. Hujaifa Islam Shanto — MERN Stack Developer (React, Next.js,
              Node, Express, MongoDB)
            </h1>
            <p style={{ margin: "8px 0 0" }}>
              Bangladesh-ভিত্তিক Full‑Stack ডেভেলপার। Projects, Skills,
              Experience ও যোগাযোগ দেখুন।
            </p>
          </div>
        </noscript>

        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
