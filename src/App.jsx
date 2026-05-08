// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import LoadingAnimation from './components/LoadingAnimation';
import './App.css';
import About from './pages/About';
import Competitive from './pages/Competitive';
import Education from './pages/Education';
import Research from './pages/Research';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingAnimation />;

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/compititive" element={<Competitive />} />
        <Route path="/education" element={<Education />} />
        <Route path="/researche" element={<Research />} />

      </Routes>
    </Router>
  );
}

export default App;