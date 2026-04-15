import React, { useEffect, useRef, useState } from "react";

/**
 * Floating CTA button that matches Footer gradient and opens an email client.
 * Why: IntersectionObserver avoids scroll handlers; efficient + accessible.
 */
export default function StickyConsultationButton({
  label = "Book Your Free Consultation",
  email = "info@tech-bridgegroup.com",
  offset = { bottom: "1.25rem", right: "1.25rem" },
  className = "",
  hideWhenVisibleSelector = "#footer-cta",
  rootMargin = "0px", // e.g., "0px 0px -20%" to hide earlier
}) {
  const [isHidden, setIsHidden] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    const target = document.querySelector(hideWhenVisibleSelector);
    if (!target) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          setIsHidden(e.isIntersecting);
        }
      },
      { root: null, rootMargin, threshold: 0 }
    );

    obs.observe(target);
    return () => obs.disconnect();
  }, [hideWhenVisibleSelector, rootMargin]);

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div
      ref={btnRef}
      className={[
        "fixed z-50 pointer-events-none",
        // hide/show transitions
        "transition-all duration-200 ease-out",
        isHidden ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
      ].join(" ")}
      style={{ bottom: offset.bottom, right: offset.right }}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label={label}
        className={[
          "pointer-events-auto flex items-center justify-center",
          "px-5 py-3 rounded-2xl",
          "bg-gradient-to-b from-sky-200 via-cyan-200 to-blue-300",
          "shadow-lg ring-1 ring-sky-900/10",
          "text-slate-900 font-semibold",
          "transition-transform duration-150 ease-out hover:translate-y-[-1px] active:translate-y-0",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600/40",
          "max-w-[90vw]",
          // disable interactions when hidden to avoid accidental clicks
          isHidden ? "pointer-events-none" : "",
          className,
        ].join(" ")}
      >
        {label}
      </button>
    </div>
  );
}