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
    <footer className='w-full pt-20 pb-10 relative overflow-hidden bg-background border-t-2 border-foreground'>
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] mb-8">
            <Sparkles className="h-4 w-4 text-foreground" />
            <span className="text-sm font-bold tracking-widest uppercase">Let's build</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground mb-8">
            Start a Project.
          </h2>
          
          <p className="text-foreground-secondary text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-10">
            Whether you have a spark of an idea or a fully fleshed-out vision, I'd love to help you bring it to life with precision and style.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-10">
            <a 
              href="mailto:5aprilshrey@gmail.com"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-black uppercase tracking-widest text-background bg-foreground border-2 border-foreground hover:bg-background hover:text-foreground transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
            >
              <Mail className="w-6 h-6 mr-4" />
              Get in touch
            </a>

            <a 
              href="https://payments.cashfree.com/forms/shrey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-5 px-8 py-5 bg-foreground border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all group"
            >
              <div className="relative w-14 h-14 bg-background border-2 border-foreground flex items-center justify-center rotate-[-5deg] group-hover:rotate-0 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                <SiBuymeacoffee className="w-8 h-8 text-foreground" />
              </div>
              <div className="flex flex-col items-start leading-none pointer-events-none">
                <span className="text-2xl font-black uppercase tracking-tighter text-background mb-1">Buy me a coffee</span>
                <div className="flex items-center gap-1.5 opacity-80">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-background">Powered By Cashfree</span>
                  <img src="https://cashfreelogo.cashfree.com/cashfreepayments/logosvgs/Group_4355.svg" alt="logo" className="w-4 h-4 brightness-0 opacity-80" />
                </div>
              </div>
            </a>
          </div>
        </motion.div>

        <div className="w-full h-1 bg-foreground mb-10" />

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
            {[
              { icon: Github, href: 'https://github.com/ShreyJaiswal1', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/shreyjaiswal1', label: 'LinkedIn' },
              { icon: SiX, href: 'https://x.com/lazy_shrey', label: 'X (Twitter)' },
              { icon: SiDiscord, href: 'https://discord.gg/ZVCB8EnRX2', label: 'Discord' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.label}
                className='inline-flex items-center justify-center w-12 h-12 border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-colors'
              >
                <social.icon className='h-5 w-5' />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label='Back to top'
              className='ml-4 inline-flex items-center justify-center w-12 h-12 border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all focus:outline-none'
              title='Back to top'
            >
              <ArrowUp className='h-6 w-6' />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
