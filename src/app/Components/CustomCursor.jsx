"use client";

import { useEffect, useRef } from "react";

export default function SpaceCursor() {
  const dotRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const isHovering = useRef(false);
  const isClicking = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 768) return;

    const interactiveSelector =
      "a, button, [role='button'], input, textarea, select, .cursor-hover";

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseDown = () => { isClicking.current = true; };
    const handleMouseUp = () => { isClicking.current = false; };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest(interactiveSelector)) {
        isHovering.current = true;
      } else {
        isHovering.current = false;
      }
    };

    const animate = () => {
      if (dotRef.current) {
        // Space-inspired rotation (Slightly tilted like a rocket)
        const rotation = isHovering.current ? -10 : -25; 
        const scale = isClicking.current ? 0.8 : isHovering.current ? 1.3 : 1;
        
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) rotate(${rotation}deg) scale(${scale})`;
        
        // Dynamic Color: Purple to Cyan (matching your text colors)
        dotRef.current.style.borderBottomColor = isHovering.current ? "#22d3ee" : "#a855f7"; 
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @media (min-width: 769px) {
          html, body, a, button, [role="button"] {
            cursor: none !important;
          }
        }

        .space-cursor-arrow {
          position: fixed;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          /* Futuristic Sharp Arrow */
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 24px solid #a855f7; /* Matches Black Hole Purple */
          pointer-events: none;
          z-index: 9999;
          /* Heavy Glow Effect like your Background */
          filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.8)) 
                  drop-shadow(0 0 20px rgba(34, 211, 238, 0.3));
          will-change: transform;
          transition: border-bottom-color 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* The Notch (Tail of the arrow) - Styled to look like a ship */
        .space-cursor-arrow::after {
          content: '';
          position: absolute;
          top: 18px;
          left: -8px;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 10px solid #030014; /* Deep dark color of your space bg */
        }

        /* Subtle Engine Glow (Optional effect) */
        .space-cursor-arrow::before {
          content: '';
          position: absolute;
          top: 24px;
          left: -2px;
          width: 4px;
          height: 8px;
          background: #22d3ee;
          filter: blur(4px);
          opacity: 0.6;
        }

        @media (max-width: 768px) {
          .space-cursor-arrow { display: none; }
          html, body { cursor: auto !important; }
        }
      `}</style>

      <div ref={dotRef} className="space-cursor-arrow" />
    </>
  );
}