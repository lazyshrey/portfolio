import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: 'Completed' | 'Pursuing';
  description: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Computer App.",
    institution: "Manipal University Jaipur",
    period: "2026 - 2028",
    status: "Pursuing",
    description: "Pursuing advanced studies in computer applications, with a deep focus on cloud architecture, machine learning integrations, advanced software engineering, and systems development."
  },
  {
    degree: "Bachelor of Computer App.",
    institution: "United University",
    period: "2023 - 2026",
    status: "Completed",
    description: "Completed a comprehensive computer science education with a profound focus on modern software engineering paradigms, distributed architectures, and scalable web technologies."
  }
];

export const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const rawScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scale = useSpring(rawScale, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section className="py-32 px-4 relative z-20 bg-background border-b border-foreground/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground mb-2">
            EDUCATION
          </h2>
          <p className="text-sm md:text-base text-[#a58261] uppercase font-bold tracking-wider mb-6">
            ACADEMICS / CERTIFICATIONS / DEGREES
          </p>
          <hr className="border-t border-foreground/10 mb-8 w-full" />
        </motion.div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              style={{ scale, opacity }}
              className="origin-center"
            >
              <motion.div
                whileHover={{ y: -4, x: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="relative p-10 md:p-14 border-2 border-foreground bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-12 relative z-10">
                  
                  <div className="flex-shrink-0 w-24 h-24 border-2 border-foreground bg-foreground flex items-center justify-center">
                    <GraduationCap className="h-12 w-12 text-background" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-8 gap-6 border-b-4 border-foreground pb-6">
                      <div>
                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground mb-4">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4">
                          <p className="text-foreground-secondary text-2xl font-bold tracking-widest uppercase">
                            {edu.institution}
                          </p>
                          <span className={`px-3 py-1 border-2 border-foreground text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] ${
                            edu.status === 'Completed' 
                              ? 'bg-foreground text-background' 
                              : 'bg-background text-foreground'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 px-6 py-3 border-2 border-foreground bg-background w-max h-max shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                        <Calendar className="h-6 w-6 text-foreground" />
                        <span className="text-xl font-black tracking-widest uppercase text-foreground">{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-foreground text-xl md:text-2xl leading-relaxed mb-0 font-medium">
                      {edu.description}
                    </p>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};