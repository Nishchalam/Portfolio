import React from 'react';

const SpectrogramDoodle = ({ side = 'left' }) => {
  const bars = Array.from({ length: 40 });
  const isRight = side === 'right';

  return (
    <div style={{ 
      position: 'absolute', 
      [side]: '0', 
      top: '50%', 
      transform: 'translateY(-50%)',
      display: 'flex', 
      flexDirection: 'column',
      alignItems: isRight ? 'flex-end' : 'flex-start', 
      gap: '6px', 
      width: '100px', 
      opacity: 0.6, 
      zIndex: 1,
      overflow: 'hidden' 
    }}>
      {bars.map((_, i) => {
        const width = 20 + Math.random() * 80;
        const animationDuration = 0.4 + Math.random() * 1.2;
        const delay = Math.random() * -2;
        // Alternate colors for a quirky vibe
        const color = i % 3 === 0 ? 'var(--accent-purple)' : (i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-blue)');
        return (
          <div
            key={i}
            style={{
              height: '6px',
              width: `${width}%`,
              backgroundColor: color,
              borderRadius: isRight ? '4px 0 0 4px' : '0 4px 4px 0',
              animation: `doodle-bounce-${side} ${animationDuration}s infinite alternate ease-in-out`,
              animationDelay: `${delay}s`,
              boxShadow: `0 0 10px ${color}`,
              flexShrink: 0
            }}
          />
        );
      })}
      <style>
        {`
          @keyframes doodle-bounce-left {
            0% { transform: scaleX(0.1); transform-origin: left; }
            100% { transform: scaleX(1); transform-origin: left; }
          }
          @keyframes doodle-bounce-right {
            0% { transform: scaleX(0.1); transform-origin: right; }
            100% { transform: scaleX(1); transform-origin: right; }
          }
        `}
      </style>
    </div>
  );
};

export default SpectrogramDoodle;
