// src/components/Footer.js
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

function cn(...xs) {
  return xs.filter(Boolean).join(" ");
}

function toTelHref(phone) {
  // Why: tel: should ignore spaces/dashes/parentheses.
  const sanitized = String(phone).replace(/[^+\d]/g, "");
  return `tel:${sanitized}`;
}

export default function FooterCTA({
  heading = "Get In Touch",
  ctaTitle = "Ready to transform your IT infrastructure?",
  ctaSubtitle = "Contact us to discuss your technology needs.",
  email = "info@tech-bridgegroup.com",
  phone = "+961 70 60 68 18",
  tagline = "Innovate, Connect, Build",
  className,
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer
      id="footer-cta" /* Why: anchor for IntersectionObserver */
      className={cn(
        "relative isolate overflow-hidden",
        "pt-12 pb-4 sm:pt-16 sm:pb-6",
        "bg-gradient-to-b from-sky-200 via-cyan-200 to-blue-300",
        className
      )}
    >
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>
        </div>

        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, y: 16 } : undefined}
          whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "mx-auto mt-6 max-w-4xl rounded-[28px] p-[2px]",
            "bg-gradient-to-br from-sky-400/70 via-cyan-400/50 to-blue-500/70"
          )}
        >
          <div
            className={cn(
              "rounded-[26px] backdrop-blur-xl",
              "bg-white/35",
              "ring-1 ring-sky-900/10 shadow-[0_10px_30px_rgba(14,165,233,0.18)]",
              "px-6 py-8 sm:px-8 sm:py-10 text-center"
            )}
          >
            <p className="text-xl sm:text-2xl font-semibold text-slate-900">
              {ctaTitle}
            </p>
            <p className="mt-2 text-base text-slate-800">{ctaSubtitle}</p>

            {/* Contact: stacked vertically, centered */}
            <div className="mt-5 flex flex-col items-center gap-2 text-sky-800">
              {/* Email row */}
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" aria-hidden />
                <a
                  href={`mailto:${email}`}
                  className="text-lg text-sky-900 underline decoration-sky-500/60 underline-offset-4 transition hover:text-sky-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600/40 rounded"
                >
                  {email}
                </a>
              </div>

              {/* Phone row (below email) */}
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" aria-hidden />
                <a
                  href={toTelHref(phone)}
                  className="text-lg text-sky-900 underline decoration-sky-500/60 underline-offset-4 transition hover:text-sky-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600/40 rounded"
                >
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="relative mt-3 text-center text-xl text-sky-900">
          {tagline}
        </p>

        <div className="mt-3 flex flex-col items-center justify-between gap-3 border-t border-slate-400/60 pt-2 text-xs text-slate-800 sm:flex-row">
          <p className="mb-0">© {new Date().getFullYear()} Tech Bridge Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
