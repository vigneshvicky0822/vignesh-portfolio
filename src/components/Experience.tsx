
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  Cpu,
  Download,
  MapPin,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import {
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import type { ComponentType } from "react";

// ============================================
// TYPES
// ============================================

type TechIcon = ComponentType<{
  size?: number;
  color?: string;
  className?: string;
}>;

type Skill = {
  name: string;
  color: string;
  Icon?: TechIcon;
};

type ExperienceItem = {
  id: string;
  number: string;
  role: string;
  company: string;
  period: string;
  location: string;
  mode: string;
  department: string;
  status: string;
  accent: string;
  logo: string;
  initials: string;
  description: string;
  highlights: string[];
  details: string[];
  skills: Skill[];
  website: string;
  certified?: boolean;
};

const GOLD = "#e7ae4c";
const CYAN = "#4de5f5";

// ============================================
// CERTIFICATE FILE
// ============================================

// Your certificate is a JPEG image.
// Place it inside public/certificates/
const CERTIFICATE_PATH = "/certificates/captiv-certificate.jpeg";

const CERTIFICATE_DOWNLOAD_NAME =
  "Vignesh_S_Captiv_Internship_Certificate.jpeg";

// ============================================
// EXPERIENCE DATA
// ============================================

const experiences: ExperienceItem[] = [
  {
    id: "qplugins",
    number: "01",
    role: "AI ENGINEER INTERN",
    company: "QPlugins Technologies Private Limited",
    period: "NOV 2026 — JAN 2027",
    location: "Tamil Nadu, India",
    mode: "Remote",
    department: "Software Development & AI",
    status: "Offer Accepted",
    accent: CYAN,
    logo: "/qplugins-logo.jpg",
    initials: "QP",

    description:
      "Selected for a three-month remote AI Engineer internship in the Software Development & AI department, focusing on Python, Machine Learning, Deep Learning, and AI application development.",

    highlights: [
      "AI Application Development",
      "Machine Learning & Deep Learning",
      "Software Engineering",
      "Remote Collaboration",
    ],

    details: [
      "Selected for the AI Engineer Intern position with a scheduled joining date of 2 November 2026.",
      "Accepted the internship offer and submitted the requested onboarding documents.",
      "The role covers Python programming, Machine Learning, Deep Learning, and AI software development.",
      "Specific assigned projects and technical contributions will be added when confirmed.",
    ],

    skills: [
      {
        name: "Python",
        color: "#3776AB",
        Icon: SiPython,
      },
      {
        name: "Machine Learning",
        color: "#F7931E",
        Icon: SiScikitlearn,
      },
      {
        name: "Deep Learning",
        color: "#EE4C2C",
        Icon: SiPytorch,
      },
      {
        name: "AI Development",
        color: CYAN,
      },
    ],

    website: "https://www.qplugins.com",
  },

  {
    id: "captiv",
    number: "02",
    role: "AI INTERN",
    company: "Captiv Techno Solutions",
    period: "DEC 2025 — APR 2026",
    location: "Chennai, Tamil Nadu, India",
    mode: "Internship",
    department: "Artificial Intelligence & Machine Learning",
    status: "Completed & Certified",
    accent: GOLD,
    logo: "/captiv-logo.jpg",
    initials: "CT",
    certified: true,

    description:
      "Completed a certified AI internship focused on financial market prediction research, exploring Transformer-based sequence modeling and LightGBM for predictive analytics and market signal classification.",

    highlights: [
      "Financial Market Prediction",
      "Transformer-Based Modeling",
      "LightGBM Meta-Labeling",
      "Feature Engineering & Evaluation",
    ],

    details: [
      "Worked on financial time-series research and predictive Machine Learning.",
      "Explored Transformer-based models for identifying temporal patterns in market data.",
      "Used LightGBM in a predictive modeling and signal-filtering workflow.",
      "Performed feature engineering, data preparation, and model evaluation.",
      "Successfully completed the internship and received certification.",
    ],

    skills: [
      {
        name: "Python",
        color: "#3776AB",
        Icon: SiPython,
      },
      {
        name: "Transformers",
        color: "#FFD21E",
      },
      {
        name: "LightGBM",
        color: GOLD,
      },
      {
        name: "Pandas",
        color: "#78B5E3",
        Icon: SiPandas,
      },
      {
        name: "NumPy",
        color: "#4DABCF",
        Icon: SiNumpy,
      },
    ],

    website: "https://captivtech.com/",
  },
];

// ============================================
// ROUND COMPANY LOGO
// ============================================

function CompanyLogo({
  src,
  initials,
  company,
  accent,
  large = false,
}: {
  src: string;
  initials: string;
  company: string;
  accent: string;
  large?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border-[3px] bg-white ${
        large
          ? "h-24 w-24 sm:h-28 sm:w-28"
          : "h-16 w-16"
      }`}
      style={{
        borderColor: accent,
        boxShadow: `
          0 0 12px ${accent}55,
          0 0 28px ${accent}25
        `,
      }}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${company} logo`}
          className="h-full w-full rounded-full object-contain p-2"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className="text-xl font-black text-[#211710]"
          style={{
            fontFamily: "Impact, Arial Black, sans-serif",
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}

// ============================================
// TECHNOLOGY BADGE
// ============================================

function SkillBadge({
  skill,
}: {
  skill: Skill;
}) {
  const Icon = skill.Icon;

  return (
    <span className="inline-flex items-center gap-2 border border-[#b28b52]/30 bg-[#211710] px-3 py-2 text-[10px] font-bold text-[#d8c5a4] transition-colors hover:border-[#e7ae4c]/60">
      {Icon ? (
        <Icon
          size={15}
          color={skill.color}
        />
      ) : (
        <span
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: skill.color,
            boxShadow: `0 0 8px ${skill.color}55`,
          }}
        />
      )}

      {skill.name}
    </span>
  );
}

// ============================================
// ANIMATED NEURAL NETWORK
// ============================================

function NetworkArtwork({
  accent,
}: {
  accent: string;
}) {
  const reduceMotion = useReducedMotion();

  const nodes = [
    [30, 80],
    [30, 150],
    [30, 220],
    [120, 50],
    [120, 115],
    [120, 185],
    [120, 250],
    [215, 85],
    [215, 150],
    [215, 215],
    [305, 115],
    [305, 185],
    [390, 150],
  ];

  const layers = [
    [0, 1, 2],
    [3, 4, 5, 6],
    [7, 8, 9],
    [10, 11],
    [12],
  ];

  const edges: [number, number][] = [];

  for (let i = 0; i < layers.length - 1; i++) {
    for (const a of layers[i]) {
      for (const b of layers[i + 1]) {
        edges.push([a, b]);
      }
    }
  }

  const gradientId =
    `network-${accent.replace("#", "")}`;

  return (
    <svg
      viewBox="0 0 420 300"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={gradientId}>
          <stop
            offset="0%"
            stopColor={accent}
            stopOpacity="0.2"
          />
          <stop
            offset="100%"
            stopColor={accent}
            stopOpacity="0"
          />
        </radialGradient>
      </defs>

      <rect
        width="420"
        height="300"
        fill={`url(#${gradientId})`}
      />

      <g
        stroke={accent}
        strokeOpacity="0.1"
      >
        {Array.from(
          { length: 9 },
          (_, i) => (
            <path
              key={`v-${i}`}
              d={`M${i * 52} 0V300`}
            />
          )
        )}

        {Array.from(
          { length: 7 },
          (_, i) => (
            <path
              key={`h-${i}`}
              d={`M0 ${i * 50}H420`}
            />
          )
        )}
      </g>

      {edges.map(([a, b], index) => (
        <motion.line
          key={`${a}-${b}`}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke={accent}
          strokeWidth="1"
          animate={{
            opacity: reduceMotion
              ? 0.25
              : [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 3,
            delay: index * 0.035,
            repeat: reduceMotion
              ? 0
              : Infinity,
          }}
        />
      ))}

      {nodes.map(([cx, cy], index) => (
        <g key={index}>
          <circle
            cx={cx}
            cy={cy}
            r="11"
            fill={accent}
            fillOpacity="0.08"
          />

          <motion.circle
            cx={cx}
            cy={cy}
            r="4"
            fill={
              index % 3 === 0
                ? GOLD
                : CYAN
            }
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [
                      0.45,
                      1,
                      0.45,
                    ],
                    r: [
                      4,
                      5.5,
                      4,
                    ],
                  }
            }
            transition={{
              duration: 2.5,
              delay: index * 0.15,
              repeat: Infinity,
            }}
          />
        </g>
      ))}

      <rect
        x="12"
        y="15"
        width="396"
        height="270"
        stroke={accent}
        strokeOpacity="0.2"
        strokeDasharray="5 7"
      />

      <path
        d="M12 35V15h20M388 15h20v20M12 265v20h20M388 285h20v-20"
        stroke={accent}
        strokeWidth="2"
      />

      <text
        x="210"
        y="291"
        textAnchor="middle"
        fill={accent}
        fontFamily="monospace"
        fontSize="9"
        letterSpacing="2"
      >
        AI / MACHINE LEARNING
      </text>
    </svg>
  );
}

// ============================================
// CERTIFICATE POPUP
// SAME PAGE - NO NAVIGATION
// ============================================

function CertificatePopup({
  onClose,
}: {
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const oldOverflow =
      document.body.style.overflow;

    const previousFocus =
      document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";

    closeRef.current?.focus();

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (
        event.key === "Tab" &&
        modalRef.current
      ) {
        const focusable = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
          )
        );

        if (focusable.length === 0) {
          return;
        }

        const first = focusable[0];
        const last =
          focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        oldOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.2,
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="captiv-certificate-title"
        initial={
          reduceMotion
            ? false
            : {
                scale: 0.94,
                opacity: 0,
                y: 20,
              }
        }
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        exit={{
          scale: 0.94,
          opacity: 0,
          y: 20,
        }}
        transition={{
          duration: reduceMotion
            ? 0
            : 0.25,
        }}
        className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden border border-[#e7ae4c] bg-[#18110e] shadow-[0_0_55px_rgba(231,174,76,0.2)]"
      >
        {/* GOLD TOP LINE */}
        <div className="h-[2px] shrink-0 bg-gradient-to-r from-transparent via-[#e7ae4c] to-transparent" />

        {/* POPUP HEADER */}
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#e7ae4c]/30 bg-[#211710] px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="hidden h-10 w-10 shrink-0 items-center justify-center border border-[#e7ae4c]/50 bg-[#2b2014] sm:flex">
              <Award
                size={20}
                className="text-[#e7ae4c]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#4de5f5]">
                Certificate Preview
              </p>

              <h3
                id="captiv-certificate-title"
                className="mt-1 truncate text-sm font-bold text-[#f5e8cc] sm:text-base"
              >
                AI Internship Certificate
              </h3>

              <p className="mt-1 truncate text-[10px] text-[#bda88b]">
                Captiv Techno Solutions
              </p>
            </div>
          </div>

          {/* DOWNLOAD + CLOSE */}
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={CERTIFICATE_PATH}
              download={
                CERTIFICATE_DOWNLOAD_NAME
              }
              title="Download Certificate"
              aria-label="Download Captiv Internship Certificate"
              className="flex h-9 w-9 items-center justify-center border border-[#4de5f5]/70 bg-[#183036] text-[#4de5f5] transition-all hover:border-[#4de5f5] hover:bg-[#24505a] hover:shadow-[0_0_16px_rgba(77,229,245,0.25)] sm:h-10 sm:w-10"
            >
              <Download size={18} />
            </a>

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              title="Close Certificate"
              aria-label="Close Certificate"
              className="flex h-9 w-9 items-center justify-center border border-[#e7ae4c]/60 bg-[#2b2014] text-[#e7ae4c] transition-colors hover:bg-[#a43b2a] hover:text-white sm:h-10 sm:w-10"
            >
              <X size={19} />
            </button>
          </div>
        </div>

        {/* FULL JPEG CERTIFICATE */}
        <div className="min-h-0 flex-1 overflow-auto bg-[#100d0b] p-3 sm:p-5">
          <div className="flex min-h-full items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CERTIFICATE_PATH}
              alt="Captiv Techno Solutions AI Internship Certificate"
              className="max-h-[75vh] max-w-full object-contain shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>

        {/* POPUP FOOTER */}
        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-[#e7ae4c]/25 bg-[#211710] px-4 py-3 sm:px-6">
          <span className="inline-flex items-center gap-2 text-[10px] text-[#c5b39a]">
            <CheckCircle2
              size={15}
              className="text-[#e7ae4c]"
            />
            Internship Completed
          </span>

          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#4de5f5]">
            JPEG Certificate
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// EXPERIENCE CARD
// ============================================

function ExperienceCard({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) {
  const [expanded, setExpanded] =
    useState(false);

  const [showCertificate, setShowCertificate] =
    useState(false);

  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 35,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
      }}
      className="relative"
    >
      {/* TIMELINE NODE */}
      <div className="absolute -left-[54px] top-12 z-20 hidden lg:flex">
        <div
          className="relative flex h-11 w-11 items-center justify-center border bg-[#211710]"
          style={{
            borderColor: experience.accent,
            boxShadow: `0 0 18px ${experience.accent}25`,
          }}
        >
          <BriefcaseBusiness
            size={19}
            style={{
              color: experience.accent,
            }}
          />

          <span
            className="absolute -inset-2 border opacity-20"
            style={{
              borderColor: experience.accent,
            }}
          />
        </div>
      </div>

      {/* EXPERIENCE CARD */}
      <div className="group relative overflow-hidden border border-[#b28b52]/45 bg-[#18110e] transition-colors hover:border-[#e7ae4c]/75">
        {/* TOP ACCENT */}
        <div
          className="absolute inset-x-0 top-0 z-10 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${experience.accent}, transparent)`,
          }}
        />

        {/* CINEMATIC CORNERS */}
        <div className="pointer-events-none absolute left-2 top-2 z-10 h-5 w-5 border-l border-t border-[#4de5f5]" />
        <div className="pointer-events-none absolute right-2 top-2 z-10 h-5 w-5 border-r border-t border-[#e7ae4c]" />
        <div className="pointer-events-none absolute bottom-2 left-2 z-10 h-5 w-5 border-b border-l border-[#4de5f5]" />
        <div className="pointer-events-none absolute bottom-2 right-2 z-10 h-5 w-5 border-b border-r border-[#e7ae4c]" />

        <div className="grid lg:grid-cols-[1fr_270px]">
          {/* LEFT CONTENT */}
          <div className="p-6 sm:p-8">
            {/* DATE + STATUS */}
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em]"
                  style={{
                    color: experience.accent,
                  }}
                >
                  <CalendarDays size={14} />
                  {experience.period}
                </span>

                <span
                  className="inline-flex items-center gap-2 border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em]"
                  style={{
                    color: experience.accent,
                    borderColor: `${experience.accent}65`,
                    backgroundColor: `${experience.accent}12`,
                  }}
                >
                  {experience.certified ? (
                    <Award size={13} />
                  ) : (
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor:
                          experience.accent,
                      }}
                    />
                  )}

                  {experience.status}
                </span>
              </div>

              {/* MOBILE ROUND LOGO */}
              <div className="lg:hidden">
                <CompanyLogo
                  src={experience.logo}
                  initials={experience.initials}
                  company={experience.company}
                  accent={experience.accent}
                />
              </div>
            </div>

            {/* JOB TITLE */}
            <h3
              className="mt-6 text-[35px] font-black uppercase leading-[1.05] text-[#f5e8cc] sm:text-[46px]"
              style={{
                fontFamily:
                  "Impact, 'Arial Black', sans-serif",
              }}
            >
              {experience.role}
            </h3>

            {/* COMPANY NAME */}
            <p
              className="mt-3 text-sm font-bold"
              style={{
                color: experience.accent,
              }}
            >
              {experience.company}
            </p>

            {/* LOCATION + MODE */}
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-[#bda88b]">
              <span className="inline-flex items-center gap-2">
                <MapPin
                  size={14}
                  className="text-[#e7ae4c]"
                />
                {experience.location}
              </span>

              <span className="inline-flex items-center gap-2">
                <Workflow
                  size={14}
                  className="text-[#4de5f5]"
                />
                {experience.mode}
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-2xl text-[13px] leading-8 text-[#c5b39a]">
              {experience.description}
            </p>

            {/* ==================================
                CLICKABLE CERTIFICATION BADGE
                ONLY FOR CAPTIV
               ================================== */}

            {experience.certified && (
              <button
                type="button"
                onClick={() =>
                  setShowCertificate(true)
                }
                aria-label="View Captiv AI Internship Certificate"
                className="group/cert mt-5 inline-flex items-center gap-3 border border-[#e7ae4c]/45 bg-[#2b2014] px-4 py-3 text-left transition-all duration-300 hover:border-[#e7ae4c] hover:bg-[#3b2a17] hover:shadow-[0_0_20px_rgba(231,174,76,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4de5f5]"
              >
                <Award
                  size={19}
                  className="shrink-0 text-[#e7ae4c]"
                />

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#e7ae4c]">
                    Internship Certified
                  </p>

                  <p className="mt-1 text-[10px] text-[#c5b39a]">
                    Click to view certificate
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="ml-2 shrink-0 text-[#4de5f5] transition-transform group-hover/cert:-translate-y-0.5 group-hover/cert:translate-x-0.5"
                />
              </button>
            )}

            {/* FOCUS AREAS */}
            <div className="mt-7">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e7ae4c]">
                Key Focus Areas
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {experience.highlights.map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 border border-[#b28b52]/20 bg-[#211710]/80 px-3 py-3"
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0"
                        style={{
                          color:
                            experience.accent,
                        }}
                      />

                      <span className="text-[11px] leading-5 text-[#d8c5a4]">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* TECHNOLOGY STACK */}
            <div className="mt-7">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e7ae4c]">
                Technology Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {experience.skills.map(
                  (skill) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill}
                    />
                  )
                )}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#b28b52]/25 pt-6">
              <button
                type="button"
                onClick={() =>
                  setExpanded((value) => !value)
                }
                aria-expanded={expanded}
                aria-controls={`experience-details-${experience.id}`}
                className="inline-flex items-center gap-3 border border-[#e7ae4c]/70 bg-[#a43b2a] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#c45135]"
              >
                {expanded
                  ? "Hide Details"
                  : "Explore Experience"}

                {expanded ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#4de5f5]/60 bg-[#211710] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4de5f5] transition-colors hover:bg-[#183036]"
              >
                Company Website
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL PANEL */}
          <div className="relative hidden min-h-[440px] overflow-hidden border-l border-[#b28b52]/25 bg-[#211710] lg:flex lg:flex-col">
            {/* ROUND COMPANY LOGO */}
            <div className="relative z-10 mx-auto mt-9">
              <CompanyLogo
                src={experience.logo}
                initials={experience.initials}
                company={experience.company}
                accent={experience.accent}
                large
              />
            </div>

            {/* ANIMATED GRAPHIC */}
            <div className="absolute inset-x-0 bottom-16 top-20">
              <NetworkArtwork
                accent={experience.accent}
              />
            </div>

            {/* PANEL FOOTER */}
            <div className="relative z-10 mt-auto border-t border-[#b28b52]/25 bg-[#18110e]/95 p-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#a99376]">
                  Experience File
                </span>

                <span
                  className="text-[28px] font-black"
                  style={{
                    fontFamily:
                      "Impact, 'Arial Black', sans-serif",
                    color:
                      experience.accent,
                  }}
                >
                  {experience.number}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <Cpu
                  size={15}
                  className="shrink-0 text-[#4de5f5]"
                />

                <span className="text-[10px] uppercase leading-5 tracking-[0.1em] text-[#d8c5a4]">
                  {experience.department}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* EXPANDABLE DETAILS */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={`experience-details-${experience.id}`}
              initial={
                reduceMotion
                  ? false
                  : {
                      height: 0,
                      opacity: 0,
                    }
              }
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: reduceMotion
                  ? 0
                  : 0.3,
              }}
              className="overflow-hidden"
            >
              <div className="border-t border-[#b28b52]/35 bg-[#1d1510] px-6 py-7 sm:px-8">
                <div className="mb-6 flex items-center gap-3">
                  <Code2
                    size={18}
                    style={{
                      color:
                        experience.accent,
                    }}
                  />

                  <h4 className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#e7ae4c]">
                    Experience Breakdown
                  </h4>
                </div>

                <div className="space-y-4">
                  {experience.details.map(
                    (detail, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4"
                      >
                        <span
                          className="mt-1 text-[10px] font-bold"
                          style={{
                            color:
                              experience.accent,
                          }}
                        >
                          {String(
                            i + 1
                          ).padStart(2, "0")}
                        </span>

                        <p className="text-[12px] leading-7 text-[#c5b39a]">
                          {detail}
                        </p>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-7 flex items-center gap-3 border-t border-[#b28b52]/25 pt-5">
                  <BriefcaseBusiness
                    size={15}
                    className="text-[#4de5f5]"
                  />

                  <span className="text-[10px] uppercase tracking-[0.12em] text-[#a99376]">
                    {experience.department}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ==================================
          PORTAL POPUP
          RENDERED OUTSIDE EXPERIENCE CARD
          SO IT CANNOT BE CLIPPED
         ================================== */}

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {showCertificate && (
              <CertificatePopup
                onClose={() =>
                  setShowCertificate(false)
                }
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </motion.article>
  );
}

// ============================================
// MAIN EXPERIENCE SECTION
// ============================================

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#15100d] px-6 pb-44 pt-28 text-[#f5e8cc] sm:pb-48 sm:pt-32"
    >
      {/* CINEMATIC BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse at 10% 20%,
              rgba(177,73,34,0.12),
              transparent 45%
            ),
            radial-gradient(
              ellipse at 90% 75%,
              rgba(231,174,76,0.08),
              transparent 45%
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

      {/* SCANLINES */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#f5e8cc 0px,#f5e8cc 1px,transparent 1px,transparent 5px)",
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
        className="pointer-events-none absolute -right-10 top-10 select-none text-[200px] font-black leading-none text-[#e7ae4c]/[0.025] sm:text-[320px]"
        style={{
          fontFamily:
            "Impact, 'Arial Black', sans-serif",
        }}
      >
        05
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
        >
          <div className="mb-7 inline-flex items-center gap-3 border border-[#b28b52]/45 bg-[#211710] px-4 py-2">
            <Sparkles
              size={14}
              className="text-[#e7ae4c]"
            />

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e7ae4c]">
              Chapter 05 — Professional Journey
            </span>
          </div>

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-[#a43b2a]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c45135]">
              Experience & Growth
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2
              className="text-[58px] font-black uppercase leading-[0.95] tracking-tight sm:text-[85px] lg:text-[105px]"
              style={{
                fontFamily:
                  "Impact, 'Arial Black', sans-serif",
              }}
            >
              THE{" "}
              <span className="text-[#e7ae4c]">
                JOURNEY.
              </span>
            </h2>

            <div className="flex items-center gap-3 border border-[#b28b52]/40 bg-[#211710] px-5 py-3">
              <BriefcaseBusiness
                size={18}
                className="text-[#4de5f5]"
              />

              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#d8c5a4]">
                02 Internships
              </span>
            </div>
          </div>

          <p className="mt-7 max-w-3xl text-[14px] leading-8 text-[#c5b39a]">
            From academic research to professional AI
            development, my journey reflects continuous
            learning, hands-on experimentation, and
            practical applications of Machine Learning
            and Data Science.
          </p>
        </motion.div>

        {/* EXPERIENCE TIMELINE */}
        <div className="relative mt-16 lg:ml-12 lg:pl-16">
          <div className="pointer-events-none absolute bottom-8 left-[29px] top-0 hidden w-px bg-[#e7ae4c]/25 lg:block">
            <motion.div
              initial={{
                height: reduceMotion
                  ? "100%"
                  : "0%",
              }}
              whileInView={{
                height: "100%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.4,
                ease: "easeOut",
              }}
              className="w-full bg-gradient-to-b from-[#4de5f5] via-[#e7ae4c] to-[#a43b2a]"
            />
          </div>

          <div className="space-y-10">
            {experiences.map(
              (experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              )
            )}
          </div>
        </div>

        {/* CLOSING MESSAGE */}
        <div className="mt-20 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#b28b52]/60" />

            <Award
              size={19}
              className="text-[#4de5f5]"
            />

            <span className="h-px w-12 bg-[#b28b52]/60" />
          </div>

          <p
            className="text-2xl font-black uppercase tracking-[0.1em] text-[#e7ae4c]"
            style={{
              fontFamily:
                "Impact, 'Arial Black', sans-serif",
            }}
          >
            Every Experience Builds The Story.
          </p>

          <p className="text-xs uppercase tracking-[0.17em] text-[#a99376]">
            Learning. Building. Evolving.
          </p>
        </div>
      </div>

      {/* FILMSTRIP DIVIDER */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <div
          className="h-12 border-b border-[#a43b2a]/70"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent 0px,transparent 3px,rgba(231,174,76,0.07) 4px,transparent 5px)",
          }}
        />

        <div className="relative h-5 border-y border-[#a43b2a] bg-[#211710]">
          <div
            className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg,#e7ae4c 0px,#e7ae4c 10px,transparent 10px,transparent 38px)",
              opacity: 0.8,
            }}
          />
        </div>

        <div className="h-10 border-t border-[#a43b2a]/70" />
      </div>
    </section>
  );
}
