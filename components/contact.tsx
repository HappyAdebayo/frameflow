'use client';

import { useState } from 'react';
import Image from 'next/image';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">Get In Touch</p>
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            Let&apos;s Create Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether it&apos;s a new project or collaboration, we&apos;d love to hear about your vision
          </p>
        </div>

        {/* Visual Element */}
        <div className="mb-20 relative aspect-video overflow-hidden">
          <Image
            src="/contact-visual.jpg"
            alt="Contact visual"
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div>
                <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">Email</p>
                <a href="mailto:hello@frameflow.com" className="text-2xl text-foreground hover:text-accent transition-colors">
                  hello@frameflow.com
                </a>
              </div>

              <div>
                <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">Phone</p>
                <a href="tel:+1234567890" className="text-2xl text-foreground hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </div>

              <div>
                <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">Location</p>
                <p className="text-lg text-muted-foreground">
                  San Francisco, California<br />
                  United States
                </p>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <p className="text-accent text-xs tracking-[0.15em] uppercase mb-6">Follow</p>
                <div className="flex gap-6">
                  {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-muted-foreground hover:text-accent transition-colors text-sm tracking-widest uppercase"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm tracking-widest uppercase text-muted-foreground mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm tracking-widest uppercase text-muted-foreground mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm tracking-widest uppercase text-muted-foreground mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Project details"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm tracking-widest uppercase text-muted-foreground mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-black text-sm tracking-widest uppercase font-medium hover:bg-opacity-90 transition-all"
              >
                {isSubmitted ? '✓ Message Sent' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
