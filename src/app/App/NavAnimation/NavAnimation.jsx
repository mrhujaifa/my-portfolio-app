"use client";

import React from "react";
import Hero from "../Hero/Hero";

const NavAnimation = () => {
  return (
    <div>
      <div className="relative w-full h-330 lg:h-265 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="rotate-180 absolute md:top-[-590px] lg:top-[-460px] top-[-430px] w-230 h-230   left-0 md:w-full md:h-full lg:w-full lg:h-full object-cover -z-20"
        >
          <source src="/video/navBgBlue.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="relative top-20 container mx-auto">
          <Hero></Hero>
        </div>
      </div>
    </div>
  );
};

export default NavAnimation;
