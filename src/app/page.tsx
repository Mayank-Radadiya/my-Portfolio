import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { EducationCard } from "@/components/education-card";
import { AnimatedRole } from "@/components/animated-role";
import { GitHubStats } from "@/components/github-stats";
import { ContactForm } from "@/components/contact-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { MapPin, Mail, Sparkles, ArrowRight } from "lucide-react";

const DELAY = 0.12;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-24 sm:space-y-32 pb-32">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section id="hero" className="pt-12 sm:pt-20">
        <div className="space-y-8">
          <div className="flex justify-between items-start gap-6">
            <div className="flex-col flex flex-1 space-y-5">
              {/* Status badge */}
              <BlurFade delay={DELAY}>
                <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Open to opportunities
                </div>
              </BlurFade>

              {/* Name — large typographic hero */}
              <BlurFadeText
                delay={DELAY * 2}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight font-heading leading-[1.1]"
                yOffset={8}
                text={`${DATA.name}`}
              />

              {/* Animated role */}
              <BlurFade delay={DELAY * 3}>
                <div className="text-lg sm:text-xl text-muted-foreground flex items-center gap-2">
                  <Sparkles className="size-4 text-accent" />
                  <AnimatedRole roles={DATA.roles} />
                </div>
              </BlurFade>

              {/* Description */}
              <BlurFade delay={DELAY * 4}>
                <p className="max-w-lg text-muted-foreground leading-relaxed">
                  {DATA.description}
                </p>
              </BlurFade>

              {/* CTA Buttons */}
              <BlurFade delay={DELAY * 5}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors cursor-pointer"
                  >
                    View Projects
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-colors cursor-pointer"
                  >
                    <Mail className="size-3.5" />
                    Get in Touch
                  </Link>
                </div>
              </BlurFade>

              {/* Location + Social links */}
              <BlurFade delay={DELAY * 6}>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Link
                    href={DATA.locationLink}
                    target="_blank"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    <MapPin className="size-3" />
                    {DATA.location}
                  </Link>

                  <div className="h-3 w-px bg-border" />

                  <div className="flex items-center gap-1">
                    {Object.entries(DATA.contact.social).map(
                      ([name, social]) => (
                        <Link
                          key={name}
                          href={social.url}
                          target="_blank"
                          className="inline-flex items-center justify-center rounded-md size-7 text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors cursor-pointer"
                          aria-label={name}
                        >
                          <social.icon className="size-3.5" />
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </BlurFade>
            </div>

            {/* Avatar */}
            <BlurFade delay={DELAY * 2}>
              <Avatar className="size-28 sm:size-36 border-2 shadow-lg ring-4 ring-background">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback className="font-heading text-lg">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      <section id="about">
        <BlurFade delay={DELAY * 3} inView>
          <div className="flex gap-6">
            <div className="hidden sm:block w-px bg-accent/30 flex-none" />
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
                About
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground max-w-2xl">
                {DATA.summary}
              </p>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* ═══════════════════ SKILLS ═══════════════════ */}
      <section id="skills">
        <BlurFade delay={DELAY * 3} inView>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent mb-8">
            Tech Stack
          </h2>
        </BlurFade>
        <div className="space-y-6">
          {DATA.skillCategories.map((category, catIdx) => (
            <BlurFade
              key={category.name}
              delay={DELAY * 4 + catIdx * 0.08}
              inView
            >
              <div className="flex items-start gap-6">
                <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60 w-20 flex-none pt-1.5 font-mono">
                  {category.name}
                </span>
                <div className="h-px bg-border flex-none w-6 mt-3" />
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 text-xs font-medium hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
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
