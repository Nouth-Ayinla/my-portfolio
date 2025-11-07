import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full py-5 bg-white/90 shadow-md z-50 transition-all">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <a href="home" className="text-3xl font-bold">
          F<span className="text-primary">.</span>
        </a>
        
        <ul className={`md:flex gap-8 ${isMenuOpen ? 'flex flex-col fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white items-center justify-center' : 'hidden'}`}>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="font-semibold relative py-1 block"
                onClick={closeMenu}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        
        <button 
          className="md:hidden text-xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;