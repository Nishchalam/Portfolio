import React from 'react';
import { FaPython, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiKeras, SiScipy, SiNumpy, SiPandas, SiScikitlearn, SiJupyter, SiCplusplus, SiC } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title neon-border">Skills</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-cyan)' }}>Languages & Core</h3>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '3rem' }}>
          <div title="Python" className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FaPython /></div>
          <div title="C++" className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SiCplusplus /></div>
          <div title="C" className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SiC /></div>
        </div>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-purple)' }}>Deep Learning & ML</h3>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '3rem' }}>
          <div title="PyTorch" className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SiPytorch /></div>
          <div title="TensorFlow" className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SiTensorflow /></div>
          <div title="Keras" className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SiKeras /></div>
          <div title="Scikit-learn" className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SiScikitlearn /></div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-blue)' }}>Data & Tools</h3>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '3rem' }}>
          <div title="NumPy" className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SiNumpy /></div>
          <div title="SciPy" className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SiScipy /></div>
          <div title="Pandas" className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SiPandas /></div>
          <div title="Linux" className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FaLinux /></div>
          <div title="Git" className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FaGitAlt /></div>
          <div title="Jupyter" className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SiJupyter /></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
