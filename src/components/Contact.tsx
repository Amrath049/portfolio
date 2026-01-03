import { Mail, Github, Linkedin, ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Contact({ showBackButton = false }: { showBackButton?: boolean }) {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {showBackButton && (
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors mb-8 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        )}

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-neutral-900 mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-6 bg-neutral-50">
            <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-neutral-700" />
              </div>
              <div>
                <p className="text-neutral-500 text-sm sm:text-base">Email</p>
                <a
                  href="mailto:amrathprasadpc@gmail.com"
                  className="text-neutral-900 hover:text-neutral-600 transition-colors text-sm sm:text-base break-all"
                >
                  amrathprasadpc@gmail.com
                </a>
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <p className="text-neutral-500 mb-4 text-center sm:text-left text-sm sm:text-base">
                Connect with me
              </p>
              <div className="flex gap-4 justify-center sm:justify-start">
                <a
                  href="https://github.com/Amrath049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center hover:border-neutral-300 hover:bg-neutral-900 hover:text-white transition-all group"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="www.linkedin.com/in/amrath-prasad-99234a209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center hover:border-neutral-300 hover:bg-neutral-900 hover:text-white transition-all group"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}