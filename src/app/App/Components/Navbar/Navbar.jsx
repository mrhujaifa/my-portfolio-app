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
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Outfit, Yesteryear } from "next/font/google";

const yesteryear = Yesteryear({
  subsets: ["latin"],
  weight: "400", // Yesteryear only has normal weight
  variable: "--font-yesteryear", // optional, if you want to use CSS variable
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-outfit",
});

const navItems = [
  { name: "Home", icon: <FaHome />, path: "/" },
  { name: "Skills", icon: <FaCode />, path: "#skills" },
  { name: "Experience", icon: <FaBriefcase />, path: "#experience" },
  { name: "Education", icon: <FaGraduationCap />, path: "#education" },
  { name: "Projects", icon: <FaImage />, path: "#projects" },
  { name: "Contact", icon: <FaEnvelope />, path: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isActive = (itemPath) => {
    if (itemPath === "/") {
      return pathname === "/" || activeSection === "#home";
    }
    return activeSection === itemPath;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 ${outfit.className} font-bold`}>
        <div className="container mx-auto md:pl-10 md:py-5 lg:py-3 flex items-center justify-between bg-black/50 backdrop-blur-md md:rounded-full lg:rounded-full px-5 lg:px-0 py-1 shadow-lg">
          {/* Logo */}
          <div className="text-white  md:hidden lg:flex font-bold lg:text-2xl text-xl flex items-center gap-2">
            <Image
              src="/logos/My-logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="" // for other styles, but width/height props control size
            />
            <span
              className={`${yesteryear.className} bg-gradient-to-r from-[#a268ff] via-[#8567f9] via-[#5b77f2] via-[#3197ed] to-[#00b3e5] bg-clip-text text-transparent font-bold`}
            >
              Mr. Hujaifa
            </span>
          </div>

          {/* Center Nav Items */}
          <ul className="hidden md:flex items-center space-x-4 text-white">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.path}
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
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 text-white">
            <a
              href="/resume.pdf"
              download
              className="flex md:hidden lg:flex items-center gap-2 px-5 py-2  border border-purple-600 text-white rounded-lg text-sm font-semibold shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300"
              aria-label="Download Resume"
            >
              <FaDownload />
              <span className="hidden sm:inline">Resume</span>
            </a>
            <div className="flex items-center gap-3  md:hidden lg:flex">
              <a
                href="https://github.com/your-username"
                target="_blank"
                className="hover:text-[#a268ff]"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/your-id"
                target="_blank"
                className="hover:text-[#a268ff]"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
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
              <a
                key={idx}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`relative block px-4 py-2 rounded-md transition-all ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-[#a268ff] via-[#8567f9] via-[#5b77f2] via-[#3197ed] to-[#00b3e5] text-white animate-gradient-move"
                    : "hover:bg-gradient-to-r hover:from-[#a268ff] hover:via-[#8567f9] hover:via-[#5b77f2] hover:via-[#3197ed] hover:to-[#00b3e5] hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.icon} {item.name}
                </div>
                {isActive(item.path) && (
                  <span className="absolute bottom-1 left-5 w-1.5 h-1.5 bg-[#00b3e5] rounded-full"></span>
                )}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2  border border-purple-600 text-white rounded-md shadow-md hover:scale-105 transition-transform"
            >
              <FaDownload />
              Resume
            </a>
          </div>
        )}
      </nav>

      {/* Global keyframes for gradient animation */}
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
