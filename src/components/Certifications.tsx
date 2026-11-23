"use client";

import { motion, useReducedMotion } from "motion/react";

import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  ExternalLink,
  Sparkles,
  BarChart3,
} from "lucide-react";

import {
  SiPython,
  SiMysql,
} from "react-icons/si";
import type { ComponentType } from "react";

type CertificateIcon = ComponentType<{
  size?: number;
  color?: string;
  className?: string;
}>;

type Certificate = {
  number: string;
  title: string;
  issuer: string;
  category: string;
  url: string;
  accent: string;
  Icon?: CertificateIcon;
  description: string;
};

const certificates: Certificate[] = [
  {
    number: "01",
    title: "Programming in Python",
    issuer: "Coursera",
    category: "Programming",
    url: "https://coursera.org/share/83e035046af7cdab5f6c5005416e8158",
    accent: "#4de5f5",
    Icon: SiPython,
    description:
      "Python programming fundamentals and practical problem-solving.",
  },
  {
    number: "02",
    title: "Introduction to SQL",
    issuer: "Simplilearn SkillUp",
    category: "Database",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxODExIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDgzNzg1Ml8xNzA2Njg3MTQyLnBuZyIsInVzZXJuYW1lIjoidmlnbmVzaCJ9",
    accent: "#e7ae4c",
    Icon: SiMysql,
    description:
      "SQL fundamentals, relational databases, and data querying.",
  },
  {
    number: "03",
    title: "Introduction to Internet of Things",
    issuer: "NPTEL",
    category: "Internet of Things",
    url: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs147/Course/NPTEL25CS147S105391012210967213.pdf",
    accent: "#4de5f5",
    description:
      "Foundational concepts of Internet of Things systems and connected technologies.",
  },
  {
    number: "04",
    title: "Power BI Essential Training",
    issuer: "LinkedIn Learning",
    category: "Data Visualization",
    url: "https://www.linkedin.com/learning/certificates/92fcd143aed739f0d4b454da20336777cf9f6c35241e2b209f6d9ed9ef031512?trk=share_certificate",
    accent: "#e7ae4c",
    Icon: BarChart3,
    description:
      "Data visualization, dashboard creation, and business intelligence using Power BI.",
  },
];

function CertificateCard({
  certificate,
  index,
}: {
  certificate: Certificate;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const Icon = certificate.Icon;

  return (
    <motion.article
      initial={
        reduceMotion ? false : { opacity: 0, y: 35 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: index * 0.08,
      }}
      className="group relative flex h-full flex-col overflow-hidden border border-[#b28b52]/45 bg-[#18110e] transition-all duration-300 hover:border-[#e7ae4c] hover:shadow-[0_0_30px_rgba(231,174,76,0.12)]"
    >
      <div
        className="h-[2px]"
        style={{
          background: `linear-gradient(90deg,transparent,${certificate.accent},transparent)`,
        }}
      />

      <div className="relative flex min-h-[185px] items-center justify-center overflow-hidden border-b border-[#b28b52]/25 bg-[#211710]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#e7ae4c 1px,transparent 1px),linear-gradient(90deg,#e7ae4c 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <span
          className="absolute right-5 top-4 text-5xl font-black text-[#e7ae4c]/10"
          style={{
            fontFamily: "Impact, Arial Black, sans-serif",
          }}
        >
          {certificate.number}
        </span>

        <div
          className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 bg-[#18110e]"
          style={{
            borderColor: certificate.accent,
            boxShadow: `0 0 30px ${certificate.accent}22`,
          }}
        >
          {Icon ? (
            <Icon
              size={43}
              color={
                certificate.title.includes("Python")
                  ? "#3776AB"
                  : certificate.title.includes("Power BI")
                    ? "#F2C811"
                    : "#4479A1"
              }
            />
          ) : (
            <Award
              size={43}
              style={{ color: certificate.accent }}
            />
          )}
        </div>

        <div className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-[#4de5f5]" />
        <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r border-t border-[#e7ae4c]" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-[#e7ae4c]" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#4de5f5]" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <span
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em]"
            style={{ color: certificate.accent }}
          >
            <BadgeCheck size={15} />
            {certificate.category}
          </span>

          <span className="text-[10px] text-[#a99376]">
            CERT. {certificate.number}
          </span>
        </div>

        <h3
          className="mt-5 text-[28px] font-black uppercase leading-tight text-[#f5e8cc] sm:text-[32px]"
          style={{
            fontFamily: "Impact, Arial Black, sans-serif",
          }}
        >
          {certificate.title}
        </h3>

        <p className="mt-3 text-xs font-bold text-[#e7ae4c]">
          {certificate.issuer}
        </p>

        <p className="mt-4 flex-1 text-[12px] leading-7 text-[#c5b39a]">
          {certificate.description}
        </p>

        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex items-center justify-between gap-3 border-t border-[#b28b52]/30 pt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#4de5f5] transition-colors hover:text-[#e7ae4c]"
        >
          <span className="inline-flex items-center gap-2">
            <ExternalLink size={16} />
            View Certificate
          </span>

          <span className="flex h-9 w-9 items-center justify-center border border-[#e7ae4c]/50 text-[#e7ae4c] transition-all group-hover:bg-[#e7ae4c] group-hover:text-[#18110e]">
            <ArrowUpRight size={18} />
          </span>
        </a>
      </div>
    </motion.article>
  );
}

export default function Certifications() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="certifications"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#15100d] px-6 pb-44 pt-28 text-[#f5e8cc] sm:pb-48 sm:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 10% 20%,rgba(177,73,34,.12),transparent 45%),radial-gradient(ellipse at 90% 75%,rgba(231,174,76,.08),transparent 45%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#e7ae4c 1px,transparent 1px),linear-gradient(90deg,#e7ae4c 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="pointer-events-none absolute -right-10 top-10 select-none text-[200px] font-black leading-none text-[#e7ae4c]/[0.025] sm:text-[320px]"
        style={{
          fontFamily: "Impact, Arial Black, sans-serif",
        }}
      >
        06
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-7 inline-flex items-center gap-3 border border-[#b28b52]/45 bg-[#211710] px-4 py-2">
            <Sparkles size={14} className="text-[#e7ae4c]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e7ae4c]">
              Chapter 06 — Certifications
            </span>
          </div>

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-[#a43b2a]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c45135]">
              Learning & Achievements
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2
              className="text-[52px] font-black uppercase leading-[0.95] tracking-tight sm:text-[78px] lg:text-[100px]"
              style={{
                fontFamily: "Impact, Arial Black, sans-serif",
              }}
            >
              THE{" "}
              <span className="text-[#e7ae4c]">
                CREDENTIALS.
              </span>
            </h2>

            <div className="flex items-center gap-3 border border-[#b28b52]/40 bg-[#211710] px-5 py-3">
              <Award size={18} className="text-[#4de5f5]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#d8c5a4]">
                04 Certifications
              </span>
            </div>
          </div>

          <p className="mt-7 max-w-3xl text-[14px] leading-8 text-[#c5b39a]">
            Continuous learning is part of my journey.
            These certifications reflect my interest in
            programming, databases, IoT, and data visualization.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.number}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#b28b52]/60" />
            <Award size={19} className="text-[#4de5f5]" />
            <span className="h-px w-12 bg-[#b28b52]/60" />
          </div>

          <p
            className="text-2xl font-black uppercase tracking-[0.1em] text-[#e7ae4c]"
            style={{
              fontFamily: "Impact, Arial Black, sans-serif",
            }}
          >
            Always Learning. Always Evolving.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <div className="h-12 border-b border-[#a43b2a]/70" />
        <div className="relative h-5 border-y border-[#a43b2a] bg-[#211710]">
          <div
            className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg,#e7ae4c 0px,#e7ae4c 10px,transparent 10px,transparent 38px)",
            }}
          />
        </div>
        <div className="h-10 border-t border-[#a43b2a]/70" />
      </div>
    </section>
  );
}
