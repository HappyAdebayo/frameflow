'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Minimalist Architecture',
    category: 'Architecture',
    image: '/hero-1.png',
    size: 'large',
  },
  {
    id: 2,
    title: 'Ethereal Landscapes',
    category: 'Nature',
    image: '/portfolio-1.png',
    size: 'small',
  },
  {
    id: 3,
    title: 'Shadow & Soul',
    category: 'Portrait',
    image: '/portfolio-2.png',
    size: 'small',
  },
  {
    id: 4,
    title: 'Urban Reflections',
    category: 'Street',
    image: '/portfolio-3.png',
    size: 'medium',
  },
  {
    id: 5,
    title: 'High Fashion Vision',
    category: 'Fashion',
    image: '/portfolio-4.png',
    size: 'medium',
  },
];

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-32 bg-[#030304]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary text-xs tracking-[0.4em] uppercase mb-6 font-medium"
            >
              Selected Works
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-light text-white tracking-tighter"
            >
              Visual <span className="italic font-serif text-primary">Narratives</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-400 text-lg font-light max-w-sm">
              Exploring the boundary between reality and imagination through the lens.
            </p>
          </motion.div>
        </div>

        {/* Portfolio Grid - Custom Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                item.size === 'large' ? 'md:col-span-8 h-[600px]' : 
                item.size === 'medium' ? 'md:col-span-6 h-[500px]' : 
                'md:col-span-4 h-[400px]'
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-500 flex flex-col justify-end p-10 ${
                hoveredId === item.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <motion.div
                  animate={hoveredId === item.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-primary text-xs tracking-widest uppercase mb-4">{item.category}</p>
                  <h3 className="text-3xl font-light text-white mb-6 uppercase tracking-tight">{item.title}</h3>
                  <div className="w-12 h-[1px] bg-primary group-hover:w-full transition-all duration-700" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <button className="group relative flex items-center gap-4 text-white text-xs tracking-[0.3em] uppercase font-bold py-4 px-8 border border-white/10 glass hover:border-primary transition-colors duration-500">
            <span>View Full Archive</span>
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

