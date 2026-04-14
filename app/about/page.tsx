'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { label: 'Years of Experience', value: '12+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Global Clients', value: '150+' },
    { label: 'Awards Won', value: '35' },
  ];

  const services = [
    {
      title: 'Commercial Photography',
      description: 'High-end product and corporate photography tailored to your brand narrative',
    },
    {
      title: 'Editorial Work',
      description: 'Published photography for magazines, publications, and digital media',
    },
    {
      title: 'Fine Art Photography',
      description: 'Limited edition prints and gallery-quality artistic compositions',
    },
    {
      title: 'Collaborative Projects',
      description: 'Custom creative partnerships exploring new visual possibilities',
    },
  ];

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-foreground">
            About <span className="text-accent">FrameFlow</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            We believe photography is the language of the soul. Every frame tells a story, every composition a perspective, every moment a memory worth preserving.
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/about-hero.jpg"
                alt="FrameFlow Studio"
                fill
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-foreground">
                Crafting Visual Stories
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Founded on the principle that exceptional photography transcends mere documentation. We create immersive visual experiences that challenge perspectives and evoke emotion.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Our work spans across commercial, editorial, and fine art domains, each project approached with meticulous attention to composition, lighting, and narrative depth.
              </p>
              <div className="flex flex-col gap-4">
                <p className="text-sm tracking-widest uppercase text-accent font-medium">Our Philosophy</p>
                <blockquote className="border-l-2 border-accent pl-6 italic text-foreground">
                  "In every photograph lies the potential to change how the world is perceived. We don't just capture moments—we curate experiences."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16 text-foreground">
            By The Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-4xl md:text-5xl font-light text-accent mb-2">
                  {stat.value}
                </span>
                <span className="text-sm tracking-widest uppercase text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16 text-foreground">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="border border-border p-8 hover:border-accent transition-colors duration-300 group">
              <h3 className="text-xl font-light tracking-tight mb-4 text-foreground group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-foreground">
            Meet The Team
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
            A diverse collective of visual storytellers, technicians, and creative visionaries united by a single mission: to push the boundaries of contemporary photography.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Chen', role: 'Lead Photographer' },
              { name: 'Marcus Johnson', role: 'Creative Director' },
              { name: 'Elena Rodriguez', role: 'Post-Production Specialist' },
            ].map((member, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="aspect-square bg-primary rounded-none mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl text-accent mb-2">→</div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">Photo</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-light tracking-tight text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 border-t border-border">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-foreground">
            Interested in working together?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
            Let&apos;s discuss your vision and how we can bring it to life through the art of photography.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground tracking-widest uppercase text-sm font-medium hover:bg-accent/90 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
