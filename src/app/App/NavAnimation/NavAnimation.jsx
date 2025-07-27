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
          className="absolute  lg:-top-115 -top-387 md:-top-146 w-3000 h-00 lg:w-full lg:h-full  -z-20 rotate-180"
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
