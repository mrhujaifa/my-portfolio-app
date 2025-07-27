"use client";

import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ComingSoon() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-09-01T00:00:00");
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (10000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6  text-white relative overflow-hidden">
      {/* Blur BG */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-cyan-500/10 blur-3xl" />

      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
          Coming Soon
        </h1>
        <p className="text-gray-300 text-lg">
          I’m working on something awesome. Stay tuned and be the first to know!
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-6 text-white font-mono text-sm sm:text-lg">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold">{value ?? "0"}</div>
              <div className="text-gray-400">{unit}</div>
            </div>
          ))}
        </div>

        {/* Email subscription */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 hover:opacity-90 transition-all font-semibold">
            Notify Me
          </button>
        </div>

        {/* Socials */}
        <div className="mt-8 flex justify-center gap-5 text-2xl">
          <a href="https://facebook.com/your-id" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://github.com/your-id" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-id" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
