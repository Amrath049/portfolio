import Navigation from './Navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Ordrio',
      subtitle: 'Microservices-based SaaS Platform',
      description: 'A comprehensive enterprise resource management platform built on modern microservices architecture. The system is designed to handle complex business workflows with high availability and scalability.',
      features: [
        'Worked on microservices architecture with API gateway',
        'Event-driven communication using RabbitMQ',
        'Real-time data synchronization across services',
        'Centralized authentication and authorization',
        'Rate limiting and API versioning',
      ],
      techStack: ['NestJS', 'MongoDB', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'TypeScript', 'JWT'],
      responsibilities: [
        'Handled the microservices infrastructure',
        'Worked on inter-service communication patterns',
        'Designed and developed RESTful APIs',
        'Optimized database queries and indexing strategies',
        'Hanlded complex data migrations'
      ],
    },
    {
      title: 'CREE-8',
      subtitle: 'Employee & Worksite Management System',
      description: 'A comprehensive workforce management solution that streamlines employee operations, project tracking, and worksite coordination. Built to handle complex organizational hierarchies and workflows.',
      features: [
        'Real-time attendance tracking and monitoring',
        'Project assignment and task management',
        'Performance evaluation and reporting',
        'Role-based access control',
        'Automated report generation',
        'Integration with HR systems',
      ],
      techStack: ['Node.js', 'Express', 'MongoDB', 'REST API', 'JWT', 'JavaScript'],
      responsibilities: [
        'Developed RESTful APIs for employee and project management',
        'Implemented authentication and authorization system',
        'Designed relational database schema',
        'Created automated reporting features',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-neutral-900 tracking-tight">Projects</h1>
            <p className="text-neutral-600 max-w-2xl text-sm sm:text-base text-justify sm:text-left">
              A collection of backend systems and applications I've built, focusing on scalability,
              performance, and maintainable architecture.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="border border-neutral-200 rounded-2xl overflow-hidden">
              <div className="bg-neutral-50 border-b border-neutral-200 px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-neutral-900 mb-1">{project.title}</h2>
                    <p className="text-neutral-600 text-sm sm:text-base">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-neutral-900 mb-3">Overview</h3>
                  <p className="text-neutral-600 leading-relaxed text-sm sm:text-base text-justify">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-neutral-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></span>
                        <span className="text-neutral-600 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-neutral-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-50 text-neutral-700 rounded-xl border border-neutral-200 text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-neutral-900 mb-3">My Responsibilities</h3>
                  <ul className="space-y-2">
                    {project.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></span>
                        <span className="text-neutral-600 text-sm sm:text-base">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-neutral-900 text-white py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-neutral-400 text-sm sm:text-base">© 2026 Amrath Prasad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}