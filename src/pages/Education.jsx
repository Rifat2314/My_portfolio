// src/components/Education.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';
import './Education.css';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const educationData = [
    {
      institution: 'University of Chittagong',
      degree: 'B.Sc. in Computer Science & Engineering',
      period: '2022–2026',
      cgpa: 'CGPA 3.69/4.00',
      icon: <FiBookOpen />,
    },
    {
      institution: 'Shaheed Police Smrity College',
      degree: 'HSC in Science',
      period: '2018–2020',
      cgpa: 'GPA 4.83/5.00',
      icon: <FiAward />,
    },
  ];

  return (
    <section className="section education" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Education
        </motion.h2>
        <div className="timeline">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="timeline-item-edu"
            >
              <div className="timeline-icon">{edu.icon}</div>
              <div className="timeline-content-edu">
                <h3>{edu.institution}</h3>
                <p className="edu-degree">{edu.degree}</p>
                <div className="edu-details">
                  <span className="edu-period">{edu.period}</span>
                  <span className="edu-cgpa">{edu.cgpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;