'use client';

import { useState, useEffect } from 'react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image - Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-background opacity-90" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(212,175,55,.05)_25%,rgba(212,175,55,.05)_26%,transparent_27%,transparent_74%,rgba(212,175,55,.05)_75%,rgba(212,175,55,.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(212,175,55,.05)_25%,rgba(212,175,55,.05)_26%,transparent_27%,transparent_74%,rgba(212,175,55,.05)_75%,rgba(212,175,55,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6">Visual Storytelling</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-6">
            Capturing <span className="text-accent">Moments</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Premium photography that transforms ordinary moments into extraordinary visual narratives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#portfolio" className="px-8 py-3 bg-accent text-black text-sm tracking-widest uppercase font-medium hover:bg-opacity-90 transition-all">
              View Portfolio
            </a>
            <a href="#contact" className="px-8 py-3 border border-accent text-accent text-sm tracking-widest uppercase hover:bg-accent hover:text-black transition-all">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <svg className="w-6 h-6 text-accent animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
