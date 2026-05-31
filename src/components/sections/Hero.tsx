import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/ui/animated-text';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import { SiBuymeacoffee } from 'react-icons/si';

export const Hero: React.FC = () => {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-8 pt-20 bg-background'>

      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <div className='max-w-6xl mx-auto z-10 w-full flex flex-col items-start'>

        {/* Intro Badge */}
        {/* <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='mb-8 inline-flex items-center gap-3 px-4 py-2 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full bg-foreground opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 bg-foreground"></span>
          </span>
          <span className='text-xs md:text-sm font-bold tracking-widest uppercase text-foreground'>Open for Work</span>
        </motion.div> */}

        {/* Main Title - Brutalist Typography */}
        <div className='w-full'>
          <h1
            className='text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8 uppercase text-foreground'
          >
            <span className='block overflow-hidden pb-2'>
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className='block'
              >
                Fueled By
              </motion.span>
            </span>

            {/* Mobile Split Version (Coffee on one line, & Code on the next) */}
            <div className='flex flex-col gap-2 mt-2 sm:hidden'>
              <span className='block overflow-hidden pb-1 w-full'>
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  className='inline-block text-background bg-foreground px-3 w-max'
                >
                  Coffee
                </motion.span>
              </span>
              <span className='block overflow-hidden pb-4 w-full'>
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  className='inline-block text-background bg-foreground px-3 w-max'
                >
                  & Code.
                </motion.span>
              </span>
            </div>

            {/* Desktop Unified Version */}
            <span className='hidden sm:block overflow-hidden pb-4 mt-2'>
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className='block text-background bg-foreground px-2 md:px-6 w-max'
              >
                Coffee & Code.
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mb-12 max-w-2xl border-l-4 border-foreground pl-6'
          >
            <p className='text-lg md:text-2xl text-foreground-secondary font-medium leading-relaxed'>
              I'm <span className="font-bold text-foreground">Shrey Jaiswal</span>. I build software applications and systems focusing on robust architecture, clean design, and reliable performance. Engineering that speaks for itself.
            </p>
          </motion.div>
        </div>

        {/* Action Buttons - Hard Edges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='flex flex-col sm:flex-row items-start gap-6 mt-4 w-full border-t-2 border-foreground/10 pt-8'
        >
          <Button
            size='lg'
            className='h-16 px-10 rounded-none bg-foreground text-background font-bold text-lg uppercase tracking-widest border-2 border-foreground hover:bg-background hover:text-foreground transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'
            asChild
          >
            <a href='#projects'>
              View My Work
            </a>
          </Button>

          <Button
            variant='outline'
            size='lg'
            className='h-16 px-10 rounded-none border-2 border-foreground bg-background text-foreground font-bold text-lg uppercase tracking-widest transition-all hover:bg-foreground hover:text-background'
            asChild
          >
            <a href="mailto:5aprilshrey@gmail.com">
              <Mail className='mr-3 h-6 w-6' /> Let's Talk
            </a>
          </Button>

          {/* Socials - Brutalist */}
          <div className='flex items-center gap-4 mt-4 sm:mt-0 sm:ml-auto w-full sm:w-auto justify-start'>
            {[
              { icon: Linkedin, href: 'https://linkedin.com/in/lazyshrey' },
              { icon: SiBuymeacoffee, href: 'https://payments.cashfree.com/forms/shrey' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ y: -4 }}
                whileTap={{ y: 0 }}
                className='w-16 h-16 flex items-center justify-center border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-colors'
              >
                <social.icon className='h-6 w-6' />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
