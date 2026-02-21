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
        "group flex flex-col overflow-hidden border hover:shadow-xl transition-all duration-300 ease-out h-full",
        "hover:border-primary/20 cursor-pointer",
        featured && hasMedia && "sm:flex-row sm:min-h-[280px]",
        className,
      )}
    >
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
                featured ? "h-full min-h-[220px]" : "h-48",
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
                featured ? "h-full min-h-[220px]" : "h-48",
              )}
            />
          )}
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">
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
              <div className="flex flex-wrap gap-1">
                {tags.map((tag) => (
                  <Badge
                    className="px-1.5 py-0.5 text-[10px] font-medium"
                    variant="secondary"
                    key={tag}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>

          <CardFooter className="px-5 pb-4 pt-2">
            {links && links.length > 0 && (
              <div className="flex flex-row flex-wrap items-start gap-1.5">
                {links.map((link, idx) => (
                  <Link href={link?.href} key={idx} target="_blank">
                    <Badge
                      key={idx}
                      className="flex gap-1.5 px-2.5 py-1 text-[10px] font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
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
