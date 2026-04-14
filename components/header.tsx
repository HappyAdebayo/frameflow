'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4 py-6 md:py-8 flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-light tracking-wider hover:text-accent transition-colors">
          FRAMEFLOW
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/portfolio" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 relative w-6 h-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-full h-px bg-foreground transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-px bg-foreground transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-px bg-foreground transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border bg-secondary ${isOpen ? 'max-h-56' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          <Link 
            href="/portfolio" 
            className="text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            href="/about" 
            className="text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
