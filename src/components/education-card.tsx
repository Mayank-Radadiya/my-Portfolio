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
    <div className="relative flex gap-4 pb-6 last:pb-0">
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-[19px] top-12 bottom-0 w-px bg-border" />
      )}

      {/* Timeline node */}
      <div className="relative z-10 flex-none">
        <Avatar className="size-10 border bg-card shadow-sm ring-2 ring-background">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain p-1"
          />
          <AvatarFallback className="text-[10px] font-heading font-semibold">
            {altText[0]}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Content — compact */}
      <Link
        href={href || "#"}
        target="_blank"
        className="group flex-1 cursor-pointer min-w-0 pt-1"
      >
        <div
          className={cn(
            "rounded-lg border bg-card px-4 py-3",
            "transition-all duration-200",
            "hover:border-accent/20 hover:shadow-sm",
          )}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-heading font-semibold text-sm leading-tight truncate">
                {school}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">
                {degree}
              </p>
            </div>
            <span className="flex-none text-[11px] font-medium tabular-nums text-muted-foreground">
              {start}–{end}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
