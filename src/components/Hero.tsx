export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-neutral-50">
      {/* Abstract geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 border border-neutral-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 border border-neutral-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] border border-neutral-200 rotate-45 opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-neutral-900 tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Hi, I'm Amrath Prasad
            </h2>
            <h3 className="text-neutral-700 text-xl sm:text-2xl md:text-[28px] tracking-wide">
              Backend Developer
            </h3>
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-base sm:text-lg md:text-[20px] lg:text-[24px]">
              <span className="text-neutral-600">Node.js</span>
              <span className="text-neutral-300">|</span>
              <span className="text-neutral-600">NestJS</span>
              <span className="text-neutral-300">|</span>
              <span className="text-neutral-600">Express</span>
              <span className="text-neutral-300 hidden sm:inline">|</span>
              <span className="text-neutral-600 sm:inline">MongoDB</span>
            </div>
          </div>

          <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base text-justify sm:text-center px-4 sm:px-0">
            Passionate backend developer with around 2 years of
            experience building scalable microservices and
            robust server-side applications. Specialized in
            creating efficient APIs, managing databases, and
            implementing complex business logic with modern
            JavaScript frameworks and tools.
          </p>
        </div>
      </div>
    </section>
  );
}