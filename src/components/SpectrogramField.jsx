import { useEffect, useRef } from 'react';

const SpectrogramField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0, h = 0;
    const cols = 72;
    const bandCount = 14;
    const phases = new Array(cols).fill(0).map(() => Math.random() * 10);
    let raf = null;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const colW = () => w / cols;

    // Ambient color-bar texture wash — a grid of tiles across the whole
    // page, colour fixed left-to-right (blue -> violet -> magenta) while
    // the intensity pattern drifts sideways over time like a live,
    // scrolling spectrogram feed.
    const drawSpectrogram = (time) => {
      const cw = colW();
      const bh = h / bandCount;
      const scroll = time * 0.0009;
      for (let i = 0; i < cols; i++) {
        const t = time * 0.00018 + phases[i];
        const hue = 205 + (i / cols) * 95; // blue -> violet -> magenta, cool range only
        for (let b = 0; b < bandCount; b++) {
          const n = (Math.sin(t * 3 + b * 0.85 + (i + scroll) * 0.28) + 1) / 2;
          const intensity = Math.pow(n, 3) * (1 - b / bandCount);
          if (intensity < 0.04) continue;
          ctx.fillStyle = `hsla(${hue}, 85%, 62%, ${intensity * 0.16})`;
          ctx.fillRect(i * cw, h - (b + 1) * bh, cw + 0.5, bh + 0.5);
        }
      }
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, w, h);
      drawSpectrogram(time);
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(draw);
    if (reduceMotion) draw(0);

    return () => {
      window.removeEventListener('resize', resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="spectrogram-field" aria-hidden="true" />;
};

export default SpectrogramField;
