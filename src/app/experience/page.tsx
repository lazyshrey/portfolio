"use client";

import React from 'react';
import Navigation from '@/components/ui/Navigation';
import { Experience } from '@/components/sections/Experience';
import { Footer } from '@/components/sections/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ExperiencePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className='min-h-screen bg-background relative selection:bg-foreground selection:text-background'>
      
      {/* Scroll Progress Bar - Monochromatic Stark */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-foreground origin-left z-[100]"
        style={{ scaleX }}
      />
      
      {/* Brutalist Base Background */}
      <div className='fixed inset-0 -z-40 pointer-events-none bg-background'>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Navigation />

      <main className="relative z-10 pt-24">

        <section id='experience'>
          <Experience />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}
