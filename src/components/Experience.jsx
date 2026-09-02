import iitmLogo from '../assets/iitm.png';
import drdoLogo from '../assets/drdo.jpeg';
import tihanLogo from '../assets/tihan.png';
import './Timeline.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Internships & Teaching Assistantship</h2>

      <div className="timeline">
        {/* Teaching Assistant */}
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
              <img src={iitmLogo} alt="IITM" style={{ width: '56px', height: '56px', objectFit: 'contain', backgroundColor: '#fff', borderRadius: '8px', padding: '5px', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Teaching Assistant</h3>
                <h4 style={{ color: 'var(--text-secondary)', fontWeight: 500, margin: '0 0 0.4rem 0' }}>Indian Institute of Technology Madras</h4>
                <p className="timeline-date">Jul 2025 – Nov 2026</p>
                <ul style={{ listStyleType: 'none', color: 'var(--text-secondary)' }}>
                  <li style={{ marginBottom: '0.4rem', lineHeight: '1.6' }}>EE1101 (Jul–Nov 2026) — Signals and Systems, under Prof. C. S. Ramalingam</li>
                  <li style={{ marginBottom: '0.4rem', lineHeight: '1.6' }}>EE2004 (Jan–May 2026) — Digital Signal Processing, under Prof. C. S. Ramalingam (Head TA)</li>
                  <li style={{ lineHeight: '1.6' }}>EE5110 (Jul–Nov 2025) — Probability Foundations for Electrical Engineers, under Prof. Venkatesh Ramaiyan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* DRDO */}
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
              <img src={drdoLogo} alt="DRDO" style={{ width: '56px', height: '56px', objectFit: 'contain', backgroundColor: '#fff', borderRadius: '8px', padding: '5px', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Research Intern</h3>
                <h4 style={{ color: 'var(--text-secondary)', fontWeight: 500, margin: '0 0 0.4rem 0' }}>DLRL, DRDO (Defence Electronics Research Laboratory, Ministry of Defence)</h4>
                <p className="timeline-date">Dec 2023 – May 2024</p>

                <ul style={{ listStyleType: 'none', color: 'var(--text-secondary)' }}>
                  <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Designed a <strong style={{ color: 'var(--text-primary)' }}>track-to-track sensor fusion</strong> pipeline for Passive Emitter Tracker (PET) systems operating on ESM/ELINT data from geographically distributed sensors, enabling target tracking at a central fusion node.</li>
                  <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Implemented a <strong style={{ color: 'var(--text-primary)' }}>Global Nearest Neighbour (GNN)</strong> data association algorithm for the fully-observable case; achieved consistent track maintenance across 3 simulated sensor geometries.</li>
                  <li style={{ marginBottom: '1rem', lineHeight: '1.6' }}>Extended the framework using a <strong style={{ color: 'var(--text-primary)' }}>Probability Hypothesis Density (PHD)</strong> filter to handle missed detections and clutter, improving track continuity under partial observability.</li>
                </ul>

                <a href="https://drive.google.com/file/d/1lEjeYNPnQvmSLE8WKZtwYTCeUoRYz7bB/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TiHAN */}
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
              <img src={tihanLogo} alt="TiHAN" style={{ width: '56px', height: '56px', objectFit: 'contain', backgroundColor: '#fff', borderRadius: '8px', padding: '5px', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Research Intern</h3>
                <h4 style={{ color: 'var(--text-secondary)', fontWeight: 500, margin: '0 0 0.4rem 0' }}>TiHAN, IIT Hyderabad (Technology Innovation Hub on Autonomous Navigation)</h4>
                <p className="timeline-date">May – Aug 2023</p>

                <ul style={{ listStyleType: 'none', color: 'var(--text-secondary)' }}>
                  <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Built an <strong style={{ color: 'var(--text-primary)' }}>EKF/UKF sensor-fusion</strong> pipeline integrating IMU (accelerometer, gyroscope, magnetometer), DVL, and pressure sensor data for GPS-denied 6-DOF state estimation of the Alice AUV (University of Girona); preprocessed multi-rate sensor streams via upsampling and Madgwick-filter orientation initialisation.</li>
                  <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Achieved roll/pitch orientation errors within ±0.05° and velocity errors within ±1 m/s across all axes under EKF; identified constant-acceleration model mismatch as the primary source of residual position error, informing future system-dynamics-aware model design.</li>
                  <li style={{ marginBottom: '1rem', lineHeight: '1.6' }}>Work published at <strong style={{ color: 'var(--text-primary)' }}>IEEE i-COSTE 2023</strong> (DOI: <a href="https://doi.org/10.1109/I-COSTE60462.2023.10500786" target="_blank" rel="noopener noreferrer">10.1109/I-COSTE60462.2023.10500786</a>) — <a href="#research">see Research</a>.</li>
                </ul>

                <a href="https://drive.google.com/file/d/1J54zOyMraFM1Hqp8i7Q3e1aoIuiFg_jg/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
