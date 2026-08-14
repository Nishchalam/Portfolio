import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import iiitkLogo from '../assets/iiitk.png';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="glass-panel" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem',
        textAlign: 'left'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ flex: '1 1 300px' }}>
          {project.category && (
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
              {project.category}
            </span>
          )}
          <h3 style={{ fontSize: '1.4rem', margin: '0.25rem 0 0.5rem 0', color: 'var(--text-primary)' }}>
            {project.title}
          </h3>
        </div>
        {project.dateRange && (
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>
            {project.dateRange}
          </span>
        )}
      </div>

      {project.association && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
          {project.associationLogo && (
            <img 
              src={project.associationLogo} 
              alt="Logo" 
              style={{ width: '24px', height: '24px', borderRadius: '4px', backgroundColor: '#fff', padding: '1px' }} 
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
          )}
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Associated with {project.association}
          </span>
        </div>
      )}

      <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
        {project.description}
      </p>

      {/* Expandable details section */}
      {(project.highlights || project.features || project.evaluation) && (
        <div style={{ alignSelf: 'flex-start' }}>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-cyan)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: 0,
              fontFamily: 'inherit',
              fontWeight: 600,
              fontSize: '0.95rem',
              marginTop: '0.25rem'
            }}
          >
            {isExpanded ? (
              <>Hide Details <FaChevronUp size={12} /></>
            ) : (
              <>Show Details <FaChevronDown size={12} /></>
            )}
          </button>

          {isExpanded && (
            <div style={{
              marginTop: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '100%'
            }}>
              {project.highlights && (
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.4rem', fontWeight: 600 }}>Highlights:</h4>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.95rem' }}>
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.features && (
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.4rem', fontWeight: 600 }}>Project Features:</h4>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.95rem' }}>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.evaluation && (
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.4rem', fontWeight: 600 }}>Evaluation:</h4>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.95rem' }}>
                    {project.evaluation.map((evalItem, index) => (
                      <li key={index}>{evalItem}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tech Stack tags */}
      {project.techStack && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
          {project.techStack.map((tech, index) => (
            <span 
              key={index} 
              style={{
                backgroundColor: 'rgba(128, 128, 128, 0.12)',
                border: '1px solid var(--glass-border)',
                padding: '0.25rem 0.6rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                fontWeight: 600
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-glass" 
            style={{ textDecoration: 'none', fontSize: '0.9rem', padding: '0.5rem 1rem' }}
          >
            <FaGithub /> GitHub
          </a>
        )}
        {project.liveDemo && (
          <a 
            href={project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary" 
            style={{ textDecoration: 'none', fontSize: '0.9rem', padding: '0.5rem 1rem' }}
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: "Amazon Deforestation Detection & Land-Cover Mapping",
      category: "Computer Vision | Remote Sensing",
      description: "Built a PyTorch-based end-to-end computer vision pipeline for satellite image classification, land-cover mapping,and deforestation detection using EuroSAT and Sentinel-2 imagery.Evaluated five CNN architectures, achieving 96.04% test accuracy with ResNet-18 while comparing model size,inference efficiency, and deployment suitability.Designed a reusable inference pipeline for patch-based prediction, land-cover reconstruction, temporal change detection, and quantitative validation using Hansen forest-loss reference data.",
      highlights: [
        "Satellite image preprocessing",
        "Patch extraction",
        "Forest vs non-forest classification",
        "Deforestation statistics"
      ],
      techStack: ["Python", "PyTorch", "OpenCV", "NumPy", "Matplotlib"],
      github: "https://github.com/Nishchalam/Deforestation-detection"
    },
    {
      title: "Spam Email Classifier from Scratch",
      category: "Natural Language Processing | Machine Learning",
      description: "Developed an end-to-end spam email classification pipeline using publicly available datasets, including preprocessing, feature engineering, model training, and automated inference.",
      highlights: [
        "Text preprocessing",
        "Feature extraction",
        "Multiple classical ML models",
        "Performance comparison",
        "Automated prediction pipeline"
      ],
      evaluation: ["Accuracy", "Precision", "Recall", "F1-score"],
      techStack: ["Python", "NumPy", "NLP", "Machine Learning"],
      github: "https://github.com/Nishchalam/spam-ham-classifier"
    },
    {
      title: "Foundations of Machine Learning — Algorithms from Scratch",
      category: "Machine Learning | Python | NumPy | MATLAB",
      description: "Implemented classical machine learning algorithms entirely from first principles without using high-level machine learning libraries.",
      highlights: [
        "Principal Component Analysis (PCA)",
        "Kernel PCA",
        "K-Means Clustering",
        "Spectral Clustering",
        "Expectation Maximization (Bernoulli & Gaussian Mixture Models)",
        "Linear Regression",
        "Ridge Regression",
        "Gradient Descent",
        "Stochastic Gradient Descent"
      ],
      features: [
        "Mathematical derivation of algorithms",
        "Modular implementation",
        "Convergence analysis",
        "Cross-validation",
        "Experimental visualizations",
        "Performance comparisons"
      ],
      techStack: ["Python", "MATLAB", "NumPy", "Matplotlib", "Linear Algebra", "Optimization"],
      github: "https://github.com/Nishchalam/Foundations-of-ML-DA5400-"
    },
    {
      title: "k* Distribution: Latent Space Analysis",
      category: "Machine Learning | Computer Vision",
      description: "Applied k* neighborhood-density analysis on ResNet-50 latent embeddings for 12 ImageNet classes. Evaluated robustness under input transforms and PGD attacks.",
      techStack: ["Python", "PyTorch", "ResNet-50", "ImageNet", "Latent Space Analysis"],
      github: "https://github.com/Nishchalam/k-distribution"
    },
    {
      title: "Speech Processing Projects",
      category: "Speech Processing | Deep Learning",
      description: "Developed end-to-end speech processing pipelines for key audio tasks as part of the EE6130 course at IIT Madras.",
      highlights: [
        "Language Identification: Developed a multilingual speech-language classifier using pretrained Wav2Vec2/HuBERT representations and CNN-based classification",
        "Speaker Diarization: Built a diarization pipeline combining Whisper-based speech segmentation, ECAPA-TDNN speaker embeddings, and agglomerative clustering",
        "Automatic Speech Recognition (ASR): Fine-tuned Whisper-Tiny for Assamese speech recognition using Mozilla Common Voice and evaluated with Word Error Rate (WER)",
        "Text-to-Speech (TTS): Fine-tuned SpeechT5 for German speech synthesis using speaker embeddings and a HiFi-GAN vocoder"
      ],
      techStack: ["Python", "PyTorch", "Hugging Face", "Transformers", "Librosa", "Wav2Vec2", "Whisper", "SpeechT5"],
      github: "https://github.com/Nishchalam/Speech-processing-projects"
    },
    {
      title: "DSP Image Processing Suite",
      category: "Signal Processing | Image Processing",
      description: "Built a unified 2D signal processing library covering frequency-domain transforms (2D-DFT, DCT, Haar, DWT), edge detection, and histogram equalisation.",
      techStack: ["Python", "Signal Processing", "Image Processing", "Transforms"],
      github: "https://github.com/Nishchalam/DSP-based-Image-processing-techniques"
    },
    {
      title: "Deep learning approach to Inverse scattering problem",
      category: "Deep Learning | Computational Physics",
      dateRange: "Aug 2023 – Feb 2024",
      association: "Indian Institute of Technology Design & Manufacturing, Kurnool",
      associationLogo: iiitkLogo,
      description: "Developed a deep learning model to solve the inverse scattering problem, precisely focusing on the reconstruction of medium to high contrast images with good resolution for medical imaging, acoustic scattering, security, and defense applications.",
      highlights: [
        "Designed and implemented a FPNet-based neural network model to resolve scattering problems",
        "Enhanced spatial resolution and contrast reconstruction capabilities of scatterer mediums"
      ],
      techStack: ["Python", "PyTorch", "Deep Learning", "Inverse Scattering", "Image Reconstruction", "Data Analysis", "Problem Solving"]
    },
    {
      title: "Design of a Ultra-Wide Microwave Band Pass Filter with Sharp Rejection",
      category: "Electromagnetics | RF Engineering",
      dateRange: "Feb 2024 – May 2024",
      association: "Indian Institute of Technology Design & Manufacturing, Kurnool",
      associationLogo: iiitkLogo,
      description: "Designed and simulated an ultra-wide microwave band-pass filter using transmission lines and coupled lines to achieve high selectivity and sharp rejection characteristics for high-frequency communication.",
      highlights: [
        "Developed coupled-line band-pass filter models using transmission lines and coupled lines",
        "Conducted extensive EM simulation and validation using Ansys Electronics Desktop (HFSS) and Saturn PCB Design tools"
      ],
      techStack: ["RF & Microwave Design", "Transmission Lines", "Ansys Electronics Desktop", "Saturn PCB", "Electromagnetics"]
    },
    {
      title: "Parkinson's Disease prediction (ML) and app",
      category: "Machine Learning | Healthcare",
      dateRange: "Feb 2026 - Feb 2026",
      association: "Indian Institute of Technology, Madras",
      associationLogo: "https://logo.clearbit.com/iitm.ac.in",
      description: "Having known about this disease my whole life, this project utilises SVM and Decision trees to predict and has an accuracy of 84% on test data. Along with source code, I have developed a simple application with a HTML based frontend.",
      techStack: ["Machine Learning", "Python", "SVM", "Decision Trees", "HTML"],
      github: "https://github.com/Nishchalam/parkinson_disease_project"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title neon-border">Projects</h2>
      <div className="projects-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
