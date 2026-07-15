const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      borderTop: '1px solid var(--glass-border)',
      marginTop: '4rem',
      backgroundColor: 'rgba(10, 10, 15, 0.8)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    }}>
      {/* Visitor Counter Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Profile Visitors:</span>
        <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fnishchalam.github.io%2FPortfolio&countColor=%2300f0ff&labelStyle=none" alt="Visitor Badge" style={{ height: '20px', borderRadius: '4px' }} />
      </div>
    </footer>
  );
};

export default Footer;
