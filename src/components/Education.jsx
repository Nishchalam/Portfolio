import iitmLogo from '../assets/iitm.png';
import iiitkLogo from '../assets/iiitk.png';
import davLogo from '../assets/dav.jpeg';
import kvLogo from '../assets/kv.jpeg';
import './Timeline.css';

const EDUCATION = [
  {
    logo: iitmLogo,
    degree: 'M.S. by Research, Electrical Engineering',
    school: 'Indian Institute of Technology Madras',
    date: '2024 – Present',
    details: [
      ['Advisor', 'C. S. Ramalingam'],
      ['Coursework', 'Probability Theory (EE5110), Applied Linear Algebra (EE5120), Advanced Topics in Signal Processing (EE6130), Detection Theory (EE5112), Estimation Theory (EE5111), Speech Signal Processing (EE5170), Foundations of Machine Learning (DA5400)'],
      ['CGPA', '8.44'],
    ],
  },
  {
    logo: iiitkLogo,
    degree: 'B.Tech, Electronics and Communications',
    school: 'IIITDM Kurnool',
    date: '2020 – 2024',
    minor: { title: 'Minor: Machine Learning and Data Science', cgpa: '8.33' },
    details: [
      ['CGPA', '8.57 (Department Rank 2 across all semesters)'],
    ],
  },
  {
    logo: davLogo,
    degree: 'Class 12th (Senior Secondary)',
    school: 'DAV Sr Secondary School, Chennai',
    date: '2018 – 2020',
    details: [['Score', '95.4%']],
  },
  {
    logo: kvLogo,
    degree: 'Class 10th (High School)',
    school: 'Kendriya Vidyalaya HVF, Avadi',
    date: '2008 – 2018',
    details: [['Score', '92.8%']],
  },
];

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {EDUCATION.map((item) => (
          <div className="timeline-item" key={item.degree}>
            <div className="timeline-content">
              <div className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
                <img src={item.logo} alt={item.school} style={{ width: '56px', height: '56px', objectFit: 'contain', backgroundColor: '#fff', borderRadius: '8px', padding: '5px', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{item.degree}</h3>
                  <h4 style={{ color: 'var(--text-secondary)', fontWeight: 500, margin: '0 0 0.4rem 0' }}>{item.school}</h4>
                  <p className="timeline-date">{item.date}</p>
                  {item.minor && (
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      background: 'var(--accent-soft)',
                      border: '1px solid var(--accent)',
                      borderRadius: '20px',
                      padding: '0.4rem 0.9rem',
                      marginBottom: '0.75rem',
                    }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent)' }}>{item.minor.title}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--accent)' }}>· Minor CGPA: {item.minor.cgpa}</span>
                    </div>
                  )}
                  {item.details.map(([label, value]) => (
                    <p key={label} style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>{label}:</strong> {value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
