// src/components/Research.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCpu, FiDatabase, FiTrendingUp } from 'react-icons/fi';
import './Research.css';

const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const models = ['Mistral-7B', 'LLaMA-3-8B', 'Qwen-7B'];

  return (
    <section className="section research" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Research & Thesis
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="research-card"
        >
          <div className="research-header">
            <FiCpu className="research-icon" />
            <h3>Refusal Position Bias in Large Language Models: Analysis and Long-Context Alignment</h3>
          </div>
          <div className="research-content">
            <p>
              Extended DeRTa framework with <strong>MLE + RTO</strong> optimization for analyzing refusal position 
              bias in LLMs. Fine-tuned multiple models including Mistral-7B, LLaMA-3-8B, and Qwen-7B using 
              <strong> LoRA fine-tuning</strong> technique.
            </p>
            <div className="research-models">
              <span className="models-label">Fine-tuned Models:</span>
              <div className="model-badges">
                {models.map((model, idx) => (
                  <span key={idx} className="model-badge">{model}</span>
                ))}
              </div>
            </div>
            <div className="research-benchmark">
              <FiTrendingUp />
              <span>Evaluated on LongSafety benchmark</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;