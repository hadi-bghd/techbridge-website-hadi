// src/sections/OurSolutions.jsx
import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import VID2 from "../assets/Vids/VID-2.mp4";
import {
  Laptop2,
  Wrench,
  Globe2,
  Wifi,
  Target,
  Network,
  Server,
  Camera,
  LockKeyhole,
  Cpu,
} from "lucide-react";

// ---- Data ----
const DEFAULT_SOLUTIONS = [
  { key: "it-solutions", title: "IT Solutions", blurb: "Comprehensive technology services for business growth.", icon: <Laptop2 className="h-6 w-6" aria-hidden /> },
  { key: "it-support", title: "IT Support", blurb: "Proactive, friendly technical support when it matters.", icon: <Wrench className="h-6 w-6" aria-hidden /> },
  { key: "networking", title: "Networking", blurb: "Scalable, secure network infrastructure end-to-end.", icon: <Globe2 className="h-6 w-6" aria-hidden /> },
  { key: "wifi", title: "WiFi Solutions", blurb: "Enterprise-grade wireless with site surveying and tuning.", icon: <Wifi className="h-6 w-6" aria-hidden /> },
  { key: "consultancy", title: "Consultancy", blurb: "Strategic IT advisory aligned to your roadmap.", icon: <Target className="h-6 w-6" aria-hidden /> },
  { key: "network-design", title: "Network Design", blurb: "Custom architectures optimized for performance.", icon: <Network className="h-6 w-6" aria-hidden /> },
  { key: "servers-storage", title: "Servers & Storage", blurb: "Secure, reliable platforms engineered for uptime.", icon: <Server className="h-6 w-6" aria-hidden /> },
  { key: "cctv", title: "CCTV Systems", blurb: "Smart surveillance, monitoring, and retention.", icon: <Camera className="h-6 w-6" aria-hidden /> },
  { key: "open-source", title: "Open-Source Solutions", blurb: "Cost-effective and flexible systems without lock-in.", icon: <LockKeyhole className="h-6 w-6" aria-hidden /> },
];

// ---- Utilities ----
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ---- Card (non-clickable, keeps hover bounce) ----
function SolutionCard({ item }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      role="group" // keep group-hover styles
      whileHover={!prefersReducedMotion ? { y: -4 } : undefined}
      className={cn(
        "group relative w-full rounded-2xl p-[1px] text-left",
        "bg-gradient-to-br from-cyan-400/50 via-sky-500/30 to-indigo-500/40"
      )}
      aria-label={`${item.title}: ${item.blurb}`}
      tabIndex={-1} // non-interactive
    >
      <div
        className={cn(
          "rounded-2xl h-full w-full",
          "bg-white/5 backdrop-blur-xl",
          "ring-1 ring-white/10",
          "p-5 sm:p-6 flex flex-col gap-3"
        )}
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl",
              "bg-gradient-to-br from-cyan-400/20 to-indigo-500/20",
              "ring-1 ring-white/10"
            )}
          >
            <div className="text-cyan-300 group-hover:text-cyan-200 transition-colors">
              {item.icon}
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
            {item.title}
          </h3>
        </div>
        <p className="text-sm text-white/75 leading-relaxed">{item.blurb}</p>
      </div>

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-0.5 rounded-3xl opacity-0 blur-xl transition-opacity",
          "group-hover:opacity-40",
          "bg-gradient-to-br from-cyan-500/30 via-sky-500/20 to-indigo-500/30"
        )}
      />
    </motion.div>
  );
}

// ---- Section ----
export default function OurSolutions({
  id = "our-solutions",
  heading = "Our Solutions",
  subheading = "What we deliver end-to-end",
  items = DEFAULT_SOLUTIONS,
  className,
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) videoRef.current?.play?.().catch(() => {});
          else videoRef.current?.pause?.();
        });
      },
      { threshold: 0.15 }
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={containerRef}
      className={cn(
        "relative isolate overflow-hidden",
        "py-16 sm:py-20 lg:py-24",
        className
      )}
    >
      {/* Full-bleed background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-30 h-full w-full object-cover pointer-events-none"
        src={VID2}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* Dark scrim for contrast */}
      <div className="absolute inset-0 -z-20 bg-slate-950/70" />

      {/* Decorative overlays */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_30%_at_50%_0%,rgba(14,165,233,0.25),transparent_60%)]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(70%_50%_at_50%_30%,black,transparent)]">
          <svg className="h-full w-full opacity-[0.09]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
            <Cpu className="h-4 w-4 text-cyan-300" aria-hidden />
            <span>Trusted technology partner</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{heading}</h2>
          <p className="mt-2 text-white/70">{subheading}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <SolutionCard key={item.key} item={item} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          Need something custom? We design and integrate bespoke solutions.
        </p>
      </div>
    </section>
  );
}
