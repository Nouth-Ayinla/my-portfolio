const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 opacity-90"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
         
          <div className="w-full max-w-2xl">
            <div className="mb-6">
              <p className="text-primary text-lg font-medium mb-2 animate-fade-in">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
                Oluwaferanmi
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary mb-6 animate-slide-up delay-200">
              a Frontend Developer
              </h2>
            </div>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto animate-slide-up delay-300">
              I build exceptional digital experiences with modern web technologies, 
              turning ideas into beautiful, functional applications.
            </p>

            
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8 animate-slide-up delay-400">
              <a
                href="#projects"
                className="px-4 py-3 rounded-full bg-primary text-white font-semibold hover:-translate-y-1 hover:shadow-lg transition-all shadow-lg"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:-translate-y-1 hover:shadow-lg hover:bg-primary hover:text-white transition-all"
              >
                Contact Me
              </a>
            </div>

        
            <div className="flex flex-wrap justify-center gap-4 mb-24 animate-slide-up delay-500">
              <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <span className="text-sm font-medium">React</span>
              </div>
              <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <span className="text-sm font-medium">TypeScript</span>
              </div>
              <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <span className="text-sm font-medium">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>

       
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            aria-label="Scroll to about section"
          >
            <svg 
              className="w-6 h-6 text-primary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;