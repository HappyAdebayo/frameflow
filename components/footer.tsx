'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030304] border-t border-white/5 py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-sm">
            <h3 className="text-2xl font-light tracking-tighter text-white mb-6">
              FRAME<span className="font-bold text-primary">FLOW</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Based in New York City, working worldwide. We specialize in premiere visual storytelling through high-end photography and cinematic narratives.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 w-full md:w-auto">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6 font-bold">Studio</h4>
              <ul className="space-y-4">
                <li><a href="#portfolio" className="text-sm text-gray-400 hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#about" className="text-sm text-gray-400 hover:text-primary transition-colors">The Studio</a></li>
                <li><a href="#contact" className="text-sm text-gray-400 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6 font-bold">Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Commercial</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Portraits</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Architecture</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6 font-bold">Social</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Behance</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Vimeo</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-gray-600 tracking-wider">
            © {currentYear} FRAMEFLOW STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

