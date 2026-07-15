import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaAddressCard } from 'react-icons/fa';
import profileImage from '../assets/profile.jpeg';
import SpectrogramDoodle from './SpectrogramDoodle';
import './About.css';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="hero-section section" style={{ position: 'relative' }}>
      {/* Image Modal */}
      {isModalOpen && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backdropFilter: 'blur(5px)' }}
          onClick={() => setIsModalOpen(false)}
        >
          <img src={profileImage} alt="Nishchala Mukku Enlarged" style={{ maxHeight: '90vh', maxWidth: '90vw', borderRadius: '20px', boxShadow: '0 0 40px rgba(0, 240, 255, 0.4)', objectFit: 'contain' }} />
          <p style={{ position: 'absolute', bottom: '20px', color: 'rgba(255,255,255,0.7)' }}>Click anywhere to close</p>
        </div>
      )}

      {/* Vertical Social Bar */}
      <div className="social-bar" style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        zIndex: 1000,
        backgroundColor: 'rgba(255,255,255,0.05)',
        padding: '1rem 0.5rem',
        borderRadius: '30px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <a href="mailto:mnishchala@gmail.com" title="Email" style={{ color: 'var(--text-primary)', fontSize: '1.8rem', transition: 'color 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }} onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}>
          <FaEnvelope />
          <span style={{ fontSize: '0.5rem', fontWeight: 'bold' }}>EMAIL</span>
        </a>
        <a href="https://linkedin.com/in/nishchala-mukku" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: 'var(--text-primary)', fontSize: '1.8rem', transition: 'color 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }} onMouseEnter={e => e.target.style.color = 'var(--accent-blue)'} onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}>
          <FaLinkedin />
          <span style={{ fontSize: '0.5rem', fontWeight: 'bold' }}>LINKEDIN</span>
        </a>
        <a href="https://github.com/Nishchalam" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ color: 'var(--text-primary)', fontSize: '1.8rem', transition: 'color 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }} onMouseEnter={e => e.target.style.color = 'var(--accent-purple)'} onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}>
          <FaGithub />
          <span style={{ fontSize: '0.5rem', fontWeight: 'bold' }}>GITHUB</span>
        </a>
        <a href="https://drive.google.com/file/d/1q-uluKK8A7EFydjATNu9I_mXFrYvnaK9/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Resume" style={{ color: 'var(--text-primary)', fontSize: '1.8rem', transition: 'color 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }} onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}>
          <FaAddressCard />
          <span style={{ fontSize: '0.5rem', fontWeight: 'bold' }}>RESUME</span>
        </a>
      </div>

      {/* Quirky Audio/Spectrogram Doodle vertically on left */}
      <SpectrogramDoodle side="left" />
      {/* Quirky Audio/Spectrogram Doodle vertically on right */}
      <SpectrogramDoodle side="right" />

      <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 40px', zIndex: 2, textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <div className="photo-container glass-panel" onClick={() => setIsModalOpen(true)} style={{ padding: '0.5rem', borderRadius: '50%', overflow: 'hidden', width: '320px', height: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, cursor: 'pointer', transition: 'transform 0.3s ease', position: 'relative' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img src={profileImage} alt="Nishchala Mukku" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', transform: 'scale(1.4)', objectPosition: 'top center' }} />
          </div>
          <div>
            <h1 className="hero-title" style={{ fontSize: '3.5rem', margin: '0 0 0.5rem 0' }}>
              Hi, I'm <span className="neon-text neon-border">Nishchala Mukku</span>
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', margin: '0 0 1rem 0', flexWrap: 'wrap' }}>
              {["Speech & Audio AI", "AI", "Deep Learning", "Machine Learning", "DSP"].map((interest, idx) => (
                <span key={idx} style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {interest} {idx < 4 && <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem', marginRight: '0.25rem' }}>|</span>}
                </span>
              ))}
            </div>
            <h2 className="hero-subtitle" style={{ margin: 0 }}>M.S. by Research Scholar, Electrical Engineering<br/><span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Indian Institute of Technology Madras</span></h2>
          </div>
        </div>
        
        <p className="hero-bio" style={{ fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '1000px', textAlign: 'justify' }}>
          Researcher in Speech Signal Processing and Machine Learning, working under <a href="https://www.ee.iitm.ac.in/~csr/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', whiteSpace: 'nowrap' }}>Professor Dr. C. S. Ramalingam</a>. My research focuses on developing signal-processing-informed machine learning methods for robust pitch estimation from speech and singing voice recordings.
          <br/><br/>
          I investigate how classical speech processing techniques can be integrated with modern deep learning architectures to improve accuracy, efficiency, and interpretability in fundamental frequency (F0) estimation.
        </p>
      </div>
    </section>
  );
};

export default About;
