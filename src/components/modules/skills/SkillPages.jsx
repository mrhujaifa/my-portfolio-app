"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SkillSectionTitle from "./SkillSectionTitle";

/** --- Small pill with circular image badge --- */
function Pill({ icon, label }) {
  return (
    <span
      className="
        inline-flex items-center gap-2 rounded-xl
        border border-slate-700/70
        px-3 py-1.5 text-sm text-slate-200
        transition-colors
        group-hover/pill:border-slate-500/80 group-hover/pill:bg-slate-800
      "
    >
      <span
        className="
          grid h-6 w-6 place-items-center overflow-hidden
          shadow-sm
        "
      >
        {icon ? (
          <Image src={icon} alt={label} width={17} height={17} className="" />
        ) : null}
      </span>
      {label}
    </span>
  );
}

/** --- Fancy auto animated card --- */
function SectionCard({ title, icon, pills, autoDelay = 0 }) {
  const CARD_HEIGHT = 250;
  const cardRef = useRef(null);

  const [coords, setCoords] = useState({ x: 120, y: 80 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const applyEffect = (x, y, rect) => {
    setCoords({ x, y });

    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
    const max = 10;

    setTilt({
      rx: -(py * max),
      ry: px * max,
    });
  };

  const resetEffect = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  useEffect(() => {
    let intervalId;
    let resetTimeoutId;
    let startTimeoutId;

    startTimeoutId = setTimeout(() => {
      const runAnimation = () => {
        const el = cardRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();

        const x = rect.width * (0.2 + Math.random() * 0.6);
        const y = rect.height * (0.2 + Math.random() * 0.6);

        applyEffect(x, y, rect);

        resetTimeoutId = setTimeout(() => {
          resetEffect();
        }, 1200);
      };

      runAnimation();
      intervalId = setInterval(runAnimation, 3000);
    }, autoDelay);

    return () => {
      clearTimeout(startTimeoutId);
      clearTimeout(resetTimeoutId);
      clearInterval(intervalId);
    };
  }, [autoDelay]);

  return (
    <div
      ref={cardRef}
      style={{
        width: "100%",
        height: "100%",
        "--mx": `${coords.x}px`,
        "--my": `${coords.y}px`,
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
      }}
      className="
        group relative rounded-xl p-[1px]
        transition-transform duration-500 will-change-transform
      "
    >
      {/* animated gradient border */}
      <div
        className="
          absolute inset-0 rounded-2xl
          animate-border-spin
          opacity-70
        "
      />

      {/* inner card container */}
      <article
        className="
          relative rounded-xl border border-[#2a0e61]
          p-6 shadow-2xl
          overflow-hidden
        "
        style={{ height: "100%" }}
      >
        {/* lighting hotspot */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-xl
            transition-all duration-700
          "
          style={{
            background: `
              radial-gradient(240px 240px at var(--mx) var(--my),
                rgba(99,102,241,0.25), transparent 40%),
              radial-gradient(360px 360px at var(--mx) var(--my),
                rgba(168,85,247,0.18), transparent 45%),
              radial-gradient(520px 520px at var(--mx) var(--my),
                rgba(16,185,129,0.12), transparent 50%)
            `,
            mixBlendMode: "screen",
          }}
        />

        {/* auto glossy sweep */}
        <div
          className="
            pointer-events-none absolute -inset-1 rounded-xl
            bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.12),transparent)]
            animate-auto-shine
          "
          style={{ maskImage: "linear-gradient(#000, #000)" }}
        />

        {/* floating particles */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute -top-6 -right-8 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl animate-float-slow" />
          <div className="absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl animate-float-slower" />
        </div>

        {/* content */}
        <div className="relative z-[1]">
          <div className="mb-4 flex items-center gap-3">
            <div
              className="
                grid h-12 w-12 place-items-center overflow-hidden
                rounded-xl
                ring-1 ring-slate-600/60 shadow-xl shadow-black/20
              "
            >
              {icon ? (
                <Image
                  src={icon}
                  alt={title}
                  width={28}
                  height={28}
                  className=""
                />
              ) : null}
            </div>
            <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
          </div>

          <div className="flex flex-wrap gap-3 group/pill">
            {pills.map((p) => (
              <Pill key={`${title}-${p.label}`} icon={p.icon} label={p.label} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default function SkillsShowcase() {
  const sections = [
    {
      title: "Frontend Development",
      icon: "/skills/frontend.png",
      pills: [
        { label: "HTML", icon: "/skills/html.png" },
        { label: "CSS3", icon: "/skills/css.png" },
        { label: "JavaScript", icon: "/skills/js.png" },
        { label: "TypeScript", icon: "/skills/typescript.png" },
        { label: "React.js", icon: "/skills/react.png" },
        { label: "Next.js", icon: "/skills/nextjs.webp" },
        { label: "React Router", icon: "/skills/react-router.webp" },
        { label: "Tailwind CSS", icon: "/skills/tailwind.png" },
      ],
    },
    {
      title: "Backend Development",
      icon: "/skills/backend.png",
      pills: [
        { label: "Node.js", icon: "/skills/node.png" },
        { label: "Express.js", icon: "/skills/express.png" },
        { label: "Prisma", icon: "/skills/prisma.svg" },
        { label: "PostgreSQL", icon: "/skills/postgre.png" },
        { label: "MongoDB", icon: "/skills/mongodb.png" },
        { label: "Stripe", icon: "/skills/stripe.png" },
        { label: "Jwt", icon: "/skills/jwt.png" },
        { label: "Axios", icon: "/skills/axios.png" },
      ],
    },
    {
      title: "UI/UX Design",
      icon: "/skills/ui-ux.png",
      pills: [
        { label: "Figma", icon: "/skills/figma.png" },
        { label: "Responsive Design", icon: "/skills/responsive.png" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "/skills/tools.png",
      pills: [
        { label: "VS Code", icon: "/skills/vscode.png" },
        { label: "Firebase", icon: "/skills/firebase.png" },
        { label: "Vercel", icon: "/skills/vercel.svg" },
        { label: "Vite", icon: "/skills/vite.png" },
        { label: "Netlify", icon: "/skills/netlify.svg" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "/skills/cloud.png",
      pills: [{ label: "Git", icon: "/skills/git.png" }],
    },
    {
      title: "Creative Skills",
      icon: "/skills/creative.png",
      pills: [
        { label: "UI Animation", icon: "/skills/animate.png" },
        { label: "Motion Animation", icon: "/skills/motion.png" },
      ],
    },
  ];

  return (
    <div className="mt-24 sm:mt-32 lg:mt-60">
      <SkillSectionTitle />
      <section id="skills" className="relative isolate">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        />

        <div className="mx-auto container px-4 py-6 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sections.map((s, index) => (
              <SectionCard key={s.title} {...s} autoDelay={index * 350} />
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes auto-shine {
          0% {
            transform: translateX(-120%);
          }
          20% {
            transform: translateX(120%);
          }
          100% {
            transform: translateX(120%);
          }
        }

        .animate-auto-shine {
          animation: auto-shine 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
