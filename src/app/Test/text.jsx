import React from "react";
import "./test.css"; // Custom CSS file import

export default function ExperienceCard() {
  return (
    <div className="relative max-w-md mx-auto pl-[6px] pt-[2px] pr-[2px] pb-[2px] rounded-xl glowing-border">
      {/* Inner Card */}
      <div className=" rounded-xl p-6 text-white space-y-4 relative z-10">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">Frontend Intern</h2>
          <p className="text-sm text-gray-400">Aug 2024 - Dec 2024</p>
        </div>

        <h3 className="text-white font-semibold">
          Nova Academy <span className="text-gray-400">— Dhaka, BD</span>
        </h3>

        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          <li>Worked on student dashboard UI using Tailwind and React Router.</li>
          <li>Improved page load speed by optimizing components.</li>
          <li>Participated in daily standups and team planning.</li>
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {["React", "Tailwind CSS", "Figma", "GitHub"].map((tech, idx) => (
            <span
              key={idx}
              className="bg-[#1e293b] text-blue-400 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
