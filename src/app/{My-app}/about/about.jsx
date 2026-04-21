"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaFacebookF, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import SectionTitle from "@/components/modules/ui/SectionTitle";
import PrimaryButton from "@/app/Components/PrimaryBtn";

const socialLinks = [
  {
    href: "mailto:mdhujaifaislamshanto@gmail.com",
    icon: (
      <Image
        src="/icons/gmail.png"
        alt="Gmail"
        width={20}
        height={20}
        className="object-contain"
      />
    ),
    title: "Gmail",
    bgGradient: "bg-white",
    glowColor: "shadow-[0_0_14px_3px_rgba(217,48,37,0.6)]",
    textColor: "text-black",
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
    icon: <FaTwitter size={24} />,
    title: "X / Twitter",
    bgGradient: "bg-gradient-to-tr from-[#1DA1F2] to-[#0d8ddb]",
    glowColor: "shadow-[0_0_14px_3px_rgba(29,161,242,0.6)]",
    textColor: "text-white",
  },
];

export default function About() {
  return (
    <div className="lg:mt-20">
      <SectionTitle
        className="mt-16 sm:mt-20 mb-10 sm:mb-12"
        eyebrow="Who I Am"
        title="About Me"
        subtitle="I build responsive, high-performing web apps with modern React and Next.js."
        iconSrc="/images/about (1).png"
        iconAlt="About me"
      />

      <section
        id="about"
        className="px-4 lg:px-6 lg:py-5 flex items-center justify-center"
      >
        <div className="container w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-10 border border-[#2a0e61] py-8 px-5 md:p-12 rounded-xl">
          <motion.div
            initial={{ boxShadow: "0 0 10px rgba(42,14,97,0.4)" }}
            whileHover={{ boxShadow: "0 0 30px 4px rgba(99,102,241,0.8)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-72 sm:h-80 md:h-[650px] lg:w-[340px] lg:h-[380px] relative rounded-lg border border-gray-700 cursor-pointer overflow-hidden"
          >
            <Image
              src="/images/about-img.jpg"
              alt="Md. Hujaifa Islam Shanto"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

          <div className="flex-1 text-white space-y-5">
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
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
                Full Stack Software Developer
              </p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-5">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                <Typewriter
                  words={[
                    "I build responsive, high-performing web apps with clean UI and practical architecture.",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={30}
                  deleteSpeed={20}
                  delaySpeed={2000}
                />
              </p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-5">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                <Typewriter
                  words={[
                    "I focus on clean code, reliable systems, and smooth user experiences.",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={30}
                  deleteSpeed={20}
                  delaySpeed={2200}
                />
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white border-b border-[#2a0e61] inline-block pb-1">
                Development Philosophy
              </h3>
              <p className="mt-3 text-sm sm:text-base text-gray-400 leading-7 tracking-wide">
                I blend design clarity with strong engineering to build products
                that are scalable, maintainable, and useful.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-white border-l-4 border-indigo-500 pl-5">
                More Information
              </h3>

              <div className="mt-4 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
                {socialLinks.map(
                  ({ href, icon, title, bgGradient, glowColor, textColor }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={title}
                      className="group relative cursor-pointer"
                    >
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full ${bgGradient} ${textColor} shadow-md transition duration-300 hover:scale-110 hover:shadow-lg ${glowColor}`}
                      >
                        {icon}
                      </div>

                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-[#1f1f2e] text-white text-xs font-medium rounded-md px-3 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {title}
                      </span>
                    </a>
                  )
                )}

                <div className="hidden lg:block px-8">
                  <a href="/resume/mr-hujaifa-resume.pdf" download={true}>
                    <PrimaryButton
                      text={"Resume"}
                      icon={
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      }
                    />
                  </a>
                </div>
              </div>

              <div className="lg:hidden md:hidden mt-5">
                <a href="/resume/mr-hujaifa-resume.pdf" download={true}>
                  <PrimaryButton
                    text={"Resume"}
                    icon={
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    }
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
