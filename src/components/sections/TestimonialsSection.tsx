"use client";

import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { TESTIMONIALS } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

const cardVariantClasses: Record<Testimonial["variant"], string> = {
  white: "bg-white border-secondary-container text-on-surface",
  blue: "bg-primary border-white text-white",
  gold: "bg-secondary-container border-white text-on-primary-fixed",
};

const rotationClasses: Record<Testimonial["rotation"], string> = {
  cw: "rotate-1",
  ccw: "-rotate-1",
  neutral: "rotate-0",
};

const modalVariantClasses: Record<Testimonial["variant"], string> = {
  white: "bg-white text-on-surface border-primary",
  blue: "bg-primary text-white border-white",
  gold: "bg-secondary-container text-on-primary-fixed border-secondary",
};

/* ── Hover Overlay Modal ── */
function TestimonialOverlay({ t }: { t: Testimonial }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        backgroundColor: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        pointerEvents: "none", // ← lets mouse events pass through to card below
        animation: "overlayFadeIn 0.2s ease both",
      }}
    >
      <div
        style={{
          animation: "testimonialPop 0.25s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
        className={cn(
          "w-full max-w-lg p-10 border-4 rounded-2xl shadow-2xl",
          modalVariantClasses[t.variant]
        )}
      >
        {/* Avatar + Name */}
        <div className="flex items-center gap-5 mb-6">
          <Image
            src={t.avatarSrc}
            alt={t.name}
            width={72}
            height={72}
            className="w-18 h-18 rounded-full object-cover ring-4 ring-current ring-offset-2"
          />
          <div>
            <p className={cn(
              "font-black uppercase text-lg font-headline tracking-wide",
              t.variant === "blue" ? "text-white" : "text-on-surface"
            )}>
              {t.name}
            </p>
            <p className={cn(
              "text-sm uppercase font-body mt-1",
              t.variant === "blue" ? "text-blue-200" : "text-on-surface-variant"
            )}>
              {t.role}, {t.company}
            </p>
            {/* Stars */}
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current opacity-80" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-current opacity-20 mb-6" />

        {/* Full Quote */}
        <p className="font-bold text-xl leading-relaxed italic font-body">
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>
    </div>,
    document.body
  );
}

/* ── Grid Card ── */
function TestimonialCard({ t }: { t: Testimonial }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "w-full p-6 border-4 shadow-md cursor-default",
          "transition-all duration-200",
          hovered ? "scale-[1.03] shadow-xl opacity-90" : "",
          cardVariantClasses[t.variant],
          rotationClasses[t.rotation]
        )}
      >
        <div className="flex gap-3 mb-4">
          <Image
            src={t.avatarSrc}
            alt={t.name}
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p className={cn(
              "font-black uppercase text-xs font-headline",
              t.variant === "blue" ? "text-white" : "text-on-surface"
            )}>
              {t.name}
            </p>
            <p className={cn(
              "text-xs uppercase font-body",
              t.variant === "blue" ? "text-blue-200" : "text-on-surface-variant"
            )}>
              {t.role}, {t.company}
            </p>
          </div>
        </div>
        <p className="font-semibold text-sm leading-snug italic font-body line-clamp-3">
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>

      {/* Portal overlay — only mounts when this card is hovered */}
      {hovered && <TestimonialOverlay t={t} />}
    </>
  );
}

/* ── Section ── */
export function TestimonialsSection() {
  return (
    <>
      <style>{`
        @keyframes testimonialPop {
          from { transform: scale(0.8); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      <section className="py-20 bg-on-primary-fixed overflow-hidden relative border-y-4 border-primary">
        <div className="mb-10 px-6 md:px-10 text-center">
          <div className="text-white text-xs font-black uppercase tracking-widest opacity-50 font-body">
            What Founders Say
          </div>
        </div>

        <div className="px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </section>
    </>
  );
}