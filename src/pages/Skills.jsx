// src/components/Skills.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C++', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 80 },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Firebase', level: 70 },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Docker', level: 65 },
        { name: 'Linux', level: 75 },
        { name: 'Postman', level: 80 },
        { name: 'Trello', level: 70 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section skills" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Technical Skills
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="skills-grid"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      
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