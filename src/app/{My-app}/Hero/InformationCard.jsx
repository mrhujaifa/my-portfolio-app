"use client";
import React from "react";

const ProfileInformation = () => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full max-w-4xl mx-auto rounded-lg p-[2px]">
        <div className="rounded-lg border border-[#2a0e61] overflow-hidden ">
          {/* Header */}
          <div className="flex items-center px-4 py-2 w-full border-b border-[#2a0e61]">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <span className="flex-1 text-center text-gray-300 text-sm font-semibold">
              developer.js
            </span>
          </div>

          {/* Code Area */}
          <div className="p-4 sm:p-6 font-mono text-[12px] sm:text-sm leading-relaxed whitespace-pre-wrap text-white">
            <p>
              <span className="text-purple-400 text-opacity-90">const</span>{" "}
              <span className="text-blue-400">profile</span>{" "}
              <span className="text-purple-400 text-opacity-90">=</span> {"{"}
            </p>

            <p className="ml-4">
              <span className="text-blue-300">name</span>:{" "}
              <span className="text-green-400">'Mr. Hujaifa'</span>,
            </p>
            <p className="ml-4">
              <span className="text-blue-300">title</span>:{" "}
              <span className="text-green-400">
                'Full Stack Software developer | Frontend Developer | Problem Solver'
              </span>
              ,
            </p>

            <p className="ml-4">
              <span className="text-blue-300">skills</span>: [
            </p>
            <p className="ml-8">
              <span className="text-green-400">'React'</span>,{" "}
              <span className="text-green-400">'NextJS'</span>,{" "}
              <span className="text-green-400">'ExpressJS'</span>,{" "}
              <span className="text-green-400">'MongoDB'</span>,{" "}
              <span className="text-green-400">'Material UI'</span>,{" "}
              <span className="text-green-400">'NodeJS'</span>,
            </p>
            <p className="ml-8">
              <span className="text-green-400">'Css'</span>,{" "}
              <span className="text-green-400">'Html'</span>,{" "}
              <span className="text-green-400">'Tailwind CSS'</span>,
            </p>
            <p className="ml-8">
              <span className="text-green-400">'Git'</span>,{" "}
            </p>
            <p className="ml-4">],</p>

            <p className="ml-4">
              <span className="text-blue-300">languages</span>: [
              <span className="text-green-400">'English'</span>,{" "}
              <span className="text-green-400">'Bengali'</span>],
            </p>

            <p className="ml-4">
              <span className="text-blue-300">availability</span>:{" "}
              <span className="text-green-400">
                'Open to remote full-time roles'
              </span>
              ,
            </p>

            <p className="ml-4">
              <span className="text-blue-300">social</span>: {"{"}
            </p>
            <p className="ml-8">
              <span className="text-blue-300">GitHub</span>:{" "}
              <a
                href="https://github.com/mrhujaifa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                https://github.com/mrhujaifa
              </a>
              ,
            </p>

            <p className="ml-8">
              <span className="text-blue-300">LinkedIn</span>:{" "}
              <a
                href="https://linkedin.com/in/mrhujaifa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                https://linkedin.com/in/mrhujaifa
              </a>
              ,
            </p>

            <p className="ml-8">
              <span className="text-blue-300">Email</span>:{" "}
              <a
                href="mailto:mdhujaifaislamshanto@gmail.com"
                className="text-green-400 hover:underline"
              >
                mdhujaifaislamshanto@gmail.com
              </a>
            </p>

            <p className="ml-4">{"},"}</p>

            <p className="ml-4">
              <span className="text-blue-300">hardWorker</span>:{" "}
              <span className="text-purple-400 font-semibold">true</span>,
            </p>
            <p className="ml-4">
              <span className="text-blue-300">quickLearner</span>:{" "}
              <span className="text-purple-400 font-semibold">true</span>,
            </p>
            <p className="ml-4">
              <span className="text-blue-300">problemSolver</span>:{" "}
              <span className="text-purple-400 font-semibold">true</span>,
            </p>
            <p className="ml-4">
              <span className="text-blue-300">yearsOfExperience</span>:{" "}
              <span className="text-yellow-400 font-semibold">1+</span>,
            </p>

            <p>{"}"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
