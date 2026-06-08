'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="relative py-32 bg-[#030304] overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] light-leak" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4]"
            >
              <Image 
                src="/hero-1.png" 
                alt="Studio" 
                fill 
                className="object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 0.3, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-10 -right-10 w-full h-full border-2 border-primary rounded-2xl z-0"
            />

            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 blur-[120px] rounded-full" />
          </div>

          {/* Text Side */}
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-xs tracking-[0.4em] uppercase mb-6 font-medium"
            >
              The Studio
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-light text-white mb-10 tracking-tighter leading-tight"
            >
              Crafting <span className="italic font-serif text-primary">Timeless</span> <br />
              Visual Excellence
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-gray-400 text-lg font-light leading-relaxed"
            >
              <p>
                Founded on the principle that every frame should tell a story, FrameFlow has become a sanctuary for visual artistry. We don't just take photos; we capture the soul of the subject.
              </p>
              <p>
                Our approach blends technical mastery with intuitive creativity, resulting in imagery that resonates deeply and lasts a lifetime. Whether it's architectural precision or the raw emotion of a portrait, we bring a premiere vision to every project.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-2 gap-10"
            >
              <div>
                <p className="text-4xl font-light text-white mb-2">12+</p>
                <p className="text-xs tracking-widest uppercase text-primary font-bold">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-light text-white mb-2">450+</p>
                <p className="text-xs tracking-widest uppercase text-primary font-bold">Projects Done</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
