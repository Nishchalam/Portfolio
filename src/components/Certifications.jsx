const certs = [
  { title: "Deep Learning", issuer: "NPTEL IIT KGP", date: "Apr 2023", credentialUrl: "https://drive.google.com/file/d/1Pz2Ju1zy2ZzYG-qYV4xnqIyK43GYuFXT/view?usp=drive_link" },
  { title: "Machine Learning", issuer: "DeepLearning.AI", date: "Apr 2026", credentialUrl: "https://www.coursera.org/account/accomplishments/verify/Q4UGR51LDA9X" },
  { title: "Mathematics for Machine Learning Specialization", issuer: "Imperial College London (Coursera)", date: "Feb 2023", credentialUrl: "https://www.coursera.org/account/accomplishments/verify/JRWYYFXVV49U" },
  { title: "Accelerated Computer Science Fundamentals Specialization", issuer: "UIUC (Coursera)", date: "Feb 2023", credentialUrl: "https://www.coursera.org/account/accomplishments/verify/ECRZKWK3F84W" },
  { title: "Introduction to Robotics", issuer: "NPTEL", date: "Aug 2023", credentialUrl: "https://drive.google.com/file/d/111hwWCQpxvJGvnaT-fEW4vtHJ6x3NuTb/view?usp=drive_link" },
  { title: "AI Fundamentals: Foundations for Understanding AI", issuer: "IBM SkillsBuild", date: "Jul 2026", credentialUrl: "https://www.credly.com/go/sqErpmnH" },
  { title: "Build an AI Agent", issuer: "IBM SkillsBuild", date: "Jul 2026", credentialUrl: "https://www.credly.com/go/NmN8kY2P" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title" style={{ fontSize: '1.4rem' }}>Additional Coursework & Certifications</h2>
      <div className="glass-panel" style={{ padding: '0.5rem 1.5rem' }}>
        {certs.map((cert, index) => (
          <div
            key={cert.title}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              padding: '0.85rem 0',
              borderTop: index === 0 ? 'none' : '1px solid var(--glass-border)',
            }}
          >
            <div>
              <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 500 }}>{cert.title}</span>
              <span style={{ fontSize: '0.85rem' }}> — {cert.issuer}, {cert.date}</span>
            </div>
            {cert.credentialUrl && (
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent)', flexShrink: 0 }}>
                Verify ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
