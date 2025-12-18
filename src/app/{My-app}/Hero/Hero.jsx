"use client";
import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import AutoTyping from "./TextTyping";
import ProfileCard from "./InformationCard";
import Link from "next/link";

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
          <div className="mt-10 lg:mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Learn More Button */}
            <Link
              href={"https://github.com/mrhujaifa"}
              className={`relative w-full sm:w-auto text-center px-6 py-3 sm:py-4 font-semibold text-white rounded-2xl 
                          bg-gradient-to-r from-[#a268ff] via-[#5b77f2] to-[#00b3e5]
                          shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out 
                          focus:outline-none focus:ring-4 focus:ring-[#a268ff] focus:ring-opacity-50`}>
              <div className="relative z-10">Learn More</div>
              <span className="absolute inset-0 bg-gradient-to-r from-[#a268ff] via-[#5b77f2] to-[#00b3e5] blur opacity-50 rounded-2xl"></span>
            </Link>

            {/* Resume Button */}
            <Link
              href="/contact"
              className={`relative w-full text-center sm:w-auto px-6 py-3 sm:py-4 font-semibold text-white rounded-2xl 
                          bg-gradient-to-r from-[#a268ff] via-[#5b77f2] to-[#00b3e5]
                          shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out 
                          focus:outline-none focus:ring-4 focus:ring-[#a268ff] focus:ring-opacity-50`} >
              <div className="relative z-10">Hire me</div>
              <span className="absolute inset-0 bg-gradient-to-r from-[#a268ff] via-[#5b77f2] to-[#00b3e5] blur opacity-50 rounded-2xl"></span>
            </Link>
          </div>
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
