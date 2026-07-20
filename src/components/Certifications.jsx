
const Certifications = () => {
  const certs = [
    {
      title: "AI Fundamentals: Foundations for Understanding AI",
      issuer: "IBM SkillsBuild",
      date: "Jul 2026",
      credentialUrl: "https://www.credly.com/go/sqErpmnH"
    },
    {
      title: "Build an AI Agent",
      issuer: "IBM SkillsBuild",
      date: "Jul 2026",
      credentialUrl: "https://www.credly.com/go/NmN8kY2P"
    },
    {
      title: "Unsupervised Learning",
      issuer: "DeepLearning.AI",
      date: "Apr 2026",
      id: "I6DOHO6T98CW",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/I6DOHO6T98CW"
    },
    {
      title: "Machine Learning",
      issuer: "DeepLearning.AI",
      date: "Apr 2026",
      id: "Q4UGR51LDA9X",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/Q4UGR51LDA9X"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI",
      date: "Feb 2026",
      id: "6QG8SJI7P24D",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/6QG8SJI7P24D"
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI",
      date: "Feb 2026",
      id: "O25ZXXL33S21",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/O25ZXXL33S21"
    },
    {
      title: "Introduction to Robotics",
      issuer: "NPTEL",
      date: "Aug 2023",
      id: "NPTEL23DE12S740400403"
    },
    {
      title: "Deep Learning",
      issuer: "NPTEL IIT KGP",
      date: "Apr 2023",
      id: "NPTEL23CS56S63351007"
    },
    {
      title: "Mathematics for Machine Learning Specialization",
      issuer: "Imperial College London by Coursera",
      date: "Feb 2023",
      id: "JRWYYFXVV49U",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/JRWYYFXVV49U"
    },
    {
      title: "Accelerated Computer Science Fundamentals Specialization",
      issuer: "University of Illinois Urbana-Champaign by Coursera",
      date: "Feb 2023",
      id: "ECRZKWK3F84W",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/ECRZKWK3F84W"
    }
  ];

  return (
    <section id="certifications" className="section">
      <h2 className="section-title neon-border">Certifications</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
        {certs.map((cert, index) => (
          <div key={index} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>{cert.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: 'bold' }}>{cert.issuer}</p>
              {cert.date && <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Issued: {cert.date}</p>}
              {cert.id && <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Credential ID: {cert.id}</p>}
            </div>
            {cert.credentialUrl && (
              <a 
                href={cert.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: 'var(--accent-cyan)', 
                  fontSize: '0.85rem', 
                  textDecoration: 'none', 
                  marginTop: '0.75rem', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.25rem',
                  fontWeight: 'bold'
                }} 
                onMouseEnter={e => e.target.style.textDecoration = 'underline'} 
                onMouseLeave={e => e.target.style.textDecoration = 'none'}
              >
                View Credential ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
