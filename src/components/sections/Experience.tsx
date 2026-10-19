import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Calendar, MapPin, Building2, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Backend Developer Intern',
    company: 'Digisec',
    location: 'Noida, IN',
    period: 'Nov 2024 - Mar 2025',
    description: 'Developed and maintained scalable backend systems using Node.js and Express.js, serving thousands of users with high performance and reliability.',
    achievements: [
      'Built RESTful APIs and microservices architecture',
      'Optimized database queries and improved system performance by 40%',
      'Implemented security best practices and data protection measures',
      'Collaborated with cross-functional teams in agile development environment'
    ]
  },
  {
    id: 2,
    role: 'Full Stack React Developer',
    company: 'Freelance',
    location: 'Remote',
    period: '2023 - Present',
    description: 'Designing and building premium web applications for various clients. Focusing on highly interactive, brutalist user interfaces.',
    achievements: [
      'Created animated, high-performance web experiences using React and Framer Motion',
      'Built responsive designs that work flawlessly across all devices',
      'Integrated complex APIs and third-party services'
    ]
  }
];

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rawOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section ref={containerRef} className="py-32 px-4 relative min-h-[120vh] bg-background">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-16 relative items-start">
          
          {/* Sticky Left Section */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 z-10">
            <motion.div style={{ opacity }}>

              <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black uppercase tracking-tighter text-foreground mb-2">
                EXPERIENCE
              </h2>
              <p className="text-sm md:text-base text-[#a58261] uppercase font-bold tracking-wider mb-6">
                CAREER TIMELINE / WORK HISTORY / ENGINEERING ROLES
              </p>
              
              <hr className="border-t border-foreground/10 mb-8" />

              <p className="text-foreground-secondary text-xl md:text-2xl mb-8 leading-relaxed font-medium">
                My professional journey and the technical roles I've taken on to build exceptional products.
              </p>
            </motion.div>
          </div>

          {/* Scrolling Right Section */}
          <div className="lg:w-2/3 space-y-16 lg:space-y-40 mt-12 lg:mt-0">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// Extracted Component for individual sticky-scroll cards
const ExperienceCard = ({ exp, index }: { exp: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "center center"]
  });

  const rawScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useSpring(rawScale, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={cardRef} className="relative z-20">
      <motion.div
        style={{ scale, opacity }}
        className="origin-center"
      >
        <motion.div
          whileHover={{ y: -4, x: -4 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="relative p-8 md:p-12 border-2 border-foreground bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all duration-300"
        >
          <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-8 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-5 mb-8 border-b-2 border-foreground/10 pb-6">
                <div className="w-16 h-16 border-2 border-foreground bg-foreground text-background flex items-center justify-center shrink-0">
                  <Building2 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-lg md:text-xl font-bold text-foreground-secondary uppercase tracking-widest">
                    {exp.company}
                  </p>
                </div>
              </div>
              
              <p className="text-foreground text-lg md:text-xl leading-relaxed font-medium mb-8">
                {exp.description}
              </p>
              
              <ul className="space-y-4">
                {exp.achievements.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-foreground mt-2 shrink-0 border-2 border-background shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]" />
                    <span className="text-foreground-secondary font-medium leading-relaxed text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col gap-5 mt-8 xl:mt-0 xl:items-end text-sm text-foreground font-bold shrink-0 border-2 border-foreground bg-background p-6">
              <div className="flex items-center gap-4">
                <Calendar className="h-6 w-6 text-foreground" />
                <span className="text-lg uppercase tracking-wider">{exp.period}</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-foreground" />
                <span className="text-lg uppercase tracking-wider">{exp.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};