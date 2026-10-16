import { FaGitAlt, FaMobileAlt, FaPython, FaReact } from 'react-icons/fa';
import {
  SiExpo,
  SiFastapi,
  SiFirebase,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'TypeScript', icon: <SiTypescript className="text-5xl mb-4" /> },
    { name: 'React', icon: <FaReact className="text-5xl mb-4" /> },
    { name: 'React Native', icon: <FaMobileAlt className="text-5xl mb-4" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-5xl mb-4" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-5xl mb-4" /> },
    { name: 'Python', icon: <FaPython className="text-5xl mb-4" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-5xl mb-4" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-5xl mb-4" /> },
    { name: 'Expo', icon: <SiExpo className="text-5xl mb-4" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-5xl mb-4" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-5xl mb-4" /> },
    { name: 'Git', icon: <FaGitAlt className="text-5xl mb-4" /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-5">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-gray-600">
            Technologies I work with
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="skill-card flex flex-col items-center justify-center"
            >
              <div className="text-primary">
                {skill.icon}
              </div>
              <h3 className="font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
