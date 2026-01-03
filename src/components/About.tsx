import { Code2, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-neutral-900 mb-12 sm:mb-16 text-center tracking-tight">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-neutral-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-neutral-700" />
            </div>
            <h3 className="text-neutral-900">Experience</h3>
            <p className="text-neutral-600 text-sm sm:text-base text-justify">
              ~2 years of professional experience building enterprise-grade backend systems and microservices architectures.
            </p>
          </div>
          
          <div className="border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-neutral-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-neutral-700" />
            </div>
            <h3 className="text-neutral-900">Education</h3>
            <p className="text-neutral-600 text-sm sm:text-base text-justify">
              Computer Science background with strong foundation in algorithms, data structures, and software engineering principles.
            </p>
          </div>
          
          <div className="border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-neutral-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-neutral-700" />
            </div>
            <h3 className="text-neutral-900">Expertise</h3>
            <p className="text-neutral-600 text-sm sm:text-base text-justify">
              Specialized in RESTful API development, database design, third-party integrations, and scalable system architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}