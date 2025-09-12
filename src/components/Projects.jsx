import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Crochet Artist Portfolio",
      description: "A beautiful showcase for fiber artists with gallery and contact features",
      tags: ["HTML", "CSS", "JavaScript"],
      screenshot: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=500&h=300&fit=crop",
      demoLink: "https://example.com/crochet-portfolio",
      githubLink: "https://github.com/yourusername/crochet-portfolio"
    },
    {
      title: "E-Commerce Store",
      description: "Online shop with shopping cart functionality and product filtering",
      tags: ["HTML", "CSS", "JavaScript"],
      screenshot: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      demoLink: "https://example.com/ecommerce-store",
      githubLink: "https://github.com/yourusername/ecommerce-store"
    },
    {
      title: "Star Pulse Pro",
      description: "Product landing page for a premium smartwatch with animated features",
      tags: ["HTML", "CSS", "GSAP"],
      screenshot: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=300&fit=crop",
      demoLink: "https://example.com/star-pulse-pro",
      githubLink: "https://github.com/yourusername/star-pulse-pro"
    },
    {
      title: "Simple Omelette",
      description: "Recipe app with step-by-step instructions and cooking timers",
      tags: ["React", "Firebase", "API"],
      screenshot: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&h=300&fit=crop",
      demoLink: "https://example.com/simple-omelette",
      githubLink: "https://github.com/yourusername/simple-omelette"
    },
    {
      title: "Budget Tracker",
      description: "Interactive finance dashboard with expense categorization and spending analytics",
      tags: ["JavaScript", "Chart.js", "Data Visualization"],
      screenshot: "https://images.unsplash.com/photo-1534951009808-766178b47a4f?w=500&h=300&fit=crop",
      demoLink: "https://example.com/budget-tracker",
      githubLink: "https://github.com/yourusername/budget-tracker"
    },
    {
      title: "Task Manager",
      description: "Drag-and-drop task organizer with progress tracking",
      tags: ["JavaScript", "LocalStorage", "Drag API"],
      screenshot: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      demoLink: "https://example.com/task-manager",
      githubLink: "https://github.com/yourusername/task-manager"
    },
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