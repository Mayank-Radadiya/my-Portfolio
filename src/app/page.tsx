import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { AboutSection } from "@/components/about-section";
import { ProjectCard } from "@/components/project-card";
import { EducationCard } from "@/components/education-card";
import { AnimatedRole } from "@/components/animated-role";
import { GitHubStats } from "@/components/github-stats";
import { ContactForm } from "@/components/contact-form";
import { StackSection } from "@/components/stack-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { MapPin, Mail, Sparkles, ArrowRight } from "lucide-react";

const DELAY = 0.12;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-24 sm:space-y-32 pb-32">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section id="hero" className="relative pt-12 sm:pt-16">
        <div aria-hidden className="hero-grid pointer-events-none absolute inset-x-0 -top-8 -z-10 h-[420px]" />

        <div className="space-y-8">
          {/* Metadata rule — status, location, socials */}
          <BlurFade delay={DELAY}>
            <div className="space-y-3">
              <div className="h-px w-full bg-border" />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-600 dark:text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  Open to work
                </span>

                <div className="h-3 w-px bg-border" />

                <Link
                  href={DATA.locationLink}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground cursor-pointer"
                >
                  <MapPin className="size-3" />
                  {DATA.location}
                </Link>

                <div className="h-3 w-px bg-border" />

                <div className="flex items-center gap-0.5">
                  {Object.entries(DATA.contact.social).map(
                    ([name, social]) => (
                      <Link
                        key={name}
                        href={social.url}
                        target="_blank"
                        className="inline-flex items-center justify-center rounded-md size-6 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/10 cursor-pointer"
                        aria-label={name}
                      >
                        <social.icon className="size-3.5" />
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Masthead + portrait strip */}
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-end lg:gap-16">
            <div className="space-y-8">
              <BlurFadeText
                delay={DELAY * 2}
                className="text-[clamp(2.75rem,10.5vw,8rem)] font-heading font-bold tracking-tighter leading-[0.92]"
                yOffset={16}
                text={`${DATA.name}`}
              />

              {/* Animated role with drawn accent underline */}
              <BlurFade delay={DELAY * 3}>
                <div className="relative w-fit pb-2">
                  <div className="flex items-center gap-2 text-lg text-muted-foreground sm:text-xl">
                    <Sparkles className="size-4 shrink-0 text-accent" />
                    <AnimatedRole roles={DATA.roles} />
                  </div>
                  <div className="role-underline absolute bottom-0 left-0 h-px w-full bg-accent/70" />
                </div>
              </BlurFade>

              {/* Standfirst + rule */}
              <BlurFade delay={DELAY * 4}>
                <div className="space-y-8">
                  <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                    {DATA.description}
                  </p>
                  <div className="h-px w-full bg-border" />
                </div>
              </BlurFade>

              {/* CTAs — solid block + quiet link */}
              <BlurFade delay={DELAY * 5}>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link
                    href="#projects"
                    className="cta-sheen group inline-flex items-center gap-3 rounded-lg bg-foreground px-7 py-3.5 text-sm font-medium text-background"
                  >
                    View Projects
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="#contact"
                    className="link-underline group inline-flex items-center gap-2 py-2 font-mono text-xs uppercase tracking-[0.15em] text-foreground"
                  >
                    <Mail className="size-3.5 text-accent" />
                    Get in Touch
                  </Link>
                </div>
              </BlurFade>
            </div>

            {/* Right-edge portrait strip */}
            <BlurFade delay={DELAY * 3} className="lg:justify-self-end">
              <figure className="portrait-strip group relative w-40 overflow-hidden rounded-lg border border-border bg-muted sm:w-48 lg:w-full">
                <div className="aspect-[3/4] w-full">
                  <Avatar className="size-full rounded-none">
                    <AvatarImage
                      alt={DATA.name}
                      src={DATA.avatarUrl}
                      className="portrait-img size-full object-cover"
                    />
                    <AvatarFallback className="size-full rounded-none font-heading text-3xl">
                      {DATA.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 px-3 pb-3 font-mono text-[0.625rem] uppercase tracking-[0.15em] text-muted-foreground">
                  Bengaluru, IN
                </figcaption>
              </figure>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      <AboutSection />

      {/* ═══════════════════ TECH STACK ═══════════════════ */}
      <StackSection />

      {/* ═══════════════════ PROJECTS ═══════════════════ */}
      <section id="projects">
        <div className="space-y-8 w-full">
          <BlurFade delay={DELAY * 3} inView>
            <div className="flex items-end justify-between gap-4">
              <div className="space-y-2">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Projects
                </h2>
                <p className="text-muted-foreground text-sm max-w-lg">
                  A selection of projects I&apos;ve built — from automation
                  platforms to real-time collaboration tools.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Featured project */}
          {DATA.projects
            .filter((p) => p.featured)
            .map((project) => (
              <BlurFade key={project.title} delay={DELAY * 4} inView>
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                  featured
                />
              </BlurFade>
            ))}

          {/* Other projects grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {DATA.projects
              .filter((p) => !p.featured)
              .map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={DELAY * 5 + id * 0.08}
                  inView
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ GITHUB ═══════════════════ */}
      <section id="github">
        <BlurFade delay={DELAY * 3} inView>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent mb-8">
            GitHub Activity
          </h2>
        </BlurFade>
        <BlurFade delay={DELAY * 4} inView>
          <GitHubStats username={DATA.githubUsername} />
        </BlurFade>
      </section>

      {/* ═══════════════════ EDUCATION ═══════════════════ */}
      <section id="education">
        <div className="space-y-6">
          <BlurFade delay={DELAY * 3} inView>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
              Education
            </h2>
          </BlurFade>

          <div className="relative max-w-xl ">
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={DELAY * 4 + id * 0.08}
                inView
              >
                <EducationCard
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  school={education.school}
                  degree={education.degree}
                  href={education.href}
                  start={education.start}
                  end={education.end}
                  isLast={id === DATA.education.length - 1}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT ═══════════════════ */}
      <section id="contact">
        <BlurFade delay={DELAY * 3} inView>
          <div className="rounded-lg border bg-card p-8 sm:p-12 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight">
                Let&apos;s work together
              </h2>
              <p className="text-muted-foreground max-w-md">
                Have a project in mind or just want to connect? I&apos;m always
                open to discussing new opportunities.
              </p>
            </div>
            <ContactForm />
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
