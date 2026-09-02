import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/profile.png';
import './About.css';

const FOCUS_AREAS = ['Speech Signal Processing', 'Deep Learning', 'Digital Signal Processing'];

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="hero-section section">
      {isModalOpen && (
        <div
          className="photo-modal-backdrop"
          onClick={() => setIsModalOpen(false)}
        >
          <img src={profileImage} alt="Nishchala Mukku" className="photo-modal-img" />
        </div>
      )}

      <div className="hero-content">
        <div className="hero-top">
          <div className="photo-container glass-panel" onClick={() => setIsModalOpen(true)}>
            <img src={profileImage} alt="Nishchala Mukku" />
          </div>
          <div className="hero-heading">
            <h1 className="hero-title">Nishchala Mukku</h1>
            <h2 className="hero-subtitle">M.S. by Research Scholar, Electrical Engineering — IIT Madras</h2>
            <div className="hero-tags">
              {FOCUS_AREAS.map((area) => (
                <span key={area} className="hero-tag">{area}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="hero-bio">
          Researcher in Speech Signal Processing, working under{' '}
          <a href="https://www.ee.iitm.ac.in/~csr/" target="_blank" rel="noopener noreferrer">
            Prof. C. S. Ramalingam
          </a>. My work focuses on signal-processing-informed machine learning methods for robust pitch estimation
          from speech and singing voice recordings — combining classical DSP techniques with modern deep learning
          architectures to improve accuracy, efficiency, and interpretability in fundamental frequency (F0) estimation.
        </p>

        <div className="hero-socials">
          <a href="mailto:mnishchala@gmail.com" title="Email"><FaEnvelope /></a>
          <a href="https://linkedin.com/in/nishchala-mukku" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/Nishchalam" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
        </div>
      </div>
    </section>
  );
};

export default About;
