
"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowUpRight,
  Menu,
  X,
  Clapperboard,
  Download,
  FileText,
} from "lucide-react";

// ============================================
// NAVIGATION LINKS - NO NUMBERS
// ============================================

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const RESUME_PATH = "/Vignesh_S_Resume.pdf";

// ============================================
// MAIN NAVBAR
// ============================================

export default function Navbar() {
  const [activeSection, setActiveSection] =
    useState("home");

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const reduceMotion = useReducedMotion();

  // ============================================
  // DETECT SCROLL + ACTIVE SECTION
  // ============================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = "home";

      for (const link of navLinks) {
        const section = document.getElementById(
          link.id
        );

        if (!section) continue;

        if (
          section.getBoundingClientRect().top <= 160
        ) {
          currentSection = link.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // ============================================
  // MOBILE MENU - ESCAPE + SCROLL LOCK
  // ============================================

  useEffect(() => {
    if (!isMenuOpen) return;

    const oldOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
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
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ======================================
          DESKTOP / MAIN NAVBAR
         ====================================== */}

      <motion.header
        initial={
          reduceMotion
            ? false
            : {
                y: -80,
                opacity: 0,
              }
        }
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.6,
          ease: "easeOut",
        }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "border-[#e7ae4c]/30 bg-[#15100d]/95 shadow-[0_10px_35px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            : "border-[#e7ae4c]/15 bg-[#15100d]/80 backdrop-blur-lg"
        }`}
      >
        {/* TOP NEON ACCENT */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#4de5f5]/65 to-transparent" />

        <div className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
          {/* LOGO */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3"
            aria-label="Vignesh S - Home"
          >
            <div className="relative flex h-11 w-11 items-center justify-center border border-[#e7ae4c]/70 bg-[#211710] transition-all duration-300 group-hover:border-[#4de5f5] group-hover:shadow-[0_0_20px_rgba(77,229,245,0.15)]">
              <span
                className="text-[23px] font-black text-[#e7ae4c]"
                style={{
                  fontFamily:
                    "Impact, 'Arial Black', sans-serif",
                }}
              >
                VS.
              </span>

              <span className="pointer-events-none absolute -left-1 -top-1 h-2 w-2 border-l border-t border-[#4de5f5]" />

              <span className="pointer-events-none absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-[#4de5f5]" />
            </div>

            <div className="hidden sm:block">
              <p
                className="text-[18px] font-black uppercase tracking-[0.06em] text-[#f5e8cc]"
                style={{
                  fontFamily:
                    "Impact, 'Arial Black', sans-serif",
                }}
              >
                VIGNESH S
              </p>

              <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#a99376]">
                Data Science · AI / ML
              </p>
            </div>
          </a>

          {/* ======================================
              DESKTOP NAVIGATION - NO NUMBERS
             ====================================== */}

          <nav
            className="hidden items-center gap-1 xl:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  aria-current={
                    isActive ? "location" : undefined
                  }
                  className={`group relative flex items-center px-3 py-3 text-[11px] font-bold uppercase tracking-[0.08em] transition-colors ${
                    isActive
                      ? "text-[#e7ae4c]"
                      : "text-[#c5b39a] hover:text-[#4de5f5]"
                  }`}
                >
                  {/* SECTION NAME ONLY */}
                  {link.label}

                  {/* ACTIVE UNDERLINE */}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-underline"
                      className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#e7ae4c] shadow-[0_0_10px_rgba(231,174,76,0.5)]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* HOVER UNDERLINE */}
                  {!isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-[2px] origin-left scale-x-0 bg-[#4de5f5] transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ======================================
              RIGHT ACTION BUTTONS
             ====================================== */}

          <div className="flex shrink-0 items-center gap-2">
            {/* RESUME DOWNLOAD */}
            <a
              href={RESUME_PATH}
              download="Vignesh_S_Resume.pdf"
              title="Download Resume"
              aria-label="Download Resume"
              className="group flex h-10 w-10 items-center justify-center border border-[#4de5f5]/50 bg-[#211710] text-[#4de5f5] transition-all duration-300 hover:border-[#4de5f5] hover:bg-[#183036] hover:shadow-[0_0_18px_rgba(77,229,245,0.15)]"
            >
              <Download
                size={17}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>

            {/* CONTACT BUTTON */}
            <a
              href="#contact"
              onClick={closeMenu}
              className="group hidden items-center gap-2 border border-[#e7ae4c]/70 bg-[#a43b2a] px-3 py-3 text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-all hover:border-[#e7ae4c] hover:bg-[#c45135] hover:shadow-[0_0_20px_rgba(231,174,76,0.12)] sm:inline-flex"
            >
              Let&apos;s Talk

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* MOBILE MENU TOGGLE */}
            <button
              type="button"
              onClick={() =>
                setIsMenuOpen((value) => !value)
              }
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center border border-[#e7ae4c]/50 bg-[#211710] text-[#e7ae4c] transition-colors hover:border-[#4de5f5] hover:text-[#4de5f5] xl:hidden"
            >
              {isMenuOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>
          </div>
        </div>

        {/* BOTTOM GOLD ACCENT */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#e7ae4c]/35 to-transparent" />
      </motion.header>

      {/* ======================================
          MOBILE NAVIGATION - NO NUMBERS
         ====================================== */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.25,
            }}
            className="fixed inset-0 z-40 overflow-y-auto bg-[#15100d]/98 px-6 pb-10 pt-28 backdrop-blur-xl xl:hidden"
          >
            <div className="mx-auto max-w-xl">
              {/* MOBILE MENU HEADING */}
              <div className="mb-7 flex items-center gap-3">
                <Clapperboard
                  size={17}
                  className="text-[#e7ae4c]"
                />

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e7ae4c]">
                  The Chapters
                </span>
              </div>

              {/* MOBILE LINKS */}
              <nav
                className="space-y-1"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link, index) => {
                  const isActive =
                    activeSection === link.id;

                  return (
                    <motion.a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={closeMenu}
                      aria-current={
                        isActive
                          ? "location"
                          : undefined
                      }
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              x: -20,
                            }
                      }
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: reduceMotion
                          ? 0
                          : index * 0.04,
                      }}
                      className={`group flex items-center justify-between border-b px-3 py-4 transition-colors ${
                        isActive
                          ? "border-[#e7ae4c]/50 bg-[#211710] text-[#e7ae4c]"
                          : "border-[#b28b52]/20 text-[#f5e8cc] hover:bg-[#211710] hover:text-[#4de5f5]"
                      }`}
                    >
                      {/* SECTION NAME ONLY */}
                      <span
                        className="text-[29px] font-black uppercase tracking-[0.04em]"
                        style={{
                          fontFamily:
                            "Impact, 'Arial Black', sans-serif",
                        }}
                      >
                        {link.label}
                      </span>

                      <ArrowUpRight
                        size={19}
                        className="text-[#e7ae4c] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </motion.a>
                  );
                })}
              </nav>

              {/* MOBILE RESUME BUTTON */}
              <a
                href={RESUME_PATH}
                download="Vignesh_S_Resume.pdf"
                onClick={closeMenu}
                className="mt-8 flex w-full items-center justify-center gap-3 border border-[#4de5f5]/70 bg-[#183036] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#4de5f5] transition-colors hover:bg-[#24505a]"
              >
                <FileText size={18} />

                Download My Resume

                <Download size={16} />
              </a>

              {/* MOBILE FOOTER */}
              <div className="mt-12 flex items-center justify-center gap-3 border-t border-[#b28b52]/25 pt-7">
                <Clapperboard
                  size={17}
                  className="text-[#e7ae4c]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a99376]">
                  A Vignesh Production
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
