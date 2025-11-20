import { motion } from "motion/react";

// Organic Blob Shape - Morphing Animation
export function OrganicBlob({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M140,100 C140,120 130,140 110,145 C90,150 70,145 55,130 C40,115 35,95 40,75 C45,55 65,40 85,40 C105,40 125,50 135,70 C140,80 140,90 140,100 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.05"
        animate={{
          d: [
            "M140,100 C140,120 130,140 110,145 C90,150 70,145 55,130 C40,115 35,95 40,75 C45,55 65,40 85,40 C105,40 125,50 135,70 C140,80 140,90 140,100 Z",
            "M145,95 C145,115 135,135 115,142 C95,149 75,142 58,125 C41,108 38,88 43,68 C48,48 68,35 88,37 C108,39 128,52 138,72 C143,82 145,92 145,95 Z",
            "M140,100 C140,120 130,140 110,145 C90,150 70,145 55,130 C40,115 35,95 40,75 C45,55 65,40 85,40 C105,40 125,50 135,70 C140,80 140,90 140,100 Z",
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.svg>
  );
}

// Flowing Wave Lines
export function FlowingWaves({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M0,100 Q50,50 100,100 T200,100 T300,100 T400,100"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,120 Q50,70 100,120 T200,120 T300,120 T400,120"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,80 Q50,30 100,80 T200,80 T300,80 T400,80"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
      />
    </svg>
  );
}

// Abstract Connected Nodes with Animation
export function AbstractNetwork({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 50, y: 40 },
    { x: 150, y: 30 },
    { x: 250, y: 60 },
    { x: 100, y: 120 },
    { x: 200, y: 150 },
    { x: 300, y: 130 },
  ];

  return (
    <svg className={className} viewBox="0 0 350 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Connections */}
      <motion.line
        x1={nodes[0].x}
        y1={nodes[0].y}
        x2={nodes[1].x}
        y2={nodes[1].y}
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.line
        x1={nodes[1].x}
        y1={nodes[1].y}
        x2={nodes[2].x}
        y2={nodes[2].y}
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      <motion.line
        x1={nodes[0].x}
        y1={nodes[0].y}
        x2={nodes[3].x}
        y2={nodes[3].y}
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      />
      <motion.line
        x1={nodes[3].x}
        y1={nodes[3].y}
        x2={nodes[4].x}
        y2={nodes[4].y}
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />
      <motion.line
        x1={nodes[4].x}
        y1={nodes[4].y}
        x2={nodes[5].x}
        y2={nodes[5].y}
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="6"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        />
      ))}

      {/* Pulsing effect on nodes */}
      {nodes.map((node, i) => (
        <motion.circle
          key={`pulse-${i}`}
          cx={node.x}
          cy={node.y}
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          animate={{
            r: [10, 20, 10],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </svg>
  );
}

// Spiral Pattern
export function SpiralPattern({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M100,100 Q110,90 120,100 T140,120 T150,150 T145,180"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1, rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M100,100 Q90,110 100,120 T120,140 T150,150 T180,145"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1, rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>
  );
}

// Fluid Gradient Blob
export function FluidGradient({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fluidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
        </linearGradient>
      </defs>
      <motion.path
        d="M150,50 C200,50 250,100 250,150 C250,200 200,250 150,250 C100,250 50,200 50,150 C50,100 100,50 150,50"
        fill="url(#fluidGrad)"
        animate={{
          d: [
            "M150,50 C200,50 250,100 250,150 C250,200 200,250 150,250 C100,250 50,200 50,150 C50,100 100,50 150,50",
            "M150,70 C180,60 230,110 240,150 C245,190 210,240 150,245 C90,240 60,190 55,150 C60,110 120,80 150,70",
            "M150,50 C200,50 250,100 250,150 C250,200 200,250 150,250 C100,250 50,200 50,150 C50,100 100,50 150,50",
          ]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.svg>
  );
}

// Scattered Particles
export function ScatteredParticles({ className = "" }: { className?: string }) {
  const particles = Array.from({ length: 30 }).map(() => ({
    x: Math.random() * 300,
    y: Math.random() * 300,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <svg className={className} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {particles.map((particle, i) => (
        <motion.circle
          key={i}
          cx={particle.x}
          cy={particle.y}
          r={particle.size}
          fill="currentColor"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

// Hexagon Grid Pattern
export function HexagonGrid({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => {
          const x = col * 60 + (row % 2) * 30 + 30;
          const y = row * 52 + 30;
          return (
            <motion.path
              key={`${row}-${col}`}
              d={`M${x},${y - 20} L${x + 17},${y - 10} L${x + 17},${y + 10} L${x},${y + 20} L${x - 17},${y + 10} L${x - 17},${y - 10} Z`}
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: (row + col) * 0.1,
              }}
            />
          );
        })
      )}
    </svg>
  );
}

// Orbiting Circles
export function OrbitingCircles({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Center */}
      <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.4" />
      
      {/* Orbit paths */}
      <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" opacity="0.05" strokeDasharray="4 4" />
      
      {/* Orbiting elements */}
      {[40, 60, 80].map((radius, i) => (
        <motion.g key={i}>
          <motion.circle
            cx="100"
            cy={100 - radius}
            r="4"
            fill="currentColor"
            opacity="0.3"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: "100px 100px",
            }}
          />
        </motion.g>
      ))}
    </svg>
  );
}

// Curved Lines Pattern
export function CurvedLines({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.path
          key={i}
          d={`M0,${50 + i * 30} Q100,${30 + i * 30} 200,${50 + i * 30} T400,${50 + i * 30}`}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity={0.3 - i * 0.03}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

// DNA Helix Pattern
export function DNAHelix({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* First strand */}
      <motion.path
        d="M50,0 Q30,50 50,100 T50,200 T50,300 T50,400"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      
      {/* Second strand */}
      <motion.path
        d="M150,0 Q170,50 150,100 T150,200 T150,300 T150,400"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
      />
      
      {/* Connecting lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.line
          key={i}
          x1="50"
          y1={i * 40 + 20}
          x2="150"
          y2={i * 40 + 20}
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
          }}
          style={{ transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
}

// Mesh Gradient Background
export function MeshGradient({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="mesh1" cx="30%" cy="30%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mesh2" cx="70%" cy="60%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mesh3" cx="50%" cy="80%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.12" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      <motion.circle
        cx="120"
        cy="120"
        r="150"
        fill="url(#mesh1)"
        animate={{
          cx: [120, 140, 120],
          cy: [120, 100, 120],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="280"
        cy="240"
        r="180"
        fill="url(#mesh2)"
        animate={{
          cx: [280, 260, 280],
          cy: [240, 260, 240],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="200"
        cy="320"
        r="160"
        fill="url(#mesh3)"
        animate={{
          cx: [200, 220, 200],
          cy: [320, 300, 320],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}
