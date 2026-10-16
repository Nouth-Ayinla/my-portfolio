import Image from 'next/image';

const About = () => {
  // Function to handle Resume download
  const handleDownloadResume = () => {
    // Using an anchor tag to trigger download
    const link = document.createElement('a');
    link.href = '/assets/Ayinla Oluwaferanmi Resume.pdf';
    link.download = 'Ayinla_Oluwaferanmi_Software_Engineer_Resume.pdf';
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
              <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] rounded-2xl overflow-hidden bg-gradient-to-b from-blue-50 to-indigo-100 shadow-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/images/about-portrait.png"
                  alt="Oluwaferanmi Ayinla"
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, 256px"
                  className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                4+
                <br />
                <span className="text-xs font-normal">Years</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-5">I build Products That Matter</h3>

            <div className="space-y-4 mb-8">
              <p className="text-gray-600">
                I&apos;m a software engineer who enjoys turning complex ideas into useful products that feel simple to use. Over the past four years, I&apos;ve built web platforms, mobile apps, and AI-powered tools for businesses, students, and growing teams.
              </p>
              <p className="text-gray-600">
                I work across the stack with tools such as React, React Native, Next.js, TypeScript, and Python. Whether I&apos;m designing an offline-first mobile experience or building a secure cloud platform, I care about performance, reliability, and the people using it.
              </p>
              <p className="text-gray-600">
                I&apos;m naturally curious, collaborative, and always learning. My goal is not just to write clean code, but to understand the real problem and build something that genuinely makes life easier.
              </p>
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
