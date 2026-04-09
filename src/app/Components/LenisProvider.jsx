"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const ANCHOR_OFFSET = 112;

export default function LenisProvider({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: true,
      anchors: {
        offset: ANCHOR_OFFSET,
      },
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    const lenis = lenisRef.current;
    if (!lenis) return;

    const frame = window.requestAnimationFrame(() => {
      const hash = window.location.hash;

      if (hash) {
        const target = document.querySelector(hash);

        if (target) {
          lenis.scrollTo(target, {
            immediate: true,
            offset: ANCHOR_OFFSET,
          });
          return;
        }
      }

      lenis.scrollTo(0, { immediate: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return children;
}
