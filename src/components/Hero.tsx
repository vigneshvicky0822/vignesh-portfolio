
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Database,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const RESUME_PATH = "/Vignesh_S_Resume.pdf";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vignesh-s-a2a854288/",
    Icon: FaLinkedinIn,
    color: "#0A66C2",
  },
  {
    name: "Email",
    href: "mailto:vickyvignesh0822@gmail.com",
    Icon: Mail,
    color: "#e7ae4c",
  },
  {
    name: "GitHub",
    href: "https://github.com/vigneshvicky0822",
    Icon: FaGithub,
    color: "#f5e8cc",
  },
];

function NeuralNetworkGraphic() {
  const nodes = [
    [25, 45],
    [75, 20],
    [65, 110],
    [125, 70],
    [170, 25],
    [195, 115],
    [250, 55],
    [275, 135],
  ];

  return (
    <svg
      viewBox="0 0 300 160"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#4de5f5" strokeWidth="0.8" opacity="0.5">
        <path d="M25 45 75 20 125 70 170 25 250 55" />
        <path d="M25 45 65 110 125 70 195 115 275 135" />
        <path d="M75 20 65 110 170 25 195 115 250 55" />
        <path d="M125 70 250 55 275 135" />
      </g>

      {nodes.map(([cx, cy], index) => (
        <circle
          key={index}
          cx={cx}
          cy={cy}
          r={index % 2 === 0 ? 4 : 3}
          fill={index % 2 === 0 ? "#4de5f5" : "#e7ae4c"}
          opacity="0.8"
        />
      ))}
    </svg>
  );
}

function DataChartGraphic() {
  const heights = [18, 30, 24, 45, 36, 55, 48, 70];

  return (
    <div className="flex h-20 items-end gap-1.5">
      {heights.map((height, index) => (
        <div
          key={index}
          className="w-2 border-t border-[#e7ae4c] bg-[#e7ae4c]/20"
          style={{ height }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#15100d] px-6 pb-40 pt-32 text-[#f5e8cc] sm:pb-44 sm:pt-36"
    >
      {/* CINEMATIC BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse at 15% 20%,
              rgba(177,73,34,0.13),
              transparent 48%
            ),
            radial-gradient(
              ellipse at 85% 70%,
              rgba(231,174,76,0.09),
              transparent 48%
            ),
            linear-gradient(
              180deg,
              #15100d 0%,
              #1b120e 55%,
              #15100d 100%
            )
          `,
        }}
      />

      {/* VINTAGE SCANLINES */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #f5e8cc 0px, #f5e8cc 1px, transparent 1px, transparent 5px)",
        }}
      />

      {/* GOLD GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(231,174,76,0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(231,174,76,0.35) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* CHAPTER NUMBER */}
      <div
        className="pointer-events-none absolute -right-12 top-10 select-none text-[180px] font-black leading-none text-[#e7ae4c]/[0.025] sm:text-[300px]"
        style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
        }}
      >
        01
      </div>

      {/* MAIN HERO */}
      <div className="relative z-10 mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        {/* LEFT SIDE */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* PRODUCTION LABEL */}
          <div className="mb-7 inline-flex items-center gap-2 border border-[#b28b52]/45 bg-[#211710] px-4 py-2">
            <Star
              size={13}
              fill="currentColor"
              className="text-[#e7ae4c]"
            />

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e7ae4c]">
              A Vignesh Production
            </span>
          </div>

          {/* INTRODUCING */}
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[#a43b2a]" />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#c45135]">
              Introducing
            </span>
          </div>

          {/* NAME */}
          <h1
            className="text-[76px] font-black uppercase leading-[0.86] tracking-tight sm:text-[105px] lg:text-[125px]"
            style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
            }}
          >
            VIGNESH
            <span className="block text-[#e7ae4c]">S</span>
          </h1>

          {/* PROFESSIONAL TITLE */}
          <div className="mt-8 flex items-start gap-3">
            <span className="mt-2 h-[2px] w-9 shrink-0 bg-[#a43b2a]" />

            <h2 className="text-sm font-bold uppercase leading-6 tracking-[0.13em] text-[#f5e8cc]">
              Aspiring Data Scientist / AI & ML Enthusiast
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p
            className="mt-7 max-w-xl text-[16px] leading-8 tracking-[0.02em] text-[#c5b39a]"
            style={{
              fontFamily: "'Courier New', Courier, monospace",
            }}
          >
            Every dataset has a story. I uncover patterns,
            transform data into meaningful insights, and bring
            ideas to life through Data Analytics, Data Science,
            and Artificial Intelligence.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-4">
            {/* VIEW PROJECTS */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 border border-[#b44730] bg-[#a43b2a] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#c45135] hover:shadow-[0_0_22px_rgba(196,81,53,0.3)]"
            >
              View My Work

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-[#b28b52]/60 bg-[#211710] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[#f5e8cc] transition-all duration-300 hover:-translate-y-1 hover:border-[#e7ae4c] hover:bg-[#302017]"
            >
              Contact Me

              <ArrowDownRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>

            {/* NEW: DOWNLOAD RESUME */}
            <a
              href={RESUME_PATH}
              download="Vignesh_S_Resume.pdf"
              aria-label="Download Vignesh S resume"
              className="group inline-flex items-center gap-3 border border-[#4de5f5]/70 bg-[#211710] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[#4de5f5] transition-all duration-300 hover:-translate-y-1 hover:border-[#4de5f5] hover:bg-[#183036] hover:shadow-[0_0_20px_rgba(77,229,245,0.2)]"
            >
              <Download
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
              Download CV
            </a>
          </div>

          {/* LOCATION */}
          <div className="mt-8 flex items-center gap-2 text-[#a99376]">
            <MapPin size={14} className="text-[#e7ae4c]" />

            <span className="text-[11px] uppercase tracking-[0.18em]">
              Chennai, India
            </span>
          </div>

          {/* STORY BEGINS */}
          <div className="mt-12 flex items-center gap-3">
            <span className="h-px w-10 bg-[#b28b52]/65" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#e7ae4c]">
              The Story Begins Here
            </span>
          </div>
        </motion.div>

        {/* RIGHT SIDE — PROFILE WIDGET */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 35, scale: 0.96 }
          }
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative mx-auto w-full max-w-[430px]"
        >
          {/* OUTER GLOW */}
          <div className="pointer-events-none absolute -inset-3 bg-[radial-gradient(ellipse,rgba(231,174,76,0.11),transparent_70%)] blur-xl" />

          {/* MAIN PROFILE CARD */}
          <div
            className="group relative overflow-hidden border border-[#b28b52]/60 bg-[#18110e] p-3 transition-all duration-300 hover:border-[#e7ae4c]"
            style={{
              boxShadow: `
                inset 0 0 35px rgba(231,174,76,0.08),
                0 18px 45px rgba(0,0,0,0.35)
              `,
            }}
          >
            {/* NEON TOP EDGE */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #4de5f5, #e7ae4c, transparent)",
                boxShadow: "0 0 15px rgba(77,229,245,0.4)",
              }}
            />

            {/* CORNER BRACKETS */}
            <div className="pointer-events-none absolute left-2 top-2 h-5 w-5 border-l border-t border-[#4de5f5]" />
            <div className="pointer-events-none absolute right-2 top-2 h-5 w-5 border-r border-t border-[#e7ae4c]" />
            <div className="pointer-events-none absolute bottom-2 left-2 h-5 w-5 border-b border-l border-[#4de5f5]" />
            <div className="pointer-events-none absolute bottom-2 right-2 h-5 w-5 border-b border-r border-[#e7ae4c]" />

            {/* BROWSER HEADER */}
            <div className="flex items-center justify-between border-b border-[#b28b52]/35 px-3 pb-3 pt-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#c45135]" />
                <span className="h-2 w-2 rounded-full bg-[#e7ae4c]" />
                <span className="h-2 w-2 rounded-full bg-[#4de5f5]" />
              </div>

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#bda88b]">
                The Main Character
              </span>
            </div>

            {/* PROFILE IMAGE FRAME */}
            <div className="relative mt-3 h-[340px] overflow-hidden border border-[#b28b52]/50 bg-[#241710] sm:h-[385px]">
              {/* BACKGROUND GRID */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.13]"
                style={{
                  backgroundImage: `
                    linear-gradient(#e7ae4c 1px, transparent 1px),
                    linear-gradient(90deg, #e7ae4c 1px, transparent 1px)
                  `,
                  backgroundSize: "25px 25px",
                }}
              />

              {/* BACKGROUND GLOW */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-[radial-gradient(ellipse_at_bottom,rgba(164,59,42,0.35),transparent_70%)]" />

              {/* CIRCULAR BACKDROP */}
              <div className="pointer-events-none absolute bottom-[-85px] left-1/2 h-[310px] w-[310px] -translate-x-1/2 rounded-full border border-[#e7ae4c]/40 bg-[#6d2d20]/55 sm:h-[345px] sm:w-[345px]" />

              {/* NEURAL NETWORK GRAPHIC */}
              <div className="pointer-events-none absolute left-0 top-14 h-32 w-56 opacity-25">
                <NeuralNetworkGraphic />
              </div>

              {/* DATA CHART */}
              <div className="pointer-events-none absolute bottom-7 right-4 opacity-30">
                <DataChartGraphic />
              </div>

              {/* BACKGROUND SYMBOLS */}
              <div className="pointer-events-none absolute left-4 top-[45%] text-[#4de5f5]/30">
                <Workflow size={35} strokeWidth={0.8} />
              </div>

              <div className="pointer-events-none absolute right-4 top-[45%] text-[#e7ae4c]/30">
                <Database size={34} strokeWidth={0.8} />
              </div>

              {/* PROFILE PHOTO */}
              <img
                src="/profile.png"
                alt="Vignesh S"
                className="absolute bottom-0 left-1/2 z-10 h-[88%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]"
              />

              {/* DATA SCIENCE BADGE */}
              <motion.div
                initial={reduceMotion ? false : { rotate: -5 }}
                whileHover={{ rotate: 0, scale: 1.04 }}
                className="absolute left-3 top-5 z-20 border border-[#4de5f5]/75 bg-[#18110e]/95 px-4 py-2 text-center shadow-[0_0_16px_rgba(77,229,245,0.15)]"
              >
                <div className="flex items-center justify-center gap-1.5">
                  <BrainCircuit size={15} className="text-[#4de5f5]" />

                  <span className="text-xl font-black text-[#e7ae4c]">
                    DS
                  </span>
                </div>

                <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#d8c5a4]">
                  Data Science
                </span>
              </motion.div>

              {/* DATA ANALYST BADGE */}
              <motion.div
                initial={reduceMotion ? false : { rotate: 5 }}
                whileHover={{ rotate: 0, scale: 1.04 }}
                className="absolute right-3 top-8 z-20 border border-[#e7ae4c]/75 bg-[#18110e]/95 px-4 py-2 text-center shadow-[0_0_16px_rgba(231,174,76,0.15)]"
              >
                <div className="flex items-center justify-center gap-1.5">
                  <BarChart3 size={15} className="text-[#e7ae4c]" />

                  <span className="text-xl font-black text-[#e7ae4c]">
                    DA
                  </span>
                </div>

                <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#d8c5a4]">
                  Data Analyst
                </span>
              </motion.div>

              {/* PHOTO FRAME CORNERS */}
              <div className="pointer-events-none absolute left-2 top-2 z-20 h-5 w-5 border-l border-t border-[#e7ae4c]/70" />
              <div className="pointer-events-none absolute right-2 top-2 z-20 h-5 w-5 border-r border-t border-[#e7ae4c]/70" />
              <div className="pointer-events-none absolute bottom-2 left-2 z-20 h-5 w-5 border-b border-l border-[#e7ae4c]/70" />
              <div className="pointer-events-none absolute bottom-2 right-2 z-20 h-5 w-5 border-b border-r border-[#e7ae4c]/70" />
            </div>

            {/* SOCIAL LINKS */}
            <div className="pb-4 pt-5 text-center">
              <div className="mb-4 inline-flex items-center gap-2 border border-[#b28b52]/40 bg-[#211710] px-4 py-1.5">
                <Sparkles size={13} className="text-[#e7ae4c]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e7ae4c]">
                  Connect With Me
                </span>
              </div>

              <div className="flex items-center justify-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.Icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={
                        social.name === "Email"
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        social.name === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b28b52]/60 bg-[#211710] transition-all duration-300 hover:-translate-y-1 hover:border-[#e7ae4c] hover:bg-[#302017] hover:shadow-[0_0_15px_rgba(231,174,76,0.18)]"
                    >
                      <Icon size={18} color={social.color} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CINEMATIC FILMSTRIP DIVIDER */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <div
          className="h-12 border-b border-[#a43b2a]/70"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(231,174,76,0.07) 4px, transparent 5px)",
          }}
        />

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
