import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  subtitle?: string;
  period: string;
  location: string;
  description: string[];
}

// Renders plain text with inline [label](url) markdown-style links as clickable anchors
const renderWithLinks = (text: string) => {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      return (
        <a
          key={i}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 dark:text-primary-400 underline hover:no-underline"
        >
          {match[1]}
        </a>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
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
    id: 2,
    company: 'State Street',
    position: 'Product Development Intern',
    period: 'August 2024 - December 2024',
    location: 'Boston – Remote',
    description: [
      'Partnered with engineering to scope and modernize legacy COBOL systems using Java and LLAMA AI, defining requirements that cut processing inefficiencies by 33%.',
      'Shipped real-time AI dashboards in Power BI to give product and operations teams actionable insight into service performance, speeding up decision-making.',
      'Drove adoption of automated CI/CD pipelines with unit testing across the team, improving release velocity and reliability by 30%.'
    ]
  },
  {
    id: 3,
    company: 'ASU Probabilistic ML Lab (Dr. YooJung Choi)',
    position: 'Undergraduate ML Researcher',
    subtitle: 'Contributing Researcher: [NeurIPS Publication Fall 2025](https://yoojungchoi.github.io/publications/LelandNeurIPS25/)',
    period: 'April 2024 - May 2026',
    location: 'Tempe, Arizona',
    description: [
      'Built multimodal ML pipelines in PyTorch to predict survival outcomes for kidney cancer (ccRCC) by fusing medical imaging and genomic data from Mayo Clinic; trained models at scale on ASU\'s HPC cluster across 1M+ patient records for [honors thesis](https://www.linkedin.com/in/arnav-arora-a35027256/overlay/Project/1439617808/treasury/?profileId=ACoAAD8B9wkBWjSBsD2xGLV9WsttsfTWAS_8jK0).',
      'Implemented importance sampling algorithms for probabilistic circuits and ran experimental evaluations of approximation error on structured benchmark datasets, supporting the lab\'s NeurIPS 2025 paper proving fundamental hardness results for probabilistic inference.'
    ]
  },
  {
    id: 4,
    company: 'Intel Corporation',
    position: 'AI/ML Software Engineering Intern',
    period: 'Feb 2025 - May 2026',
    location: 'Santa Clara, California',
    description: [
      'Migrated 5+ internal data pipelines, including CW contingent workforce and HSD/Jira data, to Databricks for Intel\'s PLM initiative, unifying siloed sources into a single platform with advanced analytics and ML capability across 3 cross-functional teams.',
      'Built a CNN-based computer vision classifier for semiconductor defect detection on 10K+ labeled chip images; achieved ~85% classification accuracy and reduced early-stage manual inspection effort by ~25% in internal testing.',
      'Extended Intel\'s QIRI platform with RAG-based search and automated ticket routing, cutting average lookup time ~70% across 200+ retrieval scenarios.'
    ]
  },
  {
    id: 5,
    company: 'Capital One',
    position: 'AI/ML Product Development Intern (PDIP)',
    period: 'June 2026 - Present',
    location: 'Dallas & McLean',
    description: [
      'Owned an AI-driven dealer insights product on Capital One\'s AutoNavigator (17K+ dealerships, millions of monthly car shoppers), turning raw session data into CRM-ready signals projected to lift lead conversion ~15-20%.',
      'Built a Python/SQL tiering framework to prioritize 2M+ daily session events into high-intent leads, solving the platform\'s core scale problem of surfacing insight from noise.',
      'Identified and fixed a stratum tag gap in mobile session tracking via a self-authored PR, closing a data quality hole upstream of the signal pipeline.'
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
                    {exp.subtitle && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{renderWithLinks(exp.subtitle)}</p>
                    )}
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
                      {renderWithLinks(item)}
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
