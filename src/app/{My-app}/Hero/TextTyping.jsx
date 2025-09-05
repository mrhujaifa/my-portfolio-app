"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GLYPHS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*?<>±/\\|".split(
    ""
  );

const LINES = [
  "Hi, I'm Hujaifa 👋",
  "MERN Stack Developer | Frontend Developer",
  "Crafting fast & scalable digital solutions",
  "Passionate about clean code & sleek UI/UX ",
  "Turning ideas into impactful web apps ",
  "Keep learning, keep building ",
];

function ScrambleText({ text, duration = 1200, hold = 1200, className = "" }) {
  const [output, setOutput] = useState("");
  const startRef = useRef(0);
  const rafRef = useRef(0);

  const chars = useMemo(() => text.split(""), [text]);

  useEffect(() => {
    setOutput("");
    cancelAnimationFrame(rafRef.current);
    startRef.current = performance.now();

    const animate = (now) => {
      const elapsed = now - startRef.current;
      const t = Math.min(1, elapsed / duration);

      const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
      const progress = easeOutCubic(t);

      const lockCount = Math.floor(progress * chars.length);

      let next = "";
      for (let i = 0; i < chars.length; i++) {
        if (i < lockCount) next += chars[i];
        else next += GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      setOutput(next);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setOutput(text);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [text, duration]);

  return (
    <div className={`inline-flex items-baseline ${className}`}>
      <span className="tracking-tight">{output}</span>
      <motion.span
        aria-hidden
        className="ml-1 w-3 h-6 rounded-sm bg-gradient-to-b from-emerald-400/90 to-sky-400/90"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
    </div>
  );
}

export default function HackerTyping({
  lines = LINES,
  lineDuration = 1200,
  hold = 1200,
}) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("scrambling");

  useEffect(() => {
    let timer;
    if (phase === "scrambling") {
      timer = setTimeout(() => setPhase("holding"), lineDuration + 50);
    } else if (phase === "holding") {
      timer = setTimeout(() => {
        setPhase("scrambling");
        setIndex((p) => (p + 1) % lines.length);
      }, hold);
    }
    return () => clearTimeout(timer);
  }, [phase, lineDuration, hold, lines.length]);

  return (
    <div className="relative flex h-24 items-center justify-start">
      {/* Ambient glow backdrop */}
      <div className="pointer-events-none absolute -inset-6 " />

      <div className="relative rounded-2xl  w-fit">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className=""
          >
            <ScrambleText
              text={lines[index]}
              duration={lineDuration}
              hold={hold}
              className="text-xl lg:text-3xl font-extrabold bg-gradient-to-r from-emerald-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(16,185,129,0.35)]"
            />

            {/* Underbar shimmer effect */}
            <div className="mt-3 h-px w-full overflow-hidden">
              <motion.div
                className="h-px w-1/3 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent"
                animate={{ x: ["-30%", "120%"] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
