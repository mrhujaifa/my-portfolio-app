import React from "react";
import { TypeAnimation } from "react-type-animation";

const AutoTyping = () => {
  return (
    <div className="text-white text-3xl  ">
      <TypeAnimation
        sequence={[
          "Hi, I'm Hujaifa.", // টাইপ করবে
          1500,                // ১.৫ সেকেন্ড রুকবে
          "I'm a Full-Stack Developer.", 
          2000,
          "I love React & Next.js.",
          2000,
          "Let's build something amazing!",
          2500,
          () => {
            console.log("Typing animation finished.");
          },
        ]}
        speed={50}         // টাইপ করার গতি (মিলিসেকেন্ড)
        deletionSpeed={30} // ডিলিট করার গতি
        repeat={Infinity}  // লুপ হবে অনন্তকাল
        cursor={true}      // কারসর দেখাবে
        style={{ display: "inline-block" }}
      />
    </div>
  );
};

export default AutoTyping;
