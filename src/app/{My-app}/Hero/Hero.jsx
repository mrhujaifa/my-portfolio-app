"use client";
import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import AutoTyping from "./TextTyping";
import ProfileCard from "./InformationCard";
import Link from "next/link";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="w-full px-4 md:px-8 md:mt-30  py-10 lg:mt-80 lg:px-0 mt-50">
      <div className="flex flex-col md:flex-col lg:flex-row items-center  justify-between gap-10">
        {/* Left side */}
        <div className="w-ful md:text-left">
          {/* Badge */}
          <div className="p-[2px] w-fit md:mx-0 rounded-full bg-gradient-to-r from-[#a268ff] via-[#5b77f2] to-[#00b3e5] animate-gradient-x">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#07041b]">
              <Image
                width={30}
                height={30}
                src="/icons/uranusLogo.gif"
                alt="Universe Logo"
                className="rounded-full"
              />
              <h1 className="text-white font-semibold text-sm whitespace-nowrap">
                Welcome to my universe
              </h1>
            </div>
          </div>

          {/* Main Headings */}
          <div className="mt-7 lg:mt-9">
            <h1 className="font-extrabold text-white text-[36px] sm:text-[48px] md:text-[60px] leading-tight">
              Hello
            </h1>
            <h2 className="text-white text-[32px] sm:text-[48px] md:text-[60px] font-bold leading-tight">
              I'm{" "}
              <span
                className={`${styles.animatedGradientText} text-transparent bg-clip-text text-[36px] lg:text-[60px] md:text-[72px] `}
              >
                Md. Hujaifa Islam
              </span>
            </h2>
          </div>

          {/* Typing effect */}
          <div>
            <AutoTyping />
          </div>

          {/* Short Description */}
          <div className=" lg:mt-6">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I'm a{" "}
              <span className="text-[#5b77f2] font-semibold">
                Full Stack Software Developer
              </span>{" "}
              who crafts
              <span className="text-[#00b3e5] font-semibold">
                {" "}
                scalable web apps
              </span>{" "}
              with clean code and intuitive UI. Passionate about{" "}
              <span className="text-[#a268ff] font-semibold">
                React.js, Next.js
              </span>{" "}
              and solving real-world problems.
            </p>
          </div>

          {/* Buttons */}
         <ActionButtons/>
        </div>

        {/* Right side card */}
        <div className="w-full flex justify-center">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;






const buttons = [
  { label: "Learn more", href: "https://github.com/mrhujaifa" },
  { label: "Hire me", href: "/#contact" },
];

const shineVariant = {
  initial: {
    x: "-160%",
    opacity: 0,
  },
  animate: {
    x: "240%",
    opacity: [0, 0.2, 0.85, 0.2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 1.4,
      ease: "easeInOut",
    },
  },
};

const ActionButtons = () => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4">
      {buttons.map((btn, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -2, scale: 1.015 }}
          whileTap={{ scale: 0.98 }}
          className="group relative w-full sm:w-auto"
        >
          <Link
            href={btn.href}
            target={btn.href.startsWith("http") ? "_blank" : "_self"}
            className="relative flex w-full sm:w-auto min-w-0 sm:min-w-[190px] items-center justify-center overflow-hidden rounded-[20px] px-8 py-4 sm:px-10"
          >
            {/* soft outer glow */}
            <span className="pointer-events-none absolute inset-0 rounded-[20px] bg-[linear-gradient(90deg,rgba(157,78,255,0.18),rgba(67,97,238,0.14),rgba(0,212,255,0.18))] blur-xl opacity-60 transition-all duration-500 group-hover:opacity-100" />

            {/* REAL gradient border only */}
            <span
              className="pointer-events-none absolute inset-0 rounded-[20px] p-[1.2px]"
              style={{
                background:
                  "linear-gradient(120deg, rgba(168,111,255,1), rgba(101,116,255,0.95), rgba(0,225,255,0.95), rgba(168,111,255,1))",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            {/* subtle inner border light */}
            <span className="pointer-events-none absolute inset-[1px] rounded-[19px] border border-white/10" />

            {/* top glass reflection */}
            <span className="pointer-events-none absolute left-[8%] top-[1px] h-[38%] w-[84%] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.05),transparent)] blur-md" />

            {/* moving glass shine */}
            <motion.span
              variants={shineVariant}
              initial="initial"
              animate="animate"
              className="pointer-events-none absolute top-[-30%] h-[170%] w-16 sm:w-20 rotate-[24deg] bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.7),rgba(255,255,255,0))] blur-[10px]"
            />

            {/* inner edge glow */}
            <span className="pointer-events-none absolute inset-0 rounded-[20px] shadow-[inset_0_0_22px_rgba(129,90,255,0.12)] transition-all duration-500 group-hover:shadow-[inset_0_0_28px_rgba(129,90,255,0.2)]" />

            <span className="relative z-10 text-[15px] sm:text-base font-semibold tracking-[0.02em] text-white">
              {btn.label}
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};