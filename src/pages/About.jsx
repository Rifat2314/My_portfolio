// src/components/About.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: 'Problem Solver', icon: '💻', description: '1500+ problems solved' },
    { name: 'Web Developer', icon: '🌐', description: 'MERN stack' },
    { name: 'AI Enthusiast', icon: '🤖', description: 'LLM & ML research' },
    { name: 'CS Fundamentals', icon: '📚', description: 'Strong theoretical foundation' },
  ];

  return (
    <section className="section about" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-text"
          >
            <p>
            Backend Development in full-stack development is my area of passion, and I possess excellent problem-solving 
            skills, along with the experience of developing web applications. I am in search of a platform wherein I can get the 
            chance to contribute towards the development of secure software.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="about-skills-grid"
          >
            {skills.map((skill, index) => (
              <div key={index} className="skill-topic-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;