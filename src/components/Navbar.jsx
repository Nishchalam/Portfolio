import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`glass-panel navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`} style={{ display: 'flex', alignItems: 'center', padding: scrolled ? '0.5rem 2rem' : '1rem 2rem', transition: 'all 0.3s ease' }}>
      <ul className="nav-links" style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
        <li><a href="#about">About</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#publications">Publications</a></li>
        <li><a href="https://drive.google.com/file/d/1q-uluKK8A7EFydjATNu9I_mXFrYvnaK9/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', border: '1px solid var(--accent-cyan)', padding: '0.4rem 1rem', borderRadius: '20px', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={e => {e.target.style.backgroundColor = 'var(--accent-cyan)'; e.target.style.color = '#fff'}} onMouseLeave={e => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--accent-cyan)'}}>Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
