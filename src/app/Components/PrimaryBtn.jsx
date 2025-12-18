import Link from "next/link";

// const PrimaryButton = ({
//   href,
//   text,
//   icon,
//   target = "_self",
//   className = "",
// }) => {
//   return (
//     <Link
//       href={href}
//       target={target}
//       className={`relative inline-flex items-center justify-center font-bold text-white transition-all duration-300 ease-in-out group focus:outline-none ${className}`}
//     >
//       {/* Background Glow Effect - আপনার দেওয়া Blur/Opacity */}
//       <span className="absolute inset-0 bg-gradient-to-r from-[#a268ff] via-[#5b77f2] to-[#00b3e5] blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>

//       {/* Main Button Body - আপনার দেওয়া Gradient/Padding */}
//       <span className="relative flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#a268ff] via-[#5b77f2] to-[#00b3e5] rounded-xl leading-none">
//         {/* Dynamic Icon - হোভার করলে উপরে লাফাবে (Translate-y) */}
//         {icon && (
//           <span className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1">
//             {icon}
//           </span>
//         )}

//         {text}
//       </span>
//     </Link>
//   );
// };

import React from "react";

export default function PrimaryButton({
  href,
  text,
  icon,
  target = "_self",
  className = "",
}) {
  return (
    <Link
      href={href} // আপনার রেজ্যুমে ফাইলের পাথ এখানে দিন
      target={target}
      className="relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-300 ease-in-out group focus:outline-none"
    >
      {/* Background Glow Effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#a268ff] via-[#5b77f2] to-[#00b3e5] blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>

      {/* Main Button Body */}
      <span className="relative flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#a268ff] via-[#5b77f2] to-[#00b3e5] rounded-xl leading-none">
        {/* Download Icon (Optional but looks pro) */}
        {icon}
        {text}
      </span>
    </Link>
  );
}
