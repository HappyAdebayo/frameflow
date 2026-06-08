'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black py-32">
      {/* Background Image with Ken Burns Effect */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero-1.png"
          alt="Cinematic Architecture"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#030304] z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60 z-[1]" />

      {/* Light Leaks */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] light-leak" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] light-leak opacity-10" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="inline-block text-primary text-xs tracking-[0.4em] uppercase mb-8 font-medium">
            Premiere Photography Studio
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-light text-white leading-tight mb-8 tracking-tighter"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Elevating <br />
          <span className="text-gradient-gold italic font-serif">Aesthetics</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-16 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          We capture the essence of light and geometry to tell stories that transcend time and space.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Link href="/portfolio" className="group relative px-10 py-5 bg-primary text-black text-[10px] tracking-[0.3em] uppercase font-bold overflow-hidden transition-all duration-500">
            <span className="relative z-10">Explore Archive</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <Link href="/#contact" className="group relative px-10 py-5 border border-white/10 text-white text-[10px] tracking-[0.3em] uppercase font-bold overflow-hidden transition-all duration-500 backdrop-blur-md">
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] text-white/40 tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}

