import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title neon-border">Contact</h2>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Feel free to reach out to me via email or phone, or visit me at my lab!</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
            <FaEnvelope style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem', marginTop: '0.2rem' }} />
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.2rem' }}>Email</h3>
              <a href="mailto:mnishchala@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>mnishchala@gmail.com</a>
            </div>
          </div>

          {/* Phone */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
            <FaPhoneAlt style={{ color: 'var(--accent-purple)', fontSize: '1.5rem', marginTop: '0.2rem' }} />
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.2rem' }}>Phone</h3>
              <a href="tel:7603854477" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--accent-purple)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>+91 76038 54477</a>
            </div>
          </div>

          {/* Lab Address */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
            <FaMapMarkerAlt style={{ color: 'var(--accent-blue)', fontSize: '1.5rem', marginTop: '0.2rem' }} />
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.2rem' }}>Lab Address</h3>
              <p style={{ margin: '0 0 0.8rem 0', color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1rem' }}>
                CSD 304 and 306, Digital Signal Processing Lab I, II<br />
                3rd floor, Despande Centre for Communications (CSD)<br />
                Electrical Science Department (ESB)<br />
                IIT Madras, Guindy
              </p>
              <a href="https://maps.app.goo.gl/L9o5cLzxaSr7UAkB9" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', borderBottom: '1px solid var(--accent-blue)', paddingBottom: '2px', transition: 'color 0.2s' }}>
                View on Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
