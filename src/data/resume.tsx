import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Mayank R.",
  initials: "MR",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description: "Full-Stack Developer crafting performant web experiences.",
  roles: ["Full-Stack Developer", "Open Source Enthusiast", "UI/UX Thinker"],
  summary:
    "I build fast, reliable web applications with TypeScript, Next.js, and Node.js. From automated workflows to real-time collaboration tools — I turn complex ideas into clean, scalable products. Currently pursuing Computer Science at Jain University, Bengaluru.",
  about: {
    identity: {
      role: "Full-Stack Developer",
      org: "Jain University",
      program: "B.Tech, Computer Science & Engineering",
      period: "2022 — 2026",
    },
    lookingFor: "Full-stack and product engineering roles",
    headline:
      "I build full-stack products where AI is part of the architecture, not a prompt stuck on the side. Most of my work starts as a weekend idea and ends as something real people use — FlowX, a low-code automation platform with AI workflow nodes, is the clearest example. I care about the parts most demos skip: the schema, the loading states, the deploy pipeline.",
    capabilities: [
      { label: "AI product engineering", detail: "Vercel AI SDK · Gemini" },
      {
        label: "Full-stack systems",
        detail: "Next.js · tRPC · Prisma · PostgreSQL",
      },
      { label: "Realtime collaboration", detail: "WebRTC · Convex · Inngest" },
      { label: "Interface engineering", detail: "React · Tailwind · Framer Motion" },
    ],
    principles: [
      {
        label: "Own the whole path.",
        detail: "Database through UI, no handoff in the middle.",
      },
      { label: "Ship every week.", detail: "Small, working, in production." },
      {
        label: "Automate the boring 80%.",
        detail: "If I do it twice, it becomes a script.",
      },
    ],
  },
  avatarUrl: "/avatar.jpeg",
  resumeUrl: "#",
  githubUsername: "Mayank-Radadiya",
  stack: {
    meta: "Interface to deployment",
    intro:
      "Top of the stack to the bottom — the tools these projects are built on.",
    layers: [
      {
        name: "Interface",
        tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      },
      {
        name: "Service",
        tools: ["Node.js", "tRPC", "REST APIs", "Inngest", "WebRTC"],
      },
      {
        name: "Data",
        tools: ["PostgreSQL", "Prisma", "Convex"],
      },
      {
        name: "Platform",
        tools: ["Vercel", "Docker", "Git & GitHub", "Better Auth", "Clerk"],
      },
    ],
    ai: {
      name: "AI",
      tools: ["Vercel AI SDK", "Gemini"],
      detail: "Workflow nodes in FlowX, inline suggestions in CodeHub.",
    },
    also: [
      "JavaScript",
      "Java",
      "Solidity",
      "HTML",
      "CSS",
      "Postman",
      "Monaco Editor",
      "Stripe",
      "Mux",
      "Uploadthing",
    ],
  },
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "mayankradadiya2@gmail.com",
    tel: "xxx",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Mayank-Radadiya",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mayank-radadiya-693583241/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_Mayank_005",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  education: [
    {
      school: "Jain University",
      href: "https://www.jainuniversity.ac.in/",
      degree: "B.Tech in Computer Science & Engineering",
      logoUrl: "/jain.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Kaushal Vidyabhavan",
      href: "https://kaushalvidyabhavan.com/",
      degree: "Higher Secondary Education",
      logoUrl: "/Kaushal.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Gurukul Surat",
      href: "https://surat.rajkotgurukul.org/",
      degree: "Secondary Education (Std 3–10)",
      logoUrl: "/gurukul.png",
      start: "2013",
      end: "2020",
    },
  ],

  projects: [
    {
      title: "FlowX",
      href: "https://x-flow.vercel.app/",
      dates: "",
      active: true,
      featured: true,
      description:
        "A low-code automation platform similar to n8n and Zapier. Build automated workflows by connecting services visually with a drag-and-drop editor, AI-powered nodes, and real-time execution monitoring.",
      technologies: [
        "Next.js",
        "TypeScript",
        "tRPC",
        "PostgreSQL",
        "Prisma",
        "Tailwind",
        "Better Auth",
        "Vercel AI SDK",
        "Inngest",
      ],
      links: [
        {
          type: "Website",
          href: "https://x-flow.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mayank-Radadiya/FlowX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/flowX.mp4",
    },
    {
      title: "CodeHub",
      href: "https://codehub-x.vercel.app/",
      dates: "",
      active: true,
      featured: false,
      description:
        "An online code editor with VS Code-like experience. Run code without local setup, get AI-powered coding suggestions, and share snippets with the community.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Convex",
        "TailwindCSS",
        "Clerk",
        "Gemini AI",
        "Monaco Editor",
      ],
      links: [
        {
          type: "Website",
          href: "https://codehub-x.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mayank-Radadiya/CodeHub.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Codehub.mov",
    },
    {
      title: "Zoom Clone",
      href: "https://zoom-clone-web-app.vercel.app/",
      active: true,
      featured: false,
      description:
        "A real-time video conferencing app with meeting scheduling, screen sharing, and participant management. Built with Stream for WebRTC.",
      technologies: ["Next.js", "TypeScript", "Clerk", "Stream", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://zoom-clone-web-app.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mayank-Radadiya/zoom_clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/zoom.png",
      video: "",
    },
    {
      title: "Learnify LMS",
      href: "https://learnify-blue.vercel.app/",
      dates: "",
      active: true,
      featured: false,
      description:
        "A full-featured Learning Management System where teachers create and sell courses with video hosting, and students purchase and track progress.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Stripe",
        "Mux",
        "Uploadthing",
      ],
      links: [
        {
          type: "Website",
          href: "https://learnify-blue.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mayank-Radadiya/learnify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/LMS.mov",
    },
  ],
} as const;
