import { Award, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      title: 'Succeed in the Age of AI',
      issuer: 'Udemy',
      date: '2026',
      credentialId: 'UC-211c4391-6d90-4516-9919-02d9990b9233',
      skills: ['AI Productivity', 'Decision-Making', 'Generative AI for Web Developers', 'Code with AI assistance'],
      credentialUrl: 'https://www.udemy.com/certificate/UC-211c4391-6d90-4516-9919-02d9990b9233/',
    },
    {
      title: 'NestJS Masterclass - NodeJS Framework Backend Development',
      issuer: 'Udemy',
      date: '2025',
      credentialId: 'UC-4807f0e2-7edf-4171-8d91-a2332c5f4fd3',
      skills: ['NestJS', 'PostgreSQL', 'Software Documentation'],
      credentialUrl: 'https://www.udemy.com/certificate/UC-4807f0e2-7edf-4171-8d91-a2332c5f4fd3/',
    },
    {
      title: 'Complete Web Development Bootcamp',
      issuer: 'Udemy',
      date: '2024',
      credentialId: 'UC-508e2e38-1855-4f45-a3f0-f953f3aa76a8',
      skills: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Version Control', 'API', 'Git'],
      credentialUrl: 'https://www.udemy.com/certificate/UC-508e2e38-1855-4f45-a3f0-f953f3aa76a8/',
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-neutral-900 mb-4 tracking-tight">Licenses & Certifications</h2>
          <p className="text-neutral-600 text-sm sm:text-base">Continuous learning and professional development</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-2xl p-4 sm:p-6 hover:border-neutral-300 transition-all hover:shadow-lg hover:shadow-neutral-100"
            >
              <div className="flex items-start gap-3 sm:gap-4 flex-col sm:flex-row">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1 space-y-4 w-full">
                  <div>
                    <h3 className="text-neutral-900 mb-2">{cert.title}</h3>
                    <p className="text-neutral-600 text-sm sm:text-base">{cert.issuer}</p>
                    <p className="text-neutral-500 mt-1 text-sm">Issued {cert.date}</p>
                    <p className="text-neutral-400 mt-1 text-xs sm:text-sm break-all">Credential ID {cert.credentialId}</p>
                  </div>

                  <a
                    href={cert.credentialUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-xl text-neutral-700 hover:bg-neutral-50 transition-colors text-sm"
                  >
                    Show credential
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <div>
                    <p className="text-neutral-500 mb-2 text-sm">Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-neutral-50 text-neutral-700 rounded-lg border border-neutral-200 text-xs sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}