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

const yesteryear = Yesteryear({ subsets: ["latin"], weight: "400" });

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/mrhujaifa",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://linkedin.com/in/mrhujaifa",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://facebook.com/mrhujaifa0",
    label: "Facebook",
    icon: <FaFacebookF />,
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-8 text-white">
      <div className="container mx-auto px-6">
        {/* top border */}
{/* top animated border with lighting effect */}
<div className="relative mb-14 h-px w-full overflow-hidden">
  <div className="absolute inset-0 bg-[#2a0e61]/35" />

  <motion.div
    className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-[#7c4dff] to-transparent blur-[2px] shadow-[0_0_12px_2px_rgba(124,77,255,0.7)]"
    animate={{ x: ["0%", "200%"] }}
    transition={{
      duration: 3.2,
      repeat: Infinity,
      ease: "linear",
    }}
  />
</div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                {/* <Image
                  src="/logos/My-logo.png"
                  alt="Logo"
                  width={52}
                  height={52}
                  className="transition-transform duration-300 hover:scale-110"
                  priority
                /> */}
              </div>

              <span
                className={`${yesteryear.className} bg-gradient-to-r from-[#a268ff] via-[#5b77f2] to-[#00b3e5] bg-clip-text text-3xl font-bold text-transparent select-none`}
              >
                Mr. Hujaifa
              </span>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/60">
              Crafting elegant, modern, and high-performance web experiences
              with clean code and thoughtful design.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg text-white/70 transition-all duration-300 hover:border-white/20 hover:text-white"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold tracking-wide text-white">
              Explore
            </h4>

            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-white/60 transition-all duration-300 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/30 transition-all duration-300 group-hover:bg-white" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold tracking-wide text-white">
              Quick Info
            </h4>

            <div className="space-y-4 text-sm text-white/60">
              <p className="flex items-center gap-3">
                <span className="text-base">📍</span>
                Based in Kushtia sadar, Kushtia, Bangladesh
              </p>
              <p className="flex items-center gap-3">
                <span className="text-base">💼</span>
                Available for freelance projects
              </p>
              <p className="flex items-center gap-3">
                <span className="text-base">⏳</span>
                Timezone: GMT +6
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold tracking-wide text-white">
              Let&apos;s Connect
            </h4>

            <form className="flex overflow-hidden rounded-2xl border border-white/10">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none"
                required
              />
              <button
                type="submit"
                className="border-l border-white/10 px-4 text-sm font-semibold text-white/70 transition-colors duration-300 hover:text-white"
                aria-label="Subscribe"
              >
                Join
              </button>
            </form>

            <motion.a
              href="mailto:mdhujaifaislamshanto@gmail.com"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-3 text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
            >
              <FaRegPaperPlane className="text-base" />
              mdhujaifaislamshanto@gmail.com
            </motion.a>

            <p className="text-xs leading-6 text-white/35">
              Open for collaborations, freelance work, and creative product
              ideas.
            </p>
          </div>
        </div>

        {/* bottom area */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row">
          <p className="text-xs tracking-wide text-white/35">
            © {new Date().getFullYear()} Md. Hujaifa Islam Shanto. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-white/35">
            <Link href="/#" className="transition-colors hover:text-white/70">
              Privacy
            </Link>
            <Link href="/#" className="transition-colors hover:text-white/70">
              Terms
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-white/70">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}