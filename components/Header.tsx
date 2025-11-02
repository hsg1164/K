import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    document.body.classList.toggle('menu-open', isMenuOpen);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={isSticky ? 'sticky' : ''}>
        <div className="container">
          <div className="logo">
            <a href="#home">
              <img src="/9709798.png" alt="HSG Logo" className="logo-img" />
            </a>
          </div>
          <nav className={isMenuOpen ? 'active' : ''}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className={activeSection === link.href.substring(1) ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label} <i className={`fas ${link.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </header>
      <div className={`menu-backdrop ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
    </>
  );
};

export default Header;
