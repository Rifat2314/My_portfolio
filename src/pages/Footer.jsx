// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/Rifat2314' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/rifat-uddin-146498283/' },
    { icon: <FiMail />, url: 'rifatuddin.csecu@gmail.com' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            ))}
          </div>
          <div className="footer-copyright">
            <p>Built with <FiHeart className="heart" /> React.js | Muhd. Rifat Uddin © 2025</p>
            <p className="footer-credit">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;