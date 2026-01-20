import { useEffect, useRef } from 'react';

export default function ConcentricRingsAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let time = 0;
    let lastTime = 0;

    // Ring parameters - scaled to container size
    const ringCount = 10;
    const maxRadius = Math.min(canvas.width, canvas.height) * 0.6;

    function animate(timestamp: number) {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      time += deltaTime * 0.001;

      const centerX = canvas!.width / 2;
      const centerY = canvas!.height / 2;

      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Draw center dot
      ctx!.beginPath();
      ctx!.arc(centerX, centerY, 4, 0, Math.PI * 2);
      ctx!.fillStyle = 'rgba(64, 64, 64, 0.4)';
      ctx!.fill();

      // Draw concentric rings of dots
      for (let r = 0; r < ringCount; r++) {
        const radius = ((r + 1) / ringCount) * maxRadius;
        const dotCount = 8 + r * 8; // More dots in outer rings

        // Phase offset for rotation based on ring index (quarter speed)
        const phaseOffset = r % 2 === 0 ? time * 0.05 : -time * 0.05;

        // Each ring pulses at a different phase (quarter speed)
        const ringPhase = time * 0.25 + r * 0.7;

        for (let i = 0; i < dotCount; i++) {
          const angle = (i / dotCount) * Math.PI * 2 + phaseOffset;

          // Add a pulsing effect to the radius (slight)
          const radiusPulse = Math.sin(ringPhase) * 5;
          const finalRadius = radius + radiusPulse;

          const x = centerX + Math.cos(angle) * finalRadius;
          const y = centerY + Math.sin(angle) * finalRadius;

          // Enhanced dot size pulsing - more pronounced
          // Base size that varies by ring position, scaled proportionally to ring size
          const scaleFactor = maxRadius / 180; // Scale dots relative to container size
          const baseSize = (2.5 + (r / (ringCount - 1)) * 1.5) * scaleFactor;
          // Size pulse effect - make it more dramatic
          const sizePulse = Math.sin(ringPhase) * baseSize * 0.7 + baseSize;

          // Enhanced opacity pulsing (reduced to ~30%)
          const opacityPulse = 0.2 + Math.sin(ringPhase) * 0.1;

          ctx!.beginPath();
          ctx!.arc(x, y, sizePulse, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(64, 64, 64, ${opacityPulse})`;
          ctx!.fill();
        }
      }

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: '#000' }}
    />
  );
}
