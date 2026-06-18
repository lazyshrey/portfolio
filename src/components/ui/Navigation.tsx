"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-foreground/10' : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href="/" className='flex items-center gap-3 cursor-pointer' onClick={() => setIsOpen(false)}>
            <div className='text-2xl font-black tracking-tighter uppercase text-primary block'>
              <span className="bg-foreground text-background px-2 py-1 mr-1">Shrey</span>
              Jaiswal
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-6'>
            {navItems.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-bold uppercase tracking-widest transition-all duration-200 outline-none ${
                    active
                      ? 'text-foreground border-b-2 border-foreground pb-1'
                      : 'text-foreground-secondary hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
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
              transition={{ type: 'spring', stiffness: 300, damping: 26, mass: 1 }}
              className='lg:hidden absolute top-full left-0 right-0 bg-background border-b-2 border-foreground shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            >
              <div className='flex flex-col py-4 px-4 space-y-2'>
                {navItems.map((item) => {
                  const active = isLinkActive(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-left py-3 px-4 font-bold uppercase tracking-widest transition-colors ${
                        active
                          ? 'bg-foreground text-background'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;