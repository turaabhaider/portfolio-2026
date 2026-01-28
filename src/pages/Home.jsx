import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TechStack from '../components/TechStack';
import Capabilities from '../components/Capabilities';
import Marquee from '../components/Marquee';
import Process from '../components/Process';
import Works from './Works'; // Import your Works/Projects section

export default function Home() {
  const navigate = useNavigate();

  const metrics = [
    { label: "Projects Completed", value: "40+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Uptime Guaranteed", value: "99.9%" },
    { label: "Experience", value: "3+ Yrs" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col gap-0" // Ensures sections stack vertically without gaps
    >
      {/* 1. HERO SECTION */}
      <header className="min-h-screen flex flex-col justify-center px-8 md:px-12 max-w-7xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-10">
            System Status: Online & Ready
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.85] tracking-tighter mb-12 uppercase italic">
            FULL STACK <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400">
              DEVELOPER.
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-10 items-start border-t border-white/10 pt-12">
            <p className="text-xl md:text-2xl text-slate-400 leading-tight font-medium">
              I am <span className="text-white">Syed Turaab</span>. I architect complete end-to-end solutions—bridging the gap between 
              <span className="text-blue-500"> seamless UX</span> and 
              <span className="text-indigo-400"> bulletproof logic</span>.
            </p>
            <div className="flex flex-col md:items-end gap-6">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-black px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-blue-500/10"
              >
                Start a Project
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* 2. LOGO MARQUEE */}
      <Marquee />

      {/* 3. CAPABILITIES GRID */}
      <Capabilities />

      {/* 4. SELECTED WORKS (The 3D Cards) */}
      <section className="bg-black py-20 border-t border-white/5">
        <Works /> 
      </section>

      {/* 5. METRIC BAR */}
      <section className="border-y border-white/5 bg-[#050505] py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="text-center md:text-left">
              <h4 className="text-4xl font-black text-white mb-1">{m.value}</h4>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROCESS & TECH */}
      <Process />
      <TechStack />
      
      {/* Footer will follow automatically from App.jsx */}
    </motion.div>
  );
}