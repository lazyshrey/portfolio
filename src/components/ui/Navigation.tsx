import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Interests', href: '#interests' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background border-b-2 border-primary py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center gap-3 cursor-pointer' onClick={() => scrollToSection('#hero')}>
            {/* <img src="/lazyshrey.png" alt="Lazy Shrey Logo" className="w-10 h-10 object-contain" /> */}
            <div className='text-2xl font-black tracking-tighter uppercase text-primary hidden sm:block'>
              <span className="bg-foreground text-background px-2 py-1 mr-1">Shrey</span>
              Jaiswal
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-6'>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-200 outline-none ${
                  activeSection === item.href.substring(1)
                    ? 'text-foreground border-b-2 border-foreground pb-1'
                    : 'text-foreground-secondary hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='lg:hidden p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground'
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className='lg:hidden absolute top-full left-0 right-0 bg-background border-b-2 border-foreground shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            >
              <div className='flex flex-col py-4 px-4 space-y-2'>
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left py-3 px-4 font-bold uppercase tracking-widest transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'bg-foreground text-background'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;