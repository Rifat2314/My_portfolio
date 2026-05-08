// src/components/LoadingAnimation.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
  return (
    <motion.div
      className="loading-container"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader">
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </motion.div>
  );
};

export default LoadingAnimation;