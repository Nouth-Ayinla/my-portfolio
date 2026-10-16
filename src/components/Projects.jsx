import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Ona AI",
    type: "Mobile App",
    description: "An AI-powered academic and career guidance app delivering personalized roadmaps, grounded recommendations, and offline access for Nigerian students.",
    tags: ["React Native", "Expo", "Next.js", "Supabase", "Gemini AI"],
    screenshot: "assets/images/ona-cover.png",
    githubLink: "https://github.com/Nouth-Ayinla/Ona"
  },
  {
    title: "The Threadly Nest",
    type: "Mobile App",
    description: "A tailoring management app for customers and fashion houses, with measurements, fittings, order tracking, secure media uploads, and AI-assisted consultations.",
    tags: ["React Native", "Expo", "TypeScript", "Gemini AI", "Cloudflare R2"],
    screenshot: "assets/images/threadly-nest.png"
  },
  {
    title: "NACOSS E-Voting System",
    type: "Website",
    description: "A secure anonymous voting platform with single-use OTP access, auditable hash-chained ballots, admin 2FA, and live election results.",
    tags: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Node.js"],
    screenshot: "assets/images/nacoss-evoting-cover.png",
    demoLink: "https://nacossfuta.com.ng/"
  },
  {
    "title": "Styled-Life",
    "description": "A modern lifestyle blog platform with category filtering, search functionality, and beautifully designed post pages.",
    "tags": ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    "screenshot": "assets/images/screenshot2.png",
    "demoLink": "https://maison-opal.vercel.app/",
    "githubLink": "https://github.com/Nouth-Ayinla/Maison"
  },
  {
    title: "Audiophile E-commerce website",
    description: "Online shop with shopping cart functionality,a functional checkout and product filtering",
    tags: ["React", "Typescript", "Convex"],
    screenshot: "assets/images/screenshot1.png",
    demoLink: "https://audiophile-six-psi.vercel.app/",
    githubLink: "https://github.com/Nouth-Ayinla/Audiophile"
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
    "title": "Vendor Compliance Portal",
    "description": " A platform to manage vendor compliance and data protection requirements.",
    "tags": ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    "screenshot": "assets/images/screenshot4.png",
    "demoLink": "https://dpovendor.vercel.app",
    "githubLink": "https://github.com/Nouth-Ayinla/DPO-vendor"
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
    "title": "ShopwithTom",
    "description": "A curated e-commerce fashion boutique selling handcrafted clothing and accessories with shopping cart.",
    "tags": ["React", "TypeScript", "TailwindCSS"],
    "screenshot": "assets/images/screenshot6.png",
    "demoLink": "https://shopwithtom.netlify.app",
    "githubLink": "https://github.com/Nouth-Ayinla/ShopwithTom"
  },


];

const ProjectCard = ({ project, isDuplicate = false }) => (
  <article className="group/card flex h-[285px] flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:translate-x-2 hover:shadow-2xl sm:h-[360px]">
    <div className="relative h-28 flex-none overflow-hidden bg-slate-100 sm:h-36">
      <img
        src={`/${project.screenshot}`}
        alt={isDuplicate ? '' : `${project.title} project preview`}
        className={`h-full w-full transition-transform duration-500 group-hover/card:scale-105 ${project.type === 'Mobile App' ? 'object-contain' : 'object-cover'}`}
      />
      {project.type && (
        <span className="absolute left-2 top-2 rounded-full bg-slate-950/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm sm:left-3 sm:top-3 sm:text-xs">
          {project.type}
        </span>
      )}
    </div>
    <div className="flex min-h-0 flex-1 flex-col p-3 sm:p-5">
      <h3 className="mb-2 line-clamp-2 text-sm font-bold text-slate-900 sm:text-xl">{project.title}</h3>
      <p className="mb-2 line-clamp-2 flex-grow text-xs leading-5 text-slate-600 sm:mb-3 sm:text-sm sm:leading-6">{project.description}</p>
      <div className="mb-4 hidden flex-wrap gap-1.5 overflow-hidden sm:flex">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-primary">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-3 text-[11px] sm:gap-4 sm:text-base">
        {project.githubLink ? (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isDuplicate ? -1 : undefined}
            className="flex items-center gap-1 font-semibold text-slate-700 transition-colors hover:text-primary sm:gap-2 [&>svg]:hidden sm:[&>svg]:block"
          >
            <Github size={19} /> Code
          </a>
        ) : (
          <span className="font-medium text-slate-400">Private</span>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isDuplicate ? -1 : undefined}
            className="flex items-center gap-1 font-semibold text-primary hover:underline sm:gap-2 [&>svg]:hidden sm:[&>svg]:block"
          >
            <ExternalLink size={19} /> {project.type === 'Website' ? 'Live Site' : 'Live Demo'}
          </a>
        )}
      </div>
    </div>
  </article>
);

const ProjectGrid = ({ isDuplicate = false }) => (
  <div
    className="grid grid-cols-2 gap-3 px-0 py-4 sm:gap-6 sm:px-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
    aria-hidden={isDuplicate ? 'true' : undefined}
  >
    {projects.map((project) => (
      <ProjectCard
        key={`${isDuplicate ? 'duplicate-' : ''}${project.title}`}
        project={project}
        isDuplicate={isDuplicate}
      />
    ))}
  </div>
);

const Projects = () => {

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-primary">Some of my recent work</p>
        </div>

        <div
          className="relative mx-auto h-[620px] w-full max-w-md overflow-hidden [perspective:1000px] md:hidden"
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
            maskImage:
              'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
          }}
        >
          <div className="relative left-[60%] w-[80%] origin-center animate-skew-scroll will-change-transform focus-within:[animation-play-state:paused] motion-reduce:left-0 motion-reduce:mx-auto motion-reduce:animate-none">
            <ProjectGrid />
            <ProjectGrid isDuplicate />
          </div>
        </div>

        <div
          className="relative mx-auto hidden h-[700px] w-full max-w-7xl overflow-hidden [perspective:1400px] md:block"
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)',
            maskImage:
              'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div className="relative left-[7%] w-[94%] origin-center animate-skew-scroll will-change-transform hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:left-0 motion-reduce:mx-auto motion-reduce:animate-none">
            <ProjectGrid />
            <ProjectGrid isDuplicate />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
