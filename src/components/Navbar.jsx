import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

const NavLink = ({ item, activeSection, onClick }) => {
  const sectionId = item.toLowerCase();
  const isActive = activeSection === sectionId;

  return (
    <a
      href={`#${sectionId}`}
      className={`group relative block py-2 font-semibold transition-colors ${
        isActive ? 'text-primary' : 'text-slate-700 hover:text-primary'
      }`}
      onClick={onClick}
    >
      {item}
      <span
        className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary transition-transform duration-300 ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
    </a>
  );
};

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-20 bg-white/90 shadow-md backdrop-blur-md">
      <div className="container mx-auto flex h-full items-center justify-between px-5">
        <a href="#home" className="text-3xl font-bold" onClick={closeMenu} aria-label="Go to home section">
          F<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink item={item} activeSection={activeSection} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-xl text-slate-800 transition-colors hover:bg-slate-100 md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="absolute left-4 right-4 top-[calc(100%-0.25rem)] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl md:hidden">
          <ul className="flex flex-col items-center gap-3 px-6 py-5">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink item={item} activeSection={activeSection} onClick={closeMenu} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
