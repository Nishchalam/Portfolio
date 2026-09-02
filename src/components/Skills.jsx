import { FaPython, FaLinux, FaGitAlt, FaWaveSquare } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiKeras, SiScipy, SiNumpy, SiPandas, SiScikitlearn, SiJupyter, SiCplusplus, SiC, SiOpencv, SiHuggingface } from 'react-icons/si';
import { TbMathFunction } from 'react-icons/tb';

const SkillItem = ({ name, icon: Icon }) => (
  <div title={name} className="glass-panel skill-item">
    <Icon style={{ fontSize: '1.7rem' }} />
    <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{name}</span>
  </div>
);

const SkillGroup = ({ title, evidence, children }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{title}</h3>
    <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>{evidence}</p>
    <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap' }}>
      {children}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <p className="section-intro">Grouped by demonstrated use, not a generic list — each category is backed by a project or research line above.</p>

      <SkillGroup title="Speech & Signal Processing" evidence="Speech Processing Suite · DSP Image Processing Suite · current F0-estimation research">
        <SkillItem name="Librosa" icon={FaWaveSquare} />
        <SkillItem name="Hugging Face Transformers" icon={SiHuggingface} />
        <SkillItem name="Signal Transforms" icon={TbMathFunction} />
      </SkillGroup>

      <SkillGroup title="Programming" evidence="Used across every project below">
        <SkillItem name="Python" icon={FaPython} />
        <SkillItem name="MATLAB" icon={TbMathFunction} />
        <SkillItem name="C++" icon={SiCplusplus} />
        <SkillItem name="C" icon={SiC} />
      </SkillGroup>

      <SkillGroup title="Deep Learning / ML" evidence="Deforestation Detection · k* Distribution · Speech Processing Suite · Foundations of ML">
        <SkillItem name="PyTorch" icon={SiPytorch} />
        <SkillItem name="TensorFlow" icon={SiTensorflow} />
        <SkillItem name="Keras" icon={SiKeras} />
        <SkillItem name="Scikit-learn" icon={SiScikitlearn} />
      </SkillGroup>

      <SkillGroup title="Computer Vision" evidence="Amazon Deforestation Detection · k* Distribution latent space analysis">
        <SkillItem name="OpenCV" icon={SiOpencv} />
      </SkillGroup>

      <SkillGroup title="Data & Engineering Tools" evidence="Used across every project below">
        <SkillItem name="NumPy" icon={SiNumpy} />
        <SkillItem name="SciPy" icon={SiScipy} />
        <SkillItem name="Pandas" icon={SiPandas} />
        <SkillItem name="Linux" icon={FaLinux} />
        <SkillItem name="Git" icon={FaGitAlt} />
        <SkillItem name="Jupyter" icon={SiJupyter} />
      </SkillGroup>
    </section>
  );
};

export default Skills;
