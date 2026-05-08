// src/components/ScrollProgress.jsx
import React, { useEffect, useState } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (winScroll / height) * 100;
      setWidth(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress">
      <div className="scroll-progress-bar" style={{ width: `${width}%` }} />
    </div>
  );
};

export default ScrollProgress;