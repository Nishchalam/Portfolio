
const Certifications = () => {
  const certs = [
    {
      title: "Unsupervised Learning",
      issuer: "Coursera",
      date: "Apr 2026",
      id: "I6DOHO6T98CW"
    },
    {
      title: "Machine Learning",
      issuer: "DeepLearning.AI",
      date: "Apr 2026",
      id: "Q4UGR51LDA9X"
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
      id: "JRWYYFXVV49U"
    },
    {
      title: "Accelerated Computer Science Fundamentals Specialization",
      issuer: "University of Illinois Urbana-Champaign by Coursera",
      date: "Feb 2023",
      id: "ECRZKWK3F84W"
    }
  ];

  return (
    <section id="certifications" className="section">
      <h2 className="section-title neon-border">Certifications</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {certs.map((cert, index) => (
          <div key={index} className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>{cert.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: 'bold' }}>{cert.issuer}</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Issued: {cert.date}</p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Credential ID: {cert.id}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
