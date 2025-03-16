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
      title: "CodeHub",
      href: "https://codehub-x.vercel.app/",
      dates: "",
      active: true,
      description:
        "CodeHub is an online code editor resembling Visual Studio Code, enabling users to run code without setting up individual environments. It integrates AI features that suggest best coding practices and improvements. Additionally, a Snippet page allows users to share and read code snippets, fostering community collaboration.",
      technologies: [
        "Next.js",
        "Typescript",
        "Convex",
        "TailwindCSS",
        "Clerk",
        "Gemini Ai",
        "Framer-motion",
        "Monaco-editor",
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
      title: "Zoom",
      href: "https://zoom-clone-web-app.vercel.app/",
      active: true,
      description:
        "A powerful Zoom app designed to enhance virtual meetings with advanced productivity tools and analytics. Seamlessly integrates with Zoom to offer real-time insights and a user-friendly interface. Perfect for professionals and teams seeking efficient collaboration.",

      technologies: ["Next.js", "Typescript", "Clerk", "Stream", "TailwindCSS"],
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
        "A Threads app designed for quick, real-time and social interaction. Features a sleek feed and post sharing. Ideal for staying updated with trends and engaging with a community.",
      technologies: [
        "Next.js",
        "Typescript",
        "Mongodb",
        "Clerk",
        "TailwindCSS",
        "mongoose",
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
        "A powerful Learning Management System (LMS) built with Next.js and TypeScript, designed for seamless course management and student engagement where teacher can sell their course. Student can buy that course and improve their skills 📚🚀.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
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
