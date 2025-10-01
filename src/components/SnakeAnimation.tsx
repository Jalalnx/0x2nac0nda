import { useEffect, useRef } from "react";

export const SnakeAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion || !svgRef.current) return;

    // Simple path animation for the snakes
    const paths = svgRef.current.querySelectorAll("path");
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length.toString();
      path.style.strokeDashoffset = length.toString();
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="snakeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(142, 71%, 45%)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(180, 100%, 40%)" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="snakeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(180, 100%, 50%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(142, 71%, 45%)" stopOpacity="0.6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Snake 1 - weaves through top */}
      <path
        d="M -50 80 Q 150 60, 300 100 T 600 80 T 900 120 T 1250 80"
        fill="none"
        stroke="url(#snakeGradient1)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#glow)"
        className="animate-snake-slither"
        style={{ animationDelay: "0s" }}
      />

      {/* Snake 2 - middle path */}
      <path
        d="M -50 200 Q 200 180, 400 220 T 800 200 T 1250 220"
        fill="none"
        stroke="url(#snakeGradient2)"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#glow)"
        className="animate-snake-slither"
        style={{ animationDelay: "2s" }}
      />

      {/* Snake 3 - bottom weave */}
      <path
        d="M -50 320 Q 250 300, 450 340 T 850 320 T 1250 340"
        fill="none"
        stroke="url(#snakeGradient1)"
        strokeWidth="2"
        strokeLinecap="round"
        filter="url(#glow)"
        className="animate-snake-slither"
        style={{ animationDelay: "4s" }}
      />

      {/* Particle glints */}
      <circle cx="300" cy="100" r="2" fill="hsl(142, 71%, 45%)" className="animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
      <circle cx="600" cy="200" r="2" fill="hsl(180, 100%, 50%)" className="animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      <circle cx="900" cy="320" r="2" fill="hsl(142, 71%, 45%)" className="animate-glow-pulse" style={{ animationDelay: "2.5s" }} />
    </svg>
  );
};
