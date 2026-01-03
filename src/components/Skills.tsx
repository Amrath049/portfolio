export default function Skills() {
  const skills = [
    'Node.js',
    'NestJS',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'REST API',
    'JavaScript',
    'TypeScript',
    'Git',
    'Third-party Integrations',
    'Docker',
    'Redis',
    'RabbitMQ',
    'Microservices',
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-neutral-900 mb-4 tracking-tight">Skills & Technologies</h2>
          <p className="text-neutral-600 text-sm sm:text-base">Tools and frameworks I work with</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-neutral-800 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all text-sm sm:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}