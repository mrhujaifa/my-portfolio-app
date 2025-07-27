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
    <nav className="fixed top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto flex items-center justify-between bg-black/50 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 shadow-lg">
        {/* Logo */}
        <div className="text-white font-bold text-lg sm:text-xl flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
          <span className="whitespace-nowrap">Hujaifa.dev</span>
        </div>

        {/* Center Nav Items */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-6 text-white">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.path}
                className={`relative flex items-center gap-2 px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-orange-400 to-yellow-300 text-black shadow-md"
                    : "hover:bg-[#1E293B]/80"
                }`}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.name}</span>
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-300 rounded-full"></span>
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
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-yellow-300 text-black rounded-full text-sm font-medium hover:scale-105 transition"
          >
            <FaDownload />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            className="hover:text-orange-400"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/your-id"
            target="_blank"
            className="hover:text-orange-400"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
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
                  ? "bg-gradient-to-r from-orange-400 to-yellow-300 text-black"
                  : "hover:bg-[#1E293B]/80"
              }`}
            >
              <div className="flex items-center gap-2">
                {item.icon} {item.name}
              </div>
              {isActive(item.path) && (
                <span className="absolute bottom-1 left-5 w-1.5 h-1.5 bg-yellow-300 rounded-full"></span>
              )}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-yellow-300 text-black rounded-md"
          >
            <FaDownload />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
