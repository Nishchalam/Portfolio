import { useState, useEffect } from 'react';
import { FaPalette, FaSun, FaMoon, FaLeaf, FaStar, FaAdjust } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'space';
  });

  useEffect(() => {
    // Remove all theme classes first
    document.body.classList.remove('theme-space', 'theme-cyberpunk', 'theme-emerald', 'theme-yellow', 'theme-light');
    // Add current theme class
    document.body.classList.add(`theme-${theme}`);
    // Save to local storage
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const themes = [
    { id: 'space', name: 'Space Purple', color: '#b000ff', icon: <FaMoon size={12} /> },
    { id: 'cyberpunk', name: 'Sunset Neon', color: '#ff0055', icon: <FaPalette size={12} /> },
    { id: 'emerald', name: 'Ocean Emerald', color: '#00ffcc', icon: <FaLeaf size={12} /> },
    { id: 'yellow', name: 'Gold Amber', color: '#ffcc00', icon: <FaStar size={12} /> },
    { id: 'light', name: 'Premium Light', color: '#007acc', icon: <FaSun size={12} /> }
  ];

  return (
    <div 
      className="theme-switcher-container" 
      style={{
        position: 'fixed',
        top: '1.25rem',
        right: '2rem',
        zIndex: 10001,
        padding: '0.4rem 0.6rem',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        boxShadow: 'var(--glass-shadow)',
        border: '1px solid var(--glass-border)',
        backgroundColor: 'var(--glass-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          title={t.name}
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            border: theme === t.id ? '2px solid var(--accent-cyan)' : '1px solid var(--glass-border)',
            backgroundColor: t.id === 'light' ? '#ffffff' : 'rgba(0,0,0,0.3)',
            color: t.id === 'light' ? '#333' : t.color,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            transform: theme === t.id ? 'scale(1.1)' : 'scale(1)',
            boxShadow: theme === t.id ? `0 0 10px ${t.color}` : 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = theme === t.id ? 'scale(1.1)' : 'scale(1)';
          }}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
