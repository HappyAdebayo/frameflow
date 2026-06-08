'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#030304]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary text-xs tracking-[0.4em] uppercase mb-8 font-medium"
            >
              Get in Touch
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-light text-white mb-12 tracking-tighter leading-none"
            >
              Let's Create <br />
              Something <span className="italic font-serif text-primary">Iconic</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-12"
            >
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Email us</p>
                  <p className="text-xl text-white font-light">hello@frameflow.studio</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Call us</p>
                  <p className="text-xl text-white font-light">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Visit us</p>
                  <p className="text-xl text-white font-light">777 Visual Ave, Creative District <br />New York, NY 10001</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass p-12 rounded-3xl"
          >
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors" />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-focus-within:w-full transition-all duration-500" />
                </div>
                <div className="relative group">
                  <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors" />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-focus-within:w-full transition-all duration-500" />
                </div>
              </div>

              <div className="relative group">
                <input type="text" placeholder="Project Type" className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors" />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-focus-within:w-full transition-all duration-500" />
              </div>

              <div className="relative group">
                <textarea rows={4} placeholder="Your Vision" className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-focus-within:w-full transition-all duration-500" />
              </div>

              <button className="group w-full py-6 bg-primary text-black text-xs tracking-[0.3em] font-bold uppercase rounded-xl flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500">
                <span>Send Inquiry</span>
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-500" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
