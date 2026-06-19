import React from 'react';

const CurrentResearch = () => {
  return (
    <section id="research" className="section">
      <h2 className="section-title neon-border">Current Research</h2>
      <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem' }}>Reflected Root Chirp Group Delay-Based Methods for Speech Signal Processing</h3>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        <div className="glass-panel">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            My research investigates whether root-based signal representations can improve pitch estimation compared to conventional spectrogram-based approaches. I develop and evaluate RRCGD-based feature representations, integrate them with deep learning architectures, and benchmark their performance on speech and singing voice datasets. The goal is to combine signal processing insights with modern machine learning to build more accurate and interpretable pitch estimation systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrentResearch;
