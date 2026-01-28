import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, Lock, Zap } from 'lucide-react';

export default function TechStack() {
  return (
    <section className="py-32 px-8 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase mb-4">Core Capabilities</h2>
          <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">TECHNICAL STACK.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Featured Bento Box: React */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 p-12 rounded-[40px] bg-gradient-to-br from-slate-900/50 to-black border border-white/10 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-20 group-hover:text-blue-500 transition-all duration-700">
              <Zap size={180} />
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-8">
                <Layout size={32} />
              </div>
              <h4 className="text-4xl font-bold text-white mb-4 italic">Frontend <br/> Mastery.</h4>
              <p className="text-slate-500 max-w-xs leading-relaxed">Crafting immersive React interfaces with optimized state and reusable architecture.</p>
            </div>
            <div className="flex gap-3 mt-12">
              <span className="px-4 py-1.5 rounded-full border border-white/5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Next.js</span>
              <span className="px-4 py-1.5 rounded-full border border-white/5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Tailwind v4</span>
            </div>
          </motion.div>

          {/* Backend Box */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-12 rounded-[40px] bg-[#0A0A0A] border border-white/5 flex items-center gap-10 group"
          >
            <div className="w-24 h-24 shrink-0 rounded-3xl bg-green-500/5 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
              <Server size={40} />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2 italic uppercase">Node.js</h4>
              <p className="text-slate-500 text-sm">Building non-blocking, event-driven API systems for enterprise scale.</p>
            </div>
          </motion.div>

          {/* Database Box */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 rounded-[40px] bg-[#0A0A0A] border border-white/5 flex flex-col justify-center items-center text-center group"
          >
            <Database className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={48} />
            <h4 className="text-xl font-bold text-white italic uppercase">MySQL</h4>
            <p className="text-slate-700 text-[10px] mt-2 font-black tracking-widest uppercase">Optimized Schemas</p>
          </motion.div>

          {/* Security Box */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 rounded-[40px] bg-blue-600 flex flex-col justify-center items-center text-center group shadow-[0_0_50px_rgba(37,99,235,0.2)]"
          >
            <Lock className="text-white mb-6" size={48} />
            <h4 className="text-xl font-bold text-white italic uppercase">Secure</h4>
            <p className="text-blue-100/70 text-[10px] mt-2 font-black tracking-widest uppercase">JWT & Auth</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}