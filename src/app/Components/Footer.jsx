"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaRegPaperPlane,
} from "react-icons/fa";
import { Yesteryear } from "next/font/google";

// Fonts
const yesteryear = Yesteryear({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
    <footer className="relative w-full pt-16 pb-10 text-white">
      <div className="container mx-auto px-6 ">
        {/* Top Divider */}
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#2a0e61] to-transparent mb-14" />

        {/* Grid Sections */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/My-logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="hover:scale-110 transition-transform duration-300"
                priority
              />
              <span
                className={`${yesteryear.className} bg-gradient-to-r from-[#a268ff] via-[#8567f9] via-[#5b77f2] via-[#3197ed] to-[#00b3e5] bg-clip-text text-transparent font-bold text-3xl select-none`}
              >
                Mr. Hujaifa
              </span>
            </div>
            <p className="text-white/70 max-w-xs leading-relaxed font-light">
              Crafting elegant web experiences that truly matter.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-4 text-lg tracking-wide">
              Explore
            </h4>
            {[
              { href: "/", label: "Home" },
              { href: "/#about", label: "About" },
              { href: "/#projects", label: "Projects" },
              { href: "/#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Quick Info */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-4 text-lg tracking-wide">
              Quick Info
            </h4>
            <p className="flex items-center gap-2 text-white/70 font-light">
              <span role="img" aria-label="location">
                📍
              </span>
              Based in Dhaka, Bangladesh
            </p>
            <p className="flex items-center gap-2 text-white/70 font-light">
              <span role="img" aria-label="time">
                🕒
              </span>
              Available for freelance
            </p>
            <p className="flex items-center gap-2 text-white/70 font-light">
              <span role="img" aria-label="timezone">
                ⏳
              </span>
              Timezone: GMT+6
            </p>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-5">
            <h4 className="text-white font-semibold mb-4 text-lg tracking-wide">
              Stay Connected
            </h4>
            <form className="flex rounded-lg border border-white/20 overflow-hidden max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent px-5 py-3 w-full text-sm text-white outline-none placeholder-white/50"
                required
              />
              <button
                type="submit"
                className="px-5 text-sm text-white hover:text-green-400 transition-colors duration-300 font-semibold tracking-wide"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>

            <motion.a
              href="mailto:hujaifa.dev@gmail.com"
              className="inline-flex items-center gap-3 text-white/70 hover:text-emerald-400 transition-colors duration-300 font-medium tracking-wide"
              whileHover={{ scale: 1.05 }}
              aria-label="Send email"
            >
              <FaRegPaperPlane className="text-lg" /> mdhujaifaislamshanto@gmail.com
            </motion.a>

            <div className="flex gap-6 pt-1 text-2xl">
              <motion.a
                href="https://github.com/mrhujaifa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-purple-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mrhujaifa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-sky-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://facebook.com/mrhujaifa0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-pink-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-14 text-center text-xs text-white/40 tracking-wide select-none">
          © {new Date().getFullYear()} Md. Hujaifa Islam Shanto — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
