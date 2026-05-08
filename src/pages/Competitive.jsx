// src/components/Competitive.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import './Competitive.css';

const Competitive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [counters, setCounters] = useState({
    problems: 0,
    rating: 0,
    contests: 0,
    vjudge: 0
  });

  useEffect(() => {
    if (isInView) {
      const duration = 2500; // 2.5 seconds
      const interval = 20; // update every 20ms
      const steps = duration / interval;
      
      let step = 0;
      const problemsTarget = 1500;
      const ratingTarget = 1160;
      const contestsTarget = 100;
      const vjudgeTarget = 20;
      
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          problems: Math.min(Math.floor(problemsTarget * progress), problemsTarget),
          rating: Math.min(Math.floor(ratingTarget * progress), ratingTarget),
          contests: Math.min(Math.floor(contestsTarget * progress), contestsTarget),
          vjudge: Math.min(Math.floor(vjudgeTarget * progress), vjudgeTarget)
        });
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [isInView]);

  const contests = [
    { name: 'CUET IUPC 2023', year: '2023', achievement: 'Participant' },
    { name: 'IIUC IUPC 2025', year: '2025', achievement: '38th Position' },
    { name: 'Engineering Day 2022 Contest', year: '2022', achievement: '1st in Batch' },
  ];

  return (
    <section className="section competitive" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
        Programming and problem solving
        </motion.h2>
        <div className="competitive-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="competitive-stats"
          >
            <div className="cp-stat-card">
              <div className="cp-stat-value">
                {counters.problems}+
              </div>
              <div className="cp-stat-label">Problems Solved</div>
            </div>
            <div className="cp-stat-card">
              <div className="cp-stat-value">
                {counters.rating}
              </div>
              <div className="cp-stat-label">Codeforces Rating</div>
            </div>
            <div className="cp-stat-card">
              <div className="cp-stat-value">
                {counters.contests}+
              </div>
              <div className="cp-stat-label">Codeforces Contests</div>
            </div>
            <div className="cp-stat-card">
              <div className="cp-stat-value">
                {counters.vjudge}+
              </div>
              <div className="cp-stat-label">Vjudge Contests</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contest-timeline"
          >
            <h3 className="timeline-title">Contest Timeline</h3>
            {contests.map((contest, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{contest.year}</div>
                <div className="timeline-content">
                  <h4>{contest.name}</h4>
                  <p>{contest.achievement}</p>
                </div>
              </div>
            ))}
            <div className="cp-buttons">
              <a href="https://codeforces.com/profile/-RIFAT-" target="_blank" rel="noopener noreferrer" className="cp-link">
                Codeforces Profile <FiExternalLink />
              </a>
              <a href="https://vjudge.net/user/Rifat_Uddin" target="_blank" rel="noopener noreferrer" className="cp-link">
                Vjudge Profile <FiExternalLink />
              </a>
              <a href="https://leetcode.com/u/Rifat_Uddin/" target="_blank" rel="noopener noreferrer" className="cp-link">
                Leetcode Profile <FiExternalLink />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Competitive;