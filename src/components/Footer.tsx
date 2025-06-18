import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary-400 mb-2">Arnav Arora</h2>
            <p className="text-gray-400 max-w-md">
              Software Engineer & ML Researcher passionate about building innovative AI solutions 
              and conducting research in probabilistic models.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/aarora80" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-800 text-white hover:bg-primary-600 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/arnav-arora-a35027256/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-800 text-white hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:arnav9920@gmail.com"
                className="p-3 rounded-full bg-dark-800 text-white hover:bg-primary-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <p className="text-gray-400 text-sm flex items-center">
              &copy; {currentYear} Arnav Arora. Made with <Heart size={14} className="mx-1 text-red-500" /> and precision.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="mb-4 md:mb-0">
              <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">About</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Experience</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Contact</a></li>
              </ul>
            </nav>
            
            <p className="text-gray-500 text-xs">
              arnav9920@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;