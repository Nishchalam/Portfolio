import ThemeSwitcher from './components/ThemeSwitcher';
import Navbar from './components/Navbar';
import SpectrogramField from './components/SpectrogramField';
import About from './components/About';
import Research from './components/Research';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <SpectrogramField />
      <div className="app-content">
        <ThemeSwitcher />
        <Navbar />
        <main className="container">
          <About />
          <Research />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
