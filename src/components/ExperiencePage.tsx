import Navigation from './Navigation';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExperiencePage() {
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
            <h1 className="text-neutral-900 tracking-tight">Experience</h1>
            <p className="text-neutral-600 max-w-2xl text-sm sm:text-base text-justify sm:text-left">
              My professional journey in backend development, building scalable systems and
              contributing to impactful projects.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative">
            <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200"></div>

            <div className="space-y-12">
              {/* Full-time Position */}
              <div className="relative sm:pl-20">
                <div className="hidden sm:flex absolute left-0 top-0 w-16 h-16 rounded-2xl bg-neutral-900 items-center justify-center text-white">
                  <Calendar className="w-6 h-6" />
                </div>

                <div className="border border-neutral-200 rounded-2xl overflow-hidden">
                  <div className="bg-neutral-50 border-b border-neutral-200 px-4 sm:px-6 py-4 sm:py-5">
                    <div className="flex items-start justify-between flex-wrap gap-3 sm:gap-4">
                      <div>
                        <h2 className="text-neutral-900 mb-1">Junior Backend Developer</h2>
                        <p className="text-neutral-600 text-sm sm:text-base">Ordrio Technologies</p>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                        <span className="px-3 py-1 bg-white text-neutral-700 rounded-full border border-neutral-200 text-xs sm:text-sm">
                          Full-time
                        </span>
                        <span className="text-neutral-600 text-sm sm:text-base">2023 - Present</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 space-y-6">
                    <div>
                      <h3 className="text-neutral-900 mb-3">Role Overview</h3>
                      <p className="text-neutral-600 leading-relaxed text-sm sm:text-base text-justify">
                        Leading backend development initiatives for enterprise-grade applications.
                        Responsible for architecting microservices, designing scalable APIs, and
                        implementing robust solutions that power the company's SaaS platform.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-neutral-900 mb-3">Key Responsibilities</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></span>
                          <span className="text-neutral-600 text-sm sm:text-base">Architect and develop microservices-based applications using NestJS and Node.js</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></span>
                          <span className="text-neutral-600 text-sm sm:text-base">Design and implement RESTful APIs with proper versioning and documentation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></span>
                          <span className="text-neutral-600 text-sm sm:text-base">Integrate third-party services and APIs for payment processing, messaging, and analytics</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></span>
                          <span className="text-neutral-600 text-sm sm:text-base">Optimize database queries and implement caching strategies for improved performance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></span>
                          <span className="text-neutral-600 text-sm sm:text-base">Collaborate with frontend teams to ensure seamless API integration</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></span>
                          <span className="text-neutral-600 text-sm sm:text-base">Participate in code reviews and mentor junior developers</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-neutral-900 mb-3">Technologies & Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {['NestJS', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Git', 'REST API'].map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-neutral-50 text-neutral-700 rounded-lg border border-neutral-200 text-xs sm:text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-neutral-900 mb-3">Key Achievements</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 flex-shrink-0"></span>
                          <span className="text-neutral-600 text-sm sm:text-base">Successfully architected and deployed Ordrio microservices platform</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 flex-shrink-0"></span>
                          <span className="text-neutral-600 text-sm sm:text-base">Reduced API response time by 40% through query optimization and caching</span>
                        </li>
                        {/* <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 flex-shrink-0"></span>
                          <span className="text-neutral-600 text-sm sm:text-base">Implemented automated testing achieving 85% code coverage</span>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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