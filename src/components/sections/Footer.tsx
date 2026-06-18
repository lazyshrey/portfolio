import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Sparkles } from 'lucide-react';
import { SiDiscord, SiBuymeacoffee, SiX } from 'react-icons/si';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const scrollToTop = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className='w-full py-12 relative overflow-hidden bg-background border-t border-foreground/10'>
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>

          {/* Left: Branding & Copyright */}
          <div className='flex flex-col md:flex-row items-center gap-4 text-center md:text-left'>
            <div
              className='inline-flex items-center gap-2'
              aria-hidden
            >
              <span className='text-sm font-bold uppercase tracking-widest text-foreground'>Engineered by</span>
              <button
                onClick={scrollToTop}
                className='font-black text-foreground hover:bg-foreground hover:text-background px-2 transition-colors'
              >
                SHREY JAISWAL
              </button>
            </div>

            <span className='text-xs text-foreground hidden md:inline'>|</span>

            <div className='text-sm font-bold uppercase tracking-widest text-foreground-secondary'>
              © {year} ALL RIGHTS RESERVED
            </div>
          </div>

          {/* Right: Social icons + Back-to-top */}
          <div className='flex items-center gap-4'>
            {([
              { icon: Github, href: 'https://github.com/lazyshrey', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/lazyshrey', label: 'LinkedIn' },
              { icon: SiX, href: 'https://x.com/lazy_shrey', label: 'X (Twitter)' },
              { icon: SiDiscord, href: 'https://discord.gg/ZVCB8EnRX2', label: 'Discord' },
            ]).map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.label}
                whileHover={{ y: -4, x: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className='inline-flex items-center justify-center w-12 h-12 border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'
              >
                <social.icon className='h-5 w-5' />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollToTop}
              aria-label='Back to top'
              whileHover={{ y: -4, x: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className='ml-4 inline-flex items-center justify-center w-12 h-12 border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all focus:outline-none'
              title='Back to top'
            >
              <ArrowUp className='h-6 w-6' />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
};
