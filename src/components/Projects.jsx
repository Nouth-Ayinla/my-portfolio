import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-primary">Some of my recent work</p>
        </div>
        
        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <img 
                src={project.screenshot} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 font-semibold flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-semibold flex items-center gap-1 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg mx-2"
                >
                  <img 
                    src={project.screenshot} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 font-semibold flex items-center gap-1 hover:text-primary transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary font-semibold flex items-center gap-1 hover:underline"
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-5 mt-6">
            <button 
              onClick={prevProject}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={nextProject}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;