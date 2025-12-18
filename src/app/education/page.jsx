"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  FaCalendarAlt,
  FaTrophy,
  FaGraduationCap,
  FaStar,
} from "react-icons/fa";
import EducationTitle from "./educationHeader";

/** --- Education Card with responsive styling --- */
function EducationCard({
  degree,
  institution,
  period,
  description,
  achievements,
  topics,
}) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoords({ x, y });

    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
    const max = 10;
    setTilt({ rx: -(py * max), ry: px * max });
  };

  const onLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <div
      ref={cardRef}
      
      onMouseLeave={onLeave}
      style={{
        "--mx": `${coords.x}px`,
        "--my": `${coords.y}px`,
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
      }}
      className="
        group relative rounded-xl p-[1px]
        transition-transform duration-200 will-change-transform
        w-full  mx-auto h-full 
      "
    >
      {/* animated gradient border */}
      <div className="absolute inset-0 rounded-2xl animate-border-spin opacity-70" />

      {/* inner card */}
      <article
        className="relative rounded-xl border border-[#2a0e61] p-6 shadow-2xl overflow-hidden h-full"
      >
        {/* lighting hotspot */}
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

        {/* glossy sweep */}
        <div
          className="
            pointer-events-none absolute -inset-1 rounded-xl
            bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.12),transparent)]
            translate-x-[-120%] group-hover:translate-x-[120%]
            animate-none group-hover:animate-shine duration-1000
          "
          style={{ maskImage: "linear-gradient(#000, #000)" }}
        />

        {/* content */}
        <div className="relative z-[1] flex flex-col h-full text-slate-200">
          {/* Title with icon */}
          <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2 mb-2">
            <div className="border rounded-xl border-gray-600 p-2">
              <Image src="/icons/book.png" width={35} height={35} alt="Book icon" />
            </div>
            {degree}
          </h3>

          {/* Institution */}
          <p className="mb-1 text-slate-300 flex items-center gap-2 text-sm md:text-base">
            <FaGraduationCap /> {institution}
          </p>

          {/* Period */}
          <p className="mb-4 text-slate-500 flex items-center gap-2 text-xs md:text-sm">
            <FaCalendarAlt /> {period}
          </p>

          {/* Description */}
          <p className="mb-4 text-gray-400 text-xs md:text-sm line-clamp-3">
            {description}
          </p>

          {/* Key Achievements header */}
          {achievements?.length > 0 && (
            <>
              <div className="flex items-center gap-2 mb-2 font-semibold text-sm md:text-base">
                <FaTrophy className="text-[#58adfe]" /> Key Achievements
              </div>

              {/* Achievement pills */}
              <div className="flex flex-wrap gap-2 mb-3">
                {achievements.map(({ icon, label }, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 rounded-md border border-gray-500 px-3 py-1 text-xs md:text-sm"
                  >
                    {icon && <span>{icon}</span>} {label}
                  </span>
                ))}
              </div>
            </>
          )}

          {/* Topics */}
          {topics?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {topics.map((topic, i) => (
                <span
                  key={i}
                  className="rounded-md border border-gray-600 font-bold px-2 py-0.5 text-xs md:text-sm text-slate-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

/** --- Education Showcase Container --- */
export default function EducationShowcase() {
  const educationList = [
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Gangni Pilot High School",
      period: "2023-2024",
      description:
        "Studied Arts stream focusing on humanities subjects including Bengali, English, History, and Social Science, with an emphasis on critical thinking and cultural studies.",
      achievements: [
        {
          icon: <FaStar className="text-blue-300" />,
          label: "Subject: Arts",
        },
      ],
      topics: ["Bengali", "English", "History", "Geography", "Social Science"],
    },
    {
      degree: "Higher Secondary Certificate (HSC) - 2nd Year (Running)",
      institution: "Kushtia Islamia Collage",
      period: "2024-2026",
      description:
        "N/A",
      achievements: [
        {
          icon: <FaStar className="text-blue-300" />,
          label: "Subject: N/A",
        },
        {
          icon: <FaStar className="text-yellow-400" />,
          label: "Currently Studying - Progressing Well",
        },
      ],
      topics: ["N/A", "N/A", "N/A", "N/A", "N/A"],
    },
  ];
  

  return (
    <div className="mt-55 lg:mt-85">
      <h2 className="mb-2 text-center">
        <EducationTitle></EducationTitle>
      </h2>
      <section className="mx-auto container px-4 py-8 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
          {educationList.map((edu) => (
            <EducationCard key={edu.degree} {...edu} />
          ))}
        </div>
      </section>
    </div>
  );
}
