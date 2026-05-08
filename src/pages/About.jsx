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
              I'm an 8th-semester <span className="highlight">CSE student at University of Chittagong</span> passionate about full-stack development and AI. 
              With over <strong>1500+ programming problems</strong> solved across various platforms, I've developed strong problem-solving 
              and algorithmic thinking skills.
            </p>
            <p>
              I'm deeply interested in <span className="highlight">scalable systems and backend engineering</span>, and currently exploring 
              <span className="highlight"> LLM and AI research</span>. My goal is to build technology that makes a difference.
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