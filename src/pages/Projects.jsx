// src/pages/Projects.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCalendar, FiUsers, FiDatabase, FiLock } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'ShuttleSync – CU Shuttle Train Booking System',
      description: 'A comprehensive train ticket booking system for university shuttle service with payment integration.',
      features: [
        'Train ticket booking',
        'Schedule search',
        'Multi-passenger booking',
        'SSLCommerz payment integration',
        'Booking history',
        'Admin dashboard',
      ],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'SSLCommerz'],
      github: 'https://github.com/jms108/ShuttleSync-Railway-App',
      demo: 'https://shuttlesync-railway-app-1.onrender.com/dashboard',
      image: 'https://via.placeholder.com/400x250/1e1e2e/3b82f6?text=ShuttleSync',
    },
    {
      title: 'CU-CIMS – Community Info Management System',
      description: 'An information management system for community data retrieval and team collaboration.',
      features: [
        'Information management system',
        'REST API integration',
        'Team collaboration features',
        'Centralized data retrieval',
        'User role management',
        'Analytics dashboard',
      ],
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'Firebase'],
      github: 'https://github.com/faysalcsecu/CU-Community-info-management-system',
      
      image: 'https://via.placeholder.com/400x250/1e1e2e/8b5cf6?text=CU-CIMS',
    },
  ];

  return (
    <div className="projects-page" ref={ref}>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="page-title"
        >
          My Projects
        </motion.h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-features">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" className="project-link">
                    <FiGithub /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" className="project-link demo">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;