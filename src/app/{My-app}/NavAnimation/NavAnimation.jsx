"use client";

import React from "react";
import Hero from "../Hero/Hero";

const NavAnimation = () => {
  return (
    <div>
      <div className="">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="rotate-180 absolute md:top-[-590px] lg:top-[-420px] top-[-430px] w-230 h-230   left-0 md:w-full md:h-full lg:w-full lg:h-full object-cover -z-20"
        >
          <source src="/video/navBgBlue.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default NavAnimation;
