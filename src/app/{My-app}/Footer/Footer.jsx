"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { Yesteryear } from "next/font/google";
const yesteryear = Yesteryear({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
    <footer className="relative  text-white pt-14 px-6 md:px-12 mt-24">
      {/* Decorative Blur */}
      <div className="absolute inset-0 -z-10 blur-[100px] opacity-20 bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-400"></div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-10">
        {/* Logo + About */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image src="/logos/My-logo.png" width={40} height={40} alt="Logo" />
            <span className={`text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent ${yesteryear.className}`}>
              Mr. Hujaifa
            </span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            MERN Stack Dev crafting modern, blazing-fast applications with
            beautiful UI and solid backend. Clean. Scalable. Powerful.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 inline-block relative">
            Quick Links
            <span className="block w-10 h-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mt-1"></span>
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {[
              { name: "Home", href: "/" },
              { name: "Skills", href: "/skills" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 inline-block relative">
            Contact
            <span className="block w-10 h-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mt-1"></span>
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              Email:{" "}
              <a href="mailto:you@example.com" className="hover:text-white">
                you@example.com
              </a>
            </li>
            <li>Location: Dhaka, Bangladesh</li>
            <li>Phone: +880123456789</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4 inline-block relative">
            Follow Me
            <span className="block w-10 h-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mt-1"></span>
          </h4>
          <div className="flex gap-4 text-2xl">
            {[
              {
                icon: <FaGithub />,
                href: "https://github.com/your-id",
                color: "hover:text-white",
              },
              {
                icon: <FaLinkedin />,
                href: "https://linkedin.com/in/your-id",
                color: "hover:text-blue-400",
              },
              {
                icon: <FaFacebook />,
                href: "https://facebook.com/your-id",
                color: "hover:text-blue-600",
              },
              {
                icon: <FaEnvelope />,
                href: "mailto:you@example.com",
                color: "hover:text-red-400",
              },
            ].map(({ icon, href, color }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 ${color}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 pt-8 pb-5">
        © {new Date().getFullYear()} Mr. Hujaifa — All rights reserved.
      </div>
    </footer>
  );
}
