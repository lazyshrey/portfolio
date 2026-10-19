import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedText } from '@/components/ui/animated-text';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import { SiBuymeacoffee } from 'react-icons/si';
import Link from 'next/link';

export const Hero: React.FC = () => {
  const [showAvatar, setShowAvatar] = useState(false);
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
            className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8 uppercase text-foreground'
          >
            <span className='block overflow-hidden pb-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: 0.1 }}
                className='block'
              >
                Fueled By
              </motion.span>
            </span>

            {/* Mobile Split Version (Coffee on one line, & Code on the next) */}
            <div className='flex flex-col gap-2 mt-2 sm:hidden'>
              <div className="overflow-hidden pb-1 w-full">
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: 0.3 }}
                  className="relative w-max"
                >
                  <span className="block text-foreground px-3 font-black select-none">
                    Coffee
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-foreground overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: 0.8 }}
                  >
                    <span className="block text-background px-3 font-black w-max">
                      Coffee
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              <div className="overflow-hidden pb-4 w-full">
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: 0.5 }}
                  className="relative w-max"
                >
                  <span className="block text-foreground px-3 font-black select-none">
                    & Code.
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-foreground overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: 1.0 }}
                  >
                    <span className="block text-background px-3 font-black w-max">
                      & Code.
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Desktop Unified Version */}
            <div className="hidden sm:block overflow-hidden pb-4 mt-2">
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: 0.3 }}
                className="relative w-max"
              >
                {/* Base text */}
                <span className="block text-foreground px-6 font-black select-none">
                  Coffee & Code.
                </span>
                {/* Animated highlight / invert container */}
                <motion.div
                  className="absolute inset-0 bg-foreground overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: 0.9 }}
                >
                  <span className="block text-background px-6 font-black w-max">
                    Coffee & Code.
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </h1>

          <div className="relative pl-6 mb-12 max-w-2xl">
            {/* Vertical Line drawn from bottom to top */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-foreground"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: 0.8 }}
              style={{ originY: 1 }}
            />
            
            {/* Text container masking the slide out */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: 1.6 }}
              >
                <p className='text-lg md:text-2xl text-foreground-secondary font-medium leading-relaxed'>
                  I'm{" "}
                  <span
                    onMouseEnter={() => setShowAvatar(true)}
                    onMouseLeave={() => setShowAvatar(false)}
                    className="relative cursor-pointer select-none group inline"
                  >
                    <AnimatePresence initial={false}>
                      {showAvatar && (
                        <a
                          href="https://github.com/lazyshrey"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex align-middle shrink-0"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <motion.span
                            initial={{ width: 0, scale: 0, opacity: 0, marginRight: 0 }}
                            animate={{ width: "1em", scale: 1, opacity: 1, marginRight: "0.4rem" }}
                            exit={{ width: 0, scale: 0, opacity: 0, marginRight: 0 }}
                            transition={{ type: "spring", stiffness: 350, damping: 22 }}
                            className="inline-block h-[1em] w-[1em] overflow-hidden shrink-0 rounded-full border border-[#a58261]"
                          >
                            <img
                              src="https://github.com/lazyshrey.png"
                              alt="Shrey Jaiswal"
                              className="w-full h-full object-cover rounded-full"
                            />
                          </motion.span>
                        </a>
                      )}
                    </AnimatePresence>
                    <span className="font-bold text-[#a58261]">
                      Shrey Jaiswal
                    </span>
                  </span>
                  . I build software applications and systems focusing on robust architecture, clean design, and reliable performance. Engineering that speaks for itself.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Hard Edges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1, delay: 0.8 }}
          className='flex flex-col md:flex-row items-start gap-6 mt-4 w-full border-t border-foreground/10 pt-8'
        >
          <motion.div
            whileHover={{ y: -4, x: -4 }}
            whileTap={{ y: 2, x: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Button
              size='lg'
              className='h-16 px-10 rounded-none bg-foreground text-background font-bold text-lg uppercase tracking-widest border-2 border-foreground hover:bg-background hover:text-foreground transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]'
              asChild
            >
              <Link href='/projects'>
                View My Work
              </Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, x: -4 }}
            whileTap={{ y: 2, x: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Button
              variant='outline'
              size='lg'
              className='h-16 px-10 rounded-none border-2 border-foreground bg-background text-foreground font-bold text-lg uppercase tracking-widest transition-all hover:bg-foreground hover:text-background shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]'
              asChild
            >
              <a href="mailto:5aprilshrey@gmail.com">
                <Mail className='mr-3 h-6 w-6' /> Let's Talk
              </a>
            </Button>
          </motion.div>

          {/* Socials - Brutalist */}
          <div className='flex items-center gap-4 mt-4 md:mt-0 md:ml-auto w-full md:w-auto justify-start'>
            {[
              { icon: Linkedin, href: 'https://linkedin.com/in/lazyshrey' },
              { icon: SiBuymeacoffee, href: 'https://payments.cashfree.com/forms/shrey' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ y: -4, x: -4 }}
                whileTap={{ y: 2, x: 2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className='w-16 h-16 flex items-center justify-center border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]'
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
