import {
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiDocker,
  SiGit,
  SiOpenapiinitiative,
} from "react-icons/si";

export const profile = {
  name: "Amrath Prasad",
  role: "Associate Software Engineer",
  focus: "Backend Developer",
  location: "India",
  available: true,
  tagline:
    "I build scalable microservices and robust server-side systems — clean APIs, reliable data layers, and architecture that holds up under load.",
  intro:
    "Software Engineer with 2+ years of experience designing and shipping enterprise-grade microservices. I specialize in building efficient APIs, modeling data, and turning complex business logic into maintainable systems with modern JavaScript and TypeScript.",
  stack: ["Node.js", "NestJS", "Express", "MongoDB"],
  resumeUrl: "",
  email: "amrathprasadpc@gmail.com",
  socials: {
    github: "https://github.com/Amrath049",
    linkedin: "https://www.linkedin.com/in/amrath-prasad-99234a209",
  },
  avatar: `${import.meta.env.BASE_URL}avatar/avatar.svg`,
};

export const stats = [
  { label: "Years of experience", value: "2+" },
  { label: "Production projects", value: "2" },
  { label: "Core domain", value: "Backend" },
];

export const experience = [
  {
    title: "Associate Software Engineer",
    company: "Ordrio Technologies",
    period: "Feb 2026 — Present",
    type: "Full-time",
    current: true,
    summary:
      "Took on broader ownership of backend architecture for a large SaaS platform — leading API design, improving service reliability, and mentoring on backend best practices.",
    points: [
      "Own design and delivery of microservices using NestJS and Node.js",
      "Drive API standards: versioning, documentation, and consistent error handling",
      "Improve service reliability through caching, query tuning, and observability",
      "Review code and guide junior developers on backend patterns",
    ],
  },
  {
    title: "Junior Backend Developer",
    company: "Ordrio Technologies",
    period: "2023 — Feb 2026",
    type: "Full-time",
    current: false,
    summary:
      "Joined full-time after an internship and grew into core backend work — building services, integrating third-party systems, and optimizing data access.",
    points: [
      "Architected and developed microservices-based applications",
      "Designed and implemented RESTful APIs and inter-service communication",
      "Integrated third-party services for payments, messaging, and analytics",
      "Reduced API response time by ~40% via query optimization and caching",
    ],
  },
];

export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "admin" | "repo";
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  role: string;
  featured: boolean;
  cover?: string; // path relative to BASE_URL
  images?: { src: string; alt: string }[];
  tech: string[];
  overview: string;
  sections: { title: string; items: string[] }[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "arenabook",
    title: "ArenaBook",
    subtitle: "Sports Arena Booking Platform",
    oneLiner:
      "A full-stack platform to discover, book, and pay for sports arena slots in real time — with a dedicated admin panel for arena owners.",
    role: "Full-stack",
    featured: true,
    cover: "projects/arenabook-web.png",
    images: [
      { src: "projects/arenabook-web.png", alt: "ArenaBook player website — find & book arenas" },
      { src: "projects/arenabook-admin.png", alt: "Arena Pro — admin dashboard" },
    ],
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "React", "Tailwind", "JWT", "Cashfree"],
    overview:
      "ArenaBook is a production-deployed booking platform built from scratch as a pnpm monorepo. Players browse arenas by sport and city, book time slots, and manage an in-app wallet — while arena owners get a separate admin dashboard to configure courts, define slot schedules, track bookings, and view player activity.",
    sections: [
      {
        title: "Player app",
        items: [
          "Browse arenas by sport (badminton, cricket, football, tennis, basketball, volleyball) or city",
          "Register with email OTP verification and secure bcrypt password hashing",
          "Real-time slot availability and booking",
          "In-app wallet — add money, pay for bookings, and get refunds on cancellation",
          "Booking history and favourite arenas",
        ],
      },
      {
        title: "Admin panel",
        items: [
          "Separate authentication for arena owners",
          "Create and manage arenas with images, location, and contact details",
          "Configure courts and slot schedules with custom pricing and cancellation rules",
          "Manage all bookings — confirm, cancel, complete",
          "Dashboard with revenue and booking statistics, scoped to the owner's arena",
        ],
      },
      {
        title: "Architecture highlights",
        items: [
          "Monorepo with three independent apps (api, web, admin) via pnpm workspaces",
          "Module-based NestJS backend: auth, arena, games, slots, bookings, wallet, player, dashboard",
          "Prisma schema with relations across Player, Admin, Arena, Court, Slot, Booking, Wallet, OTP, and FavouriteArena",
          "Dual user types with role-based JWT auth; axios interceptor handles expired sessions globally",
          "SendGrid email (OTP) and Cashfree payment gateway; deployed on Render (API) and Vercel (web + admin)",
        ],
      },
    ],
    links: [
      { label: "Live website", href: "https://arena-book-api.vercel.app/", kind: "live" },
      { label: "Admin panel", href: "https://arena-book-admin.vercel.app/", kind: "admin" },
    ],
  },
  {
    slug: "resumetailor",
    title: "ResumeTailor",
    subtitle: "ATS-friendly Resume Builder",
    oneLiner:
      "A browser-based resume builder that tailors your resume to each job description, with live PDF preview, ATS keyword analysis, and multi-profession templates.",
    role: "Frontend · Open-source",
    featured: true,
    cover: "projects/resumetailor.png",
    images: [
      { src: "projects/resumetailor.png", alt: "ResumeTailor — editor with live PDF preview" },
    ],
    tech: ["React 19", "TypeScript", "Vite", "Zustand", "@react-pdf/renderer", "Tailwind"],
    overview:
      "ResumeTailor is an open-source, fully client-side resume builder. It eliminates the repetitive Word-editing cycle job seekers face — tailor your resume to each JD through form-based editing, real-time PDF preview, and a JD Assistant that scores ATS keyword coverage. All data stays in the browser: no backend, no account required.",
    sections: [
      {
        title: "Key features",
        items: [
          "WYSIWYG PDF generation with real, selectable (ATS-parseable) text",
          "JD Assistant with keyword match scoring and optional AI content drafting (Gemini / Groq)",
          "Per-company resume version management",
          "Four profession-specific templates (tech, marketing, design, general) with customizable section labels",
          "100% client-side — deployed as a free static site, no data leaves the browser",
        ],
      },
    ],
    links: [
      { label: "Live demo", href: "https://amrath049.github.io/Personalized-Resume-Builder/", kind: "live" },
      { label: "Source code", href: "https://github.com/Amrath049/Personalized-Resume-Builder", kind: "repo" },
    ],
  },
  {
    slug: "ordrio",
    title: "Ordrio",
    subtitle: "Microservices-based SaaS Platform",
    oneLiner:
      "An enterprise resource-management platform on a modern microservices architecture, built for high availability and scale.",
    role: "Backend",
    featured: true,
    tech: ["NestJS", "MongoDB", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
    overview:
      "A comprehensive enterprise resource-management platform built on a modern microservices architecture, designed to handle complex business workflows with high availability and scalability.",
    sections: [
      {
        title: "What it does",
        items: [
          "Microservices with an API gateway and event-driven messaging (RabbitMQ)",
          "Real-time data synchronization across services",
          "Centralized authentication, rate limiting, and API versioning",
        ],
      },
      {
        title: "My work",
        items: [
          "Built and maintained microservices and inter-service communication patterns",
          "Designed and developed RESTful APIs",
          "Optimized database queries and indexing strategies",
          "Handled complex data migrations",
        ],
      },
    ],
    links: [],
  },
  {
    slug: "cree-8",
    title: "CREE-8",
    subtitle: "Employee & Worksite Management System",
    oneLiner:
      "A workforce-management solution that streamlines employee operations, project tracking, and worksite coordination.",
    role: "Backend",
    featured: false,
    tech: ["Node.js", "Express", "MongoDB", "REST API", "JWT"],
    overview:
      "A workforce-management solution that streamlines employee operations, project tracking, and worksite coordination across complex organizational hierarchies.",
    sections: [
      {
        title: "What it does",
        items: [
          "Real-time attendance tracking and project/task assignment",
          "Performance evaluation and automated report generation",
          "Role-based access control",
        ],
      },
      {
        title: "My work",
        items: [
          "Developed RESTful APIs for employee and project management",
          "Implemented authentication and authorization",
          "Designed the relational database schema",
        ],
      },
    ],
    links: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug?: string) =>
  projects.find((p) => p.slug === slug);

// Technologies shown as real brand logos in the Skills grid
export const skills = [
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "NestJS", Icon: SiNestjs },
  { name: "Express", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Redis", Icon: SiRedis },
  { name: "RabbitMQ", Icon: SiRabbitmq },
  { name: "Docker", Icon: SiDocker },
  { name: "Git", Icon: SiGit },
  { name: "REST APIs", Icon: SiOpenapiinitiative },
];

// Concepts / practices (no brand mark) — shown as a secondary line
export const skillFocus = [
  "Microservices",
  "Event-driven architecture",
  "API design & versioning",
  "Auth & JWT",
  "Query optimization",
  "Third-party integrations",
];

export const certifications = [
  {
    title: "Succeed in the Age of AI",
    issuer: "Udemy",
    date: "2026",
    credentialId: "UC-211c4391-6d90-4516-9919-02d9990b9233",
    skills: ["AI Productivity", "Generative AI", "Coding with AI"],
    url: "https://www.udemy.com/certificate/UC-211c4391-6d90-4516-9919-02d9990b9233/",
  },
  {
    title: "NestJS Masterclass — NodeJS Framework Backend Development",
    issuer: "Udemy",
    date: "2025",
    credentialId: "UC-4807f0e2-7edf-4171-8d91-a2332c5f4fd3",
    skills: ["NestJS", "PostgreSQL", "Documentation"],
    url: "https://www.udemy.com/certificate/UC-4807f0e2-7edf-4171-8d91-a2332c5f4fd3/",
  },
  {
    title: "Complete Web Development Bootcamp",
    issuer: "Udemy",
    date: "2024",
    credentialId: "UC-508e2e38-1855-4f45-a3f0-f953f3aa76a8",
    skills: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Git"],
    url: "https://www.udemy.com/certificate/UC-508e2e38-1855-4f45-a3f0-f953f3aa76a8/",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
