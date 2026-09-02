const Research = () => {
  return (
    <section id="research" className="section">
      <h2 className="section-title">Research</h2>

      <div className="glass-panel" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Reflected Root Chirp Group Delay-Based Methods for Speech Signal Processing</h3>
        <p style={{ lineHeight: '1.75', margin: 0 }}>
          Investigating whether root-based signal representations improve pitch estimation compared to conventional
          spectrogram-based approaches. Developing and evaluating RRCGD-based feature representations, integrating
          them with deep learning architectures, and benchmarking performance on speech and singing voice datasets —
          combining signal processing insight with modern machine learning for more accurate, interpretable
          pitch (F0) estimation.
        </p>
      </div>

      <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
        <div>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Publication · IEEE i-COSTE 2023</span>
          <h3 style={{ fontSize: '1.05rem', margin: '0.4rem 0 0.4rem 0' }}>Estimation of State for GPS-Denied Navigation of Autonomous Underwater Vehicles (AUVs)</h3>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            P. K. Duba, N. P. B. Mannam, <strong style={{ color: 'var(--text-primary)' }}>N. Mukku</strong>, P. Rajalakshmi — EKF/UKF sensor-fusion framework combining IMU, DVL, and pressure sensor data for GPS-denied AUV navigation.
          </p>
        </div>
        <a href="https://ieeexplore.ieee.org/document/10500786/" target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ flexShrink: 0 }}>View Paper</a>
      </div>
    </section>
  );
};

export default Research;
