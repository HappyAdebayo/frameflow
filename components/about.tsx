'use client';

import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative bg-black aspect-square overflow-hidden group cursor-pointer">
              <Image
                src="/about-hero.jpg"
                alt="Photographer at work"
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />

              {/* Accent Border */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-accent group-hover:bottom-0 group-hover:right-0 transition-all duration-300" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6">About FrameFlow</p>
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8">
              Crafting Visual Excellence
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                FrameFlow represents a decade of dedicated visual storytelling. Every photograph is a deliberate choice—a moment where technical mastery meets artistic vision to create imagery that transcends the ordinary.
              </p>
              
              <p>
                We specialize in capturing authentic narratives across architecture, landscape, portrait, and commercial photography. Our approach combines meticulous attention to light, composition, and detail with an unwavering commitment to emotional authenticity.
              </p>

              <p>
                From intimate portraits that reveal the soul to expansive landscapes that breathe with life, we believe photography is a conversation between the photographer, the subject, and the viewer—one that speaks in the language of emotion.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <p className="text-3xl font-light text-accent mb-2">500+</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-light text-accent mb-2">10+</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-light text-accent mb-2">25</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
