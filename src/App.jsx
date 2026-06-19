import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import CurrentResearch from './components/CurrentResearch';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Scroll Progress Line */}
      <div className="scroll-line" style={{ transform: `scaleY(${scrollProgress})` }}></div>
      
      <Navbar />
      <main className="container">
        <About />
        <CurrentResearch />
        <Experience />
        <Education />
        <Publications />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
