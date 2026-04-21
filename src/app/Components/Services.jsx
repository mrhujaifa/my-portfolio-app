"use client";

import React from "react";
import { motion } from "framer-motion";
import { Laptop, Palette, Database, Rocket } from "lucide-react";
import SectionTitle from "@/components/modules/ui/SectionTitle";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Scalable MERN and Firebase apps built for speed and growth.",
    icon: <Laptop className="w-6 h-6 text-[#3c82f6]" />,
  },
  {
    title: "Frontend UI/UX Design",
    description:
      "Responsive interfaces with React, Tailwind, and Framer Motion.",
    icon: <Palette className="w-6 h-6 text-[#3c82f6]" />,
  },
  {
    title: "Backend & Database",
    description:
      "Secure APIs and data layers with Node.js, MongoDB, and Firebase Auth.",
    icon: <Database className="w-6 h-6 text-[#3c82f6]" />,
  },
  {
    title: "Performance & Deployment",
    description:
      "Optimized deployments on Vercel and Render with clean performance tuning.",
    icon: <Rocket className="w-6 h-6 text-[#3c82f6]" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="px-4 mt-20 lg:mt-0 lg:py-20 lg:px-6">
      <div className="container mx-auto">
        <SectionTitle
          className="mb-10 sm:mb-12"
          eyebrow="Services"
          title="What I Do Best"
          subtitle="Short, focused services for modern products."
          iconSrc="/icons/best.png"
          iconAlt="Services"
        />

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-[#2a0e61] p-6 sm:p-7 transition duration-300 hover:shadow-[0_0_40px_rgba(60,130,246,0.35)] hover:scale-[1.02]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3c82f6]/60 to-transparent" />
              <div className="absolute -left-10 top-6 h-24 w-24 rounded-full bg-[#3c82f6]/10 blur-3xl transition duration-500 group-hover:bg-[#3c82f6]/20" />

              <div className="relative z-10 mb-4 flex items-start gap-4 sm:gap-5">
                <div className="shrink-0 rounded-full border border-[#3c82f6]/60 bg-[#0a002e] p-3 shadow-lg transition duration-300 group-hover:scale-105">
                  <div className="group-hover:animate-pulse">{service.icon}</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight text-white">
                  {service.title}
                </h3>
              </div>

              <p className="relative z-10 text-sm sm:text-base leading-relaxed text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
