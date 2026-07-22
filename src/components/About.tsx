import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Music } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <SectionTitle title="About Me" />
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
              AI Engineer · Startup Builder · Musician
            </h3>
            
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Hi! I’m Arnav — Engineer, Founder, and Musician. I study Computer Science and Statistics at ASU, but really, I just love building cool stuff that solves real problems.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Right now I’m building product at Capital One and diving into generative models for healthcare at ASU’s ML lab. I'm especially into things that mix structure and uncertainty — think probabilistic models, not coin flips.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Outside the tech world, I teach Indian Classical Music — which honestly teaches me as much about focus, rhythm, and flow as any codebase ever has.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Big picture? I’m here to build things that matter, push boundaries, and have a good time doing it. Soon, that means launching the next startup — or three.
          </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/resume.pdf" 
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download Resume
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-6">
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                  <GraduationCap className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Education</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-1 font-medium">Arizona State University</p>
                  <p className="text-gray-600 dark:text-gray-400">Bachelor's/Accelerated Master's (Fall 2026)</p>
                  <p className="text-gray-600 dark:text-gray-400">Computer Science, Mathematical Statistics</p>
                  <p className="text-primary-600 dark:text-primary-400 mt-1">GPA: 3.9/4.0</p>
                </div>
              </div>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent-100 dark:bg-accent-900/30 p-3 rounded-lg mr-4">
                  <Award className="text-accent-600 dark:text-accent-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Honors & Awards</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Dean's List</li>
                    <li>New American University Scholarship</li>
                    <li>Selected for IAC 2025 Publication</li>
                    <li>Selected for NeurIPS</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-secondary-100 dark:bg-secondary-900/30 p-3 rounded-lg mr-4">
                  <Music className="text-secondary-600 dark:text-secondary-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Personal Interests</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Indian Classical Music (Teacher and Performer)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
