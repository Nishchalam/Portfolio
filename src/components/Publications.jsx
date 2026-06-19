import React from 'react';

const Publications = () => {
  return (
    <section id="publications" className="section">
      <h2 className="section-title neon-border">Publications</h2>
      
      <div className="glass-panel" style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Estimation of State for GPS-Denied Navigation of Autonomous Underwater Vehicles (AUVs)</h3>
        <p style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>Published in 2023 IEEE i-COSTE</p>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          P. K. Duba, N. P. B. Mannam, <strong>N. Mukku</strong>, P. Rajalakshmi. Proposed an EKF/UKF sensor-fusion framework combining IMU, DVL, and pressure sensor data for GPS-denied AUV navigation.
        </p>
        <a href="https://ieeexplore.ieee.org/document/10500786/" target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ display: 'inline-block', padding: '0.5rem 1.5rem' }}>View Paper</a>
      </div>
    </section>
  );
};

export default Publications;
