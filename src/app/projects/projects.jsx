"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";
import ProjectTitle from "./ProjectTitle";
export const metadata = {
  title: "Md Hujaifa Islam Shanto | Projects - MERN Stack Developer",
  description:
    "Explore featured web development projects by Md Hujaifa Islam Shanto, a passionate MERN Stack Developer. Discover full-stack applications built with React, Node.js, MongoDB, and more.",
  keywords: [
    "Md Hujaifa Islam Shanto",
    "Mr Hujaifa",
    "MERN Stack Projects",
    "React Projects",
    "Full Stack Portfolio",
    "Node.js Projects",
    "MongoDB Projects",
    "Web App Developer",
    "JavaScript Developer Portfolio",
    "Modern Web Applications",
    "Md. Huzifa Islam",
    "Mr. Huzifa",
    "Portfolio Projects",
  ],
  openGraph: {
    title: "Md Hujaifa Islam Shanto | Projects - MERN Stack Developer",
    description:
      "Dive into the portfolio projects of Md Hujaifa Islam Shanto, including e-commerce platforms, booking apps, donation systems, and real-world full-stack applications.",
    url: "https://mrhujaifa.vercel.app/projects",
    siteName: "MrHujaifa Portfolio",
    images: [
      {
        url: "https://mrhujaifa.vercel.app/project-og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Hujaifa Islam Shanto | Project Portfolio",
    description:
      "Discover modern full-stack web projects developed by Md Hujaifa Islam Shanto using React, Express, and MongoDB.",
    images: ["https://mrhujaifa.vercel.app/twitter-project-card.png"],
  },
};

function SectionCard({ title, icon, pills, image, description, liveLink }) {
  const CARD_HEIGHT = 450;
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  return (
    <div
      ref={cardRef}
      style={{
        width: "100%",
        height: "100%",
        "--mx": `${coords.x}px`,
        "--my": `${coords.y}px`,
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
      }}
      className="group relative rounded-xl p-[1px] transition-transform duration-200 will-change-transform"
    >
      <div className="absolute inset-0 rounded-2xl animate-border-spin opacity-70" />

      <article className="relative rounded-xl border border-[#2a0e61] p-6 shadow-2xl h-full lg:h-110 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background: `
              radial-gradient(240px 240px at var(--mx) var(--my),
                rgba(99,102,241,0.25), transparent 40%),
              radial-gradient(360px 360px at var(--mx) var(--my),
                rgba(168,85,247,0.18), transparent 45%),
              radial-gradient(520px 520px at var(--mx) var(--my),
                rgba(16,185,129,0.12), transparent 50%)
            `,
            mixBlendMode: "screen",
          }}
        />

        <div
          className="pointer-events-none absolute -inset-1 rounded-xl
            bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.12),transparent)]
            translate-x-[-120%] group-hover:translate-x-[120%]
            animate-none group-hover:animate-shine duration-1000"
          style={{ maskImage: "linear-gradient(#000, #000)" }}
        />

        <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute -top-6 -right-8 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl animate-float-slow" />
          <div className="absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl animate-float-slower" />
        </div>

        {/* Actual Card Content */}
        <div className="flex flex-col md:flex-row h-full items-center justify-between gap-6">
          {/* Left Image Preview */}
          <div className="w-full md:w-1/2 h-56 md:h-full rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={`${title} Screenshot`}
              width={600}
              height={250}
              className="w-full h-full"
            />
          </div>

          {/* Right Text Info */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col gap-3 text-white">
            <h3 className="text-[36px] font-bold">{title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mt-2">
              {pills.map((pill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700/70 px-3 py-1.5 text-sm text-slate-300"
                >
                  <Image
                    src={pill.icon}
                    alt={pill.label}
                    width={18}
                    height={18}
                  />
                  {pill.label}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/mrhujaifa"
                target="_blank"
                className="bg-black hover:bg-slate-800 text-white px-5 py-2 rounded-xl flex items-center gap-2 border border-slate-600"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 496 512"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"></path>
                </svg>
                GitHub
              </a>
              <a
                href={liveLink}
                target="_blank"
                className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-xl flex items-center gap-2"
              >
                <GoLinkExternal size={20} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function SkillsShowcase() {
  const sections = [
    {
      title: "Blood Donation",
      icon: "/icons/event.png",
      image: "/projects/blood-donation.png",
      description:
        "Blood Donation is a responsive single-page application built with React to connect blood donors and recipients in real-time. Authenticated users can create donation requests, search for available donors, and manage their donation history through an intuitive dashboard.",
      liveLink: "https://blood-donation-apps.netlify.app/",
      pills: [
        { icon: "/skills/react.png", label: "React" },
        { icon: "/skills/react-router.webp", label: "React Router" },
        { icon: "/skills/tailwind.png", label: "Tailwind CSS" },
        { icon: "/skills/html.png", label: "HTML" },
        { icon: "/skills/css.png", label: "CSS" },
        { icon: "/skills/firebase.png", label: "Firebase" },
        { icon: "/skills/express.png", label: "Express Js" },
        { icon: "/skills/jwt.png", label: "JWT" },
        { icon: "/skills/node.png", label: "Node JS" },
        { icon: "/skills/mongodb.svg", label: "MongoDB" },
        { icon: "/skills/stripe.png", label: "Stripe" },
        { icon: "/skills/axios.png", label: "Axios" },
        { icon: "/skills/netlify.svg", label: "Netlify" },
        { icon: "/skills/vercel.svg", label: "Vercel" },
        { icon: "/skills/vite.png", label: "vite" },
      ],
    },
    {
      title: "B2B Wholesale Market",
      icon: "/icons/event.png",
      image: "/projects/b2b-web.png",
      description:
        "A full-featured B2B wholesale marketplace where businesses can list products, manage orders, and securely handle payments. It supports role-based dashboards and seamless product management.",
      liveLink: "https://b2b-wholesale-market.netlify.app/",
      pills: [
        { icon: "/skills/react.png", label: "React" },
        { icon: "/skills/react-router.webp", label: "React Router" },
        { icon: "/skills/tailwind.png", label: "Tailwind CSS" },
        { icon: "/skills/html.png", label: "HTML" },
        { icon: "/skills/css.png", label: "CSS" },
        { icon: "/skills/firebase.png", label: "Firebase" },
        { icon: "/skills/express.png", label: "Express Js" },
        { icon: "/skills/node.png", label: "Node JS" },
        { icon: "/skills/mongodb.svg", label: "MongoDB" },
        { icon: "/skills/axios.png", label: "Axios" },
        { icon: "/skills/netlify.svg", label: "Netlify" },
        { icon: "/skills/vercel.svg", label: "Vercel" },
        { icon: "/skills/vite.png", label: "vite" },
      ],
    },
    {
      title: "RecipeBook – Smart Recipe Manager",
      icon: "/icons/event.png",
      image: "/projects/recipe.png",
      description:
        "RecipeBook is a modern recipe management web app where users can browse, search, and save their favorite recipes. With intuitive filters, responsive design, and user-friendly UI, it helps users organize and explore a world of cooking inspiration.",
      liveLink: "https://recipebook-web.netlify.app/",
      pills: [
        { icon: "/skills/react.png", label: "React" },
        { icon: "/skills/react-router.webp", label: "React Router" },
        { icon: "/skills/tailwind.png", label: "Tailwind CSS" },
        { icon: "/skills/html.png", label: "HTML" },
        { icon: "/skills/firebase.png", label: "Firebase" },
        { icon: "/skills/axios.png", label: "Axios" },
        { icon: "/skills/netlify.svg", label: "Netlify" },
        { icon: "/skills/vercel.svg", label: "Vercel" },
        { icon: "/skills/vite.png", label: "vite" },
      ],
    },
  ];

  return (
    <div className="mt-20">
      <div>
        <ProjectTitle></ProjectTitle>
      </div>
      <section className="relative isolate">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        />
        <div className="mx-auto container px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 gap-6 md:gap-20 lg:gap-25">
            {sections.map((s) => (
              <SectionCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
