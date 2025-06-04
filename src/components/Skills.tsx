import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Brain, Award, Server } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; level: number }>;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code className="text-primary-600 dark:text-primary-400" />,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 90 },
        { name: 'C++', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'C#', level: 75 },
      ],
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: <Server className="text-primary-600 dark:text-primary-400" />,
      skills: [
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: '.NET', level: 75 },
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'Apache Spark', level: 80 },
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: <Cloud className="text-primary-600 dark:text-primary-400" />,
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'Terraform', level: 75 },
        { name: 'API Gateway', level: 85 },
        { name: 'AWS Lambda', level: 80 },
        { name: 'Docker', level: 85 },
      ],
    },
    {
      id: 'databases',
      title: 'Databases & Data Tools',
      icon: <Database className="text-primary-600 dark:text-primary-400" />,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Power BI', level: 80 },
        { name: 'CRM Systems', level: 75 },
      ],
    },
    {
      id: 'ai',
      title: 'AI/ML & Research',
      icon: <Brain className="text-primary-600 dark:text-primary-400" />,
      skills: [
        { name: 'LLMs', level: 90 },
        { name: 'Probabilistic Circuits', level: 85 },
        { name: 'Statistical Models', level: 85 },
        { name: 'CNNs', level: 80 },
        { name: 'Transformers', level: 85 },
      ],
    },
    {
      id: 'certs',
      title: 'Certifications & Training',
      icon: <Award className="text-primary-600 dark:text-primary-400" />,
      skills: [
        { name: 'AWS Machine Learning Engineer', level: 90 },
        { name: 'Stanford Machine Learning', level: 95 },
        { name: 'Stanford Deep Learning', level: 90 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <SectionTitle title="Skills & Expertise" />
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: "0%" }}
                        animate={{ width: inView ? `${skill.level}%` : "0%" }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;