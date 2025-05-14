"use client";

import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
};

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const { width, height } = canvasRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width, height });
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0 || dimensions.height === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create particles
    const particleColors = [
      "rgba(139, 92, 246, 0.5)", // purple
      "rgba(236, 72, 153, 0.5)", // pink
      "rgba(6, 182, 212, 0.5)",  // cyan
    ];
    
    let particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(dimensions.width / 15), 100);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        opacity: Math.random() * 0.5 + 0.2,
        pulse: 0,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }

    let mouseX = dimensions.width / 2;
    let mouseY = dimensions.height / 2;
    let isMouseMoving = false;
    let mouseTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseMoving = true;
      
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 100);
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Pulse effect
        p.pulse += p.pulseSpeed;
        const pulseFactor = Math.sin(p.pulse) * 0.5 + 1;
        
        // Mouse interaction
        if (isMouseMoving) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;
          
          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) * 0.03;
            p.speedX -= dx * force;
            p.speedY -= dy * force;
          }
        }
        
        // Apply some drag
        p.speedX *= 0.99;
        p.speedY *= 0.99;
        
        // Wrap around edges
        if (p.x < 0) p.x = dimensions.width;
        if (p.x > dimensions.width) p.x = 0;
        if (p.y < 0) p.y = dimensions.height;
        if (p.y > dimensions.height) p.y = 0;
        
        // Draw particle with pulse effect
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * pulseFactor;
        ctx.fill();
        
        // Draw connections
        drawConnections(p, particles, ctx, pulseFactor);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Draw connections between nearby particles
    const drawConnections = (particle: Particle, particles: Particle[], ctx: CanvasRenderingContext2D, pulseFactor: number) => {
      for (let i = 0; i < particles.length; i++) {
        const p2 = particles[i];
        const distance = Math.sqrt(
          Math.pow(particle.x - p2.x, 2) + Math.pow(particle.y - p2.y, 2)
        );
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = particle.color;
          ctx.globalAlpha = (1 - distance / 100) * 0.2 * pulseFactor;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseTimeout);
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}