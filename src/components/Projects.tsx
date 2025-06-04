import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Multimodal Medical Diagnosis Model',
    description: 'Thesis research to develop a multimodal probabilistic AI model for disease progression @ MayoClinic Hospital.',
    tags: ['PyTorch', 'Probabilistic Circuits', 'Medical AI', 'Research'],
    image: 'https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'AI Predictive Maintenance API',
    description: 'API to predict Remaining Useful Life(RUL) using CMAPSS datasets, improving maintenance scheduling.',
    tags: ['Python', 'Flask', 'ML Analysis', 'FastAPI'],
    image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/aarora80/predictMaintainence.git'
  },
  {
    id: 3,
    title: 'Distributed P2P Network Protocol',
    description: 'High-performance P2P with Hot-Potato routing, custom DHT, socket-based message passing across nodes.',
    tags: ['C', 'Sockets', 'Hash Maps', 'P2P', 'Distributed Software'],
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/aarora80/SocketProject.git'
  },
  {
    id: 4,
    title: 'AI Orbitscape',
    description: 'Founding Engineer for the next frontier of AI mission planning showcasing globally at IAC 2025.',
    tags: ['AI', 'TypeScript', 'Aerospace', 'Startup'],
    image: 'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demo: 'https://orbitscape.space'
  },
  {
    id: 5,
    title: 'LunarRights',
    description: 'Leading the platform for lunar property rights and governance frameworks, selected for presentation at IAC 2025.',
    tags: ['Space Law', 'Blockchain', 'Governance', 'Startup'],
    image: 'https://images.pexels.com/photos/5439/earth-space.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demo: 'https://lunarights.space'
  }
];

const Projects: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <SectionTitle title="Featured Projects" subtitle="Explore some of my recent work and technical projects" />
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                  <h3 className="text-white font-bold text-lg line-clamp-1">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github size={16} className="text-white" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={16} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;