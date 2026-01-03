import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      title: 'Ordrio',
      description: 'A comprehensive microservices-based SaaS platform designed for enterprise resource management. Features distributed architecture, API gateway, service mesh, and real-time data synchronization.',
      techStack: ['NestJS', 'MongoDB', 'Redis', 'RabbitMQ', 'Docker', 'Microservices'],
    },
    {
      title: 'CREE-8',
      description: 'Employee and worksite management system streamlining workforce operations. Includes attendance tracking, project assignment, performance monitoring, and reporting dashboards.',
      techStack: ['Node.js', 'Express', 'PostgreSQL', 'REST API', 'JWT'],
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-neutral-900 mb-4 tracking-tight">Featured Projects</h2>
          <p className="text-neutral-600 text-sm sm:text-base">Building scalable solutions for real-world problems</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-neutral-300 transition-all hover:shadow-lg hover:shadow-neutral-100"
            >
              <div className="space-y-3">
                <h3 className="text-neutral-900">{project.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base text-justify">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-neutral-50 text-neutral-700 rounded-full border border-neutral-200 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 sm:mt-12">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors text-sm sm:text-base"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}