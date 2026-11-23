
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  MapPin,
  Star,
  Award,
  CalendarDays,
  Code2,
  Database,
  Network,
  Sparkles,
} from "lucide-react";

// ============================================
// EDUCATION DATA
// ============================================

const education = [
  {
    number: "01",
    degree: "M.Sc. Data Science",
    institution: "Vellore Institute of Technology",
    location: "Chennai",
    period: "2024 — 2026",
    score: "CGPA 7.22",
    image: "/vit-logo.png",
    accent: "#e7ae4c",
    glow: "rgba(231,174,76,0.14)",
  },
  {
    number: "02",
    degree: "Bachelor of Computer Applications",
    institution: "Thiruvalluvar University",
    location: "Tamil Nadu",
    period: "2020 — 2023",
    score: "CGPA 7.93",
    image: "/thiruvalluvar-logo.png",
    accent: "#4de5f5",
    glow: "rgba(77,229,245,0.12)",
  },
];

// ============================================
// ACADEMIC GRAPHICS
// ============================================

function AcademicNetwork() {
  const nodes = [
    [20, 65],
    [65, 25],
    [90, 90],
    [135, 40],
    [175, 15],
    [190, 85],
  ];

  return (
    <svg
      viewBox="0 0 220 120"
      fill="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      >
        <path d="M20 65 65 25 135 40 175 15" />
        <path d="M20 65 90 90 135 40 190 85" />
        <path d="M65 25 90 90 175 15 190 85" />
      </g>

      {nodes.map(([cx, cy], index) => (
        <circle
          key={index}
          cx={cx}
          cy={cy}
          r={index % 2 === 0 ? 4 : 3}
          fill="currentColor"
          opacity="0.7"
        />
      ))}
    </svg>
  );
}

function AcademicDecoration({
  number,
}: {
  number: string;
}) {
  if (number === "01") {
    return (
      <div className="h-24 w-40">
        <AcademicNetwork />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Code2 size={52} strokeWidth={0.8} />
      <Database size={45} strokeWidth={0.8} />
      <Network size={42} strokeWidth={0.8} />
    </div>
  );
}

// ============================================
// EDUCATION CARD
// ============================================

function EducationCard({
  item,
  index,
  reduceMotion,
}: {
  item: (typeof education)[number];
  index: number;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 25 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      className="group relative overflow-hidden border border-[#b28b52]/45 bg-[#18110e] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#e7ae4c]/70 sm:p-6"
      style={{
        boxShadow: `
          inset 0 0 28px ${item.glow},
          0 8px 25px rgba(0,0,0,0.22)
        `,
      }}
    >
      {/* NEON TOP EDGE */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${item.accent},
            transparent
          )`,
          boxShadow: `0 0 15px ${item.accent}`,
        }}
      />

      {/* CORNER BRACKETS */}
      <div
        className="pointer-events-none absolute left-2 top-2 h-5 w-5 border-l border-t"
        style={{ borderColor: item.accent }}
      />

      <div
        className="pointer-events-none absolute right-2 top-2 h-5 w-5 border-r border-t"
        style={{ borderColor: item.accent }}
      />

      <div
        className="pointer-events-none absolute bottom-2 left-2 h-5 w-5 border-b border-l"
        style={{ borderColor: item.accent }}
      />

      <div
        className="pointer-events-none absolute bottom-2 right-2 h-5 w-5 border-b border-r"
        style={{ borderColor: item.accent }}
      />

      {/* BACKGROUND ACADEMIC GRAPHICS */}
      <div
        className="pointer-events-none absolute bottom-9 right-3 opacity-[0.13]"
        style={{
          color: item.accent,
        }}
      >
        <AcademicDecoration number={item.number} />
      </div>

      {/* RECORD NUMBER */}
      <span
        className="pointer-events-none absolute right-5 top-4 text-4xl font-black opacity-35"
        style={{
          color: item.accent,
          fontFamily: "Impact, 'Arial Black', sans-serif",
        }}
      >
        {item.number}
      </span>

      {/* PERIOD */}
      <div className="relative z-10 mb-5 flex items-center gap-2">
        <CalendarDays
          size={14}
          style={{ color: item.accent }}
        />

        <span
          className="text-[11px] font-bold uppercase tracking-[0.15em]"
          style={{ color: item.accent }}
        >
          {item.period}
        </span>
      </div>

      {/* UNIVERSITY DETAILS */}
      <div className="relative z-10 flex items-center gap-4">
        {/* ROUND UNIVERSITY LOGO */}
        <div
          className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 bg-white p-1.5 shadow-lg sm:h-24 sm:w-24"
          style={{
            borderColor: item.accent,
            boxShadow: `0 0 18px ${item.glow}`,
          }}
        >
          <img
            src={item.image}
            alt={`${item.institution} logo`}
            className="h-full w-full rounded-full object-contain"
          />
        </div>

        {/* DEGREE AND UNIVERSITY */}
        <div className="min-w-0">
          <h4 className="text-[18px] font-bold leading-snug text-[#f5e8cc] sm:text-[20px]">
            {item.degree}
          </h4>

          <p className="mt-2 text-[16px] font-semibold leading-6 text-[#e0c9a6] sm:text-[17px]">
            {item.institution}
          </p>

          <p className="mt-1 flex items-center gap-1.5 text-[13px] text-[#a99376]">
            <MapPin size={13} />
            {item.location}
          </p>
        </div>
      </div>

      {/* BOTTOM DETAILS */}
      <div className="relative z-10 mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#b28b52]/30 pt-4">
        {/* CGPA BADGE */}
        <div className="inline-flex items-center gap-2 border border-[#b28b52]/50 bg-[#302017] px-4 py-2">
          <Award
            size={16}
            style={{ color: item.accent }}
          />

          <span className="text-[15px] font-bold text-[#e7ae4c]">
            {item.score}
          </span>
        </div>

        {/* FOOTER */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#a99376]">
            Record // {item.number}
          </span>

          <ArrowUpRight
            size={18}
            style={{ color: item.accent }}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN ABOUT COMPONENT
// ============================================

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#15100d] px-6 pb-44 pt-24 text-[#f5e8cc] sm:pb-48 sm:pt-32"
    >
      {/* CINEMATIC BACKGROUND LIGHTING */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse at 80% 30%,
              rgba(177,73,34,0.28),
              transparent 55%
            ),
            radial-gradient(
              ellipse at 10% 90%,
              rgba(189,139,52,0.14),
              transparent 50%
            )
          `,
        }}
      />

      {/* VINTAGE STRIPES */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #f5e8cc 0px, #f5e8cc 1px, transparent 1px, transparent 5px)",
        }}
      />

      {/* BACKGROUND CHAPTER NUMBER */}
      <div
        className="pointer-events-none absolute -right-10 top-10 select-none text-[180px] font-black leading-none text-[#e7ae4c]/[0.035] sm:text-[320px]"
        style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
        }}
      >
        02
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* CHAPTER LABEL */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-[#c45135]" />

          <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#e7ae4c]">
            Chapter 02 — The Origin Story
          </span>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-5xl font-black uppercase leading-none tracking-tight sm:text-7xl"
            style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
            }}
          >
            BEHIND THE
            <span className="block text-[#e7ae4c]">
              CODE.
            </span>
          </h2>

          <p
            className="mt-5 max-w-2xl text-[18px] leading-9 tracking-[0.02em] text-[#bda88b]"
            style={{
              fontFamily: "'Courier New', Courier, monospace",
            }}
          >
            Every story has a beginning. Mine started with
            curiosity, code, and a passion for understanding data.
          </p>
        </motion.div>

        {/* TWO-COLUMN CONTENT */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: MY STORY */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -35 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="border-l-2 border-[#b44730] pl-6 sm:pl-8">
              <div className="mb-6 flex items-center gap-3">
                <Star
                  size={18}
                  fill="currentColor"
                  className="text-[#e7ae4c]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e7ae4c]">
                  The Story So Far
                </span>
              </div>

              <h3 className="mb-6 text-2xl font-bold leading-snug text-[#f6e7c7] sm:text-3xl">
                Curious about data.
                <span className="block text-[#e7ae4c]">
                  Driven by possibilities.
                </span>
              </h3>

              <p className="mb-5 text-sm leading-8 text-[#c5b39a] sm:text-base">
                I&apos;m Vignesh, a Data Science postgraduate
                from VIT Chennai, interested in turning complex
                information into useful insights and practical
                solutions.
              </p>

              <p className="mb-5 text-sm leading-8 text-[#c5b39a] sm:text-base">
                My interests span Data Analytics, Machine Learning,
                Deep Learning, Computer Vision, and Natural Language
                Processing. I enjoy exploring how these technologies
                can solve real-world problems.
              </p>

              <p className="text-sm leading-8 text-[#c5b39a] sm:text-base">
                Through academic projects and hands-on experience,
                I&apos;ve worked on intelligent systems involving
                medical imaging, automated content moderation,
                retail applications, and financial analytics.
                I&apos;m now looking for an opportunity to begin my
                professional career and keep learning along the way.
              </p>
            </div>

            {/* LOCATION */}
            <div className="mt-9 inline-flex items-center gap-3 border border-[#b28b52]/40 bg-[#211710] px-5 py-3">
              <MapPin
                size={16}
                className="text-[#e7ae4c]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#d8c5a4]">
                Based in Chennai, India
              </span>
            </div>
          </motion.div>

          {/* RIGHT: PREMIUM EDUCATION WIDGET */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 35 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            {/* EDUCATION HEADER */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#b28b52]/35 pb-5">
              <div className="flex items-center gap-3">
                <GraduationCap
                  size={25}
                  className="text-[#e7ae4c]"
                />

                <h3 className="text-xl font-bold uppercase tracking-[0.1em] text-[#f5e8cc]">
                  Education
                </h3>
              </div>

              <span className="border border-[#b28b52]/35 bg-[#211710] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#bda88b]">
                Academic Record
              </span>
            </div>

            {/* EDUCATION CARDS */}
            <div className="space-y-5">
              {education.map((item, index) => (
                <EducationCard
                  key={item.number}
                  item={item}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

            {/* EDUCATION FOOTER */}
            <div className="mt-6 flex items-center justify-between border-t border-[#b28b52]/30 pt-5">
              <div className="flex items-center gap-2 text-[#a99376]">
                <BookOpen size={16} />

                <span className="text-[11px] uppercase tracking-[0.15em]">
                  Always Learning
                </span>
              </div>

              <Sparkles
                size={18}
                className="text-[#e7ae4c]"
              />
            </div>
          </motion.div>
        </div>

        {/* CHAPTER ENDING */}
        <div className="mt-20 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#b28b52]/30" />

          <span className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[#a99376]">
            To Be Continued
          </span>

          <div className="h-px flex-1 bg-[#b28b52]/30" />
        </div>
      </div>

      {/* ====================================== */}
      {/* CINEMATIC FILMSTRIP DIVIDER            */}
      {/* ====================================== */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        {/* TOP VINTAGE LINES */}
        <div
          className="h-12 border-b border-[#a43b2a]/70"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(231,174,76,0.07) 4px, transparent 5px)",
          }}
        />

        {/* GOLD FILM PERFORATIONS */}
        <div className="relative h-5 border-y border-[#a43b2a] bg-[#211710]">
          <div
            className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #e7ae4c 0px, #e7ae4c 10px, transparent 10px, transparent 38px)",
              opacity: 0.8,
            }}
          />
        </div>

        {/* BOTTOM VINTAGE LINES */}
        <div
          className="h-10 border-t border-[#a43b2a]/70"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(231,174,76,0.07) 4px, transparent 5px)",
          }}
        />
      </div>
    </section>
  );
}
