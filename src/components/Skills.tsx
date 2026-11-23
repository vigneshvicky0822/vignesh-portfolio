
"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ComponentType } from "react";

import {
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Eye,
  Network,
  Sparkles,
  Wrench,
  Cpu,
  Activity,
  Database,
  ScanEye,
  BarChart3,
  GitBranch,
  Terminal,
  Layers3,
  Workflow,
  Target,
  Search,
} from "lucide-react";

import {
  SiPython,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
  SiPandas,
  SiNumpy,
  SiGit,
  SiRstudioide,
} from "react-icons/si";

// ============================================
// TYPES
// ============================================

type Skill = {
  name: string;
  color: string;
  Icon: ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
};

type SkillGroup = {
  number: string;
  title: string;
  subtitle: string;
  Icon: typeof Code2;
  accent: string;
  glow: string;
  skills: Skill[];
};

// ============================================
// SKILL CATEGORIES
// ============================================

const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Programming",
    subtitle: "PROGRAMMING LANGUAGES",
    Icon: Code2,
    accent: "#4de5f5",
    glow: "rgba(77,229,245,0.16)",
    skills: [
      {
        name: "Python",
        Icon: SiPython,
        color: "#FFD43B",
      },
      {
        name: "SQL",
        Icon: Database,
        color: "#48B9F2",
      },
    ],
  },
  {
    number: "02",
    title: "Machine Learning",
    subtitle: "PREDICTIVE MODELING",
    Icon: BrainCircuit,
    accent: "#f2c36b",
    glow: "rgba(242,195,107,0.14)",
    skills: [
      {
        name: "Scikit-learn",
        Icon: SiScikitlearn,
        color: "#F7931E",
      },
      {
        name: "Feature Engineering",
        Icon: Workflow,
        color: "#67D7F5",
      },
      {
        name: "Model Evaluation",
        Icon: Target,
        color: "#F2C36B",
      },
    ],
  },
  {
    number: "03",
    title: "Deep Learning",
    subtitle: "NEURAL NETWORKS",
    Icon: Network,
    accent: "#58e3f2",
    glow: "rgba(88,227,242,0.15)",
    skills: [
      {
        name: "PyTorch",
        Icon: SiPytorch,
        color: "#EE4C2C",
      },
      {
        name: "TensorFlow",
        Icon: SiTensorflow,
        color: "#FF6F00",
      },
      {
        name: "Neural Networks",
        Icon: Network,
        color: "#9A8CFF",
      },
      {
        name: "Transformers",
        Icon: SiHuggingface,
        color: "#FFD21E",
      },
    ],
  },
  {
    number: "04",
    title: "Computer Vision & NLP",
    subtitle: "INTELLIGENT SYSTEMS",
    Icon: Eye,
    accent: "#f2c36b",
    glow: "rgba(242,195,107,0.14)",
    skills: [
      {
        name: "YOLOv8",
        Icon: ScanEye,
        color: "#A78BFA",
      },
      {
        name: "CLIP",
        Icon: Layers3,
        color: "#53D9ED",
      },
      {
        name: "FAISS",
        Icon: Search,
        color: "#4FC3F7",
      },
      {
        name: "Grad-CAM",
        Icon: Activity,
        color: "#FF7777",
      },
      {
        name: "SentenceTransformers",
        Icon: SiHuggingface,
        color: "#FFD21E",
      },
    ],
  },
  {
    number: "05",
    title: "Data Analysis",
    subtitle: "DATA PROCESSING & INSIGHTS",
    Icon: ChartNoAxesCombined,
    accent: "#4de5f5",
    glow: "rgba(77,229,245,0.16)",
    skills: [
      {
        name: "Pandas",
        Icon: SiPandas,
        color: "#EAA8FF",
      },
      {
        name: "NumPy",
        Icon: SiNumpy,
        color: "#4DABCF",
      },
      {
        name: "TA-Lib",
        Icon: BarChart3,
        color: "#72E5A4",
      },
    ],
  },
  {
    number: "06",
    title: "Tools & Platforms",
    subtitle: "DEVELOPMENT & VISUALIZATION",
    Icon: Wrench,
    accent: "#f2c36b",
    glow: "rgba(242,195,107,0.14)",
    skills: [
      {
        name: "Power BI",
        Icon: BarChart3,
        color: "#F2C811",
      },
      {
        name: "Git",
        Icon: SiGit,
        color: "#F05032",
      },
      {
        name: "RStudio",
        Icon: SiRstudioide,
        color: "#75AADB",
      },
    ],
  },
];

// ============================================
// NEURAL NETWORK DECORATION
// ============================================

function NeuralDecoration() {
  const nodes = [
    [20, 60],
    [70, 22],
    [80, 100],
    [125, 48],
    [180, 18],
    [195, 90],
  ];

  return (
    <svg
      viewBox="0 0 220 120"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="#54E4EF"
        strokeWidth="0.8"
        opacity="0.45"
      >
        <path d="M20 60 70 22 125 48 180 18" />
        <path d="M20 60 80 100 125 48 195 90" />
        <path d="M70 22 80 100 180 18 195 90" />
        <path d="M125 48 195 90" />
      </g>

      {nodes.map(([cx, cy], index) => (
        <circle
          key={index}
          cx={cx}
          cy={cy}
          r={index % 2 === 0 ? 4 : 3}
          fill={
            index % 2 === 0
              ? "#4DE5F5"
              : "#F2C36B"
          }
        />
      ))}
    </svg>
  );
}

// ============================================
// TECHNICAL CARD DECORATIONS
// ============================================

function CardDecoration({
  number,
}: {
  number: string;
}) {
  if (number === "01") {
    return (
      <div className="flex items-center gap-2 opacity-70">
        <Terminal size={40} strokeWidth={1} />
        <Code2 size={28} strokeWidth={1} />
      </div>
    );
  }

  if (number === "02") {
    return (
      <div className="flex items-end gap-1 opacity-65">
        {[15, 30, 22, 43, 35, 55, 40].map(
          (height, index) => (
            <div
              key={index}
              className="w-2 border-t border-[#f2c36b] bg-[#f2c36b]/15"
              style={{ height }}
            />
          )
        )}
      </div>
    );
  }

  if (number === "03") {
    return (
      <div className="h-20 w-36 opacity-70">
        <NeuralDecoration />
      </div>
    );
  }

  if (number === "04") {
    return (
      <ScanEye
        size={76}
        strokeWidth={0.7}
        className="opacity-60"
      />
    );
  }

  if (number === "05") {
    return (
      <div className="flex items-end gap-1 opacity-70">
        {[20, 38, 29, 55, 42, 65, 50, 72].map(
          (height, index) => (
            <div
              key={index}
              className="w-2 bg-[#4de5f5]/25"
              style={{ height }}
            />
          )
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 opacity-65">
      <Cpu size={38} strokeWidth={1} />
      <GitBranch size={35} strokeWidth={1} />
    </div>
  );
}

// ============================================
// MAIN SKILLS COMPONENT
// ============================================

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#15100d] px-6 pb-44 pt-24 text-[#f5e8cc] sm:pb-48 sm:pt-32"
    >
      {/* CINEMATIC BACKGROUND LIGHTING */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse at 15% 20%,
              rgba(177,73,34,0.12),
              transparent 45%
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

      {/* SUBTLE GOLD GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
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

      {/* VINTAGE SCANLINES */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #f5e8cc 0px, #f5e8cc 1px, transparent 1px, transparent 5px)",
        }}
      />

      {/* BACKGROUND CHAPTER NUMBER */}
      <div
        className="pointer-events-none absolute -right-8 top-8 select-none text-[180px] font-black leading-none text-[#e7ae4c]/[0.035] sm:text-[320px]"
        style={{
          fontFamily:
            "Impact, 'Arial Black', sans-serif",
        }}
      >
        03
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-[#c45135]" />

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#e7ae4c]">
            Chapter 03 — The Arsenal
          </span>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-5xl font-black uppercase leading-none tracking-tight sm:text-7xl"
            style={{
              fontFamily:
                "Impact, 'Arial Black', sans-serif",
            }}
          >
            TECHNICAL
            <span className="block text-[#e7ae4c]">
              EXPERTISE.
            </span>
          </h2>

          <p
            className="mt-5 max-w-2xl text-[18px] leading-9 tracking-[0.02em] text-[#bda88b]"
            style={{
              fontFamily:
                "'Courier New', Courier, monospace",
            }}
          >
            Technologies and frameworks I use to
            analyze data, develop intelligent models,
            and build practical solutions.
          </p>
        </motion.div>

        {/* SIX SKILL CARDS */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.Icon;

            return (
              <motion.div
                key={group.number}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 30 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className="group relative flex min-h-[255px] flex-col overflow-hidden border border-[#b28b52]/45 bg-[#18110e] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#e7ae4c]/70 sm:p-7"
                style={{
                  boxShadow: `
                    inset 0 0 35px ${group.glow},
                    0 8px 25px rgba(0,0,0,0.25)
                  `,
                }}
              >
                {/* NEON TOP EDGE */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-80"
                  style={{
                    background: `linear-gradient(
                      90deg,
                      transparent,
                      ${group.accent},
                      transparent
                    )`,
                    boxShadow:
                      `0 0 15px ${group.accent}`,
                  }}
                />

                {/* DECORATIVE CORNERS */}
                <div
                  className="pointer-events-none absolute left-2 top-2 h-5 w-5 border-l border-t"
                  style={{
                    borderColor: group.accent,
                  }}
                />

                <div
                  className="pointer-events-none absolute right-2 top-2 h-5 w-5 border-r border-t"
                  style={{
                    borderColor: group.accent,
                  }}
                />

                <div
                  className="pointer-events-none absolute bottom-2 left-2 h-5 w-5 border-b border-l"
                  style={{
                    borderColor: group.accent,
                  }}
                />

                <div
                  className="pointer-events-none absolute bottom-2 right-2 h-5 w-5 border-b border-r"
                  style={{
                    borderColor: group.accent,
                  }}
                />

                {/* TECHNICAL BACKGROUND DECORATION */}
                <div
                  className="pointer-events-none absolute right-7 top-20 opacity-30"
                  style={{
                    color: group.accent,
                  }}
                >
                  <CardDecoration
                    number={group.number}
                  />
                </div>

                {/* CARD HEADER */}
                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    {/* CATEGORY ICON */}
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center border bg-white/[0.04]"
                      style={{
                        borderColor:
                          `${group.accent}80`,
                        color: group.accent,
                        boxShadow:
                          `0 0 16px ${group.glow}`,
                      }}
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.7}
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#bda88b]">
                        {group.subtitle}
                      </p>

                      <h3 className="text-lg font-bold leading-snug text-[#f5e8cc] sm:text-xl">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  {/* CATEGORY NUMBER */}
                  <span
                    className="shrink-0 text-4xl font-black"
                    style={{
                      color: group.accent,
                      opacity: 0.65,
                      fontFamily:
                        "Impact, 'Arial Black', sans-serif",
                      textShadow:
                        `0 0 18px ${group.glow}`,
                    }}
                  >
                    {group.number}
                  </span>
                </div>

                {/* COLORFUL TECHNOLOGY BADGES */}
                <div className="relative z-10 mt-9 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.Icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 rounded-full border border-[#b28b52]/45 bg-[#211710] px-3 py-2 text-xs font-semibold text-[#f5e8cc] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e7ae4c] hover:bg-[#302017]"
                      >
                        <SkillIcon
                          size={16}
                          color={skill.color}
                          className="shrink-0"
                        />

                        <span>
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CARD FOOTER */}
                <div className="relative z-10 mt-auto flex items-center justify-between border-t border-[#b28b52]/30 pt-4">
                  <span
                    className="text-[10px] uppercase tracking-[0.18em] text-[#bda88b]"
                    style={{
                      fontFamily:
                        "'Courier New', monospace",
                    }}
                  >
                    Skill Set // {group.number}
                  </span>

                  <ArrowUpRight
                    size={18}
                    style={{
                      color: group.accent,
                    }}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM MOTTO */}
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
          className="mt-14 flex flex-wrap items-center justify-center gap-3"
        >
          <Sparkles
            size={18}
            className="text-[#e7ae4c]"
          />

          <span className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#bda88b]">
            Learn. Experiment. Build. Repeat.
          </span>

          <Sparkles
            size={18}
            className="text-[#e7ae4c]"
          />
        </motion.div>

        {/* CHAPTER ENDING */}
        <div className="mt-20 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#b28b52]/30" />

          <span className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[#a99376]">
            The Journey Continues
          </span>

          <div className="h-px flex-1 bg-[#b28b52]/30" />
        </div>
      </div>

      {/* CINEMATIC FILMSTRIP DIVIDER */}
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
