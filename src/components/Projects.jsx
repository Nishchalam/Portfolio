import GitHubLinkCard from './GitHubLinkCard';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title neon-border">Projects</h2>
      <div className="projects-grid">
        <div className="glass-panel">
          <h3>k* Distribution: Latent Space Analysis</h3>
          <p>Applied k* neighborhood-density analysis on ResNet-50 latent embeddings for 12 ImageNet classes. Evaluated robustness under input transforms and PGD attacks.</p>
          <GitHubLinkCard 
            title="Nishchalam/k-distribution" 
            description="Latent space analysis using k* distribution"
            repoLink="https://github.com/Nishchalam/k-distribution" 
          />
        </div>

        <div className="glass-panel">
          <h3>DSP Image Processing Suite</h3>
          <p>Built a unified 2D signal processing library covering frequency-domain transforms (2D-DFT, DCT, Haar, DWT), edge detection, and histogram equalisation.</p>
          <GitHubLinkCard 
            title="Nishchalam/DSP-based-Image-processing-techniques" 
            description="2D signal processing library"
            repoLink="https://github.com/Nishchalam/DSP-based-Image-processing-techniques" 
          />
        </div>

        <div className="glass-panel">
          <h3>Parkinson's Disease prediction (ML) and app</h3>
          <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '0.5rem' }}>Feb 2026 - Feb 2026</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <img src="https://logo.clearbit.com/iitm.ac.in" alt="IITM Logo" style={{ width: '24px', height: '24px', borderRadius: '4px', backgroundColor: '#fff', padding: '1px' }} onError={(e) => { e.target.style.display = 'none'; }} />
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Associated with Indian Institute of Technology, Madras</span>
          </div>
          <p>Having known about this disease my whole life, this project utilises SVM and Decision trees to predict and has an accuracy of 84% on test data. Along with source code, I have developed a simple application with a HTML based frontend.</p>
          <p style={{ margin: '1rem 0' }}><strong>Skills:</strong> Machine Learning, Python (Programming Language), +3 skills</p>
          <GitHubLinkCard 
            title="Nishchalam/parkinson_disease_project" 
            description="End to end implementation of parkinson disease prediction project"
            repoLink="https://github.com/Nishchalam/parkinson_disease_project" 
          />
        </div>

        <div className="glass-panel">
          <h3>Design of Microwave Band Pass Filters</h3>
          <p>Designed and simulated microwave filters for high-frequency communication.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
