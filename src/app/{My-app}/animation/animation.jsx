"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

export const StarBackground = (props) => {
  const ref = useRef(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame(({ clock }, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      // Optional twinkle by changing opacity
      ref.current.material.opacity =
        0.5 + Math.sin(clock.elapsedTime * 5) * 0.5;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} stride={3} positions={sphere} frustumCulled {...props}>
        <PointMaterial
          
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-screen fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarBackground />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
