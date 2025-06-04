import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Intel Corporation',
    position: 'AI/ML Software Engineering Intern',
    period: 'Feb 2025 - Present',
    location: 'Santa Clara – Remote',
    description: [
      'Enhanced Intel\'s QIRI chatbot with hybrid retrieval (dense + sparse) and expert-matching LLMs, boosting answer speed by 80%.',
      'Built Holistic AI analytics platform using Python, Kafka, and MongoDB, reducing workforce reporting turnaround by 40%.',
      'Engineered containerized ETL microservices using Spark and serverless CI/CD (AWS Lambda, API Gateway), cutting deployment time by 54% and boosting analytics uptime.',
      'Built AI model marketplace for Intel Foundry with semiconductor domain-specific agents, code, and EDA tools—accelerated PLM workflows and knowledge reuse across chip design teams.'
    ]
  },
  {
    id: 2,
    company: 'SCAI ML Labs ASU',
    position: 'ML Research Intern',
    period: 'April 2024 - Present',
    location: 'Tempe, Arizona',
    description: [
      'Developed scalable pipelines for training probabilistic circuits (interpretable generative models) on multimodal biomedical datasets from Mayo clinic Hospital using ASU\'s high-performance SOL cluster.',
      'Designed algorithms for data preprocessing, reducing I/O and compute latency by 14% enabling faster experimentation on large-scale graphs.',
      'Conducted empirical evaluations using PyTorch/Julia, focusing on sample diversity, tractability and inference fidelity.'
    ]
  },
  {
    id: 3,
    company: 'State-Street',
    position: 'Data Science Intern',
    period: 'August 2024 - December 2024',
    location: 'Boston – Remote',
    description: [
      'Modernized legacy COBOL systems with Java and LLAMA AI, reducing inefficiencies by 33% and optimizing algorithmic performance.',
      'Built real-time AI dashboards in Power BI with Python and R, improving product service analysis and decision-making.',
      'Automated CI/CD pipelines with unit testing, boosting deployment speed and reliability by 30%.'
    ]
  },
  {
    id: 4,
    company: 'Qualitest',
    position: 'SWE/AI-ML Intern',
    period: 'January 2024 – April 2024',
    location: 'Apex, North Carolina',
    description: [
      'Built RESTful APIs for a Quality Assurance framework, integrating React, Node.js, and MongoDB for seamless model communication.',
      'Engineered fault-tolerant database solutions using MongoDB and optimized queries for large-scale datasets.',
      'Debugged and Optimized feature selection using cloud-hosted machine learning models and integrated automated testing workflows.',
      'Applied object-oriented programming techniques in Java to develop reusable API modules, reducing code duplication.'
    ]
  },
  {
    id: 5,
    company: 'Luminosity Lab',
    position: 'Undergraduate Technology Consultant',
    period: 'August 2023 - Present',
    location: 'Tempe, Arizona',
    description: [
      'Partnered with Apple to co-design hardware-software integration strategies, aligning technical architectures with business goals.',
      'Optimized Zoom\'s virtual learning space architecture, reducing latency by 12% and driving a 20% increase in user engagement.',
      'Improved payment gateway reliability by 22% through streamlined scripting and architecture enhancements for high-traffic environments.'
    ]
  }
];

const Experience: React.FC = () => {
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
    <section id="experience" className="section">
      <div className="container-custom">
        <SectionTitle title="Work Experience" />
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`timeline-item ${index === experiences.length - 1 ? 'last' : ''}`}
            >
              <div className="timeline-dot"></div>
              <div className="card p-6 ml-4 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">{exp.position}</h3>
                    <h4 className="text-lg font-medium">{exp.company}</h4>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <div className="flex items-start mb-3">
                  <Briefcase size={16} className="mr-2 mt-1 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">{exp.location}</span>
                </div>
                
                <ul className="mt-3 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-500 dark:before:text-primary-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;