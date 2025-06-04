import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Github as GitHub, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check which section is currently in view
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <motion.a 
          href="#home"
          className="text-2xl font-bold text-primary-600 dark:text-primary-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Arnav Arora
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 dark:bg-primary-400"
                      layoutId="underline"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4 ml-4">
            <a href="https://github.com/aarora80" target="_blank" rel="noopener noreferrer" className="text-dark-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <GitHub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/arnav-arora-a35027256/" target="_blank" rel="noopener noreferrer" className="text-dark-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:arnav9920@gmail.com" className="text-dark-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Mail size={20} />
            </a>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-gray-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-dark-800 dark:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className={`fixed inset-0 bg-white dark:bg-dark-800 z-40 md:hidden flex flex-col ${mobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-dark-800 dark:text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col items-center justify-center flex-grow">
            <ul className="flex flex-col space-y-6 text-xl">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`nav-link text-center ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-6 mt-12">
              <a href="https://github.com/aarora80" target="_blank" rel="noopener noreferrer" className="text-dark-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <GitHub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/arnav-arora-a35027256/" target="_blank" rel="noopener noreferrer" className="text-dark-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:arnav9920@gmail.com" className="text-dark-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;