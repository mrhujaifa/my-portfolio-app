"use client";

import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";
import ContactTitle from "./contactTitle";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div>
      <div>
        <ContactTitle />
      </div>

      <div className="flex flex-col md:flex-row p-6 gap-10 text-white">
        {/* Contact Information */}
        <div className="space-y-6 flex-1 rounded-lg">
          <div className="flex items-center gap-4 p-4 border border-[#2a0e61] rounded">
            <FaEnvelope className="text-blue-500 text-xl" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <a
                href="mailto:mdhujaifaislamshanto@gmail.com"
                className="text-blue-400 hover:underline"
              >
                mdhujaifaislamshanto@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 border border-[#2a0e61] rounded">
            <FaLinkedin className="text-blue-600 text-xl" />
            <div>
              <h4 className="font-semibold">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/mrhujaifa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Connect with me
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 border border-[#2a0e61] rounded">
            <FaGithub className="text-blue-600 text-xl" />
            <div>
              <h4 className="font-semibold">GitHub</h4>
              <a
                href="https://www.github.com/mrhujaifa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 border border-[#2a0e61] rounded">
            <FaPhoneAlt className="text-green-500 text-xl" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <a
                href="tel:+8801608215377"
                className="text-green-400 hover:underline"
              >
                +88 01608215377
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 border border-[#2a0e61] rounded">
            <FaWhatsapp className="text-green-600 text-xl" />
            <div>
              <h4 className="font-semibold">WhatsApp</h4>
              <a
                href="https://wa.me/8801608215377"
                className="text-green-400 hover:underline"
              >
                +88 01608215377
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 border border-[#2a0e61] rounded">
            <FaMapMarkerAlt className="text-purple-500 text-xl" />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-purple-400">
                Kushtia sadar, Kushtia, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="flex-1 border border-[#2a0e61] p-6 rounded-lg space-y-6">
          <h2 className="text-2xl font-bold">Send a Message</h2>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Form submitted");
            }}
          >
            <div>
              <label className="block font-medium mb-1">Full Name *</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-transparent border border-[#2a0e61] px-4 py-2 rounded text-white placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email *</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-transparent border border-[#2a0e61] px-4 py-2 rounded text-white placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Subject *</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full bg-transparent border border-[#2a0e61] px-4 py-2 rounded text-white placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Message *</label>
              <textarea
                placeholder="Your message here..."
                rows={5}
                className="w-full bg-transparent border border-[#2a0e61] px-4 py-2 rounded text-white placeholder-gray-400"
                required
              />
            </div>

            <ActionButtons />
          </form>
        </div>
      </div>
    </div>
  );
}

const buttons = [{ label: "Hire me", type: "submit" }];

const shineVariant = {
  initial: {
    x: "-160%",
    opacity: 0,
  },
  animate: {
    x: "240%",
    opacity: [0, 0.2, 0.85, 0.2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 1.4,
      ease: "easeInOut",
    },
  },
};

const ActionButtons = () => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4">
      {buttons.map((btn, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -2, scale: 1.015 }}
          whileTap={{ scale: 0.98 }}
          className="group relative w-full sm:w-auto"
        >
          <button
            type={btn.type}
            className="relative flex w-full sm:w-auto min-w-0 sm:min-w-[190px] items-center justify-center overflow-hidden rounded-[20px] px-8 py-4"
          >
            <span className="pointer-events-none absolute inset-0 rounded-[20px] bg-[linear-gradient(90deg,rgba(157,78,255,0.18),rgba(67,97,238,0.14),rgba(0,212,255,0.18))] blur-xl opacity-60 transition-all duration-500 group-hover:opacity-100" />

            <span
              className="pointer-events-none absolute inset-0 rounded-[20px] p-[1.2px]"
              style={{
                background:
                  "linear-gradient(120deg, rgba(168,111,255,1), rgba(101,116,255,0.95), rgba(0,225,255,0.95), rgba(168,111,255,1))",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            <span className="pointer-events-none absolute inset-[1px] rounded-[19px] border border-white/10" />

            <span className="pointer-events-none absolute left-[8%] top-[1px] h-[38%] w-[84%] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.05),transparent)] blur-md" />

            <motion.span
              variants={shineVariant}
              initial="initial"
              animate="animate"
              className="pointer-events-none absolute top-[-30%] h-[170%] w-16 sm:w-20 rotate-[24deg] bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.7),rgba(255,255,255,0))] blur-[10px]"
            />

            <span className="pointer-events-none absolute inset-0 rounded-[20px] shadow-[inset_0_0_22px_rgba(129,90,255,0.12)] transition-all duration-500 group-hover:shadow-[inset_0_0_28px_rgba(129,90,255,0.2)]" />

            <span className="relative z-10 text-[15px] sm:text-base font-semibold tracking-[0.02em] text-white">
              {btn.label}
            </span>
          </button>
        </motion.div>
      ))}
    </div>
  );
};