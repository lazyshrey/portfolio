import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  delay = 0,
  stagger = 0.1 
}) => {
  const words = text.split(' ');

  return (
    <motion.div
      className={cn('flex flex-wrap', className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-2"
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 80,
                damping: 15,
                mass: 0.8,
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};