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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-90"></div>
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-slide-up">
                Oluwaferanmi
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary mb-6 animate-slide-up delay-200">
              a Frontend Developer
              </h2>
            </div>
            
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg mx-auto animate-slide-up delay-300">
              I build exceptional digital experiences with modern web technologies, 
              turning ideas into beautiful, functional applications.
            </p>

            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-up delay-400 mx-auto w-full sm:w-auto">
              <a
                href="#projects"
                className="w-40 sm:w-auto px-4 py-3 rounded-full bg-primary text-white font-semibold hover:-translate-y-1 hover:shadow-lg transition-all shadow-lg text-center flex justify-center items-center"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="w-40 sm:w-auto px-4 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:-translate-y-1 hover:shadow-lg hover:bg-primary hover:text-white transition-all text-center flex justify-center items-center"
              >
                Contact Me
              </a>
            </div>

       </div>
        </div>

       
        
      </div>
    </section>
  );
};

export default Hero;