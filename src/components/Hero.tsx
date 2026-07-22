import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background design elements */}
      <motion.div 
        className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl opacity-60 dark:opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0.3, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div 
        className="absolute -left-32 top-1/3 w-80 h-80 rounded-full bg-secondary-100 dark:bg-secondary-900/20 blur-3xl opacity-60 dark:opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0.2, 0.5] }}
        transition={{ duration: 7, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container-custom flex flex-col lg:flex-row items-center z-10">
        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="inline-block text-primary-600 dark:text-primary-400 font-medium mb-2">
              Product @ Capital One | Prev: SWE @ Intel
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Arnav Arora
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Building products @ Capital One.<br />
            Researching next-gen ML @ ASU.<br /><br />
            Building solutions people need,<br />
            Launching products people love.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex justify-center lg:justify-start space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a 
              href="https://github.com/aarora80" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-700 text-dark-800 dark:text-white hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-dark-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/arnav-arora-a35027256/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-700 text-dark-800 dark:text-white hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-dark-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:arnav9920@gmail.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-700 text-dark-800 dark:text-white hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-dark-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="relative">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl border-4 border-primary-400">
              <img 
                src="/arnav.jpg" 
                alt="Arnav Arora" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent-400 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary-600 rounded-full opacity-70 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-10 w-6 h-6 bg-secondary-500 rounded-full opacity-70 animate-pulse delay-500"></div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-dark-700 dark:text-gray-400 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
