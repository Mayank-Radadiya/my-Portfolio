import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mayank R.",
  initials: "DV",
  location: "Bengaluru, India",
  locationLink:
    "https://www.google.com/maps/place/Somanahalli,+Karnataka+560082/@12.7624112,77.4855874,13.6z/data=!4m6!3m5!1s0x3bae43daa1262291:0x2e0affc1a1d48c76!8m2!3d12.7716832!4d77.5053269!16s%2Fg%2F1tdqy4_l?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D",
  description: "I love building things.",
  summary:
    "Hi! I’m a web developer who loves building websites and apps that are easy to use and solve real problems. I work with tools like JavaScript, TypeScript, and frameworks like Next.js and Node.js to create fast and reliable solutions. I learn quickly and enjoy teaming up with people to turn their ideas into reality. Let’s build something awesome together!",
  avatarUrl: "/avatar.jpeg",
  skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Java",
    "Postgres",
    "Docker",
    "Github",
    "TailwindCSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/contact", icon: NotebookIcon, label: "Contact" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
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

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Jain University",
      href: "https://www.jainuniversity.ac.in/",
      degree: "Bachelor's Degree in Computer Science and Engineering  (CSE)",
      logoUrl: "/jain.png",
      start: "2022",
      end: "will end in 2026",
    },
    {
      school: "Kaushal Vidyabhavan",
      href: "https://kaushalvidyabhavan.com/",
      degree: "Higher secondary education",
      logoUrl: "/Kaushal.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Gurukul Surat",
      href: "https://surat.rajkotgurukul.org/",
      degree: "Std from 3 to 10",
      logoUrl: "/gurukul.png",
      start: "2013",
      end: "2020",
    },
  ],

  projects: [
    {
      title: "Chat App",
      href: "https://my-chat-webapp.vercel.app",
      dates: "",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mayank-Radadiya/RealTime_ChatApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chatapp.png",
      video: "",
    },

    {
      title: "Zoom",
      href: "https://zoom-clone-web-app.vercel.app/",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
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
      title: "Threads",
      href: "https://threads-next-webapp.vercel.app/sign-in",
      dates: "",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://threads-next-webapp.vercel.app/sign-in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mayank-Radadiya/Threads-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/threads.png",
      video: "",
    },
    {
      title: "LMS - Learnify",
      href: "https://learnify-blue.vercel.app/",
      dates: "",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
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
