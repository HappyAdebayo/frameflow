'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const projects = [
  { id: 1, title: 'Obsidian Lines', category: 'Architecture', image: '/hero-1.png', size: 'tall' },
  { id: 2, title: 'Golden Hour', category: 'Landscape', image: '/portfolio-1.png', size: 'wide' },
  { id: 3, title: 'Deep Soul', category: 'Portrait', image: '/portfolio-2.png', size: 'normal' },
  { id: 4, title: 'Midnight Rain', category: 'Street', image: '/portfolio-3.png', size: 'normal' },
  { id: 5, title: 'Velvet Dreams', category: 'Fashion', image: '/portfolio-4.png', size: 'wide' },
  { id: 6, title: 'Silent Peak', category: 'Nature', image: '/portfolio-1.png', size: 'tall' },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#030304] overflow-hidden relative">
      {/* Decorative Leaks */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] light-leak" />
      <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] light-leak opacity-10" />

      <Header />
      
      {/* Hero Section of Portfolio */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-7xl md:text-9xl font-light text-white tracking-tighter mb-10">
              The <span className="italic font-serif text-primary">Archive</span>
            </h1>
            <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
              A curated collection of visual experiments, commercial assignments, and personal narratives captured over the last decade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-3xl ${
                  project.size === 'wide' ? 'md:col-span-2 aspect-[16/9]' : 
                  project.size === 'tall' ? 'row-span-2 aspect-[3/4]' : 
                  'aspect-square'
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                
                {/* Floating Info */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-10 backdrop-blur-[2px]">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">0{project.id}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">{project.category}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-light text-white mb-2 uppercase tracking-tight">{project.title}</h3>
                    <motion.div 
                      className="w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
