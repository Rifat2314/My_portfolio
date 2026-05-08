// src/components/About.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [counters, setCounters] = useState({
    problems: 0,
    contests: 0,
    projects: 0,
    cgpa: 0
  });

  useEffect(() => {
    if (isInView) {
      const duration = 2500;
      const interval = 20;
      const steps = duration / interval;
      
      let step = 0;
      const problemsTarget = 1500;
      const contestsTarget = 100;
      const projectsTarget = 2;
      const cgpaTarget = 3.69;
      
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          problems: Math.min(Math.floor(problemsTarget * progress), problemsTarget),
          contests: Math.min(Math.floor(contestsTarget * progress), contestsTarget),
          projects: Math.min(Math.floor(projectsTarget * progress), projectsTarget),
          cgpa: Math.min(cgpaTarget * progress, cgpaTarget)
        });
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [isInView]);

  const stats = [
    { value: counters.problems, suffix: '+', label: 'Problems Solved' },
    { value: counters.contests, suffix: '+', label: 'Contests' },
    { value: counters.projects, suffix: '+', label: 'Major Projects' },
    { value: counters.cgpa.toFixed(2), suffix: '', label: 'CGPA' },
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
              I'm am an 8th-semester <span className="highlight">CSE student at University of Chittagong</span> passionate about full-stack development and AI. 
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
            className="about-stats"
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">
                  {stat.value}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;