"use client";
import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import AutoTyping from "./TextTyping";
import ProfileCard from "./InformationCard";

const Hero = () => {
  return (
    <div className="w-full px-4 md:px-8  py-10 lg:mt-45 lg:px-0 mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side */}
        <div className="w-full md:w-1/2 md:text-left">
          {/* Badge */}
          <div className="p-[2px] w-fit md:mx-0 rounded-full bg-gradient-to-r from-[#b3631f] via-[#c7c366] to-[#f5f5f5] animate-gradient-x">
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
          <div className="mt-8 space-y-2">
            <h1 className="font-extrabold text-white text-[36px] sm:text-[48px] md:text-[60px] leading-tight">
              Hello
            </h1>
            <h2 className="text-white text-[32px] sm:text-[48px] md:text-[60px] font-bold leading-tight">
              I'm{" "}
              <span
                className={`${styles.animatedGradientText} text-transparent bg-clip-text text-[36px] sm:text-[60px] md:text-[72px]`}
              >
                Md. Hujaifa Islam
              </span>
            </h2>
          </div>

          {/* Typing effect */}
          <div className="mt-4">
            <AutoTyping />
          </div>

          {/* Short Description */}
          <div className="mt-6">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I'm a{" "}
              <span className="text-[#5b77f2] font-semibold">
                MERN Stack Developer
              </span>{" "}
              who crafts
              <span className="text-[#00b3e5] font-semibold">
                {" "}
                scalable web apps
              </span>{" "}
              with clean code and intuitive UI. Passionate about{" "}
              <span className="text-[#a268ff] font-semibold">
                React, Next.js
              </span>{" "}
              and solving real-world problems.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Learn More Button */}
            <button
              className={`relative w-full sm:w-auto px-6 py-3 sm:py-4 font-semibold text-white rounded-2xl 
    bg-gradient-to-r from-[#a268ff] via-[#5b77f2] to-[#00b3e5]
    shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out 
    focus:outline-none focus:ring-4 focus:ring-[#a268ff] focus:ring-opacity-50`}
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#a268ff] via-[#5b77f2] to-[#00b3e5] blur opacity-50 rounded-2xl"></span>
            </button>

            {/* Resume Button */}
            <button
              className="w-full sm:w-auto px-6 py-3 sm:py-4 text-white font-semibold rounded-2xl 
    bg-[#5b77f2]/90 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out 
    focus:outline-none focus:ring-4 focus:ring-[#8567f9] focus:ring-opacity-50"
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
