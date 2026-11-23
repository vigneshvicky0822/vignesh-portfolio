
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";

import {
  ArrowUpRight,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#15100d]">
      {/* =====================================
          CHAPTER 01 - HOME
         ===================================== */}
      <Navbar />
      <Hero />

      {/* =====================================
          CHAPTER 02 - ABOUT
         ===================================== */}
      <About />

      {/* =====================================
          CHAPTER 03 - SKILLS
         ===================================== */}
      <Skills />

      {/* =====================================
          CHAPTER 04 - PROJECTS
         ===================================== */}
      <Projects />

      {/* =====================================
          CHAPTER 05 - EXPERIENCE
          Includes Captiv certificate popup
         ===================================== */}
      <Experience />

      {/* =====================================
          CHAPTER 06 - CERTIFICATIONS
          Python, SQL, NPTEL IoT, Power BI
         ===================================== */}
      <Certifications />

      {/* =====================================
          CHAPTER 07 - CONTACT
         ===================================== */}
      <section
        id="contact"
        className="relative isolate scroll-mt-20 overflow-hidden bg-[#15100d] px-6 pb-24 pt-28 text-[#f5e8cc] sm:pt-32"
      >
        {/* CINEMATIC BACKGROUND */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse at 15% 25%,
                rgba(177,73,34,0.12),
                transparent 45%
              ),
              radial-gradient(
                ellipse at 85% 75%,
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

        {/* SCANLINES */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#f5e8cc 0px,#f5e8cc 1px,transparent 1px,transparent 5px)",
          }}
        />

        {/* BACKGROUND CHAPTER NUMBER */}
        <div
          className="pointer-events-none absolute -right-10 top-10 select-none text-[200px] font-black leading-none text-[#e7ae4c]/[0.025] sm:text-[320px]"
          style={{
            fontFamily:
              "Impact, 'Arial Black', sans-serif",
          }}
        >
          07
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* CHAPTER LABEL */}
          <div className="mb-7 inline-flex items-center gap-3 border border-[#b28b52]/45 bg-[#211710] px-4 py-2">
            <Sparkles
              size={14}
              className="text-[#e7ae4c]"
            />

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e7ae4c]">
              Chapter 07 — Get In Touch
            </span>
          </div>

          {/* SECTION SUBTITLE */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-[#a43b2a]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c45135]">
              The Next Collaboration
            </span>
          </div>

          {/* MAIN HEADING */}
          <h2
            className="text-[58px] font-black uppercase leading-[0.95] tracking-tight sm:text-[85px] lg:text-[105px]"
            style={{
              fontFamily:
                "Impact, 'Arial Black', sans-serif",
            }}
          >
            THE{" "}
            <span className="text-[#e7ae4c]">
              FINAL ACT.
            </span>
          </h2>

          {/* INTRODUCTION */}
          <p className="mt-7 max-w-2xl text-[14px] leading-8 text-[#c5b39a]">
            Every great story begins with a conversation.
            Whether it&apos;s an AI project, a Data Science
            opportunity, or an exciting collaboration,
            I&apos;d love to hear from you.
          </p>

          {/* =====================================
              CONTACT CARD
             ===================================== */}
          <div className="group relative mt-12 max-w-4xl overflow-hidden border border-[#b28b52]/45 bg-[#18110e] p-6 transition-colors hover:border-[#e7ae4c]/70 sm:p-10">
            {/* TOP ACCENT */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7ae4c] to-transparent" />

            {/* CINEMATIC CORNERS */}
            <div className="pointer-events-none absolute left-2 top-2 h-5 w-5 border-l border-t border-[#4de5f5]" />

            <div className="pointer-events-none absolute right-2 top-2 h-5 w-5 border-r border-t border-[#e7ae4c]" />

            <div className="pointer-events-none absolute bottom-2 left-2 h-5 w-5 border-b border-l border-[#4de5f5]" />

            <div className="pointer-events-none absolute bottom-2 right-2 h-5 w-5 border-b border-r border-[#e7ae4c]" />

            {/* AVAILABILITY */}
            <div className="mb-6 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4de5f5] opacity-30" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4de5f5]" />
              </span>

              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4de5f5]">
                Open To Opportunities
              </p>
            </div>

            {/* CARD HEADING */}
            <h3
              className="max-w-2xl text-[35px] font-black uppercase leading-[1.05] text-[#f5e8cc] sm:text-[52px]"
              style={{
                fontFamily:
                  "Impact, 'Arial Black', sans-serif",
              }}
            >
              LET&apos;S CREATE
              <span className="block">
                SOMETHING{" "}
                <span className="text-[#e7ae4c]">
                  MEANINGFUL.
                </span>
              </span>
            </h3>

            <p className="mt-6 max-w-2xl text-[13px] leading-8 text-[#c5b39a]">
              Interested in working together? Reach out
              through email or phone, or connect with me
              on LinkedIn and GitHub.
            </p>

            {/* =====================================
                CONTACT DETAILS
               ===================================== */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {/* EMAIL */}
              <a
                href="mailto:vickyvignesh0822@gmail.com"
                className="group/email flex items-center gap-4 border border-[#b28b52]/35 bg-[#211710] p-4 transition-all duration-300 hover:border-[#e7ae4c] hover:bg-[#302216]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#e7ae4c]/50 bg-[#2b2014] text-[#e7ae4c]">
                  <Mail size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a99376]">
                    Email Address
                  </p>

                  <p className="mt-1 break-all text-[12px] font-bold text-[#f5e8cc]">
                    vickyvignesh0822@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-[#e7ae4c] transition-transform group-hover/email:-translate-y-1 group-hover/email:translate-x-1"
                />
              </a>

              {/* PHONE NUMBER */}
              <a
                href="tel:+919047457190"
                aria-label="Call +91 9047457190"
                className="group/phone flex items-center gap-4 border border-[#4de5f5]/35 bg-[#211710] p-4 transition-all duration-300 hover:border-[#4de5f5] hover:bg-[#183036]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#4de5f5]/50 bg-[#183036] text-[#4de5f5]">
                  <Phone size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a99376]">
                    Phone Number
                  </p>

                  <p className="mt-1 text-[14px] font-bold text-[#f5e8cc]">
                    +91 9047457190
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-[#4de5f5] transition-transform group-hover/phone:-translate-y-1 group-hover/phone:translate-x-1"
                />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/vignesh-s-a2a854288/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/linkedin flex items-center gap-4 border border-[#b28b52]/35 bg-[#211710] p-4 transition-all duration-300 hover:border-[#4de5f5] hover:bg-[#183036]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#4de5f5]/50 bg-[#183036] text-[#4de5f5]">
                  <FaLinkedin size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a99376]">
                    Professional Network
                  </p>

                  <p className="mt-1 text-[13px] font-bold text-[#f5e8cc]">
                    LinkedIn
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-[#4de5f5] transition-transform group-hover/linkedin:-translate-y-1 group-hover/linkedin:translate-x-1"
                />
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/vigneshvicky0822"
                target="_blank"
                rel="noopener noreferrer"
                className="group/github flex items-center gap-4 border border-[#b28b52]/35 bg-[#211710] p-4 transition-all duration-300 hover:border-[#e7ae4c] hover:bg-[#302216]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#e7ae4c]/50 bg-[#2b2014] text-[#e7ae4c]">
                  <FaGithub size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a99376]">
                    Code &amp; Projects
                  </p>

                  <p className="mt-1 text-[13px] font-bold text-[#f5e8cc]">
                    GitHub
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-[#e7ae4c] transition-transform group-hover/github:-translate-y-1 group-hover/github:translate-x-1"
                />
              </a>
            </div>

            {/* =====================================
                PRIMARY ACTION BUTTONS
               ===================================== */}
            <div className="mt-9 flex flex-wrap gap-3 border-t border-[#b28b52]/25 pt-7">
              {/* SEND EMAIL */}
              <a
                href="mailto:vickyvignesh0822@gmail.com"
                className="group/mail inline-flex items-center justify-center gap-3 border border-[#e7ae4c] bg-[#a43b2a] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-white transition-all hover:bg-[#c45135] hover:shadow-[0_0_20px_rgba(231,174,76,0.12)]"
              >
                <Mail size={17} />
                Send Email

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover/mail:-translate-y-0.5 group-hover/mail:translate-x-0.5"
                />
              </a>

              {/* CALL ME */}
              <a
                href="tel:+919047457190"
                className="group/call inline-flex items-center justify-center gap-3 border border-[#4de5f5]/70 bg-[#183036] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-[#4de5f5] transition-all hover:border-[#4de5f5] hover:bg-[#24505a] hover:shadow-[0_0_20px_rgba(77,229,245,0.12)]"
              >
                <Phone size={17} />
                Call Me

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover/call:-translate-y-0.5 group-hover/call:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          {/* =====================================
              CLOSING MESSAGE
             ===================================== */}
          <div className="mt-20 flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#b28b52]/60" />

              <Sparkles
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
              THE STORY CONTINUES.
            </p>

            <p className="text-xs uppercase tracking-[0.17em] text-[#a99376]">
              Let&apos;s Build What Comes Next.
            </p>
          </div>

          {/* =====================================
              FOOTER
             ===================================== */}
          <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-[#b28b52]/30 pt-8 text-center sm:flex-row sm:text-left">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#a99376]">
              © {new Date().getFullYear()} Vignesh S.
              All Rights Reserved.
            </p>

            <p className="text-[11px] uppercase tracking-[0.15em] text-[#e7ae4c]">
              A Vignesh Production
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
