const About = () => {
  // Function to handle Resume download
  const handleDownloadResume = () => {
    // Using an anchor tag to trigger download
    const link = document.createElement('a');
    link.href = '/assets/Oluwaferanmi Resume.pdf'; // Updated path to assets folder
    link.download = 'Oluwaferanmi_Frontend_Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-primary">Get to know me better</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/images/profile.jpg" 
                  alt="Feranmi" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                3+
                <br />
                <span className="text-xs font-normal">Years</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-5">Passionate Frontend Developer</h3>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-600">
                I'm a passionate frontend developer with a focus on creating beautiful, functional, and user-friendly web applications. 
                I specialize in turning ideas into reality through clean code and modern design principles.
              </p>
              <p className="text-gray-600">
                With a strong attention to detail and a commitment to continuous learning, I strive to build digital experiences that are 
                both visually appealing and highly performant.
              </p>
              <p className="text-gray-600">
                I believe in the power of collaboration and always aim to deliver solutions that exceed expectations while maintaining 
                the highest standards of code quality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm">
                <div className="text-primary bg-primary/10 p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-primary">Name:</span>
                  <span className="ml-2">Oluwaferanmi</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm">
                <div className="text-primary bg-primary/10 p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-primary">Email:</span>
                  <span className="ml-2">shawolhorizon@gmail.com</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm">
                <div className="text-primary bg-primary/10 p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-primary">Location:</span>
                  <span className="ml-2">Nigeria</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm">
                <div className="text-primary bg-primary/10 p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-primary">Experience:</span>
                  <span className="ml-2">3+ Years</span>
                </div>
              </div>
            </div>
            
            {/* Download Resume Button - Centered on mobile */}
            <div className="flex justify-center sm:justify-start">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg transition-all shadow-lg hover:bg-primary-dark"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;