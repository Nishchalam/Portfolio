import { FaPython, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiKeras, SiScipy, SiNumpy, SiPandas, SiScikitlearn, SiJupyter, SiCplusplus, SiC } from 'react-icons/si';

const SkillItem = ({ name, icon: Icon, accentColor }) => (
  <div 
    title={name} 
    className="glass-panel" 
    style={{ 
      padding: '1rem 1.2rem', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      gap: '0.6rem',
      color: 'var(--text-primary)',
      cursor: 'pointer',
      minWidth: '90px',
      transition: 'transform 0.2s ease, border-color 0.2s ease, color 0.2s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.borderColor = accentColor || 'var(--accent-cyan)';
      e.currentTarget.style.color = accentColor || 'var(--accent-cyan)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--glass-border)';
      e.currentTarget.style.color = 'var(--text-primary)';
    }}
  >
    <Icon style={{ fontSize: '2.5rem', color: 'inherit' }} />
    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'inherit' }}>{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title neon-border">Skills</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-cyan)' }}>Languages & Core</h3>
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          <SkillItem name="Python" icon={FaPython} accentColor="var(--accent-cyan)" />
          <SkillItem name="C++" icon={SiCplusplus} accentColor="var(--accent-cyan)" />
          <SkillItem name="C" icon={SiC} accentColor="var(--accent-cyan)" />
        </div>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-purple)' }}>Deep Learning & ML</h3>
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          <SkillItem name="PyTorch" icon={SiPytorch} accentColor="var(--accent-purple)" />
          <SkillItem name="TensorFlow" icon={SiTensorflow} accentColor="var(--accent-purple)" />
          <SkillItem name="Keras" icon={SiKeras} accentColor="var(--accent-purple)" />
          <SkillItem name="Scikit-learn" icon={SiScikitlearn} accentColor="var(--accent-purple)" />
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-blue)' }}>Data & Tools</h3>
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          <SkillItem name="NumPy" icon={SiNumpy} accentColor="var(--accent-blue)" />
          <SkillItem name="SciPy" icon={SiScipy} accentColor="var(--accent-blue)" />
          <SkillItem name="Pandas" icon={SiPandas} accentColor="var(--accent-blue)" />
          <SkillItem name="Linux" icon={FaLinux} accentColor="var(--accent-blue)" />
          <SkillItem name="Git" icon={FaGitAlt} accentColor="var(--accent-blue)" />
          <SkillItem name="Jupyter" icon={SiJupyter} accentColor="var(--accent-blue)" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
