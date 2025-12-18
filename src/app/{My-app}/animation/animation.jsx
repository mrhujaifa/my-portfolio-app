"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import StarBackground from "./StarBackground";



const StarsCanvas = () => {
  return (
    <div className="w-full h-screen fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarBackground></StarBackground>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
