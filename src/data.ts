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

export const projects = [
  {
    title: "Ordrio",
    subtitle: "Microservices-based SaaS Platform",
    description:
      "An enterprise resource management platform on a modern microservices architecture — built to handle complex business workflows with high availability and scalability.",
    highlights: [
      "Microservices with an API gateway and event-driven messaging (RabbitMQ)",
      "Real-time data synchronization across services",
      "Centralized authentication, rate limiting, and API versioning",
    ],
    tech: ["NestJS", "MongoDB", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
  },
  {
    title: "CREE-8",
    subtitle: "Employee & Worksite Management System",
    description:
      "A workforce management solution that streamlines employee operations, project tracking, and worksite coordination across complex organizational hierarchies.",
    highlights: [
      "Real-time attendance tracking and project/task assignment",
      "Role-based access control and automated report generation",
      "RESTful APIs with JWT auth and a clean relational schema",
    ],
    tech: ["Node.js", "Express", "MongoDB", "REST API", "JWT"],
  },
];

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
