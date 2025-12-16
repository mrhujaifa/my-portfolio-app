"use client";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
});

import Image from "next/image";

const socialLinks = [
  {
    href: "mailto:mdhujaifaislamshanto@gmail.com",
    icon: (
      <Image
        src="/icons/gmail.png" // ✅ goes in public/images/
        alt="Gmail"
        width={20}
        height={20}
        className="object-contain"
      />
    ),
    title: "Gmail",
    bgGradient: "bg-white",
    glowColor: "shadow-[0_0_14px_3px_rgba(217,48,37,0.6)]",
    textColor: "text-white",
  },

  {
    href: "https://linkedin.com/in/mrhujaifa",
    icon: <FaLinkedin size={24} />,
    title: "LinkedIn",
    bgGradient: "bg-gradient-to-tr from-[#0a66c2] to-[#1e8de9]",
    glowColor: "shadow-[0_0_12px_3px_rgba(10,102,194,0.6)]",
    textColor: "text-white",
  },
  {
    href: "https://github.com/mrhujaifa",
    icon: <FaGithub size={24} />,
    title: "GitHub",
    bgGradient: "bg-gradient-to-tr from-[#333333] to-[#666666]",
    glowColor: "shadow-[0_0_14px_3px_rgba(255,255,255,0.5)]",
    textColor: "text-white",
  },
  {
    href: "https://facebook.com/mrhujaifa0",
    icon: <FaFacebookF size={24} />,
    title: "Facebook",
    bgGradient: "bg-gradient-to-tr from-[#1877F2] to-[#4A90E2]",
    glowColor: "shadow-[0_0_14px_3px_rgba(24,119,242,0.6)]",
    textColor: "text-white",
  },
  {
    href: "https://x.com/Hujaifa__Islam",
    // Using react-icons for Twitter
    icon: <FaTwitter size={24} />,
    title: "X / Twitter",
    bgGradient: "bg-gradient-to-tr from-[#1DA1F2] to-[#0d8ddb]", // Twitter blue gradient
    glowColor: "shadow-[0_0_14px_3px_rgba(29,161,242,0.6)]", // subtle blue glow
    textColor: "text-white",
  },
];

export default function About() {
  return (
    <div className=" lg:mt-20">
      <div className="container mx-auto flex gap-2 my-3 px-4 lg:px-0 lg:justify-center items-center">
        <Image
          src="/images/about (1).png"
          alt="Md. Hujaifa Islam Shanto"
          width={45}
          height={45}
          className="w-11"
        />
        <h1
          className={` font-bold text-3xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-[#0192b0] via-[#5073f6] to-[#8b6efa] bg-clip-text text-transparent text-center my-5 ${lobster.className}`}
        >
          About me
        </h1>
      </div>{" "}
      <section
        id="about"
        className="px-4 lg:px-6 lg:py-5 flex items-center justify-center"
      >
        <div className="container w-full flex flex-col md:flex-row items-center gap-10 border border-[#2a0e61] py-8 px-5 md:p-12 rounded-xl">
          {/* Profile Image with animated border */}
          <motion.div
            initial={{ boxShadow: "0 0 10px rgba(42,14,97,0.4)" }}
            whileHover={{ boxShadow: "0 0 30px 4px rgba(99,102,241,0.8)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full md:w-[300px] h-[350px] relative rounded-lg border border-gray-700 cursor-pointer overflow-hidden"
          >
            <Image
              src="/images/about-img.png"
              alt="Md. Hujaifa Islam Shanto"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

          {/* About Text */}
          <div className="flex-1 text-white space-y-5">
            {/* Name & Role */}
            <div className="space-y-1">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <Typewriter
                  words={["Md. Hujaifa Islam Shanto"]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </h2>
              <p className="text-sm md:text-base text-indigo-400 tracking-wider font-medium uppercase">
                MERN Stack Developer · UI/UX Problem Solver
              </p>
            </div>

            {/* Introduction */}
            <div className="border-l-4 border-indigo-500 pl-5">
              <p className="text-gray-300 text-[17px] leading-relaxed font-light">
                <Typewriter
                  words={[
                    "A passionate MERN Stack Developer with a focus on creating efficient, scalable web applications that deliver exceptional user experiences.",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={30}
                  deleteSpeed={20}
                  delaySpeed={3000}
                />
              </p>
            </div>

            {/* Philosophy */}
            <div>
              <h3 className="text-xl font-semibold text-white border-b border-[#2a0e61] inline-block pb-1">
                💡 Development Philosophy
              </h3>
              <p className="text-gray-400 text-[16px] leading-7 tracking-wide">
                I believe in crafting solutions that balance technical precision
                with design clarity. Every project is an opportunity to blend
                logic and creativity — using clean, modular code that scales and
                delivers real value.
              </p>
            </div>

            {/* More Information */}
            <div>
              <h3
                className="
    flex items-center gap-2
    text-xl font-semibold text-white
    border-l-4 border-indigo-500 pl-5

  "
              >
                More Information
              </h3>

              <div className="flex items-center gap-3 mt-4">
                {socialLinks.map(
                  (
                    { href, icon, title, bgGradient, glowColor, textColor },
                    i
                  ) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={title}
                      className="group relative cursor-pointer"
                    >
                      <div
                        className={`
            w-10 h-10 flex items-center justify-center rounded-full
            ${bgGradient} ${textColor}
            shadow-md
            transition duration-300
            hover:scale-110
            hover:shadow-lg
            ${glowColor}
          `}
                      >
                        {icon}
                      </div>

                      {/* Tooltip */}
                      <span
                        className="
            absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
            bg-[#1f1f2e] text-white text-xs font-medium rounded-md
            px-3 py-1 opacity-0 pointer-events-none
            group-hover:opacity-100 transition-opacity duration-300
            whitespace-nowrap
          "
                      >
                        {title}
                      </span>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
