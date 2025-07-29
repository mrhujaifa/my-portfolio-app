"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-transparent text-white">
      <div className="text-center max-w-xl space-y-8">
        {/* Icon & 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-2"
        >
          <FaRocket className="text-5xl text-blue-500 drop-shadow-md" />
          <h1 className="text-6xl md:text-7xl font-extrabold">404</h1>
          <p className="text-lg md:text-xl text-gray-300">
            Oops! The page you’re looking for doesn’t exist.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 text-white font-semibold hover:opacity-90 shadow-lg transition-all duration-300"
          >
            ⬅ Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
