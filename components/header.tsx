'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 transition-all duration-500">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full max-w-7xl flex items-center justify-between px-8 py-4 rounded-full transition-all duration-500 ${
          isScrolled ? 'glass shadow-2xl py-3' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold text-lg group-hover:rotate-12 transition-transform duration-500">
            F
          </div>
          <span className="text-xl font-light tracking-tighter text-white">
            FRAME<span className="font-bold text-primary">FLOW</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#contact" 
            className="px-6 py-2 border border-white/20 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500"
          >
            Work with us
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-24 left-6 right-6 glass rounded-2xl p-8 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-light tracking-widest uppercase text-white"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-4 bg-primary text-black font-bold tracking-widest uppercase rounded-xl"
              >
                Work with us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

