import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const texts = [
  "Hi, I'm Hujaifa.",
  "Full-Stack Developer specialized in MERN.",
  "Creating efficient & scalable web solutions.",
  "Passionate about clean code and UX.",
  "Let’s build your next web application!",
];


const AutoTypingWithDots = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [dotCount, setDotCount] = useState(1);

  // Typing animation
  useEffect(() => {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setIsAnimatingOut(true);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, textIndex]);

  // Zoom-out after full sentence
  useEffect(() => {
    if (isAnimatingOut) {
      const next = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setIsAnimatingOut(false);
      }, 600);
      return () => clearTimeout(next);
    }
  }, [isAnimatingOut]);

  // ChatGPT-style dot animation: . .. ... cycling
  useEffect(() => {
    const dotTimer = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 500); // every 0.5s dot updates
    return () => clearInterval(dotTimer);
  }, []);

  const dots = ".".repeat(dotCount);

  return (
    <div className="relative h-20 flex items-center  text-lg lg:text-3xl font-semibold text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {!isAnimatingOut && (
          <motion.div
            key={textIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <span>{displayedText}</span>
            <span className="ml-2 text-green-400">{dots}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AutoTypingWithDots;
