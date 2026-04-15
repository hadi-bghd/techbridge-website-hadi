// src/components/VisionSection.jsx
import React from "react";
import PropTypes from "prop-types";

/**
 * Vision section — uses the same background as Mission.
 */
const VisionSection = ({ className = "" }) => {
  return (
    <section
      className={[
        "relative isolate overflow-hidden",
        "bg-[#08121c]",
        "px-6 sm:px-10 py-14 md:py-20",
        "text-white",
        className,
      ].join(" ")}
      aria-label="Our Vision"
    >
      {/* Background identical to Mission (why: exact visual parity) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 60rem at 10% 10%, rgba(0, 213, 255, 0.15), transparent 60%), radial-gradient(40rem 40rem at 85% 30%, rgba(0, 255, 170, 0.10), transparent 60%), linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
        }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-3">
          <svg
            className="h-6 w-6 text-cyan-300"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 1v4M12 19v4M1 12h4M19 12h4M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
            OUR VISION
          </span>
        </div>

        <h2 className="text-left text-4xl font-extrabold leading-tight sm:text-5xl">
          <span className="block text-white/95">Communication and</span>
          <span
            className="mt-3 block text-[46px] leading-[0.95] sm:text-7xl"
            style={{
              color: "#6bffe6",
              textShadow:
                "0 0 20px rgba(0, 255, 200, 0.45), 0 0 40px rgba(0, 255, 200, 0.25)",
              fontWeight: 800,
            }}
          >
            Connectivity
          </span>
        </h2>

        <div className="mt-10 max-w-3xl rounded-[2.5rem] border border-cyan-500/40 bg-white/5 p-6 sm:p-8 shadow-[0_0_40px_rgba(0,255,255,0.15)]">
          <p className="text-sm leading-relaxed text-white/85">
            TO REDEFINE HOW COMPANIES EXPERIENCE TECHNOLOGY — WHERE IT BECOMES 
            SIMPLE, DEPENDABLE, AND A DRIVER FOR LONG-TERM GROWTH.
          </p>
        </div>
      </div>
    </section>
  );
};

VisionSection.propTypes = {
  className: PropTypes.string,
};

export default VisionSection;