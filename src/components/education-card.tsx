"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface EducationCardProps {
  logoUrl: string;
  altText: string;
  school: string;
  degree: string;
  href?: string;
  start: string;
  end: string;
  isLast?: boolean;
}

export function EducationCard({
  logoUrl,
  altText,
  school,
  degree,
  href,
  start,
  end,
  isLast = false,
}: EducationCardProps) {
  return (
    <div className="relative flex gap-6 pb-8 last:pb-0">
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-[23px] top-14 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
      )}

      {/* Timeline node */}
      <div className="relative z-10 flex-none">
        <div className="relative">
          <div className="absolute -inset-1.5 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Avatar className="size-12 border-2 border-primary/20 bg-card shadow-sm ring-4 ring-background">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain p-1"
            />
            <AvatarFallback className="text-xs font-heading font-semibold bg-primary/5 text-primary">
              {altText[0]}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Content card */}
      <Link
        href={href || "#"}
        target="_blank"
        className="group flex-1 cursor-pointer"
      >
        <div
          className={cn(
            "rounded-xl border bg-card p-4 sm:p-5",
            "transition-all duration-300 ease-out",
            "hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5",
            "hover:-translate-y-0.5",
          )}
        >
          {/* Top row: school name + date pill */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-heading font-semibold text-sm sm:text-base leading-tight text-foreground">
              {school}
            </h3>
            <span className="flex-none inline-flex items-center rounded-full bg-primary/8 border border-primary/15 px-2.5 py-0.5 text-[11px] font-medium tabular-nums text-primary whitespace-nowrap">
              {start} – {end}
            </span>
          </div>

          {/* Degree */}
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
            {degree}
          </p>

          {/* Subtle arrow indicator */}
          <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground/60 group-hover:text-primary/70 transition-colors duration-300">
            <span className="inline-block w-4 h-px bg-current transition-all duration-300 group-hover:w-6" />
            <span className="text-[11px]">Visit</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
