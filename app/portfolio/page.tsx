'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const portfolioCollections = [
  {
    id: 1,
    title: 'Urban Architecture',
    description: 'Exploring the geometry and elegance of modern cityscapes through minimalist composition and dramatic lighting.',
    category: 'Architecture',
    image: '/portfolio-1.jpg',
    imageCount: 24,
  },
  {
    id: 2,
    title: 'Wilderness & Landscapes',
    description: 'Capturing the raw beauty of nature, from mountain peaks to serene valleys, showcasing earth&apos;s untamed majesty.',
    category: 'Landscape',
    image: '/portfolio-2.jpg',
    imageCount: 18,
  },
  {
    id: 3,
    title: 'Human Connections',
    description: 'Intimate portraits that reveal character, emotion, and the stories written in faces and expressions.',
    category: 'Portrait',
    image: '/portfolio-3.jpg',
    imageCount: 32,
  },
  {
    id: 4,
    title: 'Commercial & Branding',
    description: 'Professional product and brand photography that elevates visual identity and tells compelling brand stories.',
    category: 'Commercial',
    image: '/portfolio-4.jpg',
    imageCount: 16,
  },
  {
    id: 5,
    title: 'Street & Documentary',
    description: 'Unscripted moments of urban life, candid interactions, and the poetry found in everyday scenes.',
    category: 'Documentary',
    image: '/portfolio-5.jpg',
    imageCount: 28,
  },
  {
    id: 6,
    title: 'Conceptual & Fine Art',
    description: 'Artistic explorations pushing creative boundaries, blending reality with imagination and emotion.',
    category: 'Fine Art',
    image: '/portfolio-6.jpg',
    imageCount: 22,
  },
];

export default function PortfolioPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Link href="/#portfolio" className="text-accent text-sm tracking-[0.2em] uppercase mb-6 inline-block hover:text-white transition-colors">
                ← Back to Home
              </Link>
              <h1 className="text-6xl md:text-7xl font-light text-foreground mb-6 text-balance">
                Complete Portfolio Collections
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Explore our full catalog of curated photography collections, each representing a unique perspective on visual storytelling across multiple genres and disciplines.
              </p>
            </div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {portfolioCollections.map((collection) => (
                <div
                  key={collection.id}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredId(collection.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-secondary aspect-video mb-6">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10" />

                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
                      hoveredId === collection.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="text-center">
                        <p className="text-white text-sm tracking-widest uppercase mb-2">View Collection</p>
                        <svg className="w-8 h-8 text-accent mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 6l6 6m0 0l-6 6m6-6H7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-light text-foreground group-hover:text-accent transition-colors">
                        {collection.title}
                      </h3>
                      <span className="text-accent text-sm tracking-widest uppercase px-3 py-1 border border-accent/30 group-hover:border-accent transition-colors">
                        {collection.category}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {collection.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-sm text-muted-foreground tracking-widest uppercase">
                        {collection.imageCount} Photos
                      </span>
                      <Link href={`/portfolio/${collection.id}`} className="text-accent text-sm tracking-widest uppercase hover:translate-x-1 transition-transform inline-block">
                        Explore →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t border-border bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6 text-balance">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let&apos;s create something extraordinary. Whether it&apos;s a new project or a collaboration, we&apos;d love to hear from you.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-10 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 tracking-widest uppercase text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
