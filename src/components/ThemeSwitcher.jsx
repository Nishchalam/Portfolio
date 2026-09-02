import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  useEffect(() => {
    document.body.classList.toggle('theme-light', theme === 'light');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label="Toggle color theme"
      style={{
        position: 'fixed',
        top: '1.25rem',
        right: '2rem',
        zIndex: 10001,
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        border: '1px solid var(--glass-border)',
        backgroundColor: 'var(--glass-bg)',
        color: 'var(--text-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: 'var(--glass-shadow)',
        transition: 'border-color 0.2s ease, color 0.2s ease'
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
    >
      {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
    </button>
  );
};

export default ThemeSwitcher;
