"use client";
import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import AutoTyping from "./TextTyping";
import ProfileCard from "./InformationCard";

const Hero = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-10 lg:mt-0 mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side */}
        <div className="w-full md:w-1/2 md:text-left">
          <div className="p-[2px] w-fit  md:mx-0 rounded-full bg-gradient-to-r from-[#b3631f] via-[#c7c366] to-[#f5f5f5]">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#07041b]">
              <Image
                width={30}
                height={30}
                src="/icons/uranusLogo.gif"
                alt="Universe Logo"
              />
              <h1 className="text-white font-bold text-sm whitespace-nowrap">
                Welcome to my universe
              </h1>
            </div>
          </div>

          <div className="mt-6">
            <h1 className="font-bold text-white text-[36px] sm:text-[48px] md:text-[60px] leading-tight">
              Hello
            </h1>
            <h2 className="text-white text-[36px] sm:text-[48px] md:text-[60px] font-bold leading-tight">
              I'm{" "}
              <span
                className={`${styles.animatedGradientText} text-[42px] sm:text-[60px] md:text-[72px]`}
              >
                Md. Hujaifa Islam
              </span>
            </h2>
          </div>

          <div className="space-y-5">
            <AutoTyping />
          </div>

          <div>
            <p className="text-gray-400 mt-5 text-base sm:text-lg leading-relaxed">
              Hi, I'm Hujaifa — a passionate Full-Stack Developer crafting
              elegant web experiences with React, Next.js, and modern
              technologies. I turn ideas into clean, scalable code and love
              solving challenging problems. Welcome to my digital portfolio!
            </p>
          </div>

          <div className="mt-10 flex flex-col lg:flex-row lg:items-center gap-4">
            <button
              className={`${styles.gradientBorder} w-full lg:w-auto px-6 py-3 sm:py-4 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50`}
            >
              Learn More
            </button>
            <button
              className={`${styles.gradientBorder} w-full lg:w-auto px-6 py-3 sm:py-4 text-white bg-orange-3 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50`}
            >
              Resume
            </button>
          </div>
        </div>

        {/* Right side card */}
        <div className="w-full md:w-1/2 flex justify-center">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
