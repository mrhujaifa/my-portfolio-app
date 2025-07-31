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
import { Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="">
      <div className="">
        <ContactTitle></ContactTitle>
      </div>
      <div className="flex flex-col md:flex-row p-6 gap-10  text-white">
        {/* Contact Information */}
        <div className="space-y-6 flex-1 rounded-lg">
          <div className="flex items-center gap-4 p-4 border border-[#2a0e61] rounded">
            <FaEnvelope className="text-blue-500 text-xl" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <a
                href="mailto:mdtanvirislamrakib@gmail.com"
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
              <h4 className="font-semibold">Git Hub</h4>
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
          <form className="space-y-4">
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
                rows="5"
                className="w-full bg-transparent border border-[#2a0e61] px-4 py-2 rounded text-white placeholder-gray-400"
                required
              ></textarea>
            </div>

            <button
              className={`relative w-full lg:w-full lg:py-3 sm:w-auto px-6 py-3 sm:py-4 font-semibold text-white rounded-2xl 
    bg-gradient-to-r from-[#a268ff] via-[#5b77f2] to-[#00b3e5]
    shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out 
    focus:outline-none focus:ring-4 focus:ring-[#a268ff] focus:ring-opacity-50`}
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#a268ff] via-[#5b77f2] to-[#00b3e5] blur opacity-50 rounded-2xl"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
