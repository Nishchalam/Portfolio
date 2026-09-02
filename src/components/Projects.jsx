import { FaGithub, FaGoogleDrive } from 'react-icons/fa';

const LinkButton = ({ link }) => {
  const Icon = link.type === 'drive' ? FaGoogleDrive : FaGithub;
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ fontSize: '0.85rem', padding: '0.45rem 0.9rem' }}>
      <Icon /> {link.label}
    </a>
  );
};

const ProjectCard = ({ project }) => (
  <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', padding: '1.5rem' }}>
    <div>
      <span style={{ fontSize: '0.74rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
        {project.category}
      </span>
      <h3 style={{ fontSize: '1.15rem', margin: '0.3rem 0 0.25rem 0' }}>{project.title}</h3>
      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{project.meta}</span>
    </div>

    <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.55' }}>{project.description}</p>

    <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {project.highlights.map((h) => (
        <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', lineHeight: '1.5' }}>
          <span style={{ width: '6px', height: '6px', minWidth: '6px', borderRadius: '50%', background: 'var(--accent)', marginTop: '0.5em' }} />
          <span>{h}</span>
        </li>
      ))}
    </ul>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
      {project.techStack.map((tech) => (
        <span key={tech} style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)', border: '1px solid var(--glass-border)', padding: '0.2rem 0.55rem', borderRadius: '20px', fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
          {tech}
        </span>
      ))}
    </div>

    {project.links?.length > 0 && (
      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: 'auto' }}>
        {project.links.map((link) => <LinkButton key={link.url} link={link} />)}
      </div>
    )}
  </div>
);

const PROJECTS = [
  {
    title: 'Amazon Deforestation Detection & Land-Cover Mapping',
    category: 'Computer Vision · Remote Sensing',
    meta: 'Personal Project',
    description: 'End-to-end PyTorch pipeline for satellite image classification and deforestation detection using EuroSAT and Sentinel-2 imagery, with results validated against an independent reference dataset rather than classification accuracy alone.',
    highlights: [
      '96.04% test accuracy with ResNet-18 — best accuracy/size/inference-speed trade-off across 5 CNN architectures compared',
      'Patch-based inference pipeline for land-cover reconstruction and temporal change detection',
      'Deforestation statistics validated against Hansen forest-loss reference data',
    ],
    techStack: ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'Matplotlib'],
    links: [{ label: 'Code', url: 'https://github.com/Nishchalam/Deforestation-detection' }],
  },
  {
    title: 'Speech Processing Suite — LID, Diarization, ASR, TTS',
    category: 'Speech Processing · Deep Learning',
    meta: 'MS-EE6130-Advanced Topics in Signal Processing',
    description: 'Four end-to-end speech-processing systems, each fine-tuning a pretrained model at a different point in the speech stack rather than training from scratch.',
    highlights: [
      'Language ID — CNN classifier on Wav2Vec2/HuBERT embeddings',
      'Speaker Diarization — Whisper segmentation → ECAPA-TDNN speaker embeddings → agglomerative clustering',
      'ASR — fine-tuned Whisper-Tiny for Assamese on Mozilla Common Voice, evaluated with Word Error Rate',
      'TTS — fine-tuned SpeechT5 for German synthesis using speaker embeddings and a HiFi-GAN vocoder',
    ],
    techStack: ['Python', 'PyTorch', 'Hugging Face Transformers', 'Librosa', 'Wav2Vec2', 'HuBERT', 'Whisper', 'SpeechT5', 'ECAPA-TDNN'],
    links: [{ label: 'Code', url: 'https://github.com/Nishchalam/Speech-processing-projects' }],
  },
  {
    title: 'k* Distribution: Latent Space Analysis',
    category: 'Machine Learning · Adversarial Robustness',
    meta: 'MS-EE5111-Estimation Theory',
    description: 'Applied k*-neighborhood-density analysis to ResNet-50 latent embeddings for 12 ImageNet classes, studying how representation structure shifts under input transforms and PGD adversarial attacks.',
    highlights: [
      'Quantified neighborhood-density shifts in latent space under adversarial perturbation',
      'Evaluated representation robustness across 12 ImageNet classes using ResNet-50 embeddings',
    ],
    techStack: ['Python', 'PyTorch', 'ResNet-50', 'ImageNet', 'Adversarial Robustness'],
    links: [{ label: 'Code', url: 'https://github.com/Nishchalam/k-distribution' }],
  },
  {
    title: 'Foundations of Machine Learning — Algorithms from Scratch',
    category: 'Machine Learning · Mathematical Foundations',
    meta: 'MS-DA5400-Foundations of Machine Learning',
    description: 'Classical ML algorithms implemented from mathematical first principles with no scikit-learn, including an applied spam-email classification pipeline built on the same foundations.',
    highlights: [
      'PCA, Kernel PCA, K-Means, Spectral Clustering, EM (Bernoulli & Gaussian Mixture Models), Linear/Ridge Regression, Gradient Descent, SGD',
      'Spam email classifier: text preprocessing, feature extraction, and comparison of multiple classical models by accuracy, precision, recall, F1',
    ],
    techStack: ['Python', 'MATLAB', 'NumPy', 'Matplotlib', 'NLP', 'Linear Algebra', 'Optimization'],
    links: [
      { label: 'Code — ML from Scratch', url: 'https://github.com/Nishchalam/Foundations-of-ML-DA5400-' },
      { label: 'Code — Spam Classifier', url: 'https://github.com/Nishchalam/spam-ham-classifier' },
    ],
  },
  {
    title: 'DSP Image Processing Suite',
    category: 'Signal Processing · Image Processing',
    meta: 'B.Tech-EC528-Digital Image Processing',
    description: 'Unified 2D signal processing library covering frequency-domain transforms, edge detection, and histogram equalisation, built from underlying transform theory rather than library calls.',
    highlights: [
      '2D-DFT, DCT, Haar, and DWT transform implementations',
      'Edge detection and histogram equalisation modules',
    ],
    techStack: ['Python', 'Signal Processing', '2D-DFT / DCT / DWT'],
    links: [{ label: 'Code', url: 'https://github.com/Nishchalam/DSP-based-Image-processing-techniques' }],
  },
  {
    title: 'Deep Learning Approach to Inverse Scattering Problem',
    category: 'Deep Learning · Computational Physics',
    meta: 'B.Tech Project — IIITDM Kurnool, Aug 2023 – Feb 2024',
    description: 'FPNet-based neural network for reconstructing medium-to-high contrast scatterer images at improved spatial resolution, relevant to medical imaging and acoustic scattering applications.',
    highlights: [
      'Designed an FPNet-based model to resolve the inverse scattering problem',
      'Improved spatial resolution and contrast-reconstruction quality for scatterer mediums',
    ],
    techStack: ['Python', 'PyTorch', 'Inverse Scattering', 'Image Reconstruction'],
    links: [{ label: 'Code', url: 'https://github.com/Nishchalam/Deep-learning-approach-to-Inverse-scattering-problem' }],
  },
  {
    title: 'Ultra-Wideband Microwave Bandpass Filter with Sharp Rejection',
    category: 'Electromagnetics · RF Engineering',
    meta: 'B.Tech Project — IIITDM Kurnool, Feb 2024 – May 2024',
    description: 'Coupled-line band-pass filter using transmission lines to achieve high selectivity and sharp rejection at high frequency, validated through EM simulation.',
    highlights: [
      'Developed coupled-line band-pass filter models using transmission lines',
      'Validated design via EM simulation in Ansys Electronics Desktop (HFSS) and Saturn PCB Design',
    ],
    techStack: ['Ansys HFSS', 'Transmission Lines', 'RF Design', 'Saturn PCB'],
    links: [{ label: 'Project Files', url: 'https://drive.google.com/drive/folders/1yu9mFF_FqLHudObFQKsgv3hmItw037o8?usp=drive_link', type: 'drive' }],
  },
  {
    title: "Parkinson's Disease Prediction",
    category: 'Machine Learning · Healthcare',
    meta: 'Personal Project',
    description: "SVM and Decision Tree classifiers for Parkinson's disease prediction, packaged with a simple HTML-based front end for interactive use.",
    highlights: [
      '84% test accuracy comparing SVM and Decision Tree classifiers',
    ],
    techStack: ['Python', 'SVM', 'Decision Trees', 'HTML'],
    links: [{ label: 'Code', url: 'https://github.com/Nishchalam/parkinson_disease_project' }],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  );
};

export default Projects;
