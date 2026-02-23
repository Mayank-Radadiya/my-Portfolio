"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { GitFork, Star, BookOpen, Code2 } from "lucide-react";

interface GitHubData {
  publicRepos: number;
  followers: number;
  totalStars: number;
  topLanguages: string[];
}

function AnimatedNumber({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

const STAT_ITEMS = [
  { key: "publicRepos", label: "Repositories", icon: BookOpen },
  { key: "totalStars", label: "Stars Earned", icon: Star },
  { key: "followers", label: "Followers", icon: GitFork },
] as const;

export function GitHubStats({ username }: { username: string }) {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("API error");

        const user = await userRes.json();
        const repos = await reposRes.json();

        const totalStars = repos.reduce(
          (sum: number, repo: { stargazers_count: number }) =>
            sum + repo.stargazers_count,
          0,
        );

        const langCount: Record<string, number> = {};
        repos.forEach((repo: { language: string | null }) => {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1;
          }
        });
        const topLanguages = Object.entries(langCount)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([lang]) => lang);

        setData({
          publicRepos: user.public_repos,
          followers: user.followers,
          totalStars,
          topLanguages,
        });
      } catch {
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHub();
  }, [username]);

  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 rounded-lg bg-muted animate-pulse" />
        ))}
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4">
        {STAT_ITEMS.map(({ key, label, icon: Icon }) => (
          <div
            key={key}
            className={cn(
              "relative group rounded-lg border bg-card p-5",
              "transition-all duration-200",
              "hover:border-accent/30 hover:shadow-sm cursor-default",
            )}
          >
            <Icon className="size-4 text-muted-foreground mb-3" />
            <div className="font-heading text-2xl sm:text-3xl font-bold tabular-nums tracking-tight">
              <AnimatedNumber value={data[key]} />
            </div>
            <p className="text-xs text-muted-foreground mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Top languages */}
      {data.topLanguages.length > 0 && (
        <div className="flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Code2 className="size-3.5" />
            Top Languages
          </span>
          <div className="flex gap-2 flex-wrap">
            {data.topLanguages.map((lang) => (
              <span
                key={lang}
                className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
