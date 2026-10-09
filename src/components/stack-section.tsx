"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { DATA } from "@/data/resume";

const EASE = [0.16, 1, 0.3, 1] as const;

export function StackSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  const { stack } = DATA;
  const shown = reduce || inView;

  return (
    <section id="skills">
      {/* Header — label on a ruled line, scope on the right */}
      <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
          Tech Stack
        </h2>
        <span className="shrink-0 font-mono text-[11px] tracking-tight text-muted-foreground">
          {stack.meta}
        </span>
      </div>

      <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
        {stack.intro}
      </p>

      <div ref={ref} className="mt-12">
        {/* ─── The layers; each draws its hairline to the next ─── */}
        <div className="stack-cols" data-drawn={shown}>
          {stack.layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              className="stack-lane"
              initial={{ opacity: 0, y: 8 }}
              animate={shown ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.12 + i * 0.07, ease: EASE }}
            >
              <span className="stack-dot" />
              <h3 className="mt-4 font-heading text-sm font-medium tracking-tight text-foreground">
                {layer.name}
              </h3>
              <ul className="stack-tools mt-3 space-y-1.5">
                {layer.tools.map((tool) => (
                  <li
                    key={tool}
                    className="font-mono text-[11px] tracking-tight text-muted-foreground"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ─── AI band — the one accented thing in the section ─── */}
        <motion.div
          className="mt-12 border-l-2 border-accent pl-5"
          initial={{ opacity: 0, y: 8 }}
          animate={shown ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.72, ease: EASE }}
        >
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
            <h3 className="font-heading text-sm font-medium tracking-tight text-foreground">
              {stack.ai.name}
            </h3>
            {stack.ai.tools.map((tool, i) => (
              <span key={tool} className="flex items-baseline gap-x-3">
                {i > 0 && (
                  <span aria-hidden className="h-2.5 w-px translate-y-px bg-border" />
                )}
                <span className="font-mono text-[11px] tracking-tight text-foreground/70">
                  {tool}
                </span>
              </span>
            ))}
          </div>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            {stack.ai.detail}
          </p>
        </motion.div>

        {/* ─── Also ─── */}
        <motion.div
          className="mt-10 border-t border-border pt-5"
          initial={{ opacity: 0 }}
          animate={shown ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.82, ease: EASE }}
        >
          <p className="font-mono text-[11px] tracking-tight text-foreground/60">
            Also
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
            {stack.also.map((tool) => (
              <li
                key={tool}
                className="font-mono text-[11px] tracking-tight text-muted-foreground"
              >
                {tool}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
