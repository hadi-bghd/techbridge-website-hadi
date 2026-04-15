// src/sections/AboutTechBridge.jsx
import React, { useEffect, useRef } from "react";
import VID1 from "../assets/Vids/VID-1.mp4";

export default function AboutTechBridge() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play?.().catch(() => {}); // Why: ignore autoplay promise failures on mobile
            el.classList.remove("opacity-0", "translate-y-4");
            el.classList.add("opacity-100", "translate-y-0");
          } else {
            videoRef.current?.pause?.();
          }
        });
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[60vh]">
      {/* Full-bleed background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover pointer-events-none"
        src={VID1}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Dark scrim for text readability */}
      <div className="absolute inset-0 -z-10 bg-slate-900/55" />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-24 md:py-28">
        <div
          ref={sectionRef}
          className="transform-gpu opacity-0 translate-y-4 transition-all duration-700 ease-out"
        >
          {/* Title styled like Solutions.js (no bottom line) */}
          <h2 className="text-center text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About TechBridge Group
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-[17px] leading-8 text-slate-200">
            TechBridge Group bridges the gap between technology challenges and
            business opportunities. We provide comprehensive IT solutions — from
            network design and infrastructure to ongoing support and consultancy —
            ensuring your technology works as hard as you do.
          </p>

          <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-[17px] leading-8 text-slate-200">
            <li>• Tailored IT infrastructure and support</li>
            <li>• Expertise in networking, virtualization, cloud, and open-source systems</li>
            <li>• Trusted by organizations across Lebanon and the region</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
