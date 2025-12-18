"use client";
import { useEffect, useRef } from "react";
import styles from "./education.module.css";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
});

export default function EducationTitle({
  title = "Education",
  subtitle = "A path of continuous learning that built my foundation in programming, problem-solving, and modern technologies, preparing me to tackle real-world challenges with confidence.",
}) {
  const shineRef = useRef(null);

  return (
    <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-0">
      {/* ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(600px 200px at 10% 10%, rgba(99,102,241,.12), transparent 60%), radial-gradient(600px 200px at 90% 30%, rgba(168,85,247,.12), transparent 60%), radial-gradient(700px 280px at 50% 100%, rgba(16,185,129,.10), transparent 60%)",
        }}
      />

      {/* Title + subtitle (center) */}
      <div
        ref={shineRef}
        className="group relative text-center"
        style={{ ["--shine-x"]: "50%" }}
      >
        {/* Title */}
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight
            bg-gradient-to-r from-[#0192b0] via-[#5073f6] to-[#8b6efa]
            bg-clip-text text-transparent
            drop-shadow-[0_1px_0_rgba(0,0,0,.45)] ${lobster.className}`}
        >
          {title}
        </h2>

        {/* Subtitle */}
        <p
          className="mx-auto mt-3 max-w-5xl text-sm sm:text-base md:text-lg text-white/66"
          style={{ textWrap: "balance" }}
        >
          {subtitle}
        </p>
      </div>

      {/* subtle particles (symmetric for center) */}
      <div className="pointer-events-none relative mt-6 h-8">
        <i
          className={`absolute left-1/3 top-0 h-2 w-2 rounded-full bg-indigo-400/80 shadow-[0_0_10px_rgba(99,102,241,.9)] ${styles.animateFloat1}`}
        />
        <i
          className={`absolute left-1/2 top-3 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-purple-400/80 shadow-[0_0_10px_rgba(168,85,247,.9)] ${styles.animateFloat2}`}
        />
        <i
          className={`absolute right-1/3 top-1 h-1.5 w-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_10px_rgba(16,185,129,.9)] ${styles.animateFloat3}`}
        />
      </div>
    </div>
  );
}
