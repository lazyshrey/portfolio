import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiDocker,
  SiGooglecloud,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiVite,
  SiSocketdotio,
  SiTauri,
  SiElectron,
  SiExpo,
  SiCapacitor,
  SiTurborepo,
  SiFastapi
} from 'react-icons/si';

// Custom dynamic icon for Unsloth (representing supercharged AI / Lightning Fast Fine-Tuning)
const UnslothIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8">
    <path d="M12 2L2 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

// Custom brutalist icon for Zustand State Management
const ZustandIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8">
    <rect x="3" y="3" width="8" height="8" />
    <rect x="13" y="13" width="8" height="8" />
    <line x1="7" y1="11" x2="7" y2="17" />
    <line x1="7" y1="17" x2="13" y2="17" />
  </svg>
);

// Custom brutalist icon for NodeLink Audio Processing Engine
const NodeLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8">
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="6" r="3" />
    <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" />
    <path d="M12 5a7 7 0 0 1 7 7" />
    <path d="M5 12a7 7 0 0 1 7-7" />
  </svg>
);

// Custom brutalist icon for Groq AI Speed Inference
const GroqIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8">
    <path d="M18 8H11v8h7v-4h-3" />
    <rect x="3" y="3" width="18" height="18" />
  </svg>
);

// Custom brutalist icon for Upstash Serverless Database
const UpstashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8">
    <rect x="3" y="3" width="18" height="6" />
    <rect x="3" y="11" width="18" height="6" />
    <path d="M6 6h.01M6 14h.01M16 6h.01M16 14h.01" />
    <path d="M12 18v4l4-4" />
  </svg>
);

// Custom brutalist icon for Ollama Local LLM Orchestrator
const OllamaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8">
    <path d="M16 3h-3v5h-4v2h4v8a2 2 0 0 0 2 2h2" />
    <circle cx="10" cy="12" r="1" />
  </svg>
);

// First row of technologies going left (Systems, Mobile & Advanced Frontends)
const techRow1 = [
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Tauri', icon: <SiTauri /> },
  { name: 'Electron', icon: <SiElectron /> },
  { name: 'Expo', icon: <SiExpo /> },
  { name: 'Socket.io', icon: <SiSocketdotio /> },
  { name: 'Turborepo', icon: <SiTurborepo /> },
  { name: 'Zustand', icon: <ZustandIcon /> },
  { name: 'FastAPI', icon: <SiFastapi /> },
  { name: 'Framer', icon: <SiFramer /> },
  { name: 'Vite', icon: <SiVite /> },
];

// Second row of technologies going right (Backends, Cloud & Intelligent AI Workloads)
const techRow2 = [
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'NodeLink', icon: <NodeLinkIcon /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Upstash', icon: <UpstashIcon /> },
  { name: 'Groq AI', icon: <GroqIcon /> },
  { name: 'Ollama', icon: <OllamaIcon /> },
  { name: 'Unsloth', icon: <UnslothIcon /> },
  { name: 'Capacitor', icon: <SiCapacitor /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Google Cloud', icon: <SiGooglecloud /> },
  { name: 'Firebase', icon: <SiFirebase /> },
];

export const TechStack: React.FC = () => {
  return (
    <section className='py-32 overflow-hidden relative border-y-4 border-foreground bg-background'>
      
      {/* Brutalist Grid Background overlay for the marquee section */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0" />

      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16 flex flex-col items-center'
        >
          <div className="inline-block px-4 py-2 border-2 border-foreground bg-foreground text-background font-black uppercase tracking-widest mb-6">
            Stack.
          </div>
          <h2 className='text-4xl md:text-6xl font-black uppercase text-foreground mb-6 tracking-tighter'>
            Arsenal & Capabilities
          </h2>
          <div className="w-16 h-2 bg-foreground mb-6"></div>
          <p className='text-foreground-secondary text-lg font-medium max-w-2xl mx-auto'>
            A comprehensive suite of modern tools and frameworks to engineer resilient, scalable, and brutal systems.
          </p>
        </motion.div>
      </div>

      <div className='flex flex-col gap-8 relative z-10'>
        

        {/* First Marquee - Moving Left */}
        <div className="flex w-[200vw] sm:w-max group">
          <motion.div
            className="flex gap-6 pr-6 w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 30, // Smooth continuous
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...techRow1, ...techRow1].map((tech, index) => (
              <TechBadge key={`${tech.name}-${index}`} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Second Marquee - Moving Right */}
        <div className="flex w-[200vw] sm:w-max group">
          <motion.div
            className="flex gap-6 pr-6 w-max"
            animate={{ x: ["-50%", 0] }}
            transition={{
              duration: 35, // Slightly different speed
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...techRow2, ...techRow2].map((tech, index) => (
              <TechBadge key={`${tech.name}-${index}`} tech={tech} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Brutalist Badge
const TechBadge = ({ tech }: { tech: any }) => (
  <div className="flex items-center gap-4 px-6 py-4 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all cursor-default min-w-max group/badge">
    <div 
      className="text-4xl transition-transform duration-300 group-hover/badge:scale-110 text-foreground"
    >
      {tech.icon}
    </div>
    <span className="text-xl font-black uppercase text-foreground tracking-tight">{tech.name}</span>
  </div>
);
