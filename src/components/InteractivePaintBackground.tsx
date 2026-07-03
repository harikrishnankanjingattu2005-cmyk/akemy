import { useEffect, useRef } from 'react';

interface ScratchSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  alpha: number;
  width: number;
  offsets: number[];
  color: string;
  decay: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  rotation: number;
  rotSpeed: number;
}

const GOLD_SHADES = [
  '#F3E5AB', // Vanilla Gold
  '#D6B46A', // Premium Gold
  '#B4965A', // Bronze Gold
  '#FFFDD0', // Cream White-Gold
  '#AA7C11', // Deep Rich Gold
];

export default function InteractivePaintBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let scratches: ScratchSegment[] = [];
    let sparks: Spark[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let isFirstMove = true;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Dynamic scratch generator
    const spawnScratch = (x1: number, y1: number, x2: number, y2: number, speed: number) => {
      const numLines = 3 + Math.floor(Math.random() * 3); // 3 to 5 parallel grooves
      const offsets: number[] = [];
      for (let i = 0; i < numLines; i++) {
        offsets.push((Math.random() - 0.5) * 8); // Random spread
      }

      const color = GOLD_SHADES[Math.floor(Math.random() * GOLD_SHADES.length)];
      
      scratches.push({
        x1,
        y1,
        x2,
        y2,
        alpha: 0.9,
        width: 0.7 + Math.random() * 0.8, // Ultra-fine precise scratches
        offsets,
        color,
        decay: 0.008 + Math.random() * 0.006, // Disappear after ~1-2 seconds
      });

      // Spawn metallic sparks flying in opposite or tangential direction of movement
      const angle = Math.atan2(y2 - y1, x2 - x1);
      const sparkCount = Math.min(8, Math.floor(speed * 0.25) + 1);

      for (let i = 0; i < sparkCount; i++) {
        // Spark physics
        const spreadAngle = angle + Math.PI + (Math.random() - 0.5) * 1.2; // Backwards spray
        const sparkSpeed = (1 + Math.random() * 3.5) * (1 + speed * 0.05);
        sparks.push({
          x: x2,
          y: y2,
          vx: Math.cos(spreadAngle) * sparkSpeed + (Math.random() - 0.5) * 0.5,
          vy: Math.sin(spreadAngle) * sparkSpeed + (Math.random() - 0.5) * 0.5,
          size: 1 + Math.random() * 2,
          color: GOLD_SHADES[Math.floor(Math.random() * GOLD_SHADES.length)],
          alpha: 1.0,
          decay: 0.015 + Math.random() * 0.025, // Quick fade-out
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.2,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (isFirstMove) {
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        isFirstMove = false;
        return;
      }

      const dx = mouseX - lastMouseX;
      const dy = mouseY - lastMouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 2) {
        spawnScratch(lastMouseX, lastMouseY, mouseX, mouseY, distance);
        lastMouseX = mouseX;
        lastMouseY = mouseY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseX = touch.clientX;
        mouseY = touch.clientY;

        if (isFirstMove) {
          lastMouseX = mouseX;
          lastMouseY = mouseY;
          isFirstMove = false;
          return;
        }

        const dx = mouseX - lastMouseX;
        const dy = mouseY - lastMouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 3) {
          spawnScratch(lastMouseX, lastMouseY, mouseX, mouseY, distance);
          lastMouseX = mouseX;
          lastMouseY = mouseY;
        }
      }
    };

    const handleTouchEnd = () => {
      isFirstMove = true;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Disable heavy filters for high performance, use soft opacity instead
      ctx.globalCompositeOperation = 'source-over';

      // 1. Draw glowing background ambient scratches/grids
      scratches.forEach((scratch) => {
        ctx.strokeStyle = scratch.color;
        ctx.lineCap = 'round';

        // Draw parallel wire grooves
        scratch.offsets.forEach((offset) => {
          ctx.lineWidth = scratch.width;
          ctx.globalAlpha = scratch.alpha * 0.75;
          ctx.beginPath();
          
          // Add a slight hand-drawn scratch imperfection to lines
          const midX = (scratch.x1 + scratch.x2) / 2 + (Math.random() - 0.5) * 1.5;
          const midY = (scratch.y1 + scratch.y2) / 2 + (Math.random() - 0.5) * 1.5;

          ctx.moveTo(scratch.x1 + offset, scratch.y1 + offset);
          ctx.quadraticCurveTo(midX + offset, midY + offset, scratch.x2 + offset, scratch.y2 + offset);
          ctx.stroke();
        });

        // Decay scratch
        scratch.alpha -= scratch.decay;
      });

      // 2. Render bright metallic sparks/splinters
      sparks.forEach((spark) => {
        ctx.save();
        ctx.globalAlpha = spark.alpha;
        ctx.fillStyle = spark.color;
        ctx.translate(spark.x, spark.y);
        ctx.rotate(spark.rotation);

        // Draw sharp diamond/needle shaped spark splinters
        ctx.beginPath();
        ctx.moveTo(-spark.size * 2, 0);
        ctx.lineTo(0, -spark.size / 2);
        ctx.lineTo(spark.size * 2, 0);
        ctx.lineTo(0, spark.size / 2);
        ctx.closePath();
        ctx.fill();

        ctx.restore();

        // Update spark physics
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vx *= 0.96; // Air resistance deceleration
        spark.vy *= 0.96;
        spark.vy += 0.05; // Light gravity
        spark.rotation += spark.rotSpeed;
        spark.alpha -= spark.decay;
      });

      // Filter out completed animations
      scratches = scratches.filter((s) => s.alpha > 0.01);
      sparks = sparks.filter((s) => s.alpha > 0.01);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
