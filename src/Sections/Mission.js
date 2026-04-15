// src/components/MissionSection.jsx
import React from "react";
import PropTypes from "prop-types";

/**
 * Combined About Us + Mission + Vision in one continuous background.
 */
const MissionSection = ({
  imageSrc = "/mnt/data/5d68695d-5aa1-4d12-883c-033263ee17c1.png",
  className = "",
}) => {
  return (
    <section
      className={[
        "relative isolate overflow-hidden",
        "bg-[#08121c]",
        "px-6 py-14 sm:px-10 md:py-20",
        "text-white",
        className,
      ].join(" ")}
      aria-label="About, Mission and Vision"
    >
      {/* Why: subtle background texture for depth without new DOM structure */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 60rem at 10% 10%, rgba(0, 213, 255, 0.15), transparent 60%), radial-gradient(40rem 40rem at 85% 30%, rgba(0, 255, 170, 0.10), transparent 60%), linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* ====== ABOUT US ====== */}
        <div id="story" className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About TechBridge Group
          </h2>

          <p className="mx-auto mt-8 text-[17px] leading-8 text-slate-200 text-left">
            TechBridge Group bridges the gap between technology challenges and business opportunities.
            We provide comprehensive IT solutions, from network design and infrastructure to ongoing
            support and consultancy, and ensuring your technology works as hard as you do.
          </p>

          {/* Real bullets w/ hanging indent */}
          <ul
            className="
              mx-auto mt-6 max-w-3xl
              list-disc list-outside pl-6
              space-y-3
              text-left
              text-[17px] leading-8 text-slate-200
              marker:text-slate-300
            "
          >
            <li className="pl-1">Tailored IT infrastructure and support</li>
            <li className="pl-1">
              Expertise in networking, virtualization, cloud, and open-source systems
            </li>
            <li className="pl-1">
              Trusted by organizations across Lebanon and the region
            </li>
          </ul>
        </div>

        {/* spacer */}
        <div className="mt-16 md:mt-20" />

        {/* ====== MISSION ====== */}
        <div id="mission" className="mb-8 flex items-center gap-3">
          {/* same icon as 'OUR VISION' */}
          <svg
            className="h-6 w-6 text-cyan-300"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M12 1v4M12 19v4M1 12h4M19 12h4M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
            OUR MISSION
          </span>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-2">
          {/* Left: Headline */}
          <div>
            <p className="text-4xl font-extrabold sm:text-5xl">
              <span className="block leading-tight text-white/95">Everyday is</span>
              <span
                className="mt-3 block text-[46px] sm:text-7xl font-extrabold leading-[0.95]"
                style={{
                  color: "#6bffe6",
                  textShadow:
                    "0 0 20px rgba(0, 255, 200, 0.45), 0 0 40px rgba(0, 255, 200, 0.25)",
                }}
              >
                Technology
              </span>
            </p>

            {/* Capsule paragraph */}
            <div className="mt-12 rounded-[2.5rem] border border-cyan-500/40 bg-white/5 p-6 sm:p-8 shadow-[0_0_40px_rgba(0,255,255,0.15)]">
              <p className="text-sm leading-relaxed text-white/85">
                TO BRIDGE THE GAP BETWEEN TECHNOLOGY AND BUSINESS BY DELIVERING
                RELIABLE, SCALABLE, AND AFFORDABLE IT SOLUTIONS, EMPOWERING
                COMPANIES TO OPERATE SMARTER, SAFER, AND MORE EFFICIENTLY.
              </p>
            </div>
          </div>

          {/* Right: Curved image card (optional) */}
          <div className="relative">
            <div className="relative">
              <div
                className="overflow-hidden"
                style={{
                  borderRadius: "1.25rem",
                  clipPath:
                    "path('M16 0H720c8.837 0 16 7.163 16 16v300c-120 90-240 90-360 0H32c-8.837 0-16-7.163-16-16V16C16 7.163 23.163 0 32 0Z')",
                }}
              >
                {/* <img
                  src={imageSrc}
                  alt="Workspace"
                  className="h-[260px] w-full object-cover md:h-[320px]"
                /> */}
              </div>

              {/* Halftone dots */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 opacity-70"
                style={{
                  backgroundImage:
                    "radial-gradient(currentColor 1px, transparent 1px)",
                  color: "rgba(0, 255, 255, 0.45)",
                  backgroundSize: "8px 8px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="mt-20 md:mt-24" />

        {/* ====== VISION ====== */}
        <div id="vision" className="mb-6 flex items-center gap-3">
          <svg
            className="h-6 w-6 text-cyan-300"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M12 1v4M12 19v4M1 12h4M19 12h4M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
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
            TO REDEFINE HOW COMPANIES EXPERIENCE TECHNOLOGY, WHERE IT BECOMES
            SIMPLE, DEPENDABLE, AND A DRIVER FOR LONG-TERM GROWTH.
          </p>
        </div>
      </div>
    </section>
  );
};

MissionSection.propTypes = {
  imageSrc: PropTypes.string,
  className: PropTypes.string,
};

export default MissionSection;
