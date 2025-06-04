import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
        {title}
        <motion.span
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-primary-500 dark:bg-primary-400 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: '60%' } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.span>
      </h2>
      {subtitle && (
        <motion.p 
          className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;