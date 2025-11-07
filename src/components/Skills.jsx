import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaMobileAlt } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-5xl mb-4" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-5xl mb-4" /> },
    { name: 'JavaScript', icon: <FaJs className="text-5xl mb-4" /> },
    { name: 'React', icon: <FaReact className="text-5xl mb-4" /> },
    { name: 'WordPress', icon: <FaWordpress className="text-5xl mb-4" /> },
    { name: 'Responsive Design', icon: <FaMobileAlt className="text-5xl mb-4" /> },
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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
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