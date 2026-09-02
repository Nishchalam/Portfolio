import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Internships & TA' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="glass-panel navbar">
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}><a href={link.href} onClick={closeMenu}>{link.label}</a></li>
        ))}
        <li>
          <a
            href="https://drive.google.com/file/d/1q-uluKK8A7EFydjATNu9I_mXFrYvnaK9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
            onClick={closeMenu}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
