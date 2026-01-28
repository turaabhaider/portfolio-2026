import React from 'react';
import { motion } from 'framer-motion';
import Process from '../components/Process';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-32"
    >
      <div className="px-8 max-w-7xl mx-auto mb-20">
        <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
          Solutions <br/> <span className="text-slate-800">& Services.</span>
        </h2>
      </div>
      <Services />
      <Process />
    </motion.div>
  );
}