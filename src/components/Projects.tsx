
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileCode2,
  Layers3,
  LockKeyhole,
  ScanEye,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Trophy,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  SiPython,
  SiHuggingface,
  SiTelegram,
  SiPandas,
  SiNumpy,
  SiReact,
  SiFlask,
  SiTailwindcss,
} from "react-icons/si";
import type { ComponentType } from "react";

type TechIcon = ComponentType<{
  size?: number;
  color?: string;
  className?: string;
}>;

type Technology = {
  name: string;
  color: string;
  Icon?: TechIcon;
};

type ProjectKind =
  | "smartcart"
  | "fracture"
  | "telegram"
  | "finance"
  | "unvibe"
  | "superrr";

type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  kind: ProjectKind;
  accent: string;
  description: string;
  technologies: Technology[];
  highlights: string[];
  problem: string;
  approach: string;
  implementation: string[];
  outcome: string;
  limitation?: string;
  github?: string;
  demo?: string;
  hackathon?: boolean;
};

const GOLD = "#e7ae4c";
const CYAN = "#4de5f5";
const CREAM = "#f5e8cc";

const projects: Project[] = [
  {
    id: "smart-cart",
    number: "01",
    title: "SMART CART SYSTEM",
    subtitle: "Retail Product Recognition Research",
    category: "COMPUTER VISION",
    kind: "smartcart",
    accent: GOLD,
    description:
      "A comparative study of computer vision methods for recognizing retail products without requiring store-specific barcodes or repeated model retraining.",
    technologies: [
      { name: "Python", color: "#3776AB", Icon: SiPython },
      { name: "YOLOv8", color: GOLD },
      { name: "CLIP-ViT", color: CYAN },
      { name: "FAISS", color: GOLD },
      { name: "EasyOCR", color: CYAN },
      { name: "Qwen2-VL", color: "#FFD21E" },
    ],
    highlights: [
      "5 recognition approaches",
      "7,327 retail images",
      "Speed and accuracy comparison",
    ],
    problem:
      "Retail products often share similar shapes and packaging. Traditional object detection may identify the product category but struggle to distinguish variants such as different flavors or sizes.",
    approach:
      "Compared spatial detection, optical character recognition, zero-shot vision matching, vector retrieval, and vision-language models using a retail image dataset.",
    implementation: [
      "Evaluated YOLOv8n as a fast object-detection baseline.",
      "Tested EasyOCR for reading product packaging.",
      "Used CLIP-ViT embeddings for visual product matching.",
      "Used FAISS for vector similarity retrieval.",
      "Compared generative visual interpretation using Qwen2-VL.",
      "Studied latency, recognition quality, and robustness to image noise.",
    ],
    outcome:
      "The study identified a speed-versus-accuracy tradeoff: YOLOv8n was fast but struggled with similar product variants, while Qwen2-VL provided stronger recognition at much higher latency. The findings supported investigating hybrid recognition pipelines.",
    limitation:
      "This was a comparative feasibility study rather than a commercially deployed smart-cart system.",
    github: "",
  },
  {
    id: "fracture",
    number: "02",
    title: "FRACTURE TREATMENT PREDICTION",
    subtitle: "Synthetic X-Ray Analytics",
    category: "HEALTHCARE AI",
    kind: "fracture",
    accent: CYAN,
    description:
      "A machine learning-based diagnostic simulator that generates synthetic fracture images, measures fracture size, and predicts treatment categories using logistic regression.",
    technologies: [
      { name: "Python", color: "#3776AB", Icon: SiPython },
      { name: "Logistic Regression", color: GOLD },
      { name: "Synthetic Imaging", color: CYAN },
      { name: "Data Analytics", color: GOLD },
      { name: "Classification", color: CYAN },
    ],
    highlights: [
      "Synthetic X-ray simulation",
      "3 treatment categories",
      "Fracture-size analytics",
    ],
    problem:
      "Fracture treatment assessment involves interpreting image findings and evaluating fracture characteristics. A controlled simulation can help explore how measurable fracture features relate to treatment categories.",
    approach:
      "Generated anatomically inspired grayscale images with simulated fractures, calculated fracture area, and trained a logistic regression model using fracture-size features.",
    implementation: [
      "Created synthetic bone and fracture image representations.",
      "Measured simulated fracture areas.",
      "Prepared structured fracture-size data for model training.",
      "Built a logistic regression treatment classifier.",
      "Predicted Conservative Treatment, Intramedullary Nailing, or ORIF.",
      "Visualized sample cases and classification results.",
    ],
    outcome:
      "Built a complete synthetic-image classification workflow, from image generation and fracture measurement to treatment-category prediction. The project report states 96.7% accuracy for its simulated evaluation.",
    limitation:
      "The system uses synthetic data and is a research simulator, not a clinically validated medical decision tool.",
    github:
      "https://github.com/vigneshvicky0822/fracture-treatment-prediction",
  },
  {
    id: "telegram",
    number: "03",
    title: "TELEGRAM PIRACY DETECTION",
    subtitle: "AI-Powered Content Moderation",
    category: "NATURAL LANGUAGE PROCESSING",
    kind: "telegram",
    accent: CYAN,
    description:
      "An automated Telegram moderation bot combining transformer-based semantic similarity with rule-based checks to detect suspicious movie-sharing messages.",
    technologies: [
      { name: "Python", color: "#3776AB", Icon: SiPython },
      { name: "MPNet", color: "#FFD21E", Icon: SiHuggingface },
      { name: "Telegram API", color: "#26A5E4", Icon: SiTelegram },
      { name: "TMDb API", color: GOLD },
      { name: "NLP", color: CYAN },
      { name: "CSV Logging", color: GOLD },
    ],
    highlights: [
      "Hybrid semantic detection",
      "Automated message moderation",
      "Detection logs and analysis",
    ],
    problem:
      "Piracy-related messages can contain altered movie titles, unusual filename patterns, release-group labels, and obfuscated text that bypass simple keyword filtering.",
    approach:
      "Combined rule-based filename and text-pattern checks with all-mpnet-base-v2 sentence embeddings to compare suspicious messages against movie titles obtained through TMDb.",
    implementation: [
      "Integrated Telegram bot message handling.",
      "Collected movie-title reference information through TMDb.",
      "Used MPNet embeddings for semantic similarity comparisons.",
      "Detected suspicious file extensions and release-group patterns.",
      "Implemented automated moderation actions and warnings.",
      "Recorded timestamps, matched titles, similarity scores, and detection signals.",
      "Analyzed detection behavior using logged data and visualizations.",
    ],
    outcome:
      "Developed a hybrid moderation workflow that combines semantic matching and explicit piracy indicators, helping detect messages that may not match exact movie-title keywords.",
    limitation:
      "Semantic thresholds and rule patterns require careful tuning to reduce false positives. The system is designed for authorized moderation of channels where the bot has appropriate permissions.",
    github:
      "https://github.com/vigneshvicky0822/telegram-piracy-file-detection",
  },
  {
    id: "finance",
    number: "04",
    title: "FINANCIAL MARKET PREDICTION",
    subtitle: "Transformer-Based Meta-Labeling",
    category: "PREDICTIVE ANALYTICS",
    kind: "finance",
    accent: GOLD,
    description:
      "A two-stage market prediction research framework combining Transformer sequence classification with LightGBM meta-label filtering for intraday gold trading.",
    technologies: [
      { name: "Python", color: "#3776AB", Icon: SiPython },
      { name: "Transformer", color: "#FFD21E", Icon: SiHuggingface },
      { name: "LightGBM", color: GOLD },
      { name: "Pandas", color: "#78B5E3", Icon: SiPandas },
      { name: "NumPy", color: "#4DABCF", Icon: SiNumpy },
    ],
    highlights: [
      "104 engineered features",
      "60-bar sequences",
      "Two-stage prediction pipeline",
    ],
    problem:
      "Traditional technical indicators can generate unreliable signals under changing market conditions, making signal selection and confidence estimation important research problems.",
    approach:
      "Engineered price, trend, momentum, volatility, and time-related features. Trained a Transformer to classify LONG, FLAT, and SHORT market directions, followed by a LightGBM meta-model to filter predictions.",
    implementation: [
      "Prepared historical XAU/USD market data.",
      "Generated 104 engineered input features.",
      "Constructed 60-bar temporal sequences.",
      "Trained a Transformer-based directional classifier.",
      "Applied LightGBM meta-labeling for signal filtering.",
      "Evaluated classification results and historical backtests.",
    ],
    outcome:
      "The dissertation reports that the LightGBM filtering stage improved the selected-signal classification accuracy compared with the initial Transformer predictions, while substantially reducing the number of accepted trades.",
    limitation:
      "Backtesting results do not establish live trading profitability. Market regime changes, transaction costs, and out-of-sample performance remain important considerations.",
    github: "",
  },
];

const hackathons: Project[] = [
  {
    id: "unvibe",
    number: "05",
    title: "UNVIBECODE CONTEXT INVESTIGATION",
    subtitle: "Repository Context Engineering",
    category: "HACKATHON / DEVELOPER TOOLS",
    kind: "unvibe",
    accent: GOLD,
    hackathon: true,
    description:
      "An investigation into repository context selection for AI-assisted code analysis, exploring how cross-file dependencies affect the information available to coding tools.",
    technologies: [
      { name: "Python", color: "#3776AB", Icon: SiPython },
      { name: "Flask", color: CREAM, Icon: SiFlask },
      { name: "GitHub", color: CREAM },
      { name: "JSON / JSONL", color: GOLD },
      { name: "Code Analysis", color: CYAN },
    ],
    highlights: [
      "Cross-file investigation",
      "Repository analysis",
      "Open-source contribution",
    ],
    problem:
      "AI coding tools depend on accurate repository context. Missing cross-file relationships can cause an assistant to reason from incomplete information.",
    approach:
      "Investigated repository-context selection using code examples and cross-file dependencies, documenting observed behavior and potential weaknesses.",
    implementation: [
      "Explored dependency relationships across source files.",
      "Created or inspected Python and Flask test scenarios.",
      "Examined context-selection behavior.",
      "Documented investigation findings.",
      "Shared the work through a public GitHub repository.",
    ],
    outcome:
      "Produced a reproducible investigation and documented findings about context selection in AI-assisted development.",
    github:
      "https://github.com/vigneshvicky0822/-unvibecode-context-investigation",
  },
  {
    id: "superrr",
    number: "06",
    title: "SUPERRR",
    subtitle: "Hackathon Web Application",
    category: "HACKATHON / WEB DEVELOPMENT",
    kind: "superrr",
    accent: CYAN,
    hackathon: true,
    description:
      "A hackathon web application built with a modern React-based frontend, animated interactions, and data visualization components.",
    technologies: [
      { name: "React", color: "#61DAFB", Icon: SiReact },
      { name: "Vite", color: "#A78BFA" },
      { name: "Tailwind CSS", color: "#06B6D4", Icon: SiTailwindcss },
      { name: "Motion", color: "#FFD21E" },
      { name: "ECharts", color: GOLD },
    ],
    highlights: [
      "Interactive frontend",
      "Data visualization",
      "Deployed web application",
    ],
    problem:
      "This project's exact hackathon problem statement can be added after the final project details are confirmed.",
    approach:
      "Built an interactive web interface using React, Vite, Tailwind CSS, animation tools, and charting components.",
    implementation: [
      "Developed a React-based frontend.",
      "Styled responsive components using Tailwind CSS.",
      "Added animated UI interactions.",
      "Integrated data visualization components.",
      "Deployed the web application.",
    ],
    outcome:
      "Created and deployed a hackathon web application. The specific product features and hackathon results can be added later.",
    github:
      "https://github.com/vigneshvicky0822/superRR",
    demo: "https://super-rr-xi.vercel.app/",
  },
];

// ============================================
// TECH BADGE
// ============================================

function TechBadge({ tech }: { tech: Technology }) {
  const Icon = tech.Icon;

  return (
    <span className="inline-flex items-center gap-2 border border-[#b28b52]/30 bg-[#211710] px-3 py-2 text-[10px] font-bold text-[#d8c5a4] transition-colors hover:border-[#e7ae4c]/60">
      {Icon ? (
        <Icon size={15} color={tech.color} />
      ) : (
        <span
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: tech.color,
            boxShadow: `0 0 8px ${tech.color}55`,
          }}
        />
      )}
      {tech.name}
    </span>
  );
}

// ============================================
// PROJECT ARTWORK
// ============================================

function ProjectArtwork({ kind }: { kind: ProjectKind }) {
  const accent =
    kind === "fracture" ||
    kind === "telegram" ||
    kind === "superrr"
      ? CYAN
      : GOLD;

  const nodes = [
    [75, 78],
    [140, 48],
    [198, 105],
    [290, 55],
    [365, 105],
    [425, 65],
    [100, 205],
    [205, 198],
    [310, 210],
    [415, 195],
  ];

  const connections = [
    [0, 1],
    [0, 6],
    [1, 2],
    [2, 3],
    [2, 7],
    [3, 4],
    [4, 5],
    [4, 8],
    [5, 9],
    [6, 7],
    [7, 8],
    [8, 9],
  ];

  const bars = [
    [80, 155, 35],
    [125, 130, 60],
    [170, 148, 42],
    [215, 105, 85],
    [260, 118, 72],
    [305, 75, 115],
    [350, 92, 98],
    [395, 55, 135],
  ];

  return (
    <svg
      viewBox="0 0 500 270"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`glow-${kind}`}>
          <stop
            offset="0%"
            stopColor={accent}
            stopOpacity="0.19"
          />
          <stop
            offset="100%"
            stopColor={accent}
            stopOpacity="0"
          />
        </radialGradient>
      </defs>

      <rect
        width="500"
        height="270"
        fill={`url(#glow-${kind})`}
      />

      <g stroke={accent} opacity="0.1">
        {Array.from({ length: 11 }, (_, i) => (
          <path key={`v-${i}`} d={`M${i * 50} 0V270`} />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <path key={`h-${i}`} d={`M0 ${i * 45}H500`} />
        ))}
      </g>

      <rect
        x="48"
        y="27"
        width="404"
        height="214"
        stroke={accent}
        strokeOpacity="0.25"
        strokeDasharray="5 7"
      />

      {kind === "smartcart" && (
        <>
          <rect
            x="118"
            y="65"
            width="264"
            height="145"
            stroke={accent}
            strokeOpacity="0.6"
          />
          {[
            [155, 105, 55, 80],
            [225, 85, 58, 100],
            [299, 118, 45, 67],
          ].map(([x, y, w, h], i) => (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={w}
                height={h}
                fill={i === 1 ? "#4de5f5" : GOLD}
                fillOpacity="0.14"
                stroke={i === 1 ? CYAN : GOLD}
                strokeWidth="2"
              />
              <text
                x={x}
                y={y - 9}
                fill={i === 1 ? CYAN : GOLD}
                fontSize="10"
                fontFamily="monospace"
              >
                OBJ_0{i + 1}
              </text>
            </g>
          ))}
          <path
            d="M100 48h20M100 48v20M400 48h-20M400 48v20M100 224h20M100 224v-20M400 224h-20M400 224v-20"
            stroke={CYAN}
            strokeWidth="2"
          />
        </>
      )}

      {kind === "fracture" && (
        <>
          <g transform="translate(250 132) rotate(-25)">
            <path
              d="M-95 -18C-118 -42 -136 -10 -112 8C-130 35 -104 52 -85 24L76 24C96 50 127 32 105 8C128 -14 102 -42 80 -18Z"
              fill={CYAN}
              fillOpacity="0.13"
              stroke="#9ceef5"
              strokeWidth="2"
            />
            <path
              d="M-85 -5H76M-85 12H76"
              stroke={CYAN}
              strokeOpacity="0.4"
            />
            <path
              d="M-12 -18L9 2L-8 24M12 -18L-6 3L13 24"
              stroke={GOLD}
              strokeWidth="3"
            />
          </g>
          <circle
            cx="250"
            cy="132"
            r="42"
            stroke={GOLD}
            strokeDasharray="5 5"
          />
          <path
            d="M250 65v24M250 175v24M182 132h25M293 132h25"
            stroke={CYAN}
          />
          <text
            x="250"
            y="224"
            textAnchor="middle"
            fill={CYAN}
            fontFamily="monospace"
            fontSize="11"
          >
            FRACTURE SIZE ANALYSIS
          </text>
        </>
      )}

      {(kind === "telegram" || kind === "unvibe") && (
        <>
          <g stroke={accent} strokeOpacity="0.45">
            {connections.map(([a, b], i) => (
              <line
                key={i}
                x1={nodes[a][0]}
                y1={nodes[a][1]}
                x2={nodes[b][0]}
                y2={nodes[b][1]}
              />
            ))}
          </g>
          {nodes.map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={i === 2 ? 15 : 5}
              fill={i % 3 === 0 ? GOLD : CYAN}
              fillOpacity={i === 2 ? 0.9 : 0.65}
            />
          ))}
          <circle
            cx="250"
            cy="135"
            r="54"
            fill="#211710"
            stroke={accent}
            strokeWidth="2"
          />
          {kind === "telegram" ? (
            <path
              d="M219 135l64-26-17 61-20-20-15 10 4-24 31-18-37 16z"
              fill={CYAN}
            />
          ) : (
            <>
              <path
                d="M238 120l-16 15 16 15M262 120l16 15-16 15M257 112l-14 46"
                stroke={GOLD}
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          )}
        </>
      )}

      {kind === "finance" && (
        <>
          {bars.map(([x, y, h], i) => (
            <g key={i}>
              <line
                x1={x + 12}
                y1={y - 24}
                x2={x + 12}
                y2={y + h + 12}
                stroke={i % 3 === 0 ? "#a43b2a" : CYAN}
                strokeWidth="2"
              />
              <rect
                x={x}
                y={y}
                width="24"
                height={h}
                fill={i % 3 === 0 ? "#a43b2a" : CYAN}
                fillOpacity="0.55"
              />
            </g>
          ))}
          <path
            d="M65 185L115 167L165 174L215 137L265 151L315 97L365 115L420 48"
            stroke={GOLD}
            strokeWidth="3"
            strokeDasharray="7 5"
          />
          <circle cx="420" cy="48" r="6" fill={GOLD} />
        </>
      )}

      {kind === "superrr" && (
        <>
          <rect
            x="105"
            y="57"
            width="290"
            height="165"
            rx="5"
            fill="#211710"
            stroke={CYAN}
          />
          <path
            d="M105 90h290"
            stroke={CYAN}
            strokeOpacity="0.6"
          />
          {[128, 145, 162].map((x) => (
            <circle
              key={x}
              cx={x}
              cy="74"
              r="4"
              fill={GOLD}
            />
          ))}
          <rect
            x="128"
            y="109"
            width="87"
            height="90"
            stroke={GOLD}
            strokeOpacity="0.7"
          />
          <path
            d="M238 181l25-24 26 11 26-40 28 13 26-28"
            stroke={CYAN}
            strokeWidth="3"
          />
          <path
            d="M238 198h130"
            stroke={GOLD}
            strokeOpacity="0.6"
          />
          <rect
            x="140"
            y="129"
            width="62"
            height="8"
            fill={CYAN}
            fillOpacity="0.65"
          />
          <rect
            x="140"
            y="148"
            width="45"
            height="8"
            fill={GOLD}
            fillOpacity="0.65"
          />
        </>
      )}

      <text
        x="250"
        y="257"
        textAnchor="middle"
        fill={accent}
        fontFamily="monospace"
        fontSize="10"
        letterSpacing="2"
      >
        {kind === "smartcart" && "RETAIL VISION RESEARCH"}
        {kind === "fracture" && "SYNTHETIC MEDICAL IMAGING"}
        {kind === "telegram" && "SEMANTIC CONTENT MODERATION"}
        {kind === "finance" && "MARKET PREDICTION RESEARCH"}
        {kind === "unvibe" && "REPOSITORY CONTEXT ANALYSIS"}
        {kind === "superrr" && "INTERACTIVE WEB APPLICATION"}
      </text>
    </svg>
  );
}

// ============================================
// PROJECT CARD
// ============================================

function ProjectCard({
  project,
  index,
  onDetails,
}: {
  project: Project;
  index: number;
  onDetails: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion ? false : { opacity: 0, y: 32 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: (index % 2) * 0.08,
      }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      className="group relative flex h-full flex-col overflow-hidden border border-[#b28b52]/45 bg-[#18110e] transition-colors duration-300 hover:border-[#e7ae4c]/80"
    >
      <div
        className="absolute inset-x-0 top-0 z-20 h-px"
        style={{
          background: `linear-gradient(90deg,transparent,${project.accent},transparent)`,
        }}
      />

      <div className="pointer-events-none absolute left-2 top-2 z-20 h-5 w-5 border-l border-t border-[#4de5f5]" />
      <div className="pointer-events-none absolute right-2 top-2 z-20 h-5 w-5 border-r border-t border-[#e7ae4c]" />
      <div className="pointer-events-none absolute bottom-2 left-2 z-20 h-5 w-5 border-b border-l border-[#4de5f5]" />
      <div className="pointer-events-none absolute bottom-2 right-2 z-20 h-5 w-5 border-b border-r border-[#e7ae4c]" />

      <div className="relative h-[230px] overflow-hidden border-b border-[#b28b52]/30 bg-[#211710] sm:h-[265px]">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.05]">
          <ProjectArtwork kind={project.kind} />
        </div>

        <div className="absolute left-5 top-5 border border-[#b28b52]/50 bg-[#18110e]/95 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-[#e7ae4c]">
          {project.hackathon ? "HACKATHON" : "PROJECT"} /{" "}
          {project.number}
        </div>

        <div className="absolute bottom-4 left-5 border border-[#b28b52]/40 bg-[#18110e]/95 px-3 py-2 text-[9px] font-bold tracking-[0.12em] text-[#f5e8cc]">
          {project.category}
        </div>

        <div className="absolute bottom-4 right-5 text-[#e7ae4c]">
          {project.hackathon ? (
            <Trophy size={22} />
          ) : project.kind === "fracture" ? (
            <ScanEye size={22} />
          ) : project.kind === "telegram" ? (
            <ShieldCheck size={22} />
          ) : project.kind === "finance" ? (
            <TrendingUp size={22} />
          ) : (
            <BrainCircuit size={22} />
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p
          className="mb-3 text-[10px] font-bold uppercase tracking-[0.17em]"
          style={{ color: project.accent }}
        >
          {project.subtitle}
        </p>

        <h3
          className="text-[28px] font-black uppercase leading-[1.08] text-[#f5e8cc] sm:text-[33px]"
          style={{
            fontFamily: "Impact, 'Arial Black', sans-serif",
          }}
        >
          {project.title}
        </h3>

        <p className="mt-4 text-[13px] leading-7 text-[#c5b39a]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>

        <div className="mt-6 space-y-3 border-t border-[#b28b52]/25 pt-5">
          {project.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 text-[12px] text-[#c5b39a]"
            >
              <CheckCircle2
                size={14}
                style={{ color: project.accent }}
                className="shrink-0"
              />
              {highlight}
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          <button
            type="button"
            onClick={onDetails}
            className="inline-flex flex-1 items-center justify-center gap-2 border border-[#e7ae4c]/70 bg-[#a43b2a] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-all hover:bg-[#c45135]"
          >
            View Details
            <ArrowUpRight size={15} />
          </button>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              title="View source code"
              className="flex h-[43px] w-[43px] items-center justify-center border border-[#4de5f5]/60 bg-[#211710] text-[#4de5f5] transition-all hover:bg-[#183036]"
            >
              <FaGithub size={18} />
            </a>
          ) : (
            <span
              title="GitHub link coming soon"
              aria-label="GitHub link coming soon"
              className="flex h-[43px] w-[43px] items-center justify-center border border-[#b28b52]/30 bg-[#211710] text-[#8d7b65]"
            >
              <LockKeyhole size={17} />
            </span>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
              title="Live demo"
              className="flex h-[43px] w-[43px] items-center justify-center border border-[#e7ae4c]/60 bg-[#211710] text-[#e7ae4c] transition-all hover:bg-[#302017]"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[#b28b52]/25 pt-4">
          <span className="text-[9px] uppercase tracking-[0.17em] text-[#8d7b65]">
            Case File // {project.number}
          </span>
          <span className="text-[9px] uppercase tracking-[0.15em] text-[#b28b52]">
            Vignesh S
          </span>
        </div>
      </div>
    </motion.article>
  );
}

// ============================================
// DETAILED PROJECT MODAL
// ============================================

function DetailSection({
  number,
  title,
  color,
  children,
}: {
  number: string;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="mt-8 border-l-2 pl-5"
      style={{ borderColor: color }}
    >
      <h4
        className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em]"
        style={{ color }}
      >
        {number} / {title}
      </h4>

      <div className="text-[13px] leading-7 text-[#c5b39a]">
        {children}
      </div>
    </div>
  );
}

function ProjectDetails({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        const dialog = closeRef.current?.closest(
          '[role="dialog"]'
        );

        if (!dialog) return;

        const focusable = Array.from(
          dialog.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
          )
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
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
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.id}`}
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 25, scale: 0.97 }
        }
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="relative max-h-[90dvh] w-full max-w-4xl overflow-y-auto overscroll-contain border border-[#e7ae4c]/60 bg-[#18110e] shadow-[0_25px_80px_rgba(0,0,0,0.65)]"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center border border-[#e7ae4c]/70 bg-[#211710] text-[#e7ae4c] transition-colors hover:bg-[#302017]"
        >
          <X size={19} />
        </button>

        <div className="h-[180px] border-b border-[#b28b52]/30 bg-[#211710] sm:h-[245px]">
          <ProjectArtwork kind={project.kind} />
        </div>

        <div className="p-6 sm:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: project.accent }}
            >
              Case File {project.number}
            </span>

            <span className="h-px w-8 bg-[#a43b2a]" />

            <span className="text-[10px] uppercase tracking-[0.15em] text-[#bda88b]">
              {project.category}
            </span>
          </div>

          <h3
            id={`project-title-${project.id}`}
            className="pr-6 text-4xl font-black uppercase leading-[1.05] text-[#f5e8cc] sm:text-5xl"
            style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
            }}
          >
            {project.title}
          </h3>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-[#c5b39a]">
            {project.description}
          </p>

          <DetailSection
            number="01"
            title="The Problem"
            color="#c45135"
          >
            {project.problem}
          </DetailSection>

          <DetailSection
            number="02"
            title="The Methodology"
            color={CYAN}
          >
            {project.approach}
          </DetailSection>

          <DetailSection
            number="03"
            title="Technical Implementation"
            color={GOLD}
          >
            <ul className="space-y-3">
              {project.implementation.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <span
                    className="mt-[10px] h-1.5 w-1.5 shrink-0 rotate-45"
                    style={{ backgroundColor: project.accent }}
                  />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection
            number="04"
            title="Results & Outcome"
            color={CYAN}
          >
            {project.outcome}
          </DetailSection>

          {project.limitation && (
            <DetailSection
              number="05"
              title="Limitations & Future Scope"
              color={GOLD}
            >
              {project.limitation}
            </DetailSection>
          )}

          <div className="mt-9 border-t border-[#b28b52]/30 pt-7">
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e7ae4c]">
              Technology Stack
            </h4>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech.name} tech={tech} />
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-[#b28b52]/30 pt-7">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#4de5f5]/70 bg-[#183036] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#4de5f5] transition-colors hover:bg-[#24464b]"
              >
                <FaGithub size={17} />
                View Source Code
                <ArrowUpRight size={15} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 border border-[#b28b52]/30 bg-[#211710] px-5 py-3 text-[11px] uppercase tracking-[0.1em] text-[#a99376]">
                <LockKeyhole size={15} />
                GitHub Link Coming Soon
              </span>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#e7ae4c]/70 bg-[#211710] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#e7ae4c] transition-colors hover:bg-[#302017]"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="ml-auto border border-[#b28b52]/50 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#d8c5a4] transition-colors hover:border-[#e7ae4c]"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// SECTION HEADER
// ============================================

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  count,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  count: string;
}) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-9 bg-[#a43b2a]" />
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c45135]">
          {eyebrow}
        </span>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-5">
        <h2
          className="text-[53px] font-black uppercase leading-[0.98] text-[#f5e8cc] sm:text-[78px] lg:text-[100px]"
          style={{
            fontFamily: "Impact, 'Arial Black', sans-serif",
          }}
        >
          {title}{" "}
          <span className="text-[#e7ae4c]">{accent}</span>
        </h2>

        <div className="inline-flex items-center gap-3 border border-[#b28b52]/40 bg-[#211710] px-4 py-3">
          <Layers3 size={17} className="text-[#4de5f5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#d8c5a4]">
            {count}
          </span>
        </div>
      </div>

      <p className="mt-7 max-w-3xl text-[14px] leading-8 text-[#c5b39a]">
        {description}
      </p>
    </div>
  );
}

// ============================================
// MAIN PROJECTS SECTION
// ============================================

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#15100d] px-6 pb-44 pt-28 text-[#f5e8cc] sm:pb-48 sm:pt-32"
    >
      {/* CINEMATIC BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 10% 15%, rgba(177,73,34,0.12), transparent 45%),
            radial-gradient(ellipse at 90% 65%, rgba(231,174,76,0.07), transparent 45%),
            linear-gradient(180deg,#15100d 0%,#1b120e 55%,#15100d 100%)
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#f5e8cc 0px,#f5e8cc 1px,transparent 1px,transparent 5px)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(231,174,76,0.35) 1px,transparent 1px),
            linear-gradient(90deg,rgba(231,174,76,0.35) 1px,transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="pointer-events-none absolute -right-10 top-10 select-none text-[200px] font-black leading-none text-[#e7ae4c]/[0.025] sm:text-[320px]"
        style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
        }}
      >
        04
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-7 inline-flex items-center gap-3 border border-[#b28b52]/45 bg-[#211710] px-4 py-2">
            <Sparkles size={14} className="text-[#e7ae4c]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e7ae4c]">
              Chapter 04 — Featured Work
            </span>
          </div>

          <SectionHeading
            eyebrow="The Work Behind The Story"
            title="THE"
            accent="PROJECTS."
            description="From intelligent retail systems and medical imaging to semantic content moderation and financial forecasting — a collection of research, experimentation, and practical engineering."
            count="04 Featured Projects"
          />
        </motion.div>

        {/* ACADEMIC PROJECTS */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* HACKATHON SECTION */}
        <div className="mt-24 border-t border-[#b28b52]/35 pt-20">
          <div className="mb-7 inline-flex items-center gap-3 border border-[#e7ae4c]/50 bg-[#211710] px-4 py-2">
            <Trophy size={15} className="text-[#e7ae4c]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e7ae4c]">
              Special Feature — Hackathon Chronicles
            </span>
          </div>

          <SectionHeading
            eyebrow="Built Under Pressure"
            title="HACKATHON"
            accent="CHRONICLES."
            description="Beyond academic research, these projects explore rapid prototyping, collaborative problem-solving, software engineering, and building functional solutions under time constraints."
            count="02 Hackathon Projects"
          />

          <div className="mt-14 grid grid-cols-1 items-stretch gap-7 lg:grid-cols-2">
            {hackathons.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        {/* CLOSING */}
        <div className="mt-20 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#b28b52]/60" />
            <Code2 size={19} className="text-[#4de5f5]" />
            <span className="h-px w-12 bg-[#b28b52]/60" />
          </div>

          <p
            className="text-2xl font-black uppercase tracking-[0.1em] text-[#e7ae4c]"
            style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
            }}
          >
            Built With Curiosity.
          </p>

          <p className="text-xs uppercase tracking-[0.17em] text-[#a99376]">
            Every project has a story. More are on the way.
          </p>
        </div>
      </div>

      {/* DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

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
