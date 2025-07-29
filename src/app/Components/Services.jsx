"use client";

import React from "react";
import { motion } from "framer-motion";
import { Laptop, Palette, Database, Rocket } from "lucide-react";
import { Star } from "lucide-react";
import { Lobster } from "next/font/google";
import Image from "next/image";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
});

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Build fast, scalable full-stack web apps using MERN, Firebase, and modern deployment pipelines.",
    icon: <Laptop className="w-6 h-6 text-[#3c82f6]" />,
  },
  {
    title: "Frontend UI/UX Design",
    description:
      "Craft responsive, animated, and user-friendly UIs with Tailwind CSS, Framer Motion, and React.",
    icon: <Palette className="w-6 h-6 text-[#3c82f6]" />,
  },
  {
    title: "Backend & Database",
    description:
      "Design REST APIs with Node.js, manage secure data flow using MongoDB and Firebase Auth.",
    icon: <Database className="w-6 h-6 text-[#3c82f6]" />,
  },
  {
    title: "Performance & Deployment",
    description:
      "Deploy blazing-fast apps on Vercel & Render with advanced optimization and continuous integration.",
    icon: <Rocket className="w-6 h-6 text-[#3c82f6]" />,
  },
];

export default function Services() {
  return (
    <>
      <section id="services" className="px-4 mt-20 lg:mt-0 lg:py-20 lg:px-6">
        <div className="container mx-auto ">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <div className=" flex gap-2 lg:justify-center items-center my-8">
              <Image
                src="/images/badge.png"
                alt="Md. Hujaifa Islam Shanto"
                width={45}
                height={45}
              />
              <h1
                className={` font-bold text-3xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-[#0192b0] via-[#5073f6] to-[#8b6efa] bg-clip-text text-transparent text-center ${lobster.className}`}
              >
                What I Do Best
              </h1>
            </div>
          </motion.h2>

          <div className="grid gap-10 lg:mt-10 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="relative group border border-[#2a0e61] rounded-2xl p-8 hover:shadow-[0_0_40px_#3c82f6] transition duration-300 hover:scale-[1.04]"
              >
                {/* Glow ring behind icon */}
                <div className="absolute -left-5 top-6 w-20 h-20 bg-gradient-to-tr from-[#3c82f6] to-transparent opacity-25 blur-3xl rounded-full z-0 group-hover:opacity-50 transition duration-500"></div>

                <div className="relative z-10 flex items-start gap-5 mb-6">
                  <div className="p-4 rounded-full border-4 border-[#3c82f6] bg-[#0a002e] shadow-lg">
                    <div className="group-hover:animate-pulse">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-base leading-relaxed relative z-10">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
