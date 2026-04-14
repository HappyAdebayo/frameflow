'use client';

import { useState } from 'react';
import Image from 'next/image';

const portfolioItems = [
  {
    id: 1,
    title: 'Urban Landscapes',
    category: 'Architecture',
    description: 'Exploring the intersection of light and geometry in metropolitan spaces',
    image: '/portfolio-1.jpg',
    color: 'from-slate-900 to-slate-800',
  },
  {
    id: 2,
    title: 'Nature & Elements',
    category: 'Landscape',
    description: 'Raw moments captured at the edge of wilderness',
    image: '/portfolio-2.jpg',
    color: 'from-slate-800 to-slate-700',
  },
  {
    id: 3,
    title: 'Portraits & Souls',
    category: 'Portrait',
    description: 'Human connections frozen in time with genuine emotion',
    image: '/portfolio-3.jpg',
    color: 'from-slate-700 to-slate-600',
  },
  {
    id: 4,
    title: 'Commercial Vision',
    category: 'Commercial',
    description: 'Brand storytelling through powerful visual communication',
    image: '/portfolio-4.jpg',
    color: 'from-slate-900 to-slate-800',
  },
  {
    id: 5,
    title: 'Moments in Motion',
    category: 'Street',
    description: 'Candid stories from everyday life in vibrant settings',
    image: '/portfolio-5.jpg',
    color: 'from-slate-800 to-slate-700',
  },
  {
    id: 6,
    title: 'Ethereal Frames',
    category: 'Fine Art',
    description: 'Artistic interpretations pushing the boundaries of reality',
    image: '/portfolio-6.jpg',
    color: 'from-slate-700 to-slate-600',
  },
];

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">Our Work</p>
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            Curated Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each frame represents a moment of deliberate artistry and technical excellence
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-secondary aspect-video mb-6 group/image">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover w-full h-full group-hover/image:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10" />

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
                  hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center">
                    <p className="text-white text-sm tracking-widest uppercase mb-2">View</p>
                    <svg className="w-8 h-8 text-accent mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 6l6 6m0 0l-6 6m6-6H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`transition-all duration-300 ${hoveredId === item.id ? 'translate-x-2' : ''}`}>
                <p className="text-accent text-xs tracking-[0.15em] uppercase mb-2">{item.category}</p>
                <h3 className="text-2xl font-light text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <a href="#" className="px-8 py-3 border border-accent text-accent text-sm tracking-widest uppercase hover:bg-accent hover:text-black transition-all">
            View Full Collection
          </a>
        </div>
      </div>
    </section>
  );
}
