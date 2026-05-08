// src/pages/Home.jsx
import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Competitive from './Competitive';
import Research from './Research';
import Education from './Education';
import Footer from './Footer';
import Projects from './Projects';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Competitive />
      <Research />
      <Education />
      <Projects/>
      <Footer />
    </>
  );
};

export default Home;