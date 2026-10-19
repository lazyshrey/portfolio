"use client";

import React from 'react';
import Navigation from '@/components/ui/Navigation';
import { Hero } from '@/components/sections/Hero';
import { TechStack } from '@/components/sections/TechStack';
import { Connect } from '@/components/sections/Connect';
import { Footer } from '@/components/sections/Footer';
export default function Page() {
  return (
    <div className='min-h-screen bg-background relative selection:bg-foreground selection:text-background'>
      
      {/* Brutalist Base Background */}
      <div className='fixed inset-0 -z-40 pointer-events-none bg-background'>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Navigation />

      <main className="relative z-10">
        <section id='hero'>
          <Hero />
        </section>
        <section id='tech-stack'>
          <TechStack />
        </section>
        <section id='connect'>
          <Connect />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}
