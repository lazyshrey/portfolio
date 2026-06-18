import React from 'react';
import { motion } from 'framer-motion';
import { Music, Gamepad2, Brain, Coffee, Camera, BookOpen, Compass } from 'lucide-react';

const interests = [
  {
    name: 'Guitar',
    icon: Music,
    description: 'Composing melodies and exploring the intricacies of acoustics and rhythm.',
  },
  {
    name: 'Gaming',
    icon: Gamepad2,
    description: 'Immersing in grand strategy and competitive mechanics.',
  },
  {
    name: 'AI Automation',
    icon: Brain,
    description: 'Orchestrating agents and experimenting with bleeding-edge LLM models.',
  },
  {
    name: 'Specialty Coffee',
    icon: Coffee,
    description: 'The science of extraction and the ultimate fuel for engineering.',
  },
  {
    name: 'Photography',
    icon: Camera,
    description: 'Capturing light, framing narratives, and observing the extraordinary.',
  },
  {
    name: 'Deep Learning',
    icon: BookOpen,
    description: 'Constantly absorbing new paradigms, from philosophy to quantum computing.',
  },
];

export const Interests: React.FC = () => {
  return (
    <section className="py-32 px-4 relative z-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground mb-2">
            INTERESTS
          </h2>
          <p className="text-sm md:text-base text-[#a58261] uppercase font-bold tracking-wider mb-6">
            PURSUITS / HOBBIES / PASSIONS
          </p>
          <hr className="border-t border-foreground/10 mb-8 w-full" />
          <p className="text-foreground-secondary text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
            The passions and pursuits that keep me inspired off the keyboard, fueling creativity and perspective.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 15, 
                mass: 0.8,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              whileHover={{ y: -4, x: -4 }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <div 
                className="h-full text-center group cursor-pointer p-10 flex flex-col items-center justify-center relative border-2 border-foreground bg-background shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all duration-300"
              >
                
                <div className="relative z-10 flex flex-col items-center w-full">
                  <div
                    className="p-6 mb-8 border-2 border-foreground bg-background group-hover:bg-foreground group-hover:text-background transition-colors duration-300"
                  >
                    <interest.icon className="h-10 w-10 text-foreground group-hover:text-background transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-black uppercase text-foreground mb-4 tracking-tighter w-full border-b-2 border-foreground/10 pb-4">
                    {interest.name}
                  </h3>
                  
                  <p className="text-foreground-secondary text-base md:text-lg text-center leading-relaxed font-medium">
                    {interest.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};