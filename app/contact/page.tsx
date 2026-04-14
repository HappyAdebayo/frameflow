'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
  };

  const contactMethods = [
    {
      icon: '✉',
      label: 'Email',
      value: 'hello@frameflow.studio',
      link: 'mailto:hello@frameflow.studio',
    },
    {
      icon: '☎',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'New York, USA',
      link: '#',
    },
  ];

  const socials = [
    { name: 'Instagram', handle: '@frameflow.studios' },
    { name: 'LinkedIn', handle: 'frameflow-photography' },
    { name: 'Twitter', handle: '@frameflowphoto' },
  ];

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-foreground">
            Let&apos;s Create Something <span className="text-accent">Extraordinary</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ready to bring your vision to life? Get in touch and let&apos;s discuss your next project.
          </p>
        </div>
      </section>

      {/* Visual Element */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src="/contact-visual.jpg"
            alt="Contact visual"
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-secondary border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-lg font-light tracking-tight text-foreground mb-2">
                  {method.label}
                </h3>
                <a
                  href={method.link}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm md:text-base"
                >
                  {method.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-foreground">
              Send us a Message
            </h2>

            {submitted && (
              <div className="mb-8 p-6 bg-accent/10 border border-accent text-accent rounded-none">
                <p className="tracking-widest uppercase text-sm font-medium">
                  Message Sent Successfully
                </p>
                <p className="text-sm mt-2">
                  Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm tracking-widest uppercase text-muted-foreground mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm tracking-widest uppercase text-muted-foreground mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm tracking-widest uppercase text-muted-foreground mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm tracking-widest uppercase text-muted-foreground mb-3">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formState.projectType}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Select a type</option>
                    <option value="commercial">Commercial</option>
                    <option value="editorial">Editorial</option>
                    <option value="fine-art">Fine Art</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm tracking-widest uppercase text-muted-foreground mb-3">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formState.budget}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Select a range</option>
                  <option value="5k-10k">$5k - $10k</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k-50k">$25k - $50k</option>
                  <option value="50k+">$50k+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm tracking-widest uppercase text-muted-foreground mb-3">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your vision, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-accent-foreground tracking-widest uppercase text-sm font-medium hover:bg-accent/90 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-8 text-foreground">
                Response Time
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-12">
                We typically respond to inquiries within 24 hours during business days. For urgent matters, please call us directly.
              </p>

              <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-8 text-foreground">
                Connect With Us
              </h3>
              <div className="space-y-4">
                {socials.map((social, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-4 border-b border-border/50">
                    <span className="text-foreground">{social.name}</span>
                    <span className="text-accent">{social.handle}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-border">
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
                Available For
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Commercial', 'Editorial', 'Fine Art', 'Collaborations'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 border border-border text-sm text-foreground hover:border-accent transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16 text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'What&apos;s your typical turnaround time?',
                a: 'Project timelines vary based on scope. We discuss all deadlines upfront to ensure realistic delivery.',
              },
              {
                q: 'Do you offer package deals?',
                a: 'Yes, we create custom packages tailored to your needs and budget. Contact us to discuss options.',
              },
              {
                q: 'Can you work internationally?',
                a: 'Absolutely. We&apos;ve worked with clients worldwide and can arrange travel for on-location shoots.',
              },
              {
                q: 'What&apos;s your cancellation policy?',
                a: 'We maintain a professional cancellation policy. Details are discussed and agreed upon in advance.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="text-lg font-light tracking-tight text-foreground mb-3">
                  {item.q}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
