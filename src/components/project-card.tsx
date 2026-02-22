import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <Card
      className={cn(
        "group relative flex flex-col overflow-hidden border h-full",
        "transition-all duration-300 ease-out",
        "hover:shadow-xl hover:shadow-primary/5 hover:border-primary/25",
        "hover:-translate-y-0.5 cursor-pointer",
        featured && hasMedia && "sm:flex-row sm:min-h-[280px]",
        className,
      )}
    >
      {/* Gradient accent bar (non-featured only) */}
      {!featured && (
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-primary/60 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {/* Media Section */}
      {hasMedia && (
        <Link
          href={href || "#"}
          target="_blank"
          className={cn(
            "block overflow-hidden relative bg-muted",
            featured ? "sm:w-3/5 w-full" : "w-full",
          )}
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className={cn(
                "pointer-events-none w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]",
                featured ? "h-full min-h-[220px]" : "h-52",
              )}
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={700}
              height={450}
              className={cn(
                "w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]",
                featured ? "h-full min-h-[220px]" : "h-52",
              )}
            />
          )}
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      )}

      {/* Content Section */}
      <div
        className={cn(
          "flex flex-col flex-1 justify-between",
          featured && hasMedia && "sm:w-2/5",
        )}
      >
        <CardHeader className="px-5 pt-5 pb-2">
          <div className="space-y-2.5">
            {featured && (
              <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                Featured Project
              </span>
            )}
            <CardTitle className="text-lg font-heading font-semibold leading-tight">
              {title}
            </CardTitle>
            <p
              className={cn(
                "text-sm text-muted-foreground leading-relaxed",
                featured ? "line-clamp-4" : "line-clamp-3",
              )}
            >
              {description}
            </p>
          </div>
        </CardHeader>

        <div className="mt-auto">
          <CardContent className="flex flex-col px-5 pb-2">
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <Badge
                    className="px-2 py-0.5 text-[10px] font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                    variant="secondary"
                    key={tag}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>

          <CardFooter className="px-5 pb-5 pt-2">
            {links && links.length > 0 && (
              <div className="flex flex-row flex-wrap items-start gap-2">
                {links.map((link, idx) => (
                  <Link href={link?.href} key={idx} target="_blank">
                    <Badge
                      key={idx}
                      className="flex gap-1.5 px-3 py-1.5 text-[11px] font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                    >
                      {link.icon}
                      {link.type}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
