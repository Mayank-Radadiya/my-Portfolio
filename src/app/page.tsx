import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { AnimatedRole } from "@/components/animated-role";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowDown, MapPin, Mail, Sparkles } from "lucide-react";

const BLUR_FADE_DELAY = 0.15;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16 pb-24">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section id="hero" className="pt-8 sm:pt-12">
        <div className="mx-auto w-full space-y-8">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-col flex flex-1 space-y-4">
              {/* Status badge */}
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Open to opportunities
                </div>
              </BlurFade>

              {/* Name */}
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-4xl font-bold tracking-tight font-heading sm:text-5xl lg:text-6xl"
                yOffset={8}
                text={`Hey, I'm ${DATA.name.split(" ")[0]}`}
              />

              {/* Animated role */}
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="text-lg sm:text-xl text-muted-foreground flex items-center gap-2">
                  <Sparkles className="size-4 text-primary" />
                  <AnimatedRole roles={DATA.roles} />
                </div>
              </BlurFade>

              {/* Description */}
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <p className="max-w-lg text-muted-foreground leading-relaxed">
                  {DATA.description}
                </p>
              </BlurFade>

              {/* Location + Social links */}
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={DATA.locationLink}
                    target="_blank"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    <MapPin className="size-3.5" />
                    {DATA.location}
                  </Link>

                  <div className="h-4 w-px bg-border" />

                  <div className="flex items-center gap-2">
                    {Object.entries(DATA.contact.social).map(
                      ([name, social]) => (
                        <Link
                          key={name}
                          href={social.url}
                          target="_blank"
                          className="inline-flex items-center justify-center rounded-md size-8 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
                          aria-label={name}
                        >
                          <social.icon className="size-4" />
                        </Link>
                      ),
                    )}
                    <Link
                      href={`mailto:${DATA.contact.email}`}
                      className="inline-flex items-center justify-center rounded-md size-8 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
                      aria-label="Email"
                    >
                      <Mail className="size-4" />
                    </Link>
                  </div>
                </div>
              </BlurFade>
            </div>

            {/* Avatar */}
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <Avatar className="size-28 sm:size-32 border-2 border-primary/10 shadow-lg">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback className="font-heading text-lg">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>

          {/* Scroll indicator */}
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex justify-center pt-4">
              <ArrowDown className="size-4 text-muted-foreground/50 animate-bounce-gentle" />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            About
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="text-base leading-relaxed text-muted-foreground max-w-2xl">
            {DATA.summary}
          </p>
        </BlurFade>
      </section>

      {/* ═══════════════════ SKILLS ═══════════════════ */}
      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
            Tech Stack
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {DATA.skillCategories.map((category, catIdx) => (
            <BlurFade
              key={category.name}
              delay={BLUR_FADE_DELAY * 4 + catIdx * 0.1}
              inView
            >
              <div className="space-y-3">
                <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-2.5 py-1 text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ═══════════════════ EDUCATION ═══════════════════ */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Education
            </h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 4 + id * 0.08}
              inView
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} – ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ═══════════════════ PROJECTS ═══════════════════ */}
      <section id="projects">
        <div className="space-y-8 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Projects
              </h2>
              <p className="text-muted-foreground text-sm max-w-lg">
                A selection of projects I&apos;ve built — from automation
                platforms to real-time collaboration tools.
              </p>
            </div>
          </BlurFade>

          {/* Featured project */}
          {DATA.projects
            .filter((p) => p.featured)
            .map((project) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 4} inView>
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DATA.projects
              .filter((p) => !p.featured)
              .map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 5 + id * 0.08}
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

      {/* ═══════════════════ CONTACT CTA ═══════════════════ */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
          <div className="relative overflow-hidden rounded-2xl border bg-card p-8 sm:p-12 text-center">
            <div className="relative z-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight">
                Let&apos;s work together
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Have a project in mind or just want to connect? I&apos;m always
                open to discussing new opportunities.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  <Mail className="size-4" />
                  Get in Touch
                </Link>
                <Link
                  href={DATA.contact.social.X.url}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-accent transition-colors cursor-pointer"
                >
                  DM on X
                </Link>
              </div>
            </div>

            {/* Decorative gradient orbs */}
            <div className="absolute -top-24 -right-24 size-48 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 size-48 rounded-full bg-primary/5 blur-3xl" />
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
