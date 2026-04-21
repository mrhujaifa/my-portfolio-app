"use client";

import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaImage,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { RiBloggerLine } from "react-icons/ri";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Outfit, Yesteryear } from "next/font/google";

// Fonts
const yesteryear = Yesteryear({ subsets: ["latin"], weight: "400" });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });

// Nav items
const navItems = [
  { name: "Home", icon: <FaHome size={20} />, path: "/#home" },
  { name: "Skills", icon: <FaCode size={22} />, path: "/#skills" },
  { name: "Education", icon: <FaGraduationCap size={22} />, path: "/#education" },
  { name: "Projects", icon: <FaImage size={18} />, path: "/#projects" },
  { name: "Contact", icon: <FaEnvelope size={18} />, path: "/#contact" },
  { name: "Blogs", icon: <RiBloggerLine size={23} />, path: "/blogs" },
];

const sectionIds = ["home", "skills", "education", "projects", "contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    let rafId = 0;

    const updateActiveSection = () => {
      const viewportLine =
        window.scrollY + Math.max(120, window.innerHeight * 0.32);

      let nextSection = "#home";

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const sectionTop = element.getBoundingClientRect().top + window.scrollY;

        if (viewportLine >= sectionTop) {
          nextSection = `#${id}`;
        }
      });

      setActiveSection(nextSection);
    };

    const syncFromHash = () => {
      if (window.location.hash && sectionIds.includes(window.location.hash.slice(1))) {
        setActiveSection(window.location.hash);
      }

      updateActiveSection();
    };

    const onScrollOrResize = () => {
      if (rafId) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateActiveSection();
      });
    };

    syncFromHash();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("load", syncFromHash);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("load", syncFromHash);
    };
  }, [pathname]);

  const isActive = (itemPath) => {
    if (itemPath.startsWith("/#")) {
      return pathname === "/" && activeSection === itemPath.slice(1);
    }

    return pathname === itemPath;
  };

  const handleNavClick = (itemPath) => {
    if (itemPath.startsWith("/#")) {
      setActiveSection(itemPath.slice(1));
    }

    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${outfit.className} font-bold`}
      >
        <div className="container mx-auto md:pl-10 md:py-5 lg:py-3 flex items-center justify-between  backdrop-blur-md md:rounded-full lg:rounded-full px-5 lg:px-0 py-1 shadow-lg">
          {/* Logo */}
          <div className="text-white md:hidden lg:flex font-bold lg:text-2xl text-xl flex items-center gap-2">
            {/* <Image src="/logos/mrhujaifa1.png" alt="Logo" width={40} height={1} /> */}
            <span
              className={`${yesteryear.className} bg-gradient-to-r from-[#a268ff] via-[#8567f9] via-[#5b77f2] via-[#3197ed] to-[#00b3e5] bg-clip-text text-transparent font-bold`}
            >
              Mr. Hujaifa
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-4 font-bold text-white">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  onClick={() => handleNavClick(item.path)}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  className={`relative flex items-center gap-2 px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-[#a268ff] via-[#8567f9] via-[#5b77f2] via-[#3197ed] to-[#00b3e5] text-white shadow-md animate-gradient-move"
                      : "hover:bg-gradient-to-r hover:from-[#a268ff] hover:via-[#8567f9] hover:via-[#5b77f2] hover:via-[#3197ed] hover:to-[#00b3e5] hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span className="hidden sm:inline">{item.name}</span>
                  {isActive(item.path) && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#00b3e5] rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 text-white">
            <a
              href="/resume/mr-hujaifa-resume.pdf"
              download
              className="md:hidden lg:flex items-center gap-2 px-5 py-2 border border-purple-600 text-white rounded-lg text-sm font-semibold shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300"
              aria-label="Download Resume"
            >
              <FaDownload />
              <span className="hidden sm:inline">Resume</span>
            </a>
            <div className="md:hidden lg:flex gap-3">
              <a
                href="https://github.com/mrhujaifa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a268ff]"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mrhujaifa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a268ff]"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden text-white">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-black/70 backdrop-blur-md rounded-xl py-4 px-4 text-white shadow-xl space-y-2 animate-fade-in-down">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                onClick={() => handleNavClick(item.path)}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={`block px-4 py-2 rounded-md transition-all ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-[#a268ff] via-[#8567f9] via-[#5b77f2] via-[#3197ed] to-[#00b3e5] text-white animate-gradient-move"
                    : "hover:bg-gradient-to-r hover:from-[#a268ff] hover:via-[#8567f9] hover:via-[#5b77f2] hover:via-[#3197ed] hover:to-[#00b3e5] hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.icon} {item.name}
                </div>
              </Link>
            ))}
            <a
              href="/resume/mr-hujaifa-resume.pdf"
              download
              className="flex w-full justify-center md:w-full lg:w-full items-center gap-2 px-4 py-2 border border-purple-600 text-white rounded-md shadow-md hover:scale-105 transition-transform"
            >
              <FaDownload /> Resume
            </a>
          </div>
        )}
      </nav>

      <style jsx global>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-move {
          animation: gradient-move 4s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </>
  );
}
