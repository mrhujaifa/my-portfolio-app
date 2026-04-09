"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lobster } from "next/font/google";
import styles from "./SectionTitle.module.css";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
});

export default function SectionTitle({
  eyebrow = "",
  title = "",
  subtitle = "",
  iconSrc,
  iconAlt = "",
  className = "",
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-6xl px-3 sm:px-6 lg:px-0 ${className}`}
    >
      <div className="flex flex-col items-center text-center">
        {iconSrc ? (
          <motion.span
            animate={{ y: [0, -3, 0], scale: [1, 1.04, 1] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center justify-center"
          >
            <Image
              src={iconSrc}
              alt={iconAlt || title}
              width={62}
              height={62}
              className="h-8 w-8 object-contain sm:h-14 sm:w-14"
            />
          </motion.span>
        ) : null}

        {eyebrow ? (
          <p className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-white/50 sm:mt-3 sm:text-[0.65rem] sm:tracking-[0.45em]">
            {eyebrow}
          </p>
        ) : null}

        <h2
          className={`relative mt-3 text-[2rem] font-black leading-none sm:mt-4 sm:text-4xl md:text-6xl ${lobster.className}`}
        >
          <span className="relative z-10 bg-gradient-to-r from-[#6ddcff] via-[#8192ff] to-[#c38bff] bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(96,165,250,.25)]">
            {title}
          </span>
          <span
            aria-hidden
            className={`absolute left-1/2 top-full h-px w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent sm:w-40 ${styles.titleShine}`}
          />
        </h2>

        {subtitle ? (
          <p
            className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-white/66 sm:mt-4 sm:max-w-4xl sm:text-base md:text-lg"
            style={{ textWrap: "balance" }}
          >
            {subtitle}
          </p>
        ) : null}

        <div className="pointer-events-none mt-4 flex items-center justify-center gap-1.5 sm:mt-6 sm:gap-3">
          <span className="hidden h-px w-10 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent sm:block sm:w-16" />
          <motion.div
            animate={{ y: [0, -5, 0], scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500 shadow-[0_0_18px_rgba(103,232,249,.95)] ring-4 ring-cyan-300/10 sm:h-3 sm:w-3"
          />
          <motion.div
            animate={{ y: [0, 5, 0], scale: [1, 1.08, 1], opacity: [0.65, 1, 0.65] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.15,
            }}
            className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet-300 via-fuchsia-400 to-purple-500 shadow-[0_0_18px_rgba(192,132,252,.95)] ring-4 ring-violet-300/10 sm:h-2.5 sm:w-2.5"
          />
          <motion.div
            animate={{ y: [0, -4, 0], scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="h-2 w-2 rounded-full bg-gradient-to-br from-emerald-300 via-teal-400 to-cyan-500 shadow-[0_0_18px_rgba(110,231,183,.95)] ring-4 ring-emerald-300/10 sm:h-3 sm:w-3"
          />
          <span className="hidden h-px w-10 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent sm:block sm:w-16" />
        </div>
      </div>
    </div>
  );
}
