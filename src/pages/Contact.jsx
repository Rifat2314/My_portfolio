// src/pages/Contact.jsx
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: <FiMapPin />, text: 'Chittagong, Bangladesh' },
    { icon: <FiPhone />, text: '+8801883229997' },
    { icon: <FiMail />, text: 'rifatuddin.csecu@gmail.com , rifatuddin2345@gmail.com' },
  ];

  return (
    <div className="contact-page" ref={ref}>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="page-title"
        >
          Get In Touch
        </motion.h1>
        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h2>Let's Connect</h2>
            <p>I'm always open to discussing new projects, research collaborations, or new opportunities.</p>
            <div className="contact-details">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          
        </div>
      </div>
    </div>
  );
};

export default Contact;