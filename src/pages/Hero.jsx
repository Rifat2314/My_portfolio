// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload, FiBriefcase, FiUser } from 'react-icons/fi';
import './Hero.css';
import rifat from '../assets/rifat.jpeg'

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'MERN Stack Developer',
    'Problem Solver',
    'AI Enthusiast',
    'CSE Undergraduate'
  ];

  useEffect(() => {
    const currentRole = roles[textIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % roles.length);
        }
      }, 100);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setIsDeleting(true);
          setTimeout(() => {}, 2000);
        }
      }, 150);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, roles]);

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/Rifat2314' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/rifat-uddin-146498283/' },
    { icon: <FiMail />, url: 'rifatuddin.csecu@gmail.com' },
  ];

  return (
    <section className="hero">
      <div className="hero-gradient" />
      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <span className="hero-badge">👋 Welcome to my portfolio</span>
          <h1 className="hero-name">
            Muhd. <span className="gradient-text">Rifat Uddin</span>
          </h1>
          <div className="hero-typing">
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description">
            I build scalable full-stack applications, solve algorithmic problems, and explore AI/LLM research.
          </p>
          <div className="hero-buttons">
           
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
              onClick={() => window.location.href = '/contact'}
            >
              <FiUser /> Contact Me
            </motion.button>
          </div>
          <div className="hero-social">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="social-icon"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-image"
        >
          <div className="hero-image-wrapper">
            <img
              src={rifat}
              alt="Muhd. Rifat Uddin"
            />
            <div className="hero-image-glow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;