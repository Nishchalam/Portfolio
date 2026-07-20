import { FaGraduationCap } from 'react-icons/fa';
import iitmLogo from '../assets/iitm.png';
import iiitkLogo from '../assets/iiitk.png';
import davLogo from '../assets/dav.jpeg';
import kvLogo from '../assets/kv.jpeg';
import './Timeline.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title neon-border">
        <FaGraduationCap style={{ marginRight: '10px' }} /> Education
      </h2>
      
      <div className="timeline">
        {/* IITM */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
              <img src={iitmLogo} alt="IITM" style={{ width: '80px', height: '80px', objectFit: 'contain', backgroundColor: '#fff', borderRadius: '8px', padding: '5px', flexShrink: 0 }} />
              <div>
                <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>M.S. by Research Scholar, Electrical Engineering</h3>
                <h4 style={{ color: 'var(--text-secondary)', margin: '0 0 0.5rem 0' }}>Indian Institute of Technology Madras</h4>
                <p className="timeline-date neon-text" style={{ margin: '0 0 1.5rem 0' }}>2024 - Present</p>
                
                <p style={{ marginBottom: '1rem' }}><strong>Advisor:</strong> C. S. Ramalingam</p>
                <p style={{ marginBottom: '1rem' }}><strong>Coursework:</strong> Probability Theory (EE5110), Applied Linear Algebra (EE5120), Advanced Topics in Signal Processing (EE6130), Detection Theory (EE5112), Estimation Theory (EE5111), Speech Signal Processing (EE5170), Foundations of Machine Learning (DA5400)</p>
                <p style={{ margin: 0 }}><strong>CGPA:</strong> 8.44</p>
              </div>
            </div>
          </div>
        </div>

        {/* IIITK */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
              <img src={iiitkLogo} alt="IIITK" style={{ width: '80px', height: '80px', objectFit: 'contain', backgroundColor: '#fff', borderRadius: '8px', padding: '5px', flexShrink: 0 }} />
              <div>
                <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>B.Tech in Electronics and Communications</h3>
                <h4 style={{ color: 'var(--text-secondary)', margin: '0 0 0.5rem 0' }}>IIITDM Kurnool</h4>
                <p className="timeline-date neon-text" style={{ margin: '0 0 1.5rem 0' }}>2020 - 2024</p>

                <p style={{ marginBottom: '1rem' }}><strong>Minor:</strong> Machine Learning and Data Science</p>
                <p style={{ margin: 0 }}><strong>CGPA:</strong> 8.57 (Department Rank 2 across all semesters)</p>
              </div>
            </div>
          </div>
        </div>

        {/* DAV */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
              <img src={davLogo} alt="DAV" style={{ width: '80px', height: '80px', objectFit: 'contain', backgroundColor: '#fff', borderRadius: '8px', padding: '5px', flexShrink: 0 }} />
              <div>
                <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Class 12th (Senior Secondary)</h3>
                <h4 style={{ color: 'var(--text-secondary)', margin: '0 0 0.5rem 0' }}>DAV Sr Secondary School, Chennai</h4>
                <p className="timeline-date neon-text" style={{ margin: '0 0 1.5rem 0' }}>2018 - 2020</p>
                <p style={{ margin: 0 }}><strong>Score:</strong> 95.4%</p>
              </div>
            </div>
          </div>
        </div>

        {/* KV HVF */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
              <img src={kvLogo} alt="KV HVF" style={{ width: '80px', height: '80px', objectFit: 'contain', backgroundColor: '#fff', borderRadius: '8px', padding: '5px', flexShrink: 0 }} />
              <div>
                <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Class 10th (High School)</h3>
                <h4 style={{ color: 'var(--text-secondary)', margin: '0 0 0.5rem 0' }}>Kendriya Vidyalaya HVF, Avadi</h4>
                <p className="timeline-date neon-text" style={{ margin: '0 0 1.5rem 0' }}>2008 - 2018</p>
                <p style={{ margin: 0 }}><strong>Score:</strong> 92.8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
