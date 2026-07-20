const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      borderTop: '1px solid var(--glass-border)',
      marginTop: '4rem',
      backgroundColor: 'var(--glass-bg)',
      color: 'var(--text-secondary)'
    }}>
      <p style={{ margin: 0, fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Nishchala Mukku. Built with React & Vite.
      </p>
    </footer>
  );
};

export default Footer;
