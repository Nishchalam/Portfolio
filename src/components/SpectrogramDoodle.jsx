const INITIAL_BARS = Array.from({ length: 40 }).map((_, i) => ({
  width: 20 + Math.random() * 80,
  animationDuration: 0.4 + Math.random() * 1.2,
  delay: Math.random() * -2,
  color: i % 3 === 0 ? 'var(--accent-purple)' : (i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-blue)')
}));

const SpectrogramDoodle = ({ side = 'left' }) => {
  const isRight = side === 'right';
  const bars = INITIAL_BARS;

  return (
    <div className="spectrogram-doodle" style={{ 
      position: 'absolute', 
      [side]: '-130px', 
      top: '50%', 
      transform: 'translateY(-50%)',
      display: 'flex', 
      flexDirection: 'column',
      alignItems: isRight ? 'flex-end' : 'flex-start', 
      gap: '6px', 
      width: '160px', 
      opacity: 0.6, 
      zIndex: 1,
      overflow: 'hidden' 
    }}>
      {bars.map((bar, i) => (
          <div
            key={i}
            style={{
              height: '6px',
              width: `${bar.width}%`,
              backgroundColor: bar.color,
              borderRadius: isRight ? '4px 0 0 4px' : '0 4px 4px 0',
              animation: `doodle-bounce-${side} ${bar.animationDuration}s infinite alternate ease-in-out`,
              animationDelay: `${bar.delay}s`,
              boxShadow: `0 0 10px ${bar.color}`,
              flexShrink: 0
            }}
          />
        ))}
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
