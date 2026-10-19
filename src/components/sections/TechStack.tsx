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

// Custom dynamic icon for Unsloth (representing a cute sloth face outline)
const UnslothIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 21c4.5 0 8-3.5 8-8 0-3-.5-4-3-6s-3.5-2-5-2-2.5 0-5 2-3 3-3 6c0 4.5 3.5 8 8 8z" />
    <path d="M7 11.5c.5-.8 1.8-1.2 2.5-.5.7.7.8 1.8.3 2.5-.5.7-1.8 1.1-2.5.3-.7-.7-.8-1.6-.3-2.3z" />
    <path d="M17 11.5c-.5-.8-1.8-1.2-2.5-.5-.7.7-.8 1.8-.3 2.5.5.7 1.8 1.1 2.5.3.7-.7.8-1.6.3-2.3z" />
    <circle cx="8.5" cy="12.5" r="1" fill="currentColor" />
    <circle cx="15.5" cy="12.5" r="1" fill="currentColor" />
    <path d="M10 16.5c1 .5 3 .5 4 0l-2-1.5-2 1.5z" />
  </svg>
);

// Custom brutalist icon for Zustand State Management
const ZustandIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="6.5" cy="7.5" r="2.5" />
    <circle cx="17.5" cy="7.5" r="2.5" />
    <rect x="4" y="8" width="16" height="12" rx="5" />
    <circle cx="8.5" cy="12" r="0.75" fill="currentColor" />
    <circle cx="15.5" cy="12" r="0.75" fill="currentColor" />
    <ellipse cx="12" cy="15" rx="2.5" ry="1.5" />
    <polygon points="11.2,14.5 12.8,14.5 12,15.2" fill="currentColor" />
  </svg>
);

// Custom brutalist icon for Groq AI Speed Inference (official G logo)
const GroqIcon = () => (
  <svg fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    <title>Groq</title>
    <path d="M12.036 2c-3.853-.035-7 3-7.036 6.781-.035 3.782 3.055 6.872 6.908 6.907h2.42v-2.566h-2.292c-2.407.028-4.38-1.866-4.408-4.23-.029-2.362 1.901-4.298 4.308-4.326h.1c2.407 0 4.358 1.915 4.365 4.278v6.305c0 2.342-1.944 4.25-4.323 4.279a4.375 4.375 0 01-3.033-1.252l-1.851 1.818A7 7 0 0012.029 22h.092c3.803-.056 6.858-3.083 6.879-6.816v-6.5C18.907 4.963 15.817 2 12.036 2z" />
  </svg>
);

// Custom brutalist icon for Upstash Serverless Database
const UpstashIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M13.8027 0C11.193 0 8.583.9952 6.5918 2.9863c-3.9823 3.9823-3.9823 10.4396 0 14.4219 1.9911 1.9911 5.2198 1.9911 7.211 0 1.991-1.9911 1.991-5.2198 0-7.211L12 12c.9956.9956.9956 2.6098 0 3.6055-.9956.9955-2.6099.9955-3.6055 0-2.9866-2.9868-2.9866-7.8297 0-10.8164 2.9868-2.9868 7.8297-2.9868 10.8164 0l1.8028-1.8028C19.0225.9952 16.4125 0 13.8027 0zM12 12c-.9956-.9956-.9956-2.6098 0-3.6055.9956-.9955 2.6098-.9955 3.6055 0 2.9867 2.9868 2.9867 7.8297 0 10.8164-2.9867 2.9868-7.8297 2.9868-10.8164 0l-1.8028 1.8028c3.9823 3.9822 10.4396 3.9822 14.4219 0 3.9823-3.9824 3.9823-10.4396 0-14.4219-.9956-.9956-2.3006-1.4922-3.6055-1.4922-1.3048 0-2.6099.4966-3.6054 1.4922-1.9912 1.9912-1.9912 5.2198 0 7.211z"/>
  </svg>
);

// Custom brutalist icon for Ollama Local LLM Orchestrator (official llama outline)
const OllamaIcon = () => (
  <svg fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    <title>Ollama</title>
    <path d="M7.905 1.09c.216.085.411.225.588.41.295.306.544.744.734 1.263.191.522.315 1.1.362 1.68a5.054 5.054 0 012.049-.636l.051-.004c.87-.07 1.73.087 2.48.474.101.053.2.11.297.17.05-.569.172-1.134.36-1.644.19-.52.439-.957.733-1.264a1.67 1.67 0 01.589-.41c.257-.1.53-.118.796-.042.401.114.745.368 1.016.737.248.337.434.769.561 1.287.23.934.27 2.163.115 3.645l.053.04.026.019c.757.576 1.284 1.397 1.563 2.35.435 1.487.216 3.155-.534 4.088l-.018.021.002.003c.417.762.67 1.567.724 2.4l.002.03c.064 1.065-.2 2.137-.814 3.19l-.007.01.01.024c.472 1.157.62 2.322.438 3.486l-.006.039a.651.651 0 01-.747.536.648.648 0 01-.54-.742c.167-1.033.01-2.069-.48-3.123a.643.643 0 01.04-.617l.004-.006c.604-.924.854-1.83.8-2.72-.046-.779-.325-1.544-.8-2.273a.644.644 0 01.18-.886l.009-.006c.243-.159.467-.565.58-1.12a4.229 4.229 0 00-.095-1.974c-.205-.7-.58-1.284-1.105-1.683-.595-.454-1.383-.673-2.38-.61a.653.653 0 01-.632-.371c-.314-.665-.772-1.141-1.343-1.436a3.288 3.288 0 00-1.772-.332c-1.245.099-2.343.801-2.67 1.686a.652.652 0 01-.61.425c-1.067.002-1.893.252-2.497.703-.522.39-.878.935-1.066 1.588a4.07 4.07 0 00-.068 1.886c.112.558.331 1.02.582 1.269l.008.007c.212.207.257.53.109.785-.36.622-.629 1.549-.673 2.44-.05 1.018.186 1.902.719 2.536l.016.019a.643.643 0 01.095.69c-.576 1.236-.753 2.252-.562 3.052a.652.652 0 01-1.269.298c-.243-1.018-.078-2.184.473-3.498l.014-.035-.008-.012a4.339 4.339 0 01-.598-1.309l-.005-.019a5.764 5.764 0 01-.177-1.785c.044-.91.278-1.842.622-2.59l.012-.026-.002-.002c-.293-.418-.51-.953-.63-1.545l-.005-.024a5.352 5.352 0 01.093-2.49c.262-.915.777-1.701 1.536-2.269.06-.045.123-.09.186-.132-.159-1.493-.119-2.73.112-3.67.127-.518.314-.95.562-1.287.27-.368.614-.622 1.015-.737.266-.076.54-.059.797.042zm4.116 9.09c.936 0 1.8.313 2.446.855.63.527 1.005 1.235 1.005 1.94 0 .888-.406 1.58-1.133 2.022-.62.375-1.451.557-2.403.557-1.009 0-1.871-.259-2.493-.734-.617-.47-.963-1.13-.963-1.845 0-.707.398-1.417 1.056-1.946.668-.537 1.55-.849 2.485-.849zm0 .896a3.07 3.07 0 00-1.916.65c-.461.37-.722.835-.722 1.25 0 .428.21.829.61 1.134.455.347 1.124.548 1.943.548.799 0 1.473-.147 1.932-.426.463-.28.7-.686.7-1.257 0-.423-.246-.89-.683-1.256-.484-.405-1.14-.643-1.864-.643zm.662 1.21l.004.004c.12.151.095.37-.056.49l-.292.23v.446a.375.375 0 01-.376.373.375.375 0 01-.376-.373v-.46l-.271-.218a.347.347 0 01-.052-.49.353.353 0 01.494-.051l.215.172.22-.174a.353.353 0 01.49.051zm-5.04-1.919c.478 0 .867.39.867.871a.87.87 0 01-.868.871.87.87 0 01-.867-.87.87.87 0 01.867-.872zm8.706 0c.48 0 .868.39.868.871a.87.87 0 01-.868.871.87.87 0 01-.867-.87.87.87 0 01.867-.872zM7.44 2.3l-.003.002a.659.659 0 00-.285.238l-.005.006c-.138.189-.258.467-.348.832-.17.692-.216 1.631-.124 2.782.43-.128.899-.208 1.404-.237l.01-.001.019-.034c.046-.082.095-.161.148-.239.123-.771.022-1.692-.253-2.444-.134-.364-.297-.65-.453-.813a.628.628 0 00-.107-.09L7.44 2.3zm9.174.04l-.002.001a.628.628 0 00-.107.09c-.156.163-.32.45-.453.814-.29.794-.387 1.776-.23 2.572l.058.097.008.014h.03a5.184 5.184 0 011.466.212c.086-1.124.038-2.043-.128-2.722-.09-.365-.21-.643-.349-.832l-.004-.006a.659.659 0 00-.285-.239h-.004z" />
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
          transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16 flex flex-col items-center'
        >
          <h2 className='text-4xl md:text-6xl font-black uppercase text-foreground mb-2 tracking-tighter'>
            TECH STACK
          </h2>
          <p className="text-sm md:text-base text-[#a58261] uppercase font-bold tracking-wider mb-6">
            LANGUAGES / FRAMEWORKS / TOOLS / PLATFORMS
          </p>
          <hr className="border-t border-foreground/10 mb-8 w-full" />
          <p className='text-foreground-secondary text-lg font-medium max-w-2xl mx-auto'>
            A comprehensive suite of modern tools and frameworks to engineer resilient, scalable, and brutal systems.
          </p>
        </motion.div>
      </div>

      <div className='flex flex-col gap-8 relative z-10'>
        

        {/* First Marquee - Moving Left */}
        <div className="flex w-[200vw] sm:w-max group overflow-hidden py-4 -my-4">
          <div
            className="flex gap-6 pr-6 w-max animate-marquee-left group-hover:[animation-play-state:paused]"
          >
            {[...techRow1, ...techRow1].map((tech, index) => (
              <TechBadge key={`${tech.name}-${index}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Second Marquee - Moving Right */}
        <div className="flex w-[200vw] sm:w-max group overflow-hidden py-4 -my-4">
          <div
            className="flex gap-6 pr-6 w-max animate-marquee-right group-hover:[animation-play-state:paused]"
          >
            {[...techRow2, ...techRow2].map((tech, index) => (
              <TechBadge key={`${tech.name}-${index}`} tech={tech} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// Brutalist Badge
const TechBadge = ({ tech }: { tech: any }) => (
  <motion.div
    whileHover={{ y: -4, x: -4 }}
    whileTap={{ y: 2, x: 2 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
    className="flex items-center gap-4 px-6 py-4 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] cursor-default min-w-max group/badge"
  >
    <div 
      className="text-4xl transition-transform duration-300 group-hover/badge:scale-110 text-foreground"
    >
      {tech.icon}
    </div>
    <span className="text-xl font-black uppercase text-foreground tracking-tight">{tech.name}</span>
  </motion.div>
);
