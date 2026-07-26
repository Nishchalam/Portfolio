import iitmLogo from '../assets/iitm.png';
import './Timeline.css';

const CurrentResearch = () => {
  return (
    <section id="research" className="section">
      <h2 className="section-title neon-border">Current Research</h2>
      
      <div className="glass-panel" style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.3rem', marginBottom: '1rem' }}>Reflected Root Chirp Group Delay-Based Methods for Speech Signal Processing</h3>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
          My research investigates whether root-based signal representations can improve pitch estimation compared to conventional spectrogram-based approaches. I develop and evaluate RRCGD-based feature representations, integrate them with deep learning architectures, and benchmark their performance on speech and singing voice datasets. The goal is to combine signal processing insights with modern machine learning to build more accurate and interpretable pitch estimation systems.
        </p>
      </div>

      <div className="timeline">
        {/* Scholar item */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
              <img src={iitmLogo} alt="IITM" style={{ width: '80px', height: '80px', objectFit: 'contain', backgroundColor: '#fff', borderRadius: '8px', padding: '5px', flexShrink: 0 }} />
              <div>
                <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Graduate Research Scholar</h3>
                <h4 style={{ color: 'var(--text-secondary)', margin: '0 0 0.5rem 0' }}>Indian Institute of Technology Madras</h4>
                <p className="timeline-date neon-text" style={{ margin: '0 0 1.5rem 0' }}>2024 - Present</p>

                <p style={{ margin: 0 }}>
                  Developing and evaluating Reflected Root Chirp Group Delay (RRCGD) based feature representations for robust pitch estimation from speech and singing voice recordings. Investigating integration of classical DSP insights with modern machine learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TA item */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
              <img src={iitmLogo} alt="IITM" style={{ width: '80px', height: '80px', objectFit: 'contain', backgroundColor: '#fff', borderRadius: '8px', padding: '5px', flexShrink: 0 }} />
              <div>
                <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Teaching Assistant</h3>
                <h4 style={{ color: 'var(--text-secondary)', margin: '0 0 0.5rem 0' }}>Indian Institute of Technology Madras</h4>
                <p className="timeline-date neon-text" style={{ margin: '0 0 1.5rem 0' }}>Jul 2025 - Nov 2026</p>

                <ul style={{ listStyleType: 'none', marginLeft: '0', padding: 0, color: 'var(--text-secondary)' }}>
                  <li style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>1. Course EE1101 (July - Nov 2026): Signals and Systems under Prof. C.S. Ramalingam.</li>
                  <li style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>2. Course EE2004 (Jan - May 2026): Digital Signal Processing under Prof C.S. Ramalingam. Also, was the head TA.</li>
                  <li style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>3. Course EE5110 (Jul - Nov 2025): Probability Foundations for Electrical Engineers under Prof. Venkatesh Ramaiyan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentResearch;
