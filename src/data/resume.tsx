import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mayank R.",
  initials: "MR",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description: "Full-Stack Developer crafting performant web experiences.",
  roles: [
    "Full-Stack Developer",
    "Next.js Engineer",
    "Open Source Enthusiast",
    "UI/UX Thinker",
  ],
  summary:
    "I build fast, reliable web applications with TypeScript, Next.js, and Node.js. From automated workflows to real-time collaboration tools — I turn complex ideas into clean, scalable products. Currently pursuing Computer Science at Jain University, Bengaluru.",
  avatarUrl: "/avatar.jpeg",
  resumeUrl: "#",
  skillCategories: [
    {
      name: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
      ],
    },
    {
      name: "Backend",
      skills: ["Node.js", "PostgreSQL", "Prisma", "tRPC", "REST APIs"],
    },
    {
      name: "Tools & Infra",
      skills: ["Docker", "Git & GitHub", "Vercel", "Clerk", "Stripe"],
    },
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Java", "HTML", "CSS", "Solidity"],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/contact", icon: NotebookIcon, label: "Contact" },
  ],
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
      degree: "Bachelor's Degree in Computer Science & Engineering (CSE)",
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
