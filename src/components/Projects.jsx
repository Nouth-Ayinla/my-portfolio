import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 const projects = [
    {
      title: "Crochet Artist Portfolio",
      description: "A beautiful showcase for fiber artists with gallery and contact features",
      tags: ["HTML", "CSS", "JavaScript"],
      screenshot: "assets/images/screenshot1.png",
      demoLink: "https://hopell-crochet.netlify.app/",
      githubLink: "https://github.com/Nouth-Ayinla/Hopell"
    },
    {
      title: "Demo E-Commerce Store",
      description: "Online shop with shopping cart functionality and product filtering",
      tags: ["HTML", "CSS", "JavaScript"],
      screenshot: "assets/images/screenshot2.png",
      demoLink: "https://demo-e-commerce7.netlify.app/",
      githubLink: "https://github.com/Nouth-Ayinla/Demo-E-commerce"
    },
   
    {
  "title": "MFMCF Futa Website",
  "description": " A demo  website for MFMCF Futa campus with information, events, and resources",
  "tags": ["React", "Tailwind CSS", "JavaScript"],
  "screenshot": "assets/images/screenshot3.png",
  "demoLink": "https://mfmcffutademowebsite.netlify.app/",
  "githubLink": "https://github.com/Nouth-Ayinla/Mfmcf"
   },
    
  
      {
  "title": "Vendor Compliance Portal",
  "description": " A platform to manage vendor compliance and data protection requirements.",
  "tags": ["React", "TypeScript", "Tailwind CSS", "Supabase"],
  "screenshot": "assets/images/screenshot4.png",
  "demoLink": "https://dpovendor.vercel.app",
  "githubLink": "https://github.com/Nouth-Ayinla/DPO-vendor"
   },
  
    {
  "title": "Love Regalty Productions",
  "description": " A visually appealing website for a production company showcasing services and portfolio.",
  "tags": ["React", "TypeScript", "TailwindCSS",],
  "screenshot": "assets/images/screenshot5.png",
  "demoLink": "https://loveregaltyproductions.vercel.app",
  "githubLink": "https://github.com/Nouth-Ayinla/Love-Regalty-Productions"
   },

    {
  "title": "ShopwithTom",
  "description": "A curated e-commerce fashion boutique selling handcrafted clothing and accessories with shopping cart.",
  "tags": ["React", "TypeScript", "TailwindCSS"],
  "screenshot": "assets/images/screenshot6.png",
  "demoLink": "https://shopwithtom.netlify.app",
  "githubLink": "https://github.com/Nouth-Ayinla/ShopwithTom"
  }
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-primary">Some of my recent work</p>
        </div>
        
        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <img 
                src={project.screenshot} 
                alt={project.title} 
                className="w-full h-48 object-cover flex-shrink-0"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-600 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 font-semibold flex items-center gap-1 hover:text-blue-600 transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-semibold flex items-center gap-1 hover:underline"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <div className="overflow-hidden px-2">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full min-h-[420px]">
                    <img 
                      src={project.screenshot} 
                      alt={project.title} 
                      className="w-full h-48 object-cover flex-shrink-0"
                    />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="mb-4 text-gray-600 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 font-semibold flex items-center gap-1 hover:text-blue-600 transition-colors"
                        >
                          <Github size={18} /> Code
                        </a>
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary font-semibold flex items-center gap-1 hover:underline"
                        >
                          <ExternalLink size={18} /> Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Navigation */}
          <div className="flex justify-center gap-5 mt-6">
            <button 
              onClick={prevProject}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextProject}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;