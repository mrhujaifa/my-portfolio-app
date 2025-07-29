"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRegPaperPlane } from "react-icons/fa";
import Image from "next/image";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
});

export default function CallToAction() {
  return (
    <section className="py-24 px-6">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className=" flex gap-2 lg:justify-center items-center my-8">
          <Image
            src="/images/contact.png"
            alt="Md. Hujaifa Islam Shanto"
            width={60}
            height={60}
          />
          <h1
            className={` font-bold text-3xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-[#0192b0] via-[#5073f6] to-[#8b6efa] bg-clip-text text-transparent text-center ${lobster.className}`}
          >
            Let's Contact
          </h1>
        </div>
      </motion.div>

      {/* CTA Box */}
      <div className="container mx-auto text-center border border-[#2a0e61] rounded-3xl px-6 md:px-16 py-16 space-y-10  transition-all duration-500">
        {/* Heading with Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="text-4xl md:text-5xl ">
            <Image
              alt="md hujaifa islam | contact us"
              src="/images/contact-us.png"
              width={90}
              height={90}
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-snug tracking-tight">
            Ready to Collaborate? <br className="hidden md:block" />
            Let’s Build Your Vision.
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          I specialize in transforming ideas into interactive digital
          experiences. Whether you’re launching a product, designing a
          portfolio, or creating a brand presence — I’m here to code it into
          life.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 text-white font-semibold hover:opacity-90 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Let’s Talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
