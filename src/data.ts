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
  tagline: "I build scalable backend systems and clean, reliable APIs.",
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
      {
        src: "projects/arenabook-web.png",
        alt: "ArenaBook player website — find & book arenas",
      },
      {
        src: "projects/arenabook-admin.png",
        alt: "Arena Pro — admin dashboard",
      },
    ],
    tech: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "React",
      "Tailwind",
      "JWT",
      "Cashfree",
    ],
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
      {
        label: "Live website",
        href: "https://arena-book-api.vercel.app/",
        kind: "live",
      },
      {
        label: "Admin panel",
        href: "https://arena-book-admin.vercel.app/",
        kind: "admin",
      },
    ],
  },
  {
    slug: "localgig",
    title: "LocalGig",
    subtitle: "Hyperlocal Job Board Platform",
    oneLiner:
      "A hyperlocal job board platform designed to connect local blue-collar workers and small businesses directly.",
    role: "Full-stack",
    featured: true,
    cover: "projects/Local-Gig-home.png",
    images: [
      {
        src: "projects/Local-Gig-home.png",
        alt: "LocalGig home page and noticeboard feed",
      },
      {
        src: "projects/Local-gig-employer.png",
        alt: "LocalGig employer dashboard and applicant tracker",
      },
      {
        src: "projects/Localgig-employee.png",
        alt: "LocalGig worker dashboard and applications",
      },
    ],
    tech: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "React",
      "Tailwind",
      "OpenSearch",
      "Elasticsearch",
      "Redis",
      "JWT",
      "SendGrid",
    ],
    overview:
      "LocalGig is a hyperlocal job board platform designed to connect local blue-collar workers and small businesses directly. Job seekers can search, filter, and apply to nearby gig, part-time, or full-time opportunities in one tap without middleman fees, while employers get a dedicated dashboard to create job listings, verify posts, manage applicants, and contact hires directly.",
    sections: [
      {
        title: "Worker App",
        items: [
          "Community Bulletin Board Feed: Browse nearby jobs styled in a noticeboard aesthetic, with type tags (Gig, Part-time, Full-time), pay ranges, and locations.",
          "Hyperlocal Quick Search: Instantly filter listings by trade categories (Plumbing, Culinary, Delivery, Security) or popular search keywords.",
          "One-Tap Applications: Submit applications in a single click with dynamic status tracking (Applied, Shortlisted, Not Selected, Removed) synced to the worker's dashboard.",
          "Infinite Scroll Pagination: A seamless browsing experience powered by a high-performance, non-blocking IntersectionObserver that automatically appends older listings on scroll.",
          "Secure Profile Registration: Free registration with email OTP verification and secure password hashing.",
        ],
      },
      {
        title: "Employer Dashboard",
        items: [
          "Job Posting & Management: Post new gigs in plain language, specify exact pay rates, list required skills, and verify business credentials.",
          "Applicant Pipeline Tracker: Review applicants on a centralized kanban-style feed where employers can mark candidates as seen, shortlist, or decline them.",
          'Soft-Deletion Listings: Employers can hide or "remove" active listings from the public feed, while keeping them visible in the dashboard of applied workers with a "Removed" notification status.',
        ],
      },
      {
        title: "Architecture Highlights",
        items: [
          "Monorepo Workspace: Clean separation of a modular NestJS API backend and a lightweight Vite React frontend.",
          "Hybrid Search Strategy: Leverages an OpenSearch/Elasticsearch engine for fuzzy text search with a structured Prisma/PostgreSQL query fallback logic.",
          "Redis Indexing Queue: Offloads indexing and search index deletion tasks to an asynchronous Redis background worker queue.",
          "Role-Based JWT Security: Secure route access control with role-based JWT auth tokens and global Axios response interceptors to refresh sessions.",
          "Tailwind & Noticeboard Aesthetic: A premium user interface design featuring modern typography, warm-toned color palettes, subtle rotations, and fully responsive layouts.",
        ],
      },
    ],
    links: [
      {
        label: "Live website",
        href: "https://local-gig.vercel.app/",
        kind: "live",
      },
      {
        label: "Source code",
        href: "https://github.com/Amrath049/LocalGig",
        kind: "repo",
      },
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
      {
        src: "projects/resumetailor.png",
        alt: "ResumeTailor — editor with live PDF preview",
      },
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "Zustand",
      "@react-pdf/renderer",
      "Tailwind",
    ],
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
      {
        label: "Live demo",
        href: "https://amrath049.github.io/Personalized-Resume-Builder/",
        kind: "live",
      },
      {
        label: "Source code",
        href: "https://github.com/Amrath049/Personalized-Resume-Builder",
        kind: "repo",
      },
    ],
  },
  {
    slug: "ordrio",
    title: "Ordrio",
    subtitle: "Microservices-based SaaS Platform",
    oneLiner:
      "An enterprise resource-management platform on a modern microservices architecture, built for high availability and scale.",
    role: "Backend",
    featured: false,
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

export type OtherProject = {
  title: string;
  subtitle: string;
  oneLiner: string;
  tech: string[];
  link: string;
  cover?: string;
};

export const otherProjects: OtherProject[] = [
  {
    title: "Siri Enterprises",
    subtitle: "Areca Leaf Plates & Cashew Supplier",
    oneLiner:
      "A B2B business website built for an eco-friendly manufacturer, featuring a dynamic product catalog, detailed CEPCI cashew grades breakdown, and contact integration.",
    tech: ["React", "TypeScript", "Tailwind CSS", "EmailJS"],
    link: "https://www.siriienterprises.com/",
    cover: "projects/siri-home.png",
  },
  {
    title: "Factory Flow",
    subtitle: "Simple Factory Order & Inventory Management System",
    oneLiner:
      "An internal management system built for Siri Enterprises to streamline factory orders, manage customers and products, track inventory, and generate custom invoices.",
    tech: ["NestJS", "React", "PostgreSQL", "Supabase", "Vercel"],
    link: "https://factoryflow.siriienterprises.com",
    cover: "projects/Factory-flow-home.png",
  },
  {
    title: "AutoPro Service Workshop",
    subtitle: "Multi-Brand Car Service Center",
    oneLiner:
      "A responsive local business landing page featuring a comprehensive multi-brand service catalog, interactive booking CTA, and a custom brand marquee.",
    tech: ["React", "TypeScript", "Vite", "CSS"],
    link: "https://amrath049.github.io/carservice/",
    cover: "projects/autopro-home.png",
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
