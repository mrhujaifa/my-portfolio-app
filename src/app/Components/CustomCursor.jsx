"use client";

import { useEffect, useRef, useState } from "react";

export default function FuturisticSpaceCursor() {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);
  const pulseRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const [click, setClick] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseDown = () => setClick(true);
    const onMouseUp = () => setClick(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    let animationFrameId;

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.25;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.25;

      if (cursorRef.current && glowRef.current && pulseRef.current) {
        // Main circle
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${
          pos.current.y
        }px, 0) translate(-50%, -50%) scale(${click ? 0.85 : 1})`;

        // Glow behind main circle, smooth scale and opacity pulsing
        glowRef.current.style.transform = `translate3d(${pos.current.x}px, ${
          pos.current.y
        }px, 0) translate(-50%, -50%) scale(${click ? 1.3 : 1})`;
        glowRef.current.style.opacity = click ? "0.6" : "0.35";

        // Outer pulse ring animation
        const pulseScale = 1 + 0.15 * Math.sin(Date.now() / 400);
        pulseRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(${pulseScale})`;
        pulseRef.current.style.opacity =
          0.15 + 0.15 * Math.cos(Date.now() / 400);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [click]);

  return (
    <>
      <style jsx>{`
        body,
        html {
          cursor: none;
        }
        input,
        textarea,
        select,
        button {
          cursor: auto !important;
        }
        .cursor-core {
          position: fixed;
          top: 0;
          left: 0;
          width: 14px;
          height: 14px;
          background: linear-gradient(135deg, #8a2be2, #4b0082);
          border-radius: 50%;
          box-shadow: 0 0 6px 2px #8a2be2, 0 0 10px 4px #6a0dad;
          pointer-events: none;
          z-index: 9999;
          will-change: transform, box-shadow;
          transition: box-shadow 0.3s ease;
          filter: drop-shadow(0 0 5px #7a1bee);
        }
        .cursor-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 30px;
          height: 30px;
          background: radial-gradient(
            circle,
            rgba(138, 43, 226, 0.4),
            rgba(75, 0, 130, 0) 70%
          );
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          will-change: transform, opacity;
          transition: opacity 0.3s ease, transform 0.3s ease;
          filter: drop-shadow(0 0 10px #7a1bee);
        }
        .cursor-pulse {
          position: fixed;
          top: 0;
          left: 0;
          width: 50px;
          height: 50px;
          border: 2px solid rgba(138, 43, 226, 0.3);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9997;
          will-change: transform, opacity;
          transition: opacity 0.3s ease;
          filter: drop-shadow(0 0 12px #7a1bee66);
          mix-blend-mode: screen;
        }
      `}</style>

      <div className="cursor-pulse" ref={pulseRef} />
      <div className="cursor-glow" ref={glowRef} />
      <div className="cursor-core" ref={cursorRef} />
    </>
  );
}
