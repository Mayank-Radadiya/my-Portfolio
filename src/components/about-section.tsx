import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowDownToLine, Mail } from "lucide-react";

const BASE_DELAY = 0.36;
const STEP = 0.06;

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function AboutSection() {
  const { about } = DATA;

  return (
    <section id="about">
      {/* Header — label on a ruled line */}
      <BlurFade delay={BASE_DELAY} inView>
        <div className="border-b border-border pb-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
            About
          </h2>
        </div>
      </BlurFade>

      <div className="mt-8 grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
        {/* ─── Identity rail ─── */}
        <BlurFade
          delay={BASE_DELAY + STEP}
          inView
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <div className="space-y-6 lg:border-r lg:border-border lg:pr-8">
            <div className="space-y-1.5">
              <p className="font-heading text-base font-semibold tracking-tight">
                {DATA.name}
              </p>
              <p className="font-mono text-[11px] tracking-tight text-muted-foreground">
                {about.identity.role}
              </p>
            </div>

            <div className="h-px w-8 bg-border" />

            <dl className="space-y-3 font-mono text-[11px] tracking-tight text-muted-foreground">
              <div>
                <dt>{about.identity.org}</dt>
                <dd className="text-foreground/80">{about.identity.program}</dd>
              </div>
              <div>
                <dt>Period</dt>
                <dd>{about.identity.period}</dd>
              </div>
            </dl>

            <div className="border-l-2 border-accent pl-3">
              <p className="font-mono text-[11px] tracking-tight text-muted-foreground">
                Looking for
              </p>
              <p className="mt-1 text-sm leading-snug text-foreground">
                {about.lookingFor}
              </p>
            </div>
          </div>
        </BlurFade>

        {/* ─── Narrative + capability table + principles ─── */}
        <div className="space-y-10">
          <BlurFade delay={BASE_DELAY + STEP * 2} inView>
            <p className="max-w-prose text-lg leading-relaxed text-foreground/90">
              {about.headline}
            </p>
          </BlurFade>

          <BlurFade delay={BASE_DELAY + STEP * 3} inView>
            <div>
              <h3 className="font-mono text-[11px] tracking-tight text-muted-foreground">
                Capabilities
              </h3>
              <dl className="mt-3">
                {about.capabilities.map((capability) => (
                  <div
                    key={capability.label}
                    className="about-row justify-between"
                  >
                    <dt className="about-row-label">{capability.label}</dt>
                    <dd className="about-row-meta">{capability.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </BlurFade>

          <BlurFade delay={BASE_DELAY + STEP * 4} inView>
            <div>
              <h3 className="font-mono text-[11px] tracking-tight text-muted-foreground">
                Principles
              </h3>
              <ul className="mt-3">
                {about.principles.map((principle) => (
                  <li key={principle.label} className="about-row gap-x-3">
                    <span className="about-row-label">{principle.label}</span>
                    <span className="text-sm text-muted-foreground">
                      {principle.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>

          {/* ─── Contact row ─── */}
          <BlurFade delay={BASE_DELAY + STEP * 5} inView>
            <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
              <a
                href={`mailto:${DATA.contact.email}`}
                className={`link-underline inline-flex items-center gap-2 rounded-sm font-mono text-xs tracking-tight text-muted-foreground transition-colors hover:text-foreground ${FOCUS_RING}`}
              >
                <Mail className="size-3.5" />
                {DATA.contact.email}
              </a>

              <Link
                href={DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`cta-sheen group inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-xs font-medium text-background ${FOCUS_RING}`}
              >
                Résumé
                <ArrowDownToLine className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}