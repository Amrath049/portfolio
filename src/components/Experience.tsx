import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-neutral-900 mb-4 tracking-tight">Experience</h2>
          <p className="text-neutral-600 text-sm sm:text-base">Professional journey and growth</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-neutral-200 pl-6 sm:pl-8 pb-12 ml-4">
            <div className="absolute left-0 top-0 w-4 h-4 bg-neutral-900 rounded-full transform -translate-x-[9px]"></div>
            
            <div className="space-y-4">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-neutral-900">Junior Backend Developer</h3>
                  <p className="text-neutral-600 text-sm sm:text-base">Ordrio Technologies</p>
                </div>
                <span className="px-3 py-1 bg-neutral-50 text-neutral-700 rounded-full border border-neutral-200 text-sm">
                  2023 - Present
                </span>
              </div>
              
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base text-justify">
                Transitioned from internship to full-time role. Architected and developed microservices-based 
                applications, implemented RESTful APIs, integrated third-party services, and optimized database 
                queries for improved performance.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-neutral-50 text-neutral-700 rounded-full border border-neutral-200 text-sm">Microservices</span>
                <span className="px-3 py-1 bg-neutral-50 text-neutral-700 rounded-full border border-neutral-200 text-sm">API Design</span>
                <span className="px-3 py-1 bg-neutral-50 text-neutral-700 rounded-full border border-neutral-200 text-sm">System Architecture</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10 sm:mt-12">
          <Link 
            to="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors text-sm sm:text-base"
          >
            View Full Experience
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}