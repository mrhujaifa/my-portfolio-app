import React from "react";

const ProfileInformation = () => {
  return (
    <div className="w-full  sm:px- md:px-8 py-8">
      <div className="relative w-full max-w-4xl mx-auto rounded-lg p-[2px]">
        <div className="rounded-lg border border-gray-600 overflow-hidden bg-[#07041b]">
          {/* Header */}
          <div className="flex items-center px-4 py-2 w-full border-b border-gray-600">
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
                'MERN STACK developer | Cloud Enthusiast | Problem Solver'
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
              <span className="text-green-400">'Discord Development'</span>
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
                'Open to freelance & full-time roles'
              </span>
              ,
            </p>

            <p className="ml-4">
              <span className="text-blue-300">social</span>: {"{"}
            </p>
            <p className="ml-8">
              <span className="text-blue-300">github</span>:{" "}
              <span className="text-green-400">
                'https://github.com/hujaifa'
              </span>
              ,
            </p>
            <p className="ml-8">
              <span className="text-blue-300">linkedin</span>:{" "}
              <span className="text-green-400">
                'https://linkedin.com/in/hujaifa'
              </span>
              ,
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
