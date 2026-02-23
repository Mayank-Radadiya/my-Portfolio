import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates?: string | undefined;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  image,
  video,
  links,
  className,
  featured,
}: Props) {
  const hasMedia = !!video || !!image;

  if (featured && hasMedia) {
    return (
      <div
        className={cn(
          "group relative rounded-lg border bg-card overflow-hidden",
          "transition-all duration-300",
          "hover:border-accent/20 hover:shadow-lg",
          className,
        )}
      >
        {/* Media — full width on top */}
        <Link
          href={href || "#"}
          target="_blank"
          className="block relative overflow-hidden bg-muted cursor-pointer"
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-64 sm:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          )}
          {!video && image && (
            <Image
              src={image}
              alt={title}
              width={1200}
              height={600}
              className="w-full h-64 sm:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-sm font-medium bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full border shadow-sm">
              <ExternalLink className="size-3.5" />
              View Live
            </span>
          </div>
        </Link>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                Featured
              </span>
            </div>
            <h3 className="text-xl font-heading font-semibold tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge
                  className="px-2 py-0.5 text-[10px] font-medium transition-colors cursor-default"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Links */}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {links.map((link, idx) => (
                <Link href={link.href} key={idx} target="_blank">
                  <Badge className="flex gap-1.5 px-3 py-1.5 text-[11px] font-medium bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-pointer">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-lg border bg-card overflow-hidden h-full",
        "transition-all duration-300",
        "hover:border-accent/20 hover:shadow-md",
        "hover:-translate-y-0.5 cursor-pointer",
        className,
      )}
    >
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-accent/0 group-hover:bg-accent/40 transition-colors duration-300" />

      {/* Media */}
      {hasMedia && (
        <Link
          href={href || "#"}
          target="_blank"
          className="block overflow-hidden relative bg-muted"
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
          {!video && image && (
            <Image
              src={image}
              alt={title}
              width={700}
              height={450}
              className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
        </Link>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        <div className="space-y-1.5">
          <h3 className="font-heading font-semibold text-base leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-auto space-y-3">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 5).map((tag) => (
                <Badge
                  className="px-2 py-0.5 text-[10px] font-medium transition-colors cursor-default"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
              {tags.length > 5 && (
                <Badge
                  className="px-2 py-0.5 text-[10px] font-medium cursor-default"
                  variant="secondary"
                >
                  +{tags.length - 5}
                </Badge>
              )}
            </div>
          )}

          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {links.map((link, idx) => (
                <Link href={link.href} key={idx} target="_blank">
                  <Badge className="flex gap-1.5 px-3 py-1.5 text-[11px] font-medium bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-pointer">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
