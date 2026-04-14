'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const collectionData = {
  1: {
    title: 'Urban Architecture',
    category: 'Architecture',
    description: 'Exploring the geometry and elegance of modern cityscapes through minimalist composition and dramatic lighting.',
    fullDescription: 'This collection captures the soul of urban environments. From towering skyscrapers to intimate architectural details, each image tells a story of human ambition, design excellence, and the interplay between light and shadow. These photographs celebrate the precision and creativity found in modern architectural design.',
    images: [
      { id: 1, src: '/collection-1-1.jpg', title: 'Glass & Steel' },
      { id: 2, src: '/collection-1-2.jpg', title: 'Facade Details' },
      { id: 3, src: '/collection-1-3.jpg', title: 'Interior Spaces' },
      { id: 4, src: '/collection-1-4.jpg', title: 'Urban Perspective' },
      { id: 5, src: '/portfolio-1.jpg', title: 'Skyline Study' },
      { id: 6, src: '/portfolio-2.jpg', title: 'Geometric Forms' },
    ],
    stats: {
      imageCount: 24,
      locations: 8,
      year: '2023-2024',
    },
  },
  2: {
    title: 'Wilderness & Landscapes',
    category: 'Landscape',
    description: 'Capturing the raw beauty of nature, from mountain peaks to serene valleys, showcasing earth\'s untamed majesty.',
    fullDescription: 'Landscape photography at its finest. This collection showcases pristine natural environments captured in their most authentic forms. From golden hour alpine vistas to intimate forest details, these images celebrate the majesty and serenity of the natural world.',
    images: [
      { id: 1, src: '/portfolio-2.jpg', title: 'Mountain Range' },
      { id: 2, src: '/portfolio-3.jpg', title: 'Valley View' },
      { id: 3, src: '/collection-1-1.jpg', title: 'Forest Canopy' },
      { id: 4, src: '/collection-1-2.jpg', title: 'Waterfall Flow' },
      { id: 5, src: '/collection-1-3.jpg', title: 'Sunrise Peak' },
      { id: 6, src: '/collection-1-4.jpg', title: 'Desert Dunes' },
    ],
    stats: {
      imageCount: 18,
      locations: 12,
      year: '2023-2024',
    },
  },
  3: {
    title: 'Human Connections',
    category: 'Portrait',
    description: 'Intimate portraits that reveal character, emotion, and the stories written in faces and expressions.',
    fullDescription: 'Portrait photography that goes beyond the surface. Each image captures a moment of human authenticity, revealing personality, emotion, and the unique stories that make us individuals. These portraits celebrate the beauty of human diversity and connection.',
    images: [
      { id: 1, src: '/portfolio-3.jpg', title: 'Confident Gaze' },
      { id: 2, src: '/portfolio-4.jpg', title: 'Thoughtful Moment' },
      { id: 3, src: '/portfolio-5.jpg', title: 'Natural Beauty' },
      { id: 4, src: '/collection-1-1.jpg', title: 'Emotional Depth' },
      { id: 5, src: '/collection-1-2.jpg', title: 'Studio Light' },
      { id: 6, src: '/collection-1-3.jpg', title: 'Soft Expression' },
    ],
    stats: {
      imageCount: 32,
      locations: 5,
      year: '2023-2024',
    },
  },
  4: {
    title: 'Commercial & Branding',
    category: 'Commercial',
    description: 'Professional product and brand photography that elevates visual identity and tells compelling brand stories.',
    fullDescription: 'Commercial photography that combines technical excellence with creative vision. These images are designed to elevate brands and products, creating compelling visual narratives that resonate with audiences and drive engagement.',
    images: [
      { id: 1, src: '/portfolio-4.jpg', title: 'Product Launch' },
      { id: 2, src: '/portfolio-5.jpg', title: 'Brand Identity' },
      { id: 3, src: '/portfolio-6.jpg', title: 'Lifestyle Shot' },
      { id: 4, src: '/collection-1-1.jpg', title: 'Detail Work' },
      { id: 5, src: '/collection-1-2.jpg', title: 'Packaging' },
      { id: 6, src: '/collection-1-3.jpg', title: 'Studio Setup' },
    ],
    stats: {
      imageCount: 16,
      locations: 3,
      year: '2023-2024',
    },
  },
  5: {
    title: 'Street & Documentary',
    category: 'Documentary',
    description: 'Unscripted moments of urban life, candid interactions, and the poetry found in everyday scenes.',
    fullDescription: 'Documentary photography capturing authentic moments of urban life. These images celebrate the unscripted drama of city living, candid human interactions, and the poetry found in everyday scenes that often go unnoticed.',
    images: [
      { id: 1, src: '/portfolio-5.jpg', title: 'Urban Moment' },
      { id: 2, src: '/portfolio-6.jpg', title: 'Street Life' },
      { id: 3, src: '/portfolio-1.jpg', title: 'Candid Capture' },
      { id: 4, src: '/collection-1-1.jpg', title: 'People & Place' },
      { id: 5, src: '/collection-1-2.jpg', title: 'City Stories' },
      { id: 6, src: '/collection-1-3.jpg', title: 'Everyday Drama' },
    ],
    stats: {
      imageCount: 28,
      locations: 15,
      year: '2023-2024',
    },
  },
  6: {
    title: 'Conceptual & Fine Art',
    category: 'Fine Art',
    description: 'Artistic explorations pushing creative boundaries, blending reality with imagination and emotion.',
    fullDescription: 'Fine art photography that transcends traditional boundaries. These images represent artistic explorations that blend reality with imagination, pushing creative limits and evoking emotional responses through visual storytelling.',
    images: [
      { id: 1, src: '/portfolio-6.jpg', title: 'Abstract Forms' },
      { id: 2, src: '/portfolio-1.jpg', title: 'Ethereal Light' },
      { id: 3, src: '/portfolio-2.jpg', title: 'Conceptual Art' },
      { id: 4, src: '/collection-1-1.jpg', title: 'Artistic Vision' },
      { id: 5, src: '/collection-1-2.jpg', title: 'Creative Expression' },
      { id: 6, src: '/collection-1-3.jpg', title: 'Emotional Landscape' },
    ],
    stats: {
      imageCount: 22,
      locations: 7,
      year: '2023-2024',
    },
  },
};

type CollectionId = 1 | 2 | 3 | 4 | 5 | 6;

export default function CollectionDetailPage({ params }: { params: { id: string } }) {
  const collectionId = parseInt(params.id) as CollectionId;
  const collection = collectionData[collectionId];
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!collection) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl text-foreground mb-4">Collection Not Found</h1>
            <Link href="/portfolio" className="text-accent hover:underline">
              ← Back to Portfolio
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <Link href="/portfolio" className="text-accent text-sm tracking-[0.2em] uppercase mb-6 inline-block hover:text-white transition-colors">
              ← Back to Portfolio
            </Link>
            <div className="max-w-3xl">
              <span className="text-accent text-sm tracking-[0.2em] uppercase mb-4 inline-block">
                {collection.category}
              </span>
              <h1 className="text-6xl md:text-7xl font-light text-foreground mb-8 text-balance">
                {collection.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {collection.fullDescription}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div>
                  <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">Images</p>
                  <p className="text-3xl font-light text-foreground">{collection.stats.imageCount}</p>
                </div>
                <div>
                  <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">Locations</p>
                  <p className="text-3xl font-light text-foreground">{collection.stats.locations}</p>
                </div>
                <div>
                  <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">Year</p>
                  <p className="text-3xl font-light text-foreground">{collection.stats.year}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collection.images.map((image) => (
                <div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden aspect-square"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-10 h-10 text-white mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                    <p className="text-white text-sm tracking-widest uppercase">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video">
              <Image
                src={collection.images[selectedImage - 1]?.src || collection.images[0].src}
                alt="Full view"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-24 border-t border-border bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6 text-balance">
              Like What You See?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Get in touch to discuss your project or collaborate on something extraordinary.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-10 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 tracking-widest uppercase text-sm"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
